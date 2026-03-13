"use client"

import MyPic from "./MyPic";
import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import { useState } from "react";

const listItems = [
    <>I'm passionate about <span className="text-fg-programming-primary">Coding</span>, exploring various areas such as Web Development, Game Development, Machine Learning, Computer Vision, IoT, ...</>,
    <><span className="text-fg-programming-primary">Music</span> is a big part of my life; while I love playing different kinds of instruments, <span className="text-fg-programming-primary">Guitar</span> holds a special place in my heart.</>,
    <><span className="text-fg-programming-primary">Astronomy</span> fascinates me, and I'm always eager to learn more about the universe.</>,
    <>I'm also a <span className="text-fg-programming-primary">book</span> nerd who loves getting lost in captivating fiction and exploring new worlds through stories.</>,
    <>I have a huge love for <span className="text-fg-programming-primary">gaming</span>, finding enjoyment in both playing and developing games.</>,
    <>I am literate in <span className="text-fg-programming-primary">অসমীয়া</span> (native), <span className="text-fg-programming-primary">English</span> as well as <span className="text-fg-programming-primary">हिंदी</span> and in the process of learning <span className="text-fg-programming-primary">日本語</span> - Polymathy includes Polyglotism</>,
];

const AboutMe = () => {
    const [typingDone, setTypingDone] = useState(false);


    return (
        <section className="max-w-7xl flex lg:items-center mt-28 lg:mt-0 justify-center h-screen w-full">
            <div className="hidden lg:inline">
                {/* MyPic */}
            </div>
            <div className="lg:space-y-10 space-y-7 h-fit p-4 lg:p-10 bg-slate-800/30 rounded-lg shadow-slate-900 shadow-lg mx-4">
                <p className="text-fg-programming-secondary text-[clamp(1.25rem,1rem+1vw,1.875rem)] font-salsa tracking-wider text-center lg:text-left min-h-[1.5em]">
                    <Typewriter highlightTailwind="fg-programming-primary" typingDone={typingDone} setTypingDone={setTypingDone} textParts={[
                        { text: "Hey, I am ", highlight: false },
                        { text: "Jonak", highlight: true },
                        { text: "! Happy to see you :D", highlight: false },
                    ]} />
                </p>
                <motion.ul
                    className="list-disc list-outside space-y-4 text-inter text-justify ml-1 lg:ml-0"
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
                        <motion.li key={i} className="aboutText" variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: "easeOut" },
                            },
                        }}>
                            {item}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}

export default AboutMe;
