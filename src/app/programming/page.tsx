"use client";

import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import ProgrammingSkills from "./skills/ProgrammingSkills";
import Testimonials from "./Testimonials";
import MobileSeparator from "./MobileSeparator";
import ScrollSnapPage from "@/components/ScrollSnapSection/Page";
import { useProgrammingNavStore } from "@/lib/hooks/navStore/useProgrammingNavStore";

export default function ProgrammingPage() {
    return (
        <ScrollSnapPage
            scrollbarClassName="scrollbar-programming"
            useNavStore={useProgrammingNavStore}
        >
            <AboutMe />

            <MobileSeparator />

            <ProgrammingSkills />

            <MobileSeparator />

            <Testimonials />

            <MobileSeparator />

            <ContactMe />
        </ScrollSnapPage>
    );
}
