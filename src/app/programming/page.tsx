"use client";

import { useEffect, useRef } from "react";
import { useProgrammingNavStore as useNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";
import { HASH_ITEMS } from "./DynamicIsland";

import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import Testimonials from "./Testimonials";

export default function ProgrammingPage() {
    const mainRef = useRef<HTMLElement>(null);

    const scrollTarget = useNavStore((s) => s.scrollTarget);
    const setScrollTarget = useNavStore((s) => s.setScrollTarget);

    useEffect(() => {
        if (!scrollTarget) return;
        const target = document.getElementById(scrollTarget.toLowerCase());
        if (!target || !mainRef.current) return;

        mainRef.current.scrollTo({ top: target.offsetTop, behavior: "smooth" });

        setScrollTarget(null);
    }, [scrollTarget]);

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
