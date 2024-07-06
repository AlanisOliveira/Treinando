/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #1b2a36 50%, #A5193D 50%)',
      },
      colors: {
        "custom-red": "#1b2a36",
        "custom-dark": "#A5193D",
      },
      fontFamily: {
        'playwrite': ['"Playwrite GB S"', 'sans-serif'],
        'DancingScript': ['"Dancing Script"', 'cursive'],
        'Questrial': ['"Questrial"', 'sans-serif'],
      },
      keyframes: {
        'rotate-card': {
          '0%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0)' },
        },
      },
      animation: {
        'rotate-card': 'rotate-card 1s',
      },
    },
  },
  plugins: [],
}
