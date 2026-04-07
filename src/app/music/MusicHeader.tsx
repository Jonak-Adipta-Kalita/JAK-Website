"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = ["About", "Gear", "Influences"] as const;

const MusicHeader = () => {
    return (
        <nav
            className="fixed top-0 z-50 flex w-full items-center justify-center px-15 py-5 md:justify-end"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(3,2,10,0.95), transparent)",
            }}
        >
            <ul className="flex list-none gap-9">
                {links.map((link, i) => (
                    <motion.li
                        key={link}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                    >
                        <Link
                            href={`#${link.toLowerCase()}`}
                            className="text-fg-music-muted hover:text-fg-music-text group relative font-mono text-sm tracking-[3px] uppercase no-underline transition-colors md:text-lg"
                        >
                            {link}
                            <span
                                className="bg-fg-music-neon-red absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                                style={{
                                    boxShadow:
                                        "0 0 8px var(--color-fg-music-neon-red)",
                                }}
                            />
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    );
};

export default MusicHeader;
