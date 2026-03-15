"use client";

import { NavItem, useNavStore } from "@/lib/hooks/useNavStore";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
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
    const { setActiveHeader, isScrolling } = useNavStore();
    const sectionRef = useRef(null);
    const router = useRouter();

    // TODO: Change Active Header & Link as per focus on section
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting && !isScrolling) {
    //                 // if (nav) setActiveHeader(nav);
    //                 // router.replace(`/programming#${id}`)
    //             }
    //         },
    //         { threshold: 0.5 }
    //     );
    //
    //     if (sectionRef.current) observer.observe(sectionRef.current);
    //
    //     return () => observer.disconnect();
    // }, []);

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
