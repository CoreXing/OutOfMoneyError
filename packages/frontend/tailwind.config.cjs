const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                mono: ['"Space Mono"', ...defaultTheme.fontFamily.mono]
            }
        }
    },
    darkMode: "selector",
    plugins: []
};
