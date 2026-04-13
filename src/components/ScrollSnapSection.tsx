"use client";

import { NavStore } from "@/lib/store/navStore";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { StoreApi } from "zustand";
import { UseBoundStore } from "zustand";

const ScrollSnapSection = ({
    children,
    nav,
    id,
    className,
    useNavStore,
}: {
    children: React.ReactNode;
    nav?: string;
    id: string;
    className?: string;
    useNavStore: UseBoundStore<StoreApi<NavStore<any>>>;
}) => {
    const { setActiveHeader } = useNavStore();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (
                    entry.isIntersecting &&
                    nav &&
                    !useNavStore.getState().isScrolling
                ) {
                    setActiveHeader(nav);
                }
            },
            { threshold: 0.7 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={cn(
                "lg:h-screen lg:snap-center lg:snap-always",
                className
            )}
        >
            {children}
        </section>
    );
};

export default ScrollSnapSection;
