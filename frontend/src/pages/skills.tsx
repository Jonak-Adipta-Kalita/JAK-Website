import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/modals/LoginModal";
import SignUpModal from "../components/modals/SignUpModal";
import SkillBar from "react-skillbars";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Skills = () => {
    const [openLanguages, setOpenLanguages] = useState(false);
    const [openFrameworks, setOpenFrameworks] = useState(false);

    return (
        <div className="flex h-screen flex-col text-gray-300">
            <Head>
                <title>JAK Website | Skills</title>
            </Head>
            <Header />
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                <div className="mx-auto mb-5 mt-10 space-y-4 px-4 md:max-w-3xl md:px-0 lg:mt-[50px] lg:max-w-5xl">
                    <div className="space-y-5">
                        <details className="space-y-5">
                            <summary
                                className="flex cursor-pointer items-center space-x-3"
                                onClick={() => setOpenLanguages(!openLanguages)}
                            >
                                {openLanguages ? (
                                    <ChevronDownIcon className="h-7 w-7" />
                                ) : (
                                    <ChevronRightIcon className="h-7 w-7" />
                                )}
                                <p className="cursor-pointer text-xl font-bold">
                                    Languages
                                </p>
                            </summary>
                            <SkillBar
                                skills={[
                                    {
                                        type: "Python",
                                        level: 98,
                                    },
                                    {
                                        type: "HTML",
                                        level: 96,
                                    },
                                    {
                                        type: "CSS",
                                        level: 92,
                                    },
                                    {
                                        type: "JavaScript",
                                        level: 97,
                                    },
                                    {
                                        type: "TypeScript",
                                        level: 68,
                                    },
                                    {
                                        type: "Go",
                                        level: 26,
                                    },
                                    {
                                        type: "C",
                                        level: 14,
                                    },
                                    {
                                        type: "C++",
                                        level: 1,
                                    },
                                ]}
                                colors={{
                                    bar: "#3498db",
                                    title: {
                                        text: "#fff",
                                        background: "#2980b9",
                                    },
                                }}
                            />
                        </details>
                        <details className="space-y-5">
                            <summary
                                className="flex cursor-pointer items-center space-x-3"
                                onClick={() =>
                                    setOpenFrameworks(!openFrameworks)
                                }
                            >
                                {openFrameworks ? (
                                    <ChevronDownIcon className="h-7 w-7" />
                                ) : (
                                    <ChevronRightIcon className="h-7 w-7" />
                                )}
                                <p className="cursor-pointer text-xl font-bold">
                                    Frameworks
                                </p>
                            </summary>
                            <SkillBar
                                skills={[
                                    {
                                        type: "ReactJS",
                                        level: 100,
                                    },
                                    {
                                        type: "NextJS",
                                        level: 99,
                                    },
                                    {
                                        type: "Django",
                                        level: 50,
                                    },
                                    {
                                        type: "Bootstrap",
                                        level: 26,
                                    },
                                    {
                                        type: "Tailwind",
                                        level: 72,
                                    },
                                    {
                                        type: "Svelte",
                                        level: 1,
                                    },
                                    {
                                        type: "OpenCV",
                                        level: 56,
                                    },
                                    {
                                        type: "Pygame",
                                        level: 32,
                                    },
                                    {
                                        type: "Raylib",
                                        level: 14,
                                    },
                                    {
                                        type: "SDL",
                                        level: 9,
                                    },
                                    {
                                        type: "Arcade",
                                        level: 23,
                                    },
                                    {
                                        type: "Ursina",
                                        level: 64,
                                    },
                                    {
                                        type: "Panda3D",
                                        level: 42,
                                    },
                                    {
                                        type: "Electron",
                                        level: 84,
                                    },
                                ]}
                            />
                        </details>
                    </div>
                </div>
            </main>
            <LoginModal />
            <SignUpModal />
            <Footer />
        </div>
    );
};

export default Skills;
