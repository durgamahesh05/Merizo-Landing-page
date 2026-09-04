# Merizo Landing Page

This folder is a standalone copy of the Merizo landing page. The public HTML pages stay at the project root so direct routes keep working.

## Project Structure

```txt
.
|-- index.html
|-- about.html
|-- contact.html
|-- Merizo Pro.html
|-- Privacy and Policy.html
|-- assets/
|   |-- css/
|   |-- js/
|   `-- images/
|-- api/
|-- animation/
|-- netlify.toml
`-- vercel.json
```

`assets/` contains shared CSS, JavaScript, and image files for the root landing pages. `api/` contains the serverless chat endpoint. `animation/` is a separate Vite animation app with its own package files.

## Run Locally

For the static landing pages:

```sh
python -m http.server 5173
```

Then open:

```txt
http://127.0.0.1:5173
```

For the Vite animation app:

```sh
cd animation
npm install
npm run dev
```

The CTA buttons open Google Play on Android, Apple App Store search on iOS, and keep the web app behavior by navigating to `/login` on desktop.
