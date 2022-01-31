module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "otomanopee-one": ["OtomanopeeOne", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
