"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

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
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    fetch("/api/lastfm")
                        .then((r) => r.json())
                        .then((data) => setTrack(data));
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            className="relative z-[45] mx-auto mt-5 flex w-full max-w-5xl flex-col items-center justify-center rounded-xl border-[0.1px] border-zinc-800 bg-zinc-800/30 bg-clip-padding p-10 backdrop-blur-xl lg:mt-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            ref={ref}
        >
            <Link
                className="relative mx-auto flex h-full w-full max-w-4xl cursor-pointer overflow-hidden rounded-2xl"
                href={track?.url || ""}
                target="_blank"
                rel="noopener noreferrer"
            >
                {track && (
                    <div className="absolute inset-0 scale-110">
                        <Image
                            fill
                            src={track.image[3]["#text"]}
                            alt=""
                            className="object-cover opacity-40 blur-2xl"
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>
                )}

                <div className="relative z-10 flex w-full flex-col items-center gap-8 p-8 backdrop-blur-sm lg:flex-row lg:items-center">
                    <div className="shrink-0">
                        {track ? (
                            <div className="relative h-48 w-48 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={track.image[3]["#text"]}
                                    alt={track.name}
                                />
                            </div>
                        ) : (
                            <Skeleton className="h-48 w-48 rounded-2xl" />
                        )}
                    </div>

                    <div className="flex min-w-0 flex-col gap-3 text-white">
                        {track && (
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className={`absolute inline-flex h-full w-full animate-ping rounded-full ${track?.["@attr"]?.nowplaying ? "bg-fg-music-neon-blue" : "bg-fg-music-neon-red"} opacity-75`}
                                    />
                                    <span
                                        className={`relative inline-flex h-2 w-2 rounded-full ${track?.["@attr"]?.nowplaying ? "bg-fg-music-neon-blue" : "bg-fg-music-neon-red"}`}
                                    />
                                </span>
                                <span
                                    className={`text-xs font-semibold tracking-widest ${track?.["@attr"]?.nowplaying ? "text-fg-music-neon-blue" : "text-fg-music-neon-red"} uppercase`}
                                >
                                    {track?.["@attr"]?.nowplaying
                                        ? "Now Playing"
                                        : "Last Played"}
                                </span>
                            </div>
                        )}

                        {track ? (
                            <p className="cursor-pointer truncate text-2xl font-bold">
                                {track.name}
                            </p>
                        ) : (
                            <Skeleton className="h-7 w-64" />
                        )}

                        {track ? (
                            <p className="cursor-pointer truncate text-base font-medium opacity-70">
                                {track.artist["#text"]}
                            </p>
                        ) : (
                            <Skeleton className="h-5 w-40" />
                        )}

                        {track ? (
                            <p className="cursor-pointer truncate text-sm opacity-40">
                                {track.album["#text"]}
                            </p>
                        ) : (
                            <Skeleton className="h-4 w-48" />
                        )}
                    </div>
                </div>
            </Link>

            <Link
                href="https://www.last.fm/user/xxJonakAdiptaxx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-music-muted mt-10 flex cursor-pointer opacity-75"
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
