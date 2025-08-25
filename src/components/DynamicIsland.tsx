"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [activeHeader, setActiveHeader] = useState("About");

    return (
        <header className="max-w-fit rounded-full mt-7 bg-bg-base flex items-center justify-center space-x-3 sm:space-x-1 text-fg-main">
            {["About", "Work", "Journal", "Testimonials", "Contact"].map(
                (name) => (
                    <motion.div
                        key={name}
                        onClick={() => setActiveHeader(name)}
                        className={`${
                            name === "Contact" ? "hidden sm:inline" : ""
                        } cursor-pointer p-[clamp(0.75rem,1vw+0.5rem,1.75rem)] py-[clamp(0.5rem,0.5vw+0.25rem,0.75rem)] z-50 rounded-full`}
                        animate={{
                            backgroundColor:
                                activeHeader === name
                                    ? "#272F3F"
                                    : "rgba(0,0,0,0)",
                        }}
                        transition={{
                            backgroundColor: {
                                duration: 0.2,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <p className="text-[clamp(0.8125rem,1vw+0.625rem,1.375rem)] font-ubuntu lg:font-semibold font-bold tracking-wide text-center cursor-pointer">
                            {name}
                        </p>
                    </motion.div>
                )
            )}
        </header>
    );
};

export default Header;
