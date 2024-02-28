module.exports = {
    content: ["./src/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            
        },
        cursor: {
            default: "url(/images/cursors/default.cur), default",
            pointer: "url(/images/cursors/pointer.cur), pointer",
            text: "url(/images/cursors/text.cur), text",
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
