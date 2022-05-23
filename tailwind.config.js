module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1F2937",
          "secondary": "#FDE68A",
          "accent": "#C5C5C5",
          "neutral": "#F3F4F6",
          "base-100": "#ffffff",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
