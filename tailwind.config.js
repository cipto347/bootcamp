module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@pena/penaui")],
  penaui: {
    themes: ["unpad"],
  },
};
