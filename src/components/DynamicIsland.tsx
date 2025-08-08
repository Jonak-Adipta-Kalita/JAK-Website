"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [activeHeader, setActiveHeader] = useState("About");

    return (
        <header className="mt-7 bg-bg-base flex items-center justify-center space-x-1 text-fg-main">
            {["About", "Work", "Journal", "Testimonials", "Contact"].map(
                (name) => (
                    <motion.div
                        key={name}
                        onClick={() => setActiveHeader(name)}
                        className="cursor-pointer 2xl:p-7 2xl:py-3 md:p-5 md:py-2 p-4 py-2 z-50 rounded-full"
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
                        <p className="2xl:text-xl xl:text-lg sm:text-base text-sm font-ubuntu font-bold tracking-wide text-center cursor-pointer">
                            {name}
                        </p>
                    </motion.div>
                )
            )}
        </header>
    );
};

export default Header;
