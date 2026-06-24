"use client";

import ScrollSnapSection from "../ProgrammingSection";
import SkillsGraphView from "./GraphView";
import SkillsGridView from "./GridView";
import { motion } from "motion/react";

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <div className="lg:hidden">
                <motion.p
                    className="text-fg-programming-secondary font-salsa mb-7 text-center text-3xl"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    My Skillset :D
                </motion.p>
                <SkillsGridView />
            </div>
            <SkillsGraphView />
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
