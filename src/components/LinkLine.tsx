"use client";
import { useLinkLine } from "@/lib/hooks/useLinkLine";
import { useEffect } from "react";

const LinkLine = ({
    fromRef,
    toRef,
    stroke = "#96adde",
    strokeWidth = 1.5,
    strokeOpacity = 0.4,
    zPop = false
}: {
    fromRef: HTMLElement | null;
    toRef: HTMLElement | null;
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    zPop?: boolean
}) => {
    const { x1, y1, x2, y2 } = useLinkLine(fromRef, toRef);

    return (
        <svg className={`pointer-events-none fixed top-0 left-0 ${zPop ? "z-40" : "z-0"} h-screen w-screen`}>
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeOpacity={strokeOpacity}
            />
        </svg>
    );
};

export default LinkLine;
