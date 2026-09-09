"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate } from "framer-motion";
import {
    Dispatch,
    SetStateAction,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import LinkLine from "./LinkLine";

const FloatingDiv = ({
    children,
    className,
    anchorRefs,
    setDrag,
    style
}: {
    children: React.ReactNode;
    className: string;
    anchorRefs: React.RefObject<HTMLButtonElement | null>[];
    setDrag: Dispatch<SetStateAction<boolean>>;
    style?: React.CSSProperties
}) => {
    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);
    const selfRef = useRef<HTMLDivElement>(null);

    const handleDragEnd = () => {
        setDrag(false);

        animate(dragX, 0, { type: "spring", stiffness: 200, damping: 20 });
        animate(dragY, 0, { type: "spring", stiffness: 200, damping: 20 });
    };

    const [, forceRender] = useState(0);

    useLayoutEffect(() => {
        forceRender((n) => n + 1);
    }, []);

    return (
        <>
            {anchorRefs.map((anchorRef, i) => (
                <LinkLine
                    key={i}
                    fromRef={anchorRef.current}
                    toRef={selfRef.current}
                />
            ))}

            <motion.div
                ref={selfRef}
                drag
                dragElastic={0.2}
                dragMomentum={true}
                style={{ x: dragX, y: dragY, ...style }}
                onDragStart={() => {
                    setDrag(true);
                }}
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
