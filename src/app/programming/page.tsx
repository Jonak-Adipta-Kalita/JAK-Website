"use client";

import { useEffect, useRef } from "react";
import { useProgrammingNavStore as useNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";

import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import Testimonials from "./Testimonials";

export default function ProgrammingPage() {
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
            className="scrollbar-programming w-full overflow-y-auto scroll-smooth lg:snap-y lg:snap-mandatory"
        >
            <AboutMe />

            <ProgrammingSkills />

            <Testimonials />

            <ContactMe />
        </main>
    );
}
