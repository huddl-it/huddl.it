/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/*.{js,ts,jsx,tsx}",
        "./src/client/components/*.{js,ts,jsx,tsx}",
        "./src/client/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            dm: ["DM Sans", ...defaultTheme.fontFamily.serif],
            poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
        },
        extend: {},
    },
    plugins: [],
};
