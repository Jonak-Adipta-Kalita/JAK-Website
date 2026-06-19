"use client";

import MusicHero from "./MusicHero";
import AboutMe from "./about/AboutMe";
import MyGear from "./gear/MusicGear";
import MyInfluences from "./influences/MusicInfluences";
import { Suspense, useRef } from "react";
import MyWork from "./work/MusicWork";
import ScrollToHash from "./ScrollToHash";
import Divider from "./Divider";

const MusicPage = () => {
    const mainRef = useRef<HTMLElement>(null);

    return (
        <main
            className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth"
            ref={mainRef}
        >
            <MusicHero />
            <Suspense fallback={null}>
                <ScrollToHash mainRef={mainRef} />
            </Suspense>
            <Divider />
            <AboutMe />
            <Divider rotWave />
            <MyWork />
            <Divider />
            <MyGear />
            <Divider rotWave />
            <MyInfluences />
            <Divider needLine />
        </main>
    );
};

export default MusicPage;
