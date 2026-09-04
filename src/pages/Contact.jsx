import { useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  useDocumentTitle("Contact support :: Merizo");

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "", text: "" });
  const [sending, setSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({ state: "error", text: "Email is not configured yet. Please try again later." });
      return;
    }

    setSending(true);
    setStatus({ state: "", text: "Sending..." });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus({ state: "success", text: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ state: "error", text: "Something went wrong. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="contact-page">
      <div className="container mx-auto">
        <header className="flex items-center justify-between px-8 py-5 font-mont mx-auto">
          <div className="flex items-center w-[105px] h-[36px] sm:w-[140px] sm:h-[48px]">
            <img src="/assets/images/logo.png" alt="Merizo Logo" className="merizo-logo" />
          </div>
        </header>
      </div>

      <main className="bg-facets py-8">
        <div className="contact-card-wrap">
          <div className="contact-card">
            <span className="contact-card-icon material-symbols-rounded" aria-hidden="true">
              mail
            </span>

            <h1 className="contact-card-title">Get in touch</h1>
            <p className="contact-card-subtitle">
              Have any questions or feedback about Merizo? We'd love to hear from you.
            </p>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="contact-field">
                <span className="material-symbols-rounded" aria-hidden="true">person</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  autoComplete="name"
                  required
                  maxLength={200}
                  value={form.name}
                  onChange={handleChange}
                />
              </label>

              <label className="contact-field">
                <span className="material-symbols-rounded" aria-hidden="true">mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                  maxLength={200}
                  value={form.email}
                  onChange={handleChange}
                />
              </label>

              <label className="contact-field contact-field-textarea">
                <textarea
                  name="message"
                  placeholder="Message"
                  aria-label="Message"
                  rows={5}
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <div className="contact-form-footer">
                <p className="contact-form-status" role="status" aria-live="polite" data-state={status.state}>
                  {status.text}
                </p>
                <button type="submit" className="contact-submit-btn" disabled={sending}>
                  {sending ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
