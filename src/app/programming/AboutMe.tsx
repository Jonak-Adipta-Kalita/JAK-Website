"use client";

import img from "@/../public/My Pic.png";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import { useCurtain } from "@/lib/CurtainContext";
import ScrollSnapSection from "@/components/ScrollSnapSection";

const AboutMe = () => {
    const [typingDone, setTypingDone] = useState(false);
    const { navigateTo } = useCurtain();

    const listItems = [
        <>
            I&rsquo;m passionate about{" "}
            <span className="aboutText-highlight">Coding</span>, exploring
            various areas such as Web Development, Game Development, Machine
            Learning, Computer Vision, IoT, ...
        </>,
        <>
            <span
                onClick={() => navigateTo("/music")}
                className="aboutText-highlight"
            >
                Music
            </span>{" "}
            is a big part of my life; while I love playing different kinds of
            instruments,{" "}
            <span
                onClick={() => navigateTo("/music")}
                className="aboutText-highlight"
            >
                Guitar
            </span>{" "}
            holds a special place in my heart.
        </>,
        <>
            <span className="aboutText-highlightt">Astronomy</span> fascinates
            me, and I&rsquo;m always eager to learn more about the universe.
        </>,
        <>
            I&rsquo;m also a{" "}
            <span
                onClick={() => navigateTo("/productivity")}
                className="aboutText-highlight"
            >
                Book
            </span>{" "}
            nerd who loves getting lost in captivating fiction and exploring new
            worlds through stories.
        </>,
        <>
            I have a huge love for{" "}
            <span
                onClick={() => alert("some day fam!")}
                className="aboutText-highlight"
            >
                Gaming
            </span>
            , finding enjoyment in both playing and developing games.
        </>,
        <>
            I am literate in{" "}
            <span className="aboutText-highlight">অসমীয়া</span> (native),{" "}
            <span className="aboutText-highlight">English</span> as well as{" "}
            <span className="aboutText-highlight">हिंदी</span> and in the
            process of learning{" "}
            <span className="aboutText-highlight">日本語</span> - Polymathy
            includes{" "}
            <span
                onClick={() => navigateTo("/polyglot")}
                className="aboutText-highlight text-fg-programming-text"
            >
                Polyglotism
            </span>{" "}
            right?
        </>,
    ];

    return (
        <ScrollSnapSection
            nav="About"
            id="about"
            className="flex w-full items-center justify-center"
        >
            <div className="mx-5 mt-28 flex w-full max-w-7xl justify-center lg:mt-0 lg:h-screen lg:items-center lg:space-x-10 xl:space-x-20">
                <motion.div
                    className="hidden lg:inline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative z-40 w-88">
                        <Image
                            src={img}
                            alt="My Pic"
                            className="rounded-2xl drop-shadow-lg"
                        />
                        <div className="pointer-events-none absolute inset-0 grid place-items-center">
                            <div
                                className="absolute rounded-full"
                                style={{
                                    inlineSize: "500px",
                                    aspectRatio: "1",
                                    border: "6px solid transparent",
                                    background: `conic-gradient(
                                          from -130deg,
                                          hsl(210 13% 30%) 0%,
                                          #0000 10% 40%,
                                          hsl(210 13% 30%) 75%
                                        ) border-box`,
                                    mask: `linear-gradient(#0000) padding-box intersect, linear-gradient(#000) border-box`,
                                    rotate: "3 0.5 2 90deg",
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                <div className="h-fit space-y-7 rounded-lg bg-slate-800/30 p-4 shadow-lg shadow-slate-900 lg:space-y-10 lg:p-10">
                    <p className="text-fg-programming-secondary font-salsa min-h-[1.5em] text-center text-[clamp(1.25rem,1rem+1vw,1.875rem)] tracking-wider lg:text-left">
                        <Typewriter
                            highlightTailwind="var(--color-fg-programming-primary)"
                            typingDone={typingDone}
                            setTypingDone={setTypingDone}
                            textParts={[
                                { text: "Hey, I am ", highlight: false },
                                { text: "Jonak", highlight: true },
                                {
                                    text: "! Happy to see you :D",
                                    highlight: false,
                                },
                            ]}
                            strokeTimeout={20}
                        />
                    </p>

                    <motion.ul
                        className="text-inter ml-1 list-outside list-disc space-y-4 text-justify lg:ml-0"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: typingDone ? 0 : 0,
                                },
                            },
                        }}
                        initial="hidden"
                        animate={typingDone ? "visible" : "hidden"}
                    >
                        {listItems.map((item, i) => (
                            <motion.li
                                key={i}
                                className="aboutText"
                                variants={{
                                    hidden: { opacity: 0, y: 16 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            ease: "easeOut",
                                        },
                                    },
                                }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </ScrollSnapSection>
    );
};

export default AboutMe;
