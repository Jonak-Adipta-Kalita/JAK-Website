"use client";

import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./about/AboutMe";
import MyGear from "./gear/MyMusicGear";
import MyInfluences from "./influences/MyMusicInfluences";
import { useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";

const Divider = ({
    rotWave,
    needLine,
}: {
    rotWave?: boolean;
    needLine?: boolean;
}) => {
    return (
        <div
            className={`${needLine ? "mt-10 md:mt-20 lg:mt-32" : "my-10 md:my-20 lg:my-32"}`}
        >
            <div
                className={`h-[1px] w-full opacity-75 ${!needLine ? "md:hidden" : ""}`}
                style={{
                    background:
                        "linear-gradient(to right, var(--color-fg-music-neon-red), var(--color-fg-music-neon-blue))",
                    boxShadow: "0 0 20px var(--color-fg-music-glow-red)",
                }}
            />
            <div className={`hidden ${!needLine ? "md:inline" : ""}`}>
                <Waveform className={rotWave ? "rotate-180" : ""} />
            </div>
        </div>
    );
};

const MusicPage = () => {
    const mainRef = useRef<HTMLElement>(null);
    const params = useParams();
    const searchParams = useSearchParams();

    useEffect(() => {
        const scrollToHash = (hash: string) => {
            if (!hash || !mainRef.current) return;
            requestAnimationFrame(() => {
                const target = document.getElementById(hash);
                if (target && mainRef.current) {
                    mainRef.current.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth",
                    });
                }
            });
        };

        scrollToHash(window.location.hash);
    }, [params, searchParams]);

    return (
        <main
            className="scrollbar-music h-screen w-full overflow-y-auto scroll-smooth"
            ref={mainRef}
        >
            <MusicHero />
            <Divider />
            <AboutMe />
            <Divider rotWave />
            <MyGear />
            <Divider />
            <MyInfluences />
            <Divider needLine />
        </main>
    );
};

export default MusicPage;
