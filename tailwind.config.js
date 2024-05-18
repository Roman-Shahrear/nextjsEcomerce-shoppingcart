/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backbg: '#212529',
        backbtn: '#525CEB',
      },
      width: {
        '744': '744px',
      },
      height: {
        '356': '356px'
      }
    },
  },
  plugins: [],
};
