"use client";

import { Button } from "@/components/ui/button";
import MusicSection from "../MusicSection";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import jsonData from "@/data/music-influences.json";
import InfluenceCard from "./MusicInfluenceCard";

export const MyInfluences = () => {
    const router = useRouter();

    return (
        <MusicSection
            name="influences"
            containerClassName="space-y-10 lg:space-y-24"
        >
            <div className="mt-10 space-y-10 lg:space-y-24">
                {jsonData.primaryInfluences.map((influence) => (
                    <InfluenceCard influence={influence} key={influence.name} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-10 flex items-center justify-center md:mb-0"
            >
                <Button
                    variant={"music"}
                    size={"music"}
                    onClick={() =>
                        router.push("/music/influences", { scroll: false })
                    }
                >
                    Check out More!
                </Button>
            </motion.div>
        </MusicSection>
    );
};

export default MyInfluences;
