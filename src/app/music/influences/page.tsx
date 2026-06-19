"use client";

import { useRef, Suspense } from "react";
import ScrollToHash from "../ScrollToHash";
import Divider from "../Divider";
import PrimaryInfluences from "./PrimaryMusicInfluences";
import MusicSection from "../MusicSection";

export interface Influence {
    name: string;
    url: string;
    fav_songs: string[];
    extra: string[];
    image: string;
}

export interface Data {
    primaryInfluences: Influence[];
    worthyMentions: Influence[];
    heardABit: Influence[];
    youtubeInfluences: {
        name: string;
        url: string;
        extra: string[];
        image: string;
    }[];
}

const MusicInfluencesPage = () => {
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
            <MusicSection name="primary">
                <PrimaryInfluences />
            </MusicSection>
            <Divider />
            <MusicSection name="worthy mentions">
                <></>
            </MusicSection>
            <Divider rotWave />
            <MusicSection name="heard a bit">
                <></>
            </MusicSection>
            <Divider />
            <MusicSection name="youtubers">
                <></>
            </MusicSection>
        </main>
    );
};

export default MusicInfluencesPage;
