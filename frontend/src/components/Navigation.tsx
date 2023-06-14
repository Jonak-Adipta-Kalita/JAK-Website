"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navigations = [
    {
        id: "about",
        label: "About",
    },
    {
        id: "skills",
        label: "Skills",
    },
    {
        id: "projects",
        label: "Projects",
    },
    {
        id: "contact",
        label: "Contact",
    },
];

const Navigation = ({ animateLink }: { animateLink?: boolean }) => {
    return (
        <div className="flex items-center">
            {navigations?.map((navigation, i) => (
                <motion.div
                    key={navigation.id}
                    initial={
                        animateLink && {
                            y: -100,
                            opacity: 0,
                        }
                    }
                    animate={animateLink && { y: 0, opacity: 1 }}
                    transition={{ duration: i + 0.5 }}
                    className="group"
                >
                    <Link
                        href={"#" + navigation.id}
                        className="select-none px-2 py-1 font-semibold text-slate-200 hover:text-slate-300/50 sm:text-lg lg:text-xl"
                    >
                        {"#"}
                        <span className="group-hover:custom-underline">
                            {navigation.label}
                        </span>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default Navigation;
