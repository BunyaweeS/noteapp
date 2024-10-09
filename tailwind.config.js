/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      blue:"#0700dE",
      lightgreen:"#DDFFC9",
      lightpurple:"#C4A7E7",
      skyblue:"#CEEBF9",
      gray:"#B6B6B6",
    },
    extend: {
      keyframes: {
        "fadeIn": {
            "0%": {
                opacity: 0
            },
            "100%": {
                opacity: 1
            },
            animation: {
              fadeIn: 'fadeIn 0.5s ease-in-out',
            },
        },
    },
  },
  plugins: [],
}

}
