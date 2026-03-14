"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

import img from "@/../public/My Pic.png";
import { useRouter } from "next/navigation";

const listItems = [
    <>
        I&rsquo;m passionate about{" "}
        <span className="text-fg-programming-primary">Coding</span>, exploring
        various areas such as Web Development, Game Development, Machine
        Learning, Computer Vision, IoT, ...
    </>,
    <>
        <span className="text-fg-programming-primary">Music</span> is a big part
        of my life; while I love playing different kinds of instruments,{" "}
        <span className="text-fg-programming-primary">Guitar</span> holds a
        special place in my heart.
    </>,
    <>
        <span className="text-fg-programming-primary">Astronomy</span>{" "}
        fascinates me, and I&rsquo;m always eager to learn more about the
        universe.
    </>,
    <>
        I&rsquo;m also a{" "}
        <span className="text-fg-programming-primary">book</span> nerd who loves
        getting lost in captivating fiction and exploring new worlds through
        stories.
    </>,
    <>
        I have a huge love for{" "}
        <span className="text-fg-programming-primary">gaming</span>, finding
        enjoyment in both playing and developing games.
    </>,
    <>
        I am literate in{" "}
        <span className="text-fg-programming-primary">অসমীয়া</span> (native),{" "}
        <span className="text-fg-programming-primary">English</span> as well as{" "}
        <span className="text-fg-programming-primary">हिंदी</span> and in the
        process of learning{" "}
        <span className="text-fg-programming-primary">日本語</span> - Polymathy
        includes Polyglotism right?
    </>,
];

const AboutMe = () => {
    const [typingDone, setTypingDone] = useState(false);

    return (
        <section className="flex w-full items-center justify-center lg:h-screen lg:snap-center lg:snap-always">
            <div className="mt-28 flex w-full max-w-7xl justify-center lg:mt-0 lg:h-screen lg:items-center">
                <div className="mr-15 hidden lg:inline">
                    <div className="relative w-88">
                        <Image
                            src={img}
                            alt="My Pic"
                            className="z-3 rounded-2xl drop-shadow-lg"
                        />
                        <div id="ring-on-mypic" />
                    </div>
                </div>

                <div className="mx-4 h-fit space-y-7 rounded-lg bg-slate-800/30 p-4 shadow-lg shadow-slate-900 lg:space-y-10 lg:p-10">
                    <p className="text-fg-programming-secondary font-salsa min-h-[1.5em] text-center text-[clamp(1.25rem,1rem+1vw,1.875rem)] tracking-wider lg:text-left">
                        <Typewriter
                            highlightTailwind="fg-programming-primary"
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
        </section>
    );
};

export default AboutMe;
