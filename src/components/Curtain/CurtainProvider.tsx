"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LeftCurtain, RightCurtain } from "./Curtain";

const CurtainProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <AnimatePresence>
                {loading && (
                    <>
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="fixed top-0 left-0 h-full w-1/2 z-50"
                        >
                            <LeftCurtain />
                        </motion.div>

                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "0%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="fixed top-0 left-1/2 h-full w-1/2 z-50"
                        >
                            <RightCurtain />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="relative z-0">{children}</div>
        </div>
    );
};

export default CurtainProvider;
