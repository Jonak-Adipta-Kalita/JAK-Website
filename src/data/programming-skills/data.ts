export const Fields = [
    "Web & App Development",
    "Game Development",
    "Internet of Things",
    // "Systems Programming",
    "AI & Data Science & Computer Vision",
    "Cloud & DevOps",
    "Database",
] as const;
export const OtherFields = [
    "Productivity",
    "Operating System",
    "Text Editor",
] as const;
export const AllFields = [...Fields, ...OtherFields] as const;

export const LanguageNames = [
    "Python",
    "JS / TS",
    "Go",
    "Lua",
    "Java",
    "C#",
    "SQL",
    "C",
    "Rust",
    "C++",
] as const;

export interface Skill {
    id: string;
    name: string;
    pic: string | string[];
    message?: string;
    fields: (typeof Fields)[number][] | null;
    extraLinks?: string[];
}

export type LanguageSkill = Skill & { name: (typeof LanguageNames)[number] };
export type FrameworkSkill = Skill & {
    languages: (typeof LanguageNames)[number][] | null;
};
export type ToolSkill = Omit<Skill, "fields"> & {
    fields: (typeof AllFields)[number][] | null;
};

// TODO: Get rid of the OtherFields + Probably reduce the Fields, too many is a headache - need a better system

const skills: {
    languages: LanguageSkill[];
    frameworks: (
        | { id: string; groupName: string; frameworks: FrameworkSkill[] }
        | FrameworkSkill
    )[];
    tools: (
        | { id: string; groupName: string; tools: ToolSkill[] }
        | ToolSkill
    )[];
} = {
    languages: [
        {
            id: "python",
            name: "Python",
            message: "1st Love",
            pic: "/pic/applications/python.svg",
            fields: null,
        },
        {
            id: "js-ts",
            name: "JS / TS",
            message: "Most Utilized",
            pic: [
                "/pic/applications/javascript.svg",
                "/pic/applications/typescript.svg",
            ],
            fields: ["Web & App Development"],
        },
        {
            id: "lua",
            name: "Lua",
            pic: "/pic/applications/lua.svg",
            message: "Primarily for Ricing",
            fields: null,
        },
        {
            id: "java",
            name: "Java",
            message: "Only for Minecraft",
            pic: "/pic/applications/java.svg",
            fields: ["Game Development"],
        },
        {
            id: "csharp",
            name: "C#",
            message: "Only for Game Dev",
            pic: "/pic/applications/csharp.svg",
            fields: ["Game Development"],
        },
        {
            id: "sql",
            name: "SQL",
            pic: "/pic/applications/database.svg",
            fields: null,
        },
        {
            id: "go",
            name: "Go",
            pic: "/pic/applications/go.svg",
            fields: null,
            message: "Learning...",
        },
        {
            id: "rust",
            name: "Rust",
            pic: "/pic/applications/rust.svg",
            fields: null,
            message: "Learning...",
        },
    ],

    frameworks: [
        {
            id: "python-web-frameworks",
            groupName: "Web Framemworks for Python",
            frameworks: [
                {
                    id: "django",
                    name: "Django",
                    pic: "/pic/applications/django.svg",
                    fields: ["Web & App Development"],
                    languages: ["Python"],
                },
                {
                    id: "flask",
                    name: "Flask",
                    pic: "/pic/applications/flask.svg",
                    fields: ["Web & App Development"],
                    languages: ["Python"],
                },
            ],
        },
        {
            id: "js/ts-web-frameworks",
            groupName: "Web Frameworks for JS/TS",
            frameworks: [
                {
                    id: "express",
                    name: "ExpressJS",
                    pic: "/pic/applications/express.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
                {
                    id: "react",
                    name: "React",
                    pic: "/pic/applications/react.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
                {
                    id: "next",
                    name: "Next",
                    pic: "/pic/applications/next.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
            ],
        },
        {
            id: "js/ts-app-frameworks",
            groupName: "App Frameworks for JS/TS",
            frameworks: [
                {
                    id: "react-native",
                    name: "ReactNative",
                    pic: "/pic/applications/reactnative.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
                {
                    id: "expo",
                    name: "Expo",
                    pic: "/pic/applications/expo.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
            ],
        },
        {
            id: "js/ts-css-frameworks",
            groupName: "CSS Frameworks for Frontend",
            frameworks: [
                {
                    id: "bootstrap",
                    name: "Bootstrap",
                    pic: "/pic/applications/bootstrap.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                    extraLinks: ["django"],
                },
                {
                    id: "tailwind",
                    name: "Tailwind",
                    pic: "/pic/applications/tailwind.svg",
                    fields: ["Web & App Development"],
                    languages: ["JS / TS"],
                },
            ],
        },
        {
            id: "python-game-dev",
            groupName: "Game Dev in Python",
            frameworks: [
                {
                    id: "pygame",
                    name: "Pygame",
                    pic: "/pic/applications/pygame.svg",
                    fields: ["Game Development"],
                    languages: ["Python"],
                },
                {
                    id: "arcade",
                    name: "Arcade",
                    pic: "/pic/applications/arcade.svg",
                    fields: ["Game Development"],
                    languages: ["Python"],
                },
                {
                    id: "ursina",
                    name: "Ursina",
                    pic: "/pic/applications/ursina.svg",
                    fields: ["Game Development"],
                    languages: ["Python"],
                },
                {
                    id: "panda3d",
                    name: "Panda3D",
                    pic: "/pic/applications/panda3d.svg",
                    fields: ["Game Development"],
                    languages: ["Python"],
                },
            ],
        },
        {
            id: "godot",
            name: "Godot",
            pic: "/pic/applications/godot.svg",
            fields: ["Game Development"],
            languages: ["C#"],
        },
        {
            id: "love2d",
            name: "Love2D",
            pic: "/pic/applications/love2d.svg",
            fields: ["Game Development"],
            languages: ["Lua"],
        },
        {
            id: "opencv",
            name: "OpenCV",
            pic: "/pic/applications/opencv.svg",
            fields: ["AI & Data Science & Computer Vision"],
            languages: ["Python"],
        },
        {
            id: "arduino",
            name: "Arduino",
            pic: "/pic/applications/arduino.svg",
            fields: ["Internet of Things"],
            languages: ["C++"],
        },
    ],

    tools: [
        {
            id: "text-editor",
            groupName: "Text Editors",
            tools: [
                {
                    id: "vscode",
                    name: "VSCode",
                    pic: "/pic/applications/vscode.svg",
                    fields: ["Text Editor"],
                },
                {
                    id: "nvim",
                    name: "NVim",
                    pic: "/pic/applications/nvim.svg",
                    fields: ["Text Editor"],
                },
            ],
        },
        {
            id: "git",
            name: "Git",
            pic: "/pic/applications/git.svg",
            fields: null,
        },
        {
            id: "web-hosting",
            groupName: "Platforms for Web Hosting",
            tools: [
                {
                    id: "vercel",
                    name: "Vercel",
                    pic: "/pic/applications/vercel.svg",
                    fields: ["Cloud & DevOps"],
                },
                {
                    id: "netlify",
                    name: "Netlify",
                    pic: "/pic/applications/netlify.svg",
                    fields: ["Cloud & DevOps"],
                },
            ],
        },
        {
            id: "figma",
            name: "Figma",
            pic: "/pic/applications/figma.svg",
            fields: ["Web & App Development"],
        },
        {
            id: "operating-system",
            groupName: "Operating Systems",
            tools: [
                {
                    id: "arch",
                    name: "Arch",
                    message: "I use Arch btw :D",
                    pic: "/pic/applications/arch.svg",
                    fields: ["Operating System"],
                },
                {
                    id: "windows11",
                    name: "Windows 11",
                    pic: "/pic/applications/windows11.svg",
                    fields: ["Operating System"],
                },
            ],
        },
        {
            id: "database-management-system",
            groupName: "Database Management Systems",
            tools: [
                {
                    id: "postgresql",
                    name: "PostgreSQL",
                    pic: "/pic/applications/postgresql.svg",
                    fields: ["Database"],
                },
                {
                    id: "mariadb",
                    name: "MariaDB",
                    pic: "/pic/applications/mariadb.svg",
                    fields: ["Database"],
                },
            ],
        },
        {
            id: "blender",
            name: "Blender",
            pic: "/pic/applications/blender.svg",
            fields: ["Game Development"],
        },
        {
            id: "firebase",
            name: "Firebase",
            pic: "/pic/applications/firebase.svg",
            fields: ["Cloud & DevOps"],
        },
        {
            id: "productivity",
            groupName: "Productivity",
            tools: [
                {
                    id: "xournalpp",
                    name: "Xournal++",
                    pic: "/pic/applications/xournalpp.svg",
                    fields: ["Productivity"],
                },
                {
                    id: "obsidian",
                    name: "Obsidian",
                    pic: "/pic/applications/obsidian.svg",
                    fields: ["Productivity"],
                },
            ],
        },
    ],
} as const;

export default skills;
