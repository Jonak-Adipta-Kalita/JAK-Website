"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

interface TypewriterProps {
    textParts: {
        text: string;
        highlight: boolean;
    }[];

    typingDone: boolean;
    setTypingDone: Dispatch<SetStateAction<boolean>>;

    highlightTailwind: string;
}

const Typewriter = ({
    typingDone,
    setTypingDone,
    textParts,
    highlightTailwind,
}: TypewriterProps) => {
    const [displayedCount, setDisplayedCount] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const FULL_STRING = textParts.map((part) => part.text).join("");

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setDisplayedCount((prev) => {
                if (prev >= FULL_STRING.length) {
                    clearInterval(intervalRef.current!);
                    return prev;
                }
                return prev + 1;
            });
        }, 40);

        return () => clearInterval(intervalRef.current!);
    }, []);

    useEffect(() => {
        if (displayedCount >= FULL_STRING.length && FULL_STRING.length > 0) {
            setTypingDone(true);
        }
    }, [displayedCount]);

    const renderTypewriter = () => {
        let remaining = displayedCount;
        return textParts.map((part, i) => {
            if (remaining <= 0) return null;

            const slice = part.text.slice(0, remaining);
            remaining -= part.text.length;

            if (!slice) return null;

            return part.highlight ? (
                <span key={i} className={`text-${highlightTailwind}`}>
                    {slice}
                </span>
            ) : (
                <span key={i}>{slice}</span>
            );
        });
    };

    return (
        <>
            {renderTypewriter()}
            {!typingDone && (
                <span
                    className={cn(
                        "ml-0.5 inline-block h-[1em] w-[2px] animate-pulse align-middle",
                        `bg-${highlightTailwind}`
                    )}
                />
            )}
        </>
    );
};

export default Typewriter;
