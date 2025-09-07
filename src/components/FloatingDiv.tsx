"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, animate } from "framer-motion";

const FloatingDiv = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    const dragX = useMotionValue(0);
    const dragY = useMotionValue(0);

    function handleDragEnd() {
        animate(dragX, 0, { type: "spring", stiffness: 200, damping: 20 });
        animate(dragY, 0, { type: "spring", stiffness: 200, damping: 20 });
    }

    return (
        <motion.div
            drag
            dragElastic={0.2}
            dragMomentum={true}
            style={{ x: dragX, y: dragY }}
            onDragEnd={handleDragEnd}
            className={cn("cursor-pointer select-none", className)}
        >
            {children}
        </motion.div>
    );
};

export default FloatingDiv;
