"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useCurtainTransition } from "@/lib/hooks/usePageTransition";
import { CurtainContext } from "@/lib/CurtainContext";
import LeftCurtain from "./LeftCurtain";
import RightCurtain from "./RightCurtain";

const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };

export const CurtainProvider = ({ children }: { children: React.ReactNode }) => {
    const { curtainState, navigateTo, openOnMount, onClosed, onOpened } = useCurtainTransition();

    const leftControls = useAnimation();
    const rightControls = useAnimation();

    useEffect(() => {
        const run = async () => {
            if (curtainState === "closing") {
                // Animate curtains IN (cover the screen)
                await Promise.all([
                    leftControls.start({ x: "0%", transition }),
                    rightControls.start({ x: "0%", transition }),
                ]);
                onClosed();
            } else if (curtainState === "opening") {
                // Animate curtains OUT (reveal the screen)
                await Promise.all([
                    leftControls.start({ x: "-100%", transition }),
                    rightControls.start({ x: "100%", transition }),
                ]);
                onOpened();
            }
        };

        run();
    }, [curtainState]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <CurtainContext.Provider value={{ navigateTo, openOnMount }}>
            <div className="relative min-h-screen w-full overflow-hidden">
                {/* Always mounted — position controls visibility */}
                <motion.div
                    initial={{ x: "-100%" }} // starts off-screen left
                    animate={leftControls}
                    className="fixed top-0 left-0 z-50 h-full w-1/2 pointer-events-none"
                >
                    <LeftCurtain />
                </motion.div>

                <motion.div
                    initial={{ x: "100%" }} // starts off-screen right
                    animate={rightControls}
                    className="fixed top-0 left-1/2 z-50 h-full w-1/2 pointer-events-none"
                >
                    <RightCurtain />
                </motion.div>

                <div className="relative z-0">{children}</div>
            </div>
        </CurtainContext.Provider>
    );
};
