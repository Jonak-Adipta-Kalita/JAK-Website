"use client";

import { NavItem, useProgrammingNavStore as useNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const ScrollSnapSection = ({
    children,
    nav,
    id,
    className,
}: {
    children: React.ReactNode;
    nav?: NavItem;
    id: string;
    className?: string;
}) => {
    const { setActiveHeader } = useNavStore();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && nav) {
                    setActiveHeader(nav);
                }
            },
            { threshold: 0.7 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
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
