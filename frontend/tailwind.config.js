module.exports = {
    content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                "otomanopee-one": ["OtomanopeeOne", "sans-serif"],
            },
            colors: {
                "bg-color": {
                    DEFAULT: "#272934",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
