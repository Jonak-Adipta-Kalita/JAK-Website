module.exports = {
    content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                "otomanopee-one": ["OtomanopeeOne", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
