module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("penaui")],
  penaui: {
    themes: ["unpad"],
  },
};
