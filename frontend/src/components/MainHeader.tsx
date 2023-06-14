"use client";

import Navigation from "@components/Navigation";
import { motion } from "framer-motion";

const MainHeader = () => {
    return (
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
            <motion.div
                className="space-y-3"
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="text-2xl font-bold text-slate-200 sm:text-[35px] md:text-[37px]">
                    Jon
                    <span className="custom-underline decoration-[3px]">
                        ak Adipta Ka
                    </span>
                    lita
                </p>
                <p className="text-xs font-semibold text-slate-200 sm:text-base md:text-lg">
                    A Full Stack Web Developer
                </p>
                <p className="text-xs text-slate-300/50 sm:text-base">
                    I am a{" "}
                    <span className="custom-underline decoration-[0.2px] underline-offset-[4px]">
                        15 y/o Teenager
                    </span>
                    , who loves to make{" "}
                    <span className="custom-underline decoration-[0.2px] underline-offset-[4px]">
                        Cool Projects
                    </span>
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
