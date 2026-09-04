const API_KEY = process.env.GEMINI_API_KEY;
const API_MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"];
const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

function sendJson(response, statusCode, body) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((item) => item && (item.role === "user" || item.role === "model"))
    .map((item) => ({
      role: item.role,
      parts: Array.isArray(item.parts)
        ? item.parts
            .filter((part) => typeof part?.text === "string")
            .map((part) => ({ text: part.text.slice(0, 4000) }))
        : []
    }))
    .filter((item) => item.parts.length > 0)
    .slice(-8);
}

async function callGemini({ contents, systemPrompt }) {
  let lastError;

  for (const model of API_MODELS) {
    const geminiResponse = await fetch(`${API_BASE_URL}/${model}:generateContent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": API_KEY
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 220
        }
      })
    });

    if (!geminiResponse.ok) {
      lastError = new Error(`${model} failed with ${geminiResponse.status}`);
      continue;
    }

    const data = await geminiResponse.json();
    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join(" ")
      .trim();

    if (reply) return reply;
    lastError = new Error(`${model} returned an empty response`);
  }

  throw lastError || new Error("Gemini request failed");
}

module.exports = async function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.statusCode = 204;
    response.end();
    return;
  }

  if (request.method !== "POST") {
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  if (!API_KEY) {
    sendJson(response, 500, { error: "Missing GEMINI_API_KEY environment variable" });
    return;
  }

  try {
    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body;
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const systemPrompt = typeof body?.systemPrompt === "string"
      ? body.systemPrompt
      : "You are Merizo AI, a friendly support assistant.";

    if (!message) {
      sendJson(response, 400, { error: "Message is required" });
      return;
    }

    const contents = sanitizeHistory(body?.history);
    const reply = await callGemini({ contents, systemPrompt });

    sendJson(response, 200, { reply });
  } catch (error) {
    sendJson(response, 500, { error: "Unable to generate assistant reply" });
  }
};
