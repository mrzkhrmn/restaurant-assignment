/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "repeat-image": "url(`repeatImage.jpg`)",
      },
    },
  },
  plugins: [],
};
