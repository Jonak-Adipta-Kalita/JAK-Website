"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";

interface Track {
    name: string;
    artist: { "#text": string; mbid: string };
    album: { "#text": string; mbid: string };
    url: string;
    image: {
        "#text": string;
        size: "small" | "medium" | "large" | "extralarge";
    }[];
    date?: { "#text": string; uts: string };
    "@attr"?: { nowplaying: "true" };
    mbid: string;
    streamable: string;
}

const CurrentListening = () => {
    const [track, setTrack] = useState<Track | null>(null);

    useEffect(() => {
        fetch("/api/lastfm")
            .then((r) => r.json())
            .then((data) => setTrack(data));
    }, []);

    return (
        <motion.div
            className="relative z-[45] mx-auto mt-5 flex w-full max-w-5xl flex-col items-center justify-center rounded-xl border-[0.1px] border-zinc-800 bg-zinc-800/30 bg-clip-padding p-10 backdrop-blur-xl lg:mt-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-y-10 lg:flex-row lg:items-start lg:justify-around">
                <div className="h-full w-fit basis-2/5">
                    <Skeleton className="h-52 w-52 rounded-xl" />
                </div>
                <div className="mt-2 flex h-full w-full basis-3/5 flex-col items-start space-y-5 lg:space-y-10">
                    <Skeleton className="h-4 w-full lg:h-5" />
                    <div className="flex h-full w-full items-center justify-center lg:justify-start">
                        <div className="h-full w-[75%] space-y-5 lg:w-[50%] lg:space-y-10">
                            <Skeleton className="h-4 w-full lg:h-5" />
                            <Skeleton className="h-4 w-full lg:h-5" />
                        </div>
                        {track?.["@attr"]?.nowplaying && (
                            <p className="text-fg-music-muted font-ubuntu hidden h-full flex-grow animate-pulse bg-transparent text-center text-xl font-bold tracking-wider opacity-50 lg:inline">
                                Now Playing
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <Link
                href="https://www.last.fm/user/xxJonakAdiptaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-music-muted mt-10 flex opacity-75"
            >
                <span className="mr-2 text-base font-semibold tracking-wider lg:text-xl">
                    Checkout my{" "}
                    <span className="text-fg-music-neon-blue">Last.fm</span>
                </span>
                <ExternalLinkIcon />
            </Link>
        </motion.div>
    );
};

export default CurrentListening;
