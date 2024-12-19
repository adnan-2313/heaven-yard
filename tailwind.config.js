/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        customShadow:"0px -2px 10px rgba(0,0,0,0.2)"
      }
    },
  },
  plugins: [],
};
