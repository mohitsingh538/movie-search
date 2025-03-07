/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // or 'media' for system preference-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Fira Sans"', 'sans-serif'],
            },
            // you can extend colors and other properties for dark mode here
        },
    },
    plugins: [],
};

