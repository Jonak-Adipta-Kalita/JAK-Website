"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const MusicSection = ({
    children,
    name,
    className,
}: {
    children: React.ReactNode;
    name: string;
    className?: string;
}) => {
    return (
        <section
            id={`#${name}`}
            className={cn("mx-auto max-w-7xl px-5", className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className="font-metal-mania text-3xl uppercase md:text-5xl lg:text-7xl mb-5 md:mb-14 lg:mb-24">
                    <span className="text-fg-music-neon-blue">&#35;</span> {name}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default MusicSection;
