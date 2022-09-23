/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "orange-primary": "hsl(26, 100%, 55%)",
                "pale-orange": "hsl(25, 100%, 94%)",
                "very-dark-blue": "hsl(220, 13%, 13%)",
                "dark-grayish-blue": "hsl(219, 9%, 45%)",
                "grayish-blue": "hsl(220, 14%, 75%)",
                "light-grayish-blue": "hsl(223, 64%, 98%)",
                "black-75": "hsl(0, 0%, 0%)",
            },
        },
    },
    plugins: [],
};
