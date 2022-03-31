module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter, sans-serif'",
      },
    },
  },
  plugins: [require("@pena/penaui")],
  penaui: {
    themes: ["unpad"],
  },
};
