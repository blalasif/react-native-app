/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")], // ✅ This is the missing piece!
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Pages
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
