"use client";
import { useEffect, useState } from "react";

type LinePos = { x1: number; y1: number; x2: number; y2: number };

export function useLinkLine(
    fromRef: HTMLElement | null,
    toRef: HTMLElement | null
) {
    const [linePos, setLinePos] = useState<LinePos>({ x1: 0, y1: 0, x2: 0, y2: 0 });

    useEffect(() => {
        function updateLine() {
            if (!fromRef || !toRef) return;
            const fromBox = fromRef.getBoundingClientRect();
            const toBox = toRef.getBoundingClientRect();
            setLinePos({
                x1: fromBox.left + fromBox.width / 2,
                y1: fromBox.top + fromBox.height / 2,
                x2: toBox.left + toBox.width / 2,
                y2: toBox.top + toBox.height / 2,
            });
        }
        updateLine();
        window.addEventListener("resize", updateLine);
        const interval = setInterval(updateLine, 16);
        return () => {
            window.removeEventListener("resize", updateLine);
            clearInterval(interval);
        };
    }, [fromRef, toRef]);

    return linePos;
}
