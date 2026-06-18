"use client";

import { Button } from "@/components/ui/button";
import MusicSection from "../MusicSection";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const MyWork = () => {
    const router = useRouter();

    return (
        <MusicSection
            name="work"
            containerClassName="flex items-center justify-center flex-col space-y-5"
        >
            <></>

            <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Button
                    variant={"music"}
                    size={"music"}
                    onClick={() => router.push("/music/work")}
                >
                    Check out More!
                </Button>
            </motion.div>
        </MusicSection>
    );
};

export default MyWork;
