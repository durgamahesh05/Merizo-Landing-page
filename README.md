# Merizo Landing Page

A React + Vite single-page app for the Merizo marketing site. 
The App with AI Features

## Project Structure

```txt
.
|-- index.html            (Vite entry point)
|-- src/
|   |-- main.jsx
|   |-- App.jsx           (routes)
|   |-- index.css         (Tailwind + global styles)
|   |-- styles.css        (ported custom design system)
|   |-- pages/            (Home, About, Contact, MerizoPro, PrivacyPolicy)
|   |-- components/       (Footer, BillCard)
|   |-- hooks/            (parallax, globe, typed intro, document title)
|   `-- lib/               (play store helper)
|-- public/
|   |-- assets/images/
|   `-- robots.txt
|-- tailwind.config.js
|-- postcss.config.js
`-- vite.config.js
```

Routes: `/`, `/about`, `/contact`, `/merizo-pro`, `/pricing` (same content as
`/merizo-pro`), `/privacy-policy`.

This is a fully static, backend-free build — no serverless functions, no
Vercel or Netlify config. It can be hosted on any static file host.

## Run Locally

```sh
npm install
npm run dev
```

Opens the Vite dev server (prints its own URL, typically
`http://localhost:5173`).

To build for production:

```sh
npm run build
npm run preview
```

## Contact form (EmailJS)

`contact.html`'s form sends messages straight from the browser via
[EmailJS](https://www.emailjs.com/) — no backend required. To set it up:

1. Create a free EmailJS account and connect an email service (e.g. Gmail)
   for `merizoomadasupport@gmail.com`.
2. Create an email template with `{{name}}`, `{{email}}`, and `{{message}}`
   variables.
3. Copy `.env.example` to `.env` and fill in:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
4. Restart `npm run dev` so Vite picks up the new env vars.

Without these set, the form shows a friendly error instead of sending.

The CTA buttons open Google Play on Android and keep the web app behavior by
navigating to `/login` on desktop.
