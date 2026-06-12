"use client";

import Roadmap, { Stop } from "@/components/Roadmap";
import MusicSection from "../MusicSection";
import { motion } from "motion/react";
import CurrentListening from "./CurrentListening";
import roadmapData from "@/data/music-journey.json";

export const AboutMe = () => {
    return (
        <MusicSection name="about">
            <div className="space-y-5 md:space-y-10 lg:space-y-20">
                <Roadmap
                    stops={roadmapData as Stop[]}
                    styles={{
                        track: "var(--color-fg-music-text)",
                        text: "var(--color-fg-music-text)",
                        pointersText: "var(--color-fg-music-muted)",
                        cardBg: "var(--color-bg-music-surface)",
                        0: "var(--color-fg-music-neon-red)",
                        1: "var(--color-fg-music-neon-blue)",
                        font: "font-metal-mania",
                    }}
                />
                <motion.p
                    initial={{ opacity: 0, y: -16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-fg-music-text font-ubuntu text-center text-lg font-semibold md:text-xl lg:text-3xl"
                >
                    I can listen to any genre but{" "}
                    <span className="text-fg-music-neon-blue">Metal</span> has a
                    special place in my heart{" "}
                    <span className="opacity-50">
                        &#40;and I hate Jazz&#41;
                    </span>
                </motion.p>
                <CurrentListening />
            </div>
        </MusicSection>
    );
};

export default AboutMe;
