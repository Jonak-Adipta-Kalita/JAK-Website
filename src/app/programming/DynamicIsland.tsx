"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const DynamicIsland = () => {
    const [activeHeader, setActiveHeader] = useState("About");
    const router = useRouter();

    useEffect(() => {
        router.prefetch("/programming/journal");
        router.prefetch("/programming/work");
    }, [])

    return (
        <header className="bg-transparent text-fg-programming-text mt-7 flex max-w-fit items-center justify-center space-x-3 rounded-full sm:space-x-1">
            {["About", "Work", "Journal", "Testimonials", "Contact"].map(
                (name, index) => (
                    <motion.div
                        key={name}
                        onClick={(e) => {
                            e.preventDefault();

                            setActiveHeader(name);

                            if (name === "Work" || name === "Journal") {
                                router.push(`/programming/${name.toLowerCase()}`);
                            } else {
                                let scrollHash = "";

                                if (name === "About") scrollHash = ""
                                else if (name === "Testimonials" || name === "Contact")
                                    scrollHash = `#${name.toLowerCase()}`

                                router.push(`/programming${scrollHash}`);
                            }
                        }}
                        className={`${name === "Contact" ? "hidden sm:inline" : ""} z-50 cursor-pointer rounded-full p-[clamp(0.75rem,1vw+0.5rem,1.75rem)] py-[clamp(0.5rem,0.5vw+0.25rem,0.75rem)]`}
                        initial={{ opacity: 0, y: -24 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            backgroundColor:
                                activeHeader === name
                                    ? "rgba(255,255,255,0.08)"
                                    : "rgba(0,0,0,0)",
                        }}
                        transition={{
                            opacity: { duration: 0.4, delay: index * 0.08, ease: "easeOut" },
                            y: { duration: 0.4, delay: index * 0.08, ease: "easeOut" },
                            backgroundColor: {
                                duration: 0.2,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <p className="font-ubuntu cursor-pointer text-center text-[clamp(0.8125rem,1vw+0.625rem,1.375rem)] font-extrabold tracking-wider lg:font-bold">
                            {name}
                        </p>
                    </motion.div>
                )
            )}
        </header>
    );
};

export default DynamicIsland;
