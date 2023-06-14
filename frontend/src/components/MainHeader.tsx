"use client";

import Navigation from "@components/Navigation";
import { motion } from "framer-motion";

const MainHeader = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
            <motion.div
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
            </motion.div>
            <motion.div
                className="hidden lg:inline"
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <Navigation />
            </motion.div>
        </div>
    );
};

export default MainHeader;
