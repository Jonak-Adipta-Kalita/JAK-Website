"use client";

import { Suspense, useRef } from "react";
import MusicSection from "../MusicSection";
import ScrollToHash from "../ScrollToHash";
import Divider from "../Divider";

const MusicGearPage = () => {
    const mainRef = useRef<HTMLElement>(null);

    return (
        <main
            className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth"
            ref={mainRef}
        >
            <Suspense fallback={null}>
                <ScrollToHash mainRef={mainRef} />
            </Suspense>
            <div className="mt-24 md:mt-28" />
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
