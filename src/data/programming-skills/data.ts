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

export const LanguageIDs = [
    "python",
    "js-ts",
    "go",
    "lua",
    "java",
    "c#",
    "sql",
    "c",
    "rust",
    "c++",
] as const;

export interface Skill {
    id: string;
    name?: string | string[];
    pic: string | string[];
    message?: string;
    fields: (typeof Fields)[number][] | null;
}

export type LanguageSkill = Skill & { id: (typeof LanguageIDs)[number] };
export type FrameworkSkill = Skill & {
    languages: (typeof LanguageIDs)[number][] | null;
};
export type ToolSkill = Omit<Skill, "fields"> & {
    fields: (typeof AllFields)[number][] | null;
};

const skills: {
    languages: (
        | { id: string; message?: string; items: LanguageSkill[] }
        | LanguageSkill
    )[];
    frameworks: (
        | { id: string; groupName: string; items: FrameworkSkill[] }
        | FrameworkSkill
    )[];
    tools: (
        | { id: string; groupName: string; items: ToolSkill[] }
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
            message: "Most Utilized",
            items: [
                {
                    id: "js-ts",
                    name: "JavaScript",
                    pic: "/pic/applications/javascript.svg",
                    fields: ["Web & App Development"],
                },
                {
                    id: "js-ts",
                    name: "TypeScript",
                    pic: "/pic/applications/typescript.svg",
                    fields: ["Web & App Development"],
                },
            ],
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
            id: "c#",
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
            items: [
                {
                    id: "django",
                    name: "Django",
                    pic: "/pic/applications/django.svg",
                    fields: ["Web & App Development"],
                    languages: ["python"],
                },
                {
                    id: "flask",
                    name: "Flask",
                    pic: "/pic/applications/flask.svg",
                    fields: ["Web & App Development"],
                    languages: ["python"],
                },
            ],
        },
        {
            id: "js/ts-web-frameworks",
            groupName: "Web Frameworks for JS/TS",
            items: [
                {
                    id: "express",
                    name: "ExpressJS",
                    pic: "/pic/applications/express.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
                {
                    id: "react",
                    name: "React",
                    pic: "/pic/applications/react.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
                {
                    id: "next",
                    name: "Next",
                    pic: "/pic/applications/next.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
            ],
        },
        {
            id: "js/ts-app-frameworks",
            groupName: "App Frameworks for JS/TS",
            items: [
                {
                    id: "react-native",
                    name: "ReactNative",
                    pic: "/pic/applications/react.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
                {
                    id: "expo",
                    name: "Expo",
                    pic: "/pic/applications/expo.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
            ],
        },
        {
            id: "js/ts-css-frameworks",
            groupName: "CSS Frameworks for Frontend",
            items: [
                {
                    id: "bootstrap",
                    name: "Bootstrap",
                    pic: "/pic/applications/bootstrap.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
                {
                    id: "tailwind",
                    name: "Tailwind",
                    pic: "/pic/applications/tailwind.svg",
                    fields: ["Web & App Development"],
                    languages: ["js-ts"],
                },
            ],
        },
        {
            id: "python-game-dev",
            groupName: "Game Dev in Python",
            items: [
                {
                    id: "pygame",
                    name: "Pygame",
                    pic: "/pic/applications/pygame.png",
                    fields: ["Game Development"],
                    languages: ["python"],
                },
                {
                    id: "arcade",
                    name: "Arcade",
                    pic: "/pic/applications/arcade.png",
                    fields: ["Game Development"],
                    languages: ["python"],
                }
            ],
        },
        {
            id: "godot",
            name: "Godot",
            pic: "/pic/applications/godot.svg",
            fields: ["Game Development"],
            languages: ["c#"],
        },
        {
            id: "opencv",
            name: "OpenCV",
            pic: "/pic/applications/opencv.svg",
            fields: ["AI & Data Science & Computer Vision"],
            languages: ["python", "c++"],
        },
        {
            id: "arduino",
            name: "Arduino",
            pic: "/pic/applications/arduino.svg",
            fields: ["Internet of Things"],
            languages: ["c++"],
        },
    ],

    tools: [
        {
            id: "text-editor",
            groupName: "Text Editors",
            items: [
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
            id: "figma",
            name: "Figma",
            pic: "/pic/applications/figma.svg",
            fields: ["Web & App Development"],
        },
        {
            id: "web-hosting",
            groupName: "Platforms for Web Hosting",
            items: [
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
            id: "operating-system",
            groupName: "Operating Systems",
            items: [
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
            id: "database-management-system",
            groupName: "Database Management Systems",
            items: [
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
            id: "productivity",
            groupName: "Productivity",
            items: [
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
