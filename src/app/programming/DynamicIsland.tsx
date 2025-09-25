"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const DynamicIsland = () => {
    const [activeHeader, setActiveHeader] = useState("About");

    return (
        <header className="bg-bg-base text-fg-main mt-7 flex max-w-fit items-center justify-center space-x-3 rounded-full sm:space-x-1">
            {["About", "Work", "Journal", "Testimonials", "Contact"].map(
                (name) => (
                    <motion.div
                        key={name}
                        onClick={() => setActiveHeader(name)}
                        className={`${
                            name === "Contact" ? "hidden sm:inline" : ""
                        } z-50 cursor-pointer rounded-full p-[clamp(0.75rem,1vw+0.5rem,1.75rem)] py-[clamp(0.5rem,0.5vw+0.25rem,0.75rem)]`}
                        animate={{
                            backgroundColor:
                                activeHeader === name
                                    ? "rgba(39,47,63,0.7)"
                                    : "rgba(0,0,0,0)",
                        }}
                        transition={{
                            backgroundColor: {
                                duration: 0.15,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <p className="font-ubuntu cursor-pointer text-center text-[clamp(0.8125rem,1vw+0.625rem,1.375rem)] font-bold tracking-wide lg:font-semibold">
                            {name}
                        </p>
                    </motion.div>
                )
            )}
        </header>
    );
};

export default DynamicIsland;
