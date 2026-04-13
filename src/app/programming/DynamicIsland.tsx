"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
    NAV_ITEMS,
    NavItem,
    useProgrammingNavStore as useNavStore,
} from "@/lib/hooks/navStore/useProgrammingNavStore";

export const HASH_ITEMS = [
    "About",
    "Skills",
    "Testimonials",
    "Contact",
];

const getActiveFromPathname = (pathname: string): NavItem | null => {
    if (pathname.startsWith("/programming/journal")) return "Journal";
    if (pathname.startsWith("/programming/work")) return "Work";
    if (pathname === "/programming" || pathname === "/programming/")
        return "About";

    return null;
}

const DynamicIsland = () => {
    const router = useRouter();
    const pathname = usePathname();

    const { activeHeader, setActiveHeader, setScrollTarget } = useNavStore();

    useEffect(() => {
        const derived = getActiveFromPathname(pathname);

        const hash = window.location.hash;

        if (hash === "#testimonials") setActiveHeader("Testimonials");
        else if (hash === "#contact") setActiveHeader("Contact");
        else if (derived) setActiveHeader(derived);
    }, [pathname]);

    useEffect(() => {
        router.prefetch("/programming/journal");
        router.prefetch("/programming/work");
    }, []);

    return (
        <header className="text-fg-programming-text z-50 mt-7 flex max-w-fit items-center justify-center space-x-3 rounded-full bg-[#061224] p-2 sm:space-x-1">
            {NAV_ITEMS.map((name, index) => (
                <motion.div
                    key={name}
                    onClick={(e) => {
                        e.preventDefault();

                        setActiveHeader(name);

                        if (name === "Work" || name === "Journal") {
                            router.push(`/programming/${name.toLowerCase()}`);
                        } else {
                            setScrollTarget(name);

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
                        opacity: {
                            duration: 0.4,
                            delay: index * 0.08,
                            ease: "easeOut",
                        },
                        y: {
                            duration: 0.4,
                            delay: index * 0.08,
                            ease: "easeOut",
                        },
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
            ))}
        </header>
    );
};

export default DynamicIsland;
