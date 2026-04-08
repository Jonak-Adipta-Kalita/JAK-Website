"use client";

import { useEffect, useRef } from "react";
import { HASH_ITEMS, useNavStore } from "@/lib/hooks/useNavStore";

import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import Testimonials from "./Testimonials";

export default function ProgrammingPage() {
    const activeHeader = useNavStore((s) => s.activeHeader);
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!activeHeader) return;

        const container = mainRef.current;
        if (!container) return;

        if (HASH_ITEMS.has(activeHeader)) {
            const target = document.getElementById(activeHeader.toLowerCase());
            if (!target) return;

            container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }
    }, [activeHeader]);

    return (
        <main
            ref={mainRef}
            className="scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent scrollbar-hover:scrollbar-thumb-slate-600 w-full overflow-y-auto scroll-smooth lg:snap-y lg:snap-mandatory"
        >
            <AboutMe />

            <ProgrammingSkills />

            <Testimonials />

            <ContactMe />
        </main>
    );
}
