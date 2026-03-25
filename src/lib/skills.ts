export const Fields = ["Web & App Development", "Game Development", "Internet of Things", "Systems Programming", "AI & Data Science & Computer Vision", "Cloud & DevOps", "Database"] as const;
export const OtherFields = ["Productivity", "Operating System", "Text Editor"] as const;

export const LanguageNames = ["Python", "JavaScript / Typescript", "Go", "Lua", "Java", "C#", "SQL", "C", "Rust", "C++"] as const;

interface Skill {
    id: string;
    name: string;
    pic: string | [string];
    message?: string;
    fields: (typeof Fields[number])[] | null;
}

// TODO: "Merge" a few of them
// TODO: Get rid of the OtherFields + Probably reduce the Fields, too many is a headache - need a better system

export const skills: {
    languages: (Skill & { name: typeof LanguageNames[number] })[],
    frameworks: (Skill & { languages: typeof LanguageNames[number][] | null })[],
    tools: (Omit<Skill, 'fields'> & { fields: (typeof Fields[number] | typeof OtherFields[number])[] | null })[]
} = {
    languages: [
        {
            id: "python",
            name: "Python",
            message: "1st Love",
            pic: "/pic/python.webp",
            fields: null
        },
        {
            id: "js-ts",
            name: "JavaScript / Typescript",
            message: "Most Utilized",
            pic: "/pic/typescript.webp",
            fields: ["Web & App Development"]
        },
        {
            id: "go",
            name: "Go",
            pic: "/pic/golang.webp",
            fields: null
        },
        {
            id: "lua",
            name: "Lua",
            pic: "/pic/lua.webp",
            fields: null
        },
        {
            id: "java",
            name: "Java",
            message: "Only for Minecraft Mods",
            pic: "/pic/java.webp",
            fields: ["Game Development"]
        },
        {
            id: "csharp",
            name: "C#",
            message: "Only for Game Dev",
            pic: "/pic/csharp.webp",
            fields: ["Game Development"]
        },
        {
            id: "sql",
            name: "SQL",
            pic: "/pic/sql.webp",
            fields: null
        }
    ],

    frameworks: [
        {
            id: "django",
            name: "Django",
            pic: "/pic/django.webp",
            fields: ["Web & App Development"],
            languages: ["Python"]
        },
        {
            id: "flask",
            name: "Flask",
            pic: "/pic/flask.webp",
            fields: ["Web & App Development"],
            languages: ["Python"]
        },
        {
            id: "bootstrap",
            name: "Bootstrap",
            pic: "/pic/bootstrap.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "tailwind",
            name: "Tailwind",
            pic: "/pic/tailwind.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "express",
            name: "ExpressJS",
            pic: "/pic/express.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "react",
            name: "React",
            pic: "/pic/react.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "react-native",
            name: "ReactNative",
            pic: "/pic/reactnative.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "expo",
            name: "Expo",
            pic: "/pic/expo.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "next",
            name: "Next",
            pic: "/pic/next.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "svelte",
            name: "Svelte",
            pic: "/pic/svelte.webp",
            fields: ["Web & App Development"],
            languages: ["JavaScript / Typescript"]
        },
        {
            id: "pygame",
            name: "Pygame",
            pic: "/pic/pygame.webp",
            fields: ["Game Development"],
            languages: ["Python"]
        },
        {
            id: "godot",
            name: "Godot",
            pic: "/pic/godot.webp",
            fields: ["Game Development"],
            languages: ["C#"]
        },
        {
            id: "arcade",
            name: "Arcade",
            pic: "/pic/arcade.webp",
            fields: ["Game Development"],
            languages: ["Python"]
        },
        {
            id: "ursina",
            name: "Ursina",
            pic: "/pic/ursina.webp",
            fields: ["Game Development"],
            languages: ["Python"]
        },
        {
            id: "panda3d",
            name: "Panda3D",
            pic: "/pic/panda3d.webp",
            fields: ["Game Development"],
            languages: ["Python"]
        },
        {
            id: "love2d",
            name: "Love2D",
            pic: "/pic/love2d.webp",
            fields: ["Game Development"],
            languages: ["Lua"]
        },
        {
            id: "opencv",
            name: "OpenCV",
            pic: "/pic/opencv.webp",
            fields: ["AI & Data Science & Computer Vision"],
            languages: ["Python"]
        },
        {
            id: "arduino",
            name: "Arduino",
            pic: "/pic/arduino.webp",
            fields: ["Internet of Things"],
            languages: ["C++"]
        }
    ],

    tools: [
        {
            id: "vscode",
            name: "VSCode",
            pic: "/pic/vscode.webp",
            fields: ["Text Editor"]
        },
        {
            id: "nvim",
            name: "NVim",
            pic: "/pic/nvim.webp",
            fields: ["Text Editor"]
        },
        {
            id: "obsidian",
            name: "Obsidian",
            pic: "/pic/obsidian.webp",
            fields: ["Productivity"]
        },
        {
            id: "git",
            name: "Git",
            pic: "/pic/git.webp",
            fields: null
        },
        {
            id: "vercel",
            name: "Vercel",
            pic: "/pic/vercel.webp",
            fields: ["Cloud & DevOps"]
        },
        {
            id: "netlify",
            name: "Netlify",
            pic: "/pic/netlify.webp",
            fields: ["Cloud & DevOps"]
        },
        {
            id: "figma",
            name: "Figma",
            pic: "/pic/figma.webp",
            fields: ["Web & App Development"]
        },
        {
            id: "arch",
            name: "Arch",
            message: "EndeavourOS btw",
            pic: "/pic/arch.webp",
            fields: ["Operating System"]
        },
        {
            id: "windows11",
            name: "Windows 11",
            pic: "/pic/windows11.webp",
            fields: ["Operating System"]
        },
        {
            id: "postgresql",
            name: "PostgreSQL",
            pic: "/pic/postgresql.webp",
            fields: ["Database"]
        },
        {
            id: "mariadb",
            name: "MariaDB",
            pic: "/pic/mariadb.webp",
            fields: ["Database"]
        },
        {
            id: "blender",
            name: "Blender",
            pic: "/pic/blender.webp",
            fields: ["Game Development"]
        },
        {
            id: "firebase",
            name: "Firebase",
            pic: "/pic/firebase.webp",
            fields: ["Cloud & DevOps"]
        },
        {
            id: "xournalpp",
            name: "Xournal++",
            pic: "/pic/xournalpp.webp",
            fields: ["Productivity"]
        }
    ]
} as const;

