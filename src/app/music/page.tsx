"use client";

import Waveform from "./Waveform";
import MusicHero from "./MusicHero";
import AboutMe from "./about/AboutMe";
import MyGear from "./gear/MusicGear";
import MyInfluences from "./influences/MusicInfluences";
import { Suspense, useEffect, useRef } from "react";
import { useParams, useSearchParams } from "next/navigation";
import MyWork from "./work/MusicWork";

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

const ScrollToHash = ({
    mainRef,
}: {
    mainRef: React.RefObject<HTMLElement | null>;
}) => {
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

    return null;
};

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
