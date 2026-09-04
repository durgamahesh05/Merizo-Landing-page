import { useEffect } from "react";

export default function useTypedIntro(introRef) {
  useEffect(() => {
    const intro = introRef.current;
    const lines = intro ? Array.from(intro.querySelectorAll("[data-type-line]")) : [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!intro || !lines.length || reduceMotion) {
      return;
    }

    const timeouts = [];
    const cursor = document.createElement("span");
    cursor.className = "typed-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.textContent = "|";

    const heading = lines[0];
    if (!heading.dataset.originalText) {
      heading.dataset.originalText = heading.textContent.replace(/\s+/g, " ").trim();
    }
    const headingText = heading.dataset.originalText;
    const answerLines = lines.slice(1);

    answerLines.forEach((line) => {
      line.classList.add("typed-answer-hidden");
    });

    heading.textContent = "";
    heading.appendChild(cursor);

    let position = 0;

    function revealAnswers() {
      intro.classList.add("merizo-typing-complete");
      answerLines.forEach((line, index) => {
        timeouts.push(
          window.setTimeout(() => {
            line.classList.remove("typed-answer-hidden");
            line.classList.add("typed-answer-visible");
          }, index * 80)
        );
      });
    }

    function tick() {
      if (position < headingText.length) {
        cursor.remove();
        heading.textContent += headingText.charAt(position);
        heading.appendChild(cursor);
        position += 1;
        timeouts.push(
          window.setTimeout(tick, headingText.charAt(position - 1) === " " ? 24 : 42)
        );
        return;
      }

      cursor.remove();
      timeouts.push(window.setTimeout(revealAnswers, 220));
    }

    tick();

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [introRef]);
}
