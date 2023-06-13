module.exports = {
    content: ["./src/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "bg-color": {
                    dark: "#0f172a",
                },
                "text-color": {
                    dark: "#D1D5DB",
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
