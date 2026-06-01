"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useCurtainTransition } from "@/lib/hooks/usePageTransition";
import { CurtainContext } from "@/lib/CurtainContext";

const transition = {
    duration: 0.8,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
};

const StarsSVG = () => {
    return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="30%"
                cy="15%"
                r="2"
                fill="#ffffff"
                className="animate-twinkle"
            />
            <circle
                cx="20%"
                cy="55%"
                r="2.4"
                fill="#ffffff"
                className="animate-twinkle-fast"
            />
            <circle
                cx="80%"
                cy="85%"
                r="1.8"
                fill="#ffffff"
                className="animate-twinkle-slow"
            />

            <circle
                cx="70%"
                cy="30%"
                r="1.6"
                fill="#e0e4f8"
                className="animate-twinkle-slow"
            />
            <circle
                cx="45%"
                cy="45%"
                r="1.7"
                fill="#e0e4f8"
                className="animate-twinkle-fast"
            />
            <circle
                cx="60%"
                cy="75%"
                r="1.5"
                fill="#d0d8f0"
                className="animate-twinkle"
            />
            <circle
                cx="10%"
                cy="30%"
                r="1.6"
                fill="#e0e4f8"
                className="animate-twinkle-slow"
            />
            <circle
                cx="90%"
                cy="20%"
                r="1.4"
                fill="#d0d8f0"
                className="animate-twinkle"
            />

            <circle
                cx="55%"
                cy="70%"
                r="1.4"
                fill="#c0c8e4"
                className="animate-twinkle"
            />
            <circle
                cx="35%"
                cy="90%"
                r="1.2"
                fill="#b8c0dc"
                className="animate-twinkle-slow"
            />
            <circle
                cx="75%"
                cy="55%"
                r="1.1"
                fill="#b8c0dc"
                className="animate-twinkle-fast"
            />
            <circle
                cx="15%"
                cy="80%"
                r="1"
                fill="#c0c8e4"
                className="animate-twinkle"
            />
            <circle
                cx="50%"
                cy="10%"
                r="1.2"
                fill="#b8c0dc"
                className="animate-twinkle-slow"
            />
            <circle
                cx="85%"
                cy="65%"
                r="1"
                fill="#c0c8e4"
                className="animate-twinkle-fast"
            />
        </svg>
    );
};

export const CurtainProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const { curtainState, navigateTo, openOnMount, onClosed, onOpened } =
        useCurtainTransition();

    const leftControls = useAnimation();
    const rightControls = useAnimation();

    useEffect(() => {
        const run = async () => {
            if (curtainState === "closing") {
                await Promise.all([
                    leftControls.start({ x: "0%", transition }),
                    rightControls.start({
                        x: "0%",
                        transition: { ...transition, delay: 0.5 },
                    }),
                ]);
                onClosed();
            } else if (curtainState === "opening") {
                await Promise.all([
                    leftControls.start({ x: "-100%", transition }),
                    rightControls.start({ x: "100%", transition }),
                ]);
                onOpened();
            }
        };

        run();
    }, [curtainState]);

    return (
        <CurtainContext.Provider value={{ navigateTo, openOnMount }}>
            <div className="relative min-h-screen w-full overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={leftControls}
                    className="pointer-events-none fixed top-0 left-0 z-50 h-full w-1/2"
                >
                    <div className="bg-bg-curtain relative h-screen max-h-screen overflow-hidden">
                        <div className="absolute inset-0">
                            <StarsSVG />
                        </div>
                        <div className="absolute top-0 right-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: "100%" }}
                    animate={rightControls}
                    className="pointer-events-none fixed top-0 left-1/2 z-50 h-full w-1/2"
                >
                    <div className="bg-bg-curtain relative h-screen max-h-screen overflow-hidden">
                        <div className="absolute inset-0">
                            <StarsSVG />
                        </div>
                        <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
                    </div>
                </motion.div>
                <div className="relative z-0">{children}</div>
            </div>
        </CurtainContext.Provider>
    );
};
