"use client";

import { useRef, Suspense } from "react";
import ScrollToHash from "../ScrollToHash";
import Divider from "../Divider";
import MusicSection from "../MusicSection";
import jsonData from "@/data/music-influences.json";
import InfluenceCard from "./MusicInfluenceCard";

export interface Influence {
    name: string;
    url: string;
    fav_songs?: string[];
    extra: string[];
    image: string;
}

export interface Data {
    currentObsession: string | Influence;
    primaryInfluences: Influence[];
    worthyMentions: Influence[];
    youtubeInfluences: Influence[];
}

const data = jsonData as Data;

const PrimaryInfluences = () => {
    return (
        <div className="mt-10 space-y-10 lg:space-y-24">
            {data.primaryInfluences.map((influence) => (
                <InfluenceCard influence={influence} key={influence.name} />
            ))}
        </div>
    );
};

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
                <div className="grid grid-cols-1 gap-10 gap-x-14 xl:grid-cols-2">
                    {data.worthyMentions.map((influence) => (
                        <InfluenceCard
                            influence={influence}
                            key={influence.name}
                            card
                        />
                    ))}
                </div>
            </MusicSection>
            <Divider rotWave />
            <MusicSection name="youtubers">
                <div className="mb-10 space-y-10 lg:mb-20 lg:space-y-24">
                    {data.youtubeInfluences.map((influence) => (
                        <InfluenceCard
                            influence={influence}
                            key={influence.name}
                        />
                    ))}
                </div>
            </MusicSection>
        </main>
    );
};

export default MusicInfluencesPage;
export { PrimaryInfluences };
