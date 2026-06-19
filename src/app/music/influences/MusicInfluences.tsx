"use client";

import { Button } from "@/components/ui/button";
import MusicSection from "../MusicSection";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import PrimaryInfluences from "./PrimaryMusicInfluences";

export const MyInfluences = () => {
    const router = useRouter();

    return (
        <MusicSection
            name="influences"
            containerClassName="flex items-center justify-center flex-col space-y-5"
        >
            <PrimaryInfluences />

            <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-10 md:mb-0"
            >
                <Button
                    variant={"music"}
                    size={"music"}
                    onClick={() => router.push("/music/influences")}
                >
                    Check out More!
                </Button>
            </motion.div>
        </MusicSection>
    );
};

export default MyInfluences;
