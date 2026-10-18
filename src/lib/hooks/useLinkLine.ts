"use client";
import { useEffect, useState } from "react";

type LinePos = { x1: number; y1: number; x2: number; y2: number };

export function useLinkLine(
    fromRef: HTMLElement | null,
    toRef: HTMLElement | null
) {
    const [linePos, setLinePos] = useState<LinePos>({
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
    });

    useEffect(() => {
        if (!fromRef || !toRef) return;
        let raf = 0;

        const tick = () => {
            const a = fromRef.getBoundingClientRect();
            const b = toRef.getBoundingClientRect();
            const x1 = a.left + a.width / 2;
            const y1 = a.top + a.height / 2;
            const x2 = b.left + b.width / 2;
            const y2 = b.top + b.height / 2;

            setLinePos((prev) =>
                prev.x1 === x1 && prev.y1 === y1 && prev.x2 === x2 && prev.y2 === y2
                    ? prev
                    : { x1, y1, x2, y2 }
            );
            raf = requestAnimationFrame(tick);
        };

        tick();
        return () => cancelAnimationFrame(raf);
    }, [fromRef, toRef]);

    return linePos;
}
