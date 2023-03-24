/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        osans: ["Open Sans", "sans-serif"],
        one: ["Paytone One", "sans-serif"],
      },
      container: {
        center: true,
      },
      fontSize: {
        body: "52px",
        body2: "34px",
        head1: "67px",
        head2: "50px",
        head3: "37px",
        head4: "20px",
        head5: "21px",
        head6: "16px",
        subtitle: "16px",
        subtitle2: "14px",
        "btn-lg": "18px",
        "btn-sm": "16px",
      },
      colors: {
        "m-gray": " rgba(30, 40, 50, 0.05);",
        "m-blue": "#1E2832",
      },
      backgroundImage: {
        banner: "url('../assets/bg2.png')",
      },
    },
  },
  plugins: [],
};
