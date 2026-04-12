"use client";

import { useEffect, useRef } from "react";
import { useProgrammingNavStore as useNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";

import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import Testimonials from "./Testimonials";
import { HASH_ITEMS } from "./DynamicIsland";

export default function ProgrammingPage() {
    const activeHeader = useNavStore((s) => s.activeHeader);
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!activeHeader) return;

        const container = mainRef.current;
        if (!container) return;

        if (HASH_ITEMS.includes(activeHeader)) {
            const target = document.getElementById(activeHeader.toLowerCase());
            if (!target) return;

            container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
        }
    }, [activeHeader]);

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
