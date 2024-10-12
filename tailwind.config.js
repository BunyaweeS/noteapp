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
      aqua:"#428CD4",
      pink:"#FF9CDA",
      darkblue:"#2E2F5B",
      spruce:"#505581",
      yellow:"#F4D35E",
      banana:"#FAF0CA",
      white:"#F2F2F2",
      mali:"#DDFFC9",
      greengray:"#E0DAC7",
      lightbl:"#B0CFD9",
      darkerbl:"#799DC8",
      darkg:"#6C8673",
      lightg:"#B9CAB4",
      darkbrown:"#402D20",
      pearl:"#FBFCF8",

    },
    primary: {
      DEFAULT: '#3B82F6',
      50: '#f5f3ff',
      100: '#e0e7ff',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95'
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
