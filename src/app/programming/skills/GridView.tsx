"use client";

import skillsData, { LanguageSkill, ToolSkill } from "@/data/programming-skills/data";
import Image from "next/image";
import { motion } from "motion/react";
import { mobileToolData } from "@/data/programming-skills/parser";

// TODO: Add Skeleton for Loading Pics

const SkillSet = ({ skills }: { skills: LanguageSkill[] | ToolSkill[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4 px-5 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((lang) => (
                <div
                    key={lang.id}
                    className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-slate-800/40 p-4 transition-colors hover:bg-slate-800/60"
                >
                    <div className="flex h-12 items-center justify-center gap-1">
                        {typeof lang.pic === "string" ? (
                            <Image
                                src={lang.pic}
                                alt={lang.name}
                                height={40}
                                width={40}
                            />
                        ) : (
                            lang.pic.map((pic, i) => (
                                <Image
                                    key={i}
                                    src={pic}
                                    alt={lang.name}
                                    height={32}
                                    width={32}
                                />
                            ))
                        )}
                    </div>

                    <p className="font-ubuntu font-bold text-sm leading-none text-fg-programming-text">
                        {lang.name}
                    </p>

                    {lang.message && (
                        <p className="text-center text-xs leading-tight font-semibold text-slate-400 tracking-tighter">
                            {lang.message}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

const GridView = () => {
    return (
        <div className="space-y-10">
            <SkillSet skills={skillsData.languages} />
            <SkillSet skills={mobileToolData} />
        </div>
    )
}

export default GridView;
