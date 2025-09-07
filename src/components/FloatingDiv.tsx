"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FloatingDiv = ({
    children,
    className,
    anchorRef,
}: {
    children: React.ReactNode;
    className: string;
    anchorRef: React.RefObject<HTMLButtonElement | null>;
}) => {
    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);
    const selfRef = useRef<HTMLDivElement>(null);

    const [linePos, setLinePos] = useState({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
    });

    function handleDragEnd() {
        animate(dragX, 0, { type: "spring", stiffness: 200, damping: 20 });
        animate(dragY, 0, { type: "spring", stiffness: 200, damping: 20 });
    }

    useEffect(() => {
        function updateLine() {
            if (!anchorRef.current || !selfRef.current) return;

            const anchorBox = anchorRef.current.getBoundingClientRect();
            const selfBox = selfRef.current.getBoundingClientRect();

            setLinePos({
                x1: anchorBox.left + anchorBox.width / 2,
                y1: anchorBox.top + anchorBox.height / 2,
                x2: selfBox.left + selfBox.width / 2,
                y2: selfBox.top + selfBox.height / 2,
            });
        }

        updateLine();
        window.addEventListener("resize", updateLine);
        const interval = setInterval(updateLine, 16);

        return () => {
            window.removeEventListener("resize", updateLine);
            clearInterval(interval);
        };
    }, [anchorRef]);

    return (
        <>
            <svg className="pointer-events-none fixed top-0 left-0 z-0 h-screen w-screen">
                <line
                    x1={linePos.x1}
                    y1={linePos.y1}
                    x2={linePos.x2}
                    y2={linePos.y2}
                    stroke="#96adde"
                    strokeWidth="1.5"
                    strokeOpacity="0.4"
                />
            </svg>

            <motion.div
                ref={selfRef}
                drag
                dragElastic={0.2}
                dragMomentum={true}
                style={{ x: dragX, y: dragY }}
                onDragEnd={handleDragEnd}
                className={cn(
                    "relative z-10 cursor-pointer select-none",
                    className
                )}
            >
                {children}
            </motion.div>
        </>
    );
};

export default FloatingDiv;
