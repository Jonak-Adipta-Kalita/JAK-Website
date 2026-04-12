"use client";

import { NavItem, useProgrammingNavStore as useNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";
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

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting && !isScrolling) {
    //                 if (nav) setActiveHeader(nav);
    //                 // router.replace(`/programming#${id}`)
    //             }
    //         },
    //         { threshold: 0.5 }
    //     );
    //
    //     if (sectionRef.current) observer.observe(sectionRef.current);
    //
    //     return () => observer.disconnect();
    // }, [isScrolling]);

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
