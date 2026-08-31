"use client";

import skillsData, {
    LanguageSkill,
    ToolSkill,
} from "@/data/programming-skills/data";
import Image from "next/image";
import { motion } from "motion/react";
import skills from "@/data/programming-skills/data";

// TODO: Add Skeleton for Loading Pics

const SkillSet = ({ skills }: { skills: LanguageSkill[] | ToolSkill[] }) => {
    return (
        <div className="grid grid-cols-3 gap-4 px-5 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((lang, i) => (
                <motion.div
                    key={lang.id}
                    className={`bg-bg-programming-3/40 flex flex-col items-center justify-center gap-2 rounded-xl p-4 transition-colors hover:bg-slate-800/60 ${typeof lang.pic !== "string" ? "col-span-2 aspect-[2/1]" : "col-span-1 aspect-square"}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 + i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="flex h-12 items-center justify-around w-full">
                        {typeof lang.pic === "string" ? (
                            <Image
                                src={lang.pic}
                                alt={lang.name[0]}
                                height={40}
                                width={40}
                            />
                        ) : (
                            lang.pic.map((pic, i) => (
                                <Image
                                    key={i}
                                    src={pic}
                                    alt={lang.name[i]}
                                    height={32}
                                    width={32}
                                />
                            ))
                        )}
                    </div>

                    <p className="font-ubuntu text-center text-fg-programming-text text-sm leading-none font-bold flex items-center justify-evenly w-full">
                        {typeof lang.name === "string" ? lang.name : (
                            lang.name.map((name, i) => (
                                <span key={i} className="text-center mx-2">{name}</span>
                            ))
                        )}
                    </p>

                    {lang.message && (
                        <p className="text-center text-xs leading-tight font-semibold tracking-tighter text-slate-400">
                            {lang.message}
                        </p>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

const mobileToolData = skills.tools.map((tool) => {
    if (!("tools" in tool)) return tool;

    return {
        id: tool.id,
        name: tool.tools.map((subTool) => subTool.name),
        pic: [...tool.tools.map((subTool) => subTool.pic)],
        fields: [],
        message: tool.groupName,
    };
}) as ToolSkill[];
const mobileLanguageData = skills.languages.map((lang) => {
    if (!("languages" in lang)) return lang;

    return {
        id: lang.id,
        name: lang.languages.map((subLang) => subLang.name),
        pic: [...lang.languages.map((subLang) => subLang.pic)],
        fields: [],
        message: lang.message,
    };
}) as ToolSkill[];

const GridView = () => {
    return (
        <div className="space-y-10">
            <SkillSet skills={mobileLanguageData} />
            <SkillSet skills={mobileToolData} />
        </div>
    );
};

export default GridView;
