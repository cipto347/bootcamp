module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter, sans-serif'",
      },
      colors: {
        transparent: "transparent",
        label: "#66686A",
        title: "#333435",
        desc: "#808285",
        placeholder: "#CCCDCE",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        telkom: {
          primary: "#EE3124",
          secondary: "#377CFB",
          accent: "#EA5234",
          neutral: "#FFFFFF",
          "base-100": "#FCFBFC",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        dark: {
          primary: "#EE3124",
          secondary: "#377CFB",
          accent: "#EA5234",
          neutral: "#4C5265",
          "base-100": "#374151",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
