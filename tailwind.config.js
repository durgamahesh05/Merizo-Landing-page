/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#33475b",
        facets: "#ffffff"
      },
      fontFamily: {
        mont: ["Montserrat", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
