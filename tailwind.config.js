export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".hide-scrollbar": {
          "::-webkit-scrollbar": {
            width: "0",
            height: "0",
          },
          "scrollbar-width": "none", // Firefox
          overflow: "auto",
        },
      });
    },
  ],
};
