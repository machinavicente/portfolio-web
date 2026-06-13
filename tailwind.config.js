/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
theme: {
  extend: {
    colors: {
      machina: {
        bg: '#141011',              // onyx-950
        'bg-secondary': '#1d1618',  // onyx-900
        text: '#e3e4e8',            // charcoal-blue-100
        title: '#f1f2f4',           // charcoal-blue-50
        brand: '#8fdb24',           // lime-moss-500
        'brand-text': '#141011',    // onyx-950 (contraste sobre el verde)
        accent: '#a182b0',          // lavender-mist-400
      },
    },
  },
},
  plugins: [],
}
