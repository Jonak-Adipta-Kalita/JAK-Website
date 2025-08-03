"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
    const [activeHeader, setActiveHeader] = useState("About");

    return (
        <div className="mt-7 bg-bg-base flex items-center justify-center space-x-2 text-fg-main">
            {["About", "Work", "Journal", "Testimonials", "Contact"].map(
                (name) => (
                    <motion.div
                        key={name}
                        onClick={() => setActiveHeader(name)}
                        className="cursor-pointer p-7 py-3 z-50 rounded-full"
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
                        <p className="text-2xl font-ubuntu font-bold tracking-tight text-center">
                            {name}
                        </p>
                    </motion.div>
                )
            )}
        </div>
    );
};

export default Header;
