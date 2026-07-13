"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { StoreApi } from "zustand";
import { UseBoundStore } from "zustand";
import { NavStore } from "@/lib/hooks/navStore/navStore";

const ScrollSnapPage = ({
    scrollbarClassName,
    children,
    useNavStore,
}: {
    scrollbarClassName: string;
    children: React.ReactNode;
    useNavStore: UseBoundStore<StoreApi<NavStore<any>>>;
}) => {
    const mainRef = useRef<HTMLElement>(null);

    const setIsScrolling = useNavStore((s) => s.setIsScrolling);

    const scrollTarget = useNavStore((s) => s.scrollTarget);
    const setScrollTarget = useNavStore((s) => s.setScrollTarget);

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (!hash || !mainRef.current) return;

        requestAnimationFrame(() => {
            const target = document.getElementById(hash);
            if (target && mainRef.current) {
                setIsScrolling(true);
                mainRef.current.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth",
                });
            }
        });
    }, []);

    useEffect(() => {
        if (!scrollTarget) return;
        const target = document.getElementById(scrollTarget.toLowerCase());
        if (!target || !mainRef.current) return;

        setIsScrolling(true);
        mainRef.current.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        setScrollTarget(null);
    }, [scrollTarget]);

    useEffect(() => {
        const container = mainRef.current;
        if (!container) return;

        let timeout: ReturnType<typeof setTimeout>;
        const onScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsScrolling(false), 150);
        };

        container.addEventListener("scroll", onScroll, { passive: true });
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <main
            ref={mainRef}
            className={cn(
                "relative z-10 w-full overflow-y-auto scroll-smooth lg:snap-y lg:snap-mandatory",
                scrollbarClassName
            )}
        >
            {children}
        </main>
    );
};

export default ScrollSnapPage;
