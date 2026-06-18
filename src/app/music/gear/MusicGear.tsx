"use client";

import { useRouter } from "next/navigation";
import MusicSection from "../MusicSection";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const MyGear = () => {
    const router = useRouter();

    return (
        <MusicSection
            name="gear"
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
                    onClick={() => router.push("/music/gear")}
                >
                    Check out More!
                </Button>
            </motion.div>
        </MusicSection>
    );
};

export default MyGear;
