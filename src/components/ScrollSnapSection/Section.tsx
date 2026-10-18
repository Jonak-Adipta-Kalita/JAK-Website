"use client";

import { NavStore } from "@/lib/hooks/navStore/navStore";
import useInView from "@/lib/hooks/useInView";
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
    const inView = useInView(sectionRef, 0.7);

    useEffect(() => {
        if (inView && nav && !useNavStore.getState().isScrolling) {
            setActiveHeader(nav);
        }
    }, [inView]);

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
