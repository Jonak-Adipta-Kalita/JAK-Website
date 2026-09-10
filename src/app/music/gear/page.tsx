"use client"

import { Suspense, useRef } from "react";
import MusicSection from "../MusicSection";
import ScrollToHash from "../ScrollToHash";
import Divider from "../Divider";
import { motion } from "motion/react";

const MusicGearPage = () => {
    const mainRef = useRef<HTMLElement>(null);

    return (
        <main className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth" ref={mainRef}>
            <Suspense fallback={null}>
                <ScrollToHash mainRef={mainRef} />
            </Suspense>
            <div className="mt-24 md:mt-28" />
            <motion.p initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-metal-mania max-w-9xl mx-auto px-5 md:px-10 lg:px-14 text-lg md:text-xl lg:text-3xl mb-10">So... I am a bit of an Ibanez fanboi :D</motion.p>
            <MusicSection name="guitars">
                <></>
            </MusicSection>
            <Divider />
            <MusicSection name="amplifiers">
                <></>
            </MusicSection>
            <Divider />
            <MusicSection name="extras">
                <></>
            </MusicSection>
        </main>
    );
};

export default MusicGearPage;
