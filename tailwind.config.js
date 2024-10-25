/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ProjectX/*.{html,js}",
  ],
  // ...
  theme: {
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}

