"use client";

import skills, {
    LanguageSkill,
    ToolSkill,
} from "@/data/programming-skills/data";
import Image from "next/image";
import { motion } from "motion/react";

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
                    <div className="flex h-12 w-full items-center justify-around">
                        {typeof lang.pic === "string" ? (
                            <Image
                                src={lang.pic}
                                alt={lang.name![0]}
                                height={40}
                                width={40}
                            />
                        ) : (
                            lang.pic.map((pic, i) => (
                                <Image
                                    key={i}
                                    src={pic}
                                    alt={lang.name![i]}
                                    height={32}
                                    width={32}
                                />
                            ))
                        )}
                    </div>

                    <p className="font-ubuntu text-fg-programming-text flex w-full items-center justify-evenly text-center text-sm leading-none font-bold">
                        {typeof lang.name === "string"
                            ? lang.name
                            : lang.name?.map((name, i) => (
                                  <span key={i} className="mx-2 text-center">
                                      {name}
                                  </span>
                              ))}
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

const getMobileData = (
    skills: (
        | {
              id: string;
              groupName?: string;
              message?: string;
              items: ToolSkill[];
          }
        | ToolSkill
    )[]
): ToolSkill[] =>
    skills.map((skill) => {
        if (!("items" in skill)) return skill;

        return {
            id: skill.id,
            name: skill.items.map((sub) => sub.name) as string[],
            pic: skill.items.map((sub) => sub.pic) as string[],
            fields: [],
            message: skill.message,
        };
    });

const GridView = () => {
    return (
        <div className="space-y-10">
            <SkillSet skills={getMobileData(skills.languages)} />
            <SkillSet skills={getMobileData(skills.tools)} />
        </div>
    );
};

export default GridView;
