/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
      center :true,
      padding:"1rem",
    },
  },
    colors:{
      bg:{
        DEFAULT:"#f8f9ff",
        card:"#f1f3fa",
      },
      darkbg:{
        DEFAULT:"#20222f",
        card:"#252b43",
        dark:"#1d2029"
      },
      text:{
        DEFAULT:"#000",
        slate:" rgb(148 163 184)",
        white:"#fff",
        
      },
      facebook:"#1877f2",
      youtube:"red",
      twitter:"#1da1f5",
      main_green:"#3fac8e",
      linkedin:"#0a66c2"

    },
  },
  plugins: [],
}