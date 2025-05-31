// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: '100vh',
        'screen-d': '100dvh', // Dynamic viewport height for mobile
      },
    },
  },
  plugins: [],
}; 