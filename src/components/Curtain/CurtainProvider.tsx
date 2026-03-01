"use client";

import { motion, Transition } from "framer-motion";
import { CurtainContext } from "@/lib/CurtainContext";
import LeftCurtain from "./LeftCurtain";
import RightCurtain from "./RightCurtain";
import { useCurtainTransition } from "@/lib/hooks/usePageTransition";

const CURTAIN_VISIBLE_STATES = ["closing", "closed", "opening"];

const leftVariants = { open: { x: "-100%" }, closed: { x: "0%" } };
const rightVariants = { open: { x: "100%" }, closed: { x: "0%" } };
const transition: Transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const };

export const CurtainProvider = ({ children }: { children: React.ReactNode }) => {
    const { curtainState, navigateTo, onCurtainAnimationComplete } = useCurtainTransition();

    const isVisible = CURTAIN_VISIBLE_STATES.includes(curtainState);
    const animateTo = curtainState === "closing" || curtainState === "closed" ? "closed" : "open";

    return (
        <CurtainContext.Provider value={{ navigateTo }}>
            <div className="relative min-h-screen w-full overflow-hidden">
                {isVisible && (
                    <>
                        <motion.div
                            variants={leftVariants}
                            initial="open"
                            animate={animateTo}
                            transition={transition}
                            onAnimationComplete={onCurtainAnimationComplete}
                            className="fixed top-0 left-0 z-50 h-full w-1/2 pointer-events-none"
                        >
                            <LeftCurtain />
                        </motion.div>

                        <motion.div
                            variants={rightVariants}
                            initial="open"
                            animate={animateTo}
                            transition={transition}
                            className="fixed top-0 left-1/2 z-50 h-full w-1/2 pointer-events-none"
                        >
                            <RightCurtain />
                        </motion.div>
                    </>
                )}
                <div className="relative z-0">{children}</div>
            </div>
        </CurtainContext.Provider>
    );
};
