"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navigations = [
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

const Header = () => {
    return (
        <header className="m-auto flex max-w-7xl items-center justify-between gap-y-5 rounded-xl p-8 lg:py-4 lg:shadow-2xl">
            {/* <motion.div
                className="space-y-3 text-center lg:text-start"
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="text-[35px] font-bold text-slate-200 md:text-[37px]">
                    Jon
                    <span className="custom-underline decoration-[3px]">
                        ak Adipta Ka
                    </span>
                    lita
                </p>
                <p className="text-base font-semibold text-slate-200 md:text-lg">
                    A Full Stack Web Developer
                </p>
                <p className="truncate text-sm text-slate-300/50 md:mx-0">
                    I am a 15 y/o Teenager, who loves to make Cool Projects
                </p>
            </motion.div> */}
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Link href="/">
                    <p className="cursor-pointer font-bold text-slate-200">
                        Jonak Adipta Kalita
                    </p>
                </Link>
            </motion.div>
            <motion.div
                className="flex items-center"
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                {navigations?.map((navigation) => (
                    <Link
                        key={navigation.id}
                        href={"#" + navigation.id}
                        className="group select-none px-2 py-1 text-sm font-semibold text-slate-200 hover:text-slate-300/50 md:text-base"
                    >
                        {"#"}
                        <span className="group-hover:custom-underline">
                            {navigation.label}
                        </span>
                    </Link>
                ))}
            </motion.div>
        </header>
    );
};

export default Header;
