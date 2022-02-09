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
        cursor: {
            default: "url(/images/cursors/default.cur), default",
            pointer: "url(/images/cursors/pointer.cur), pointer",
            text: "url(/images/cursors/text.cur), text",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
