"use client";

import FloatingDivBase from "@/components/FloatingDiv";
import LinkLine from "@/components/LinkLine";
import { Button } from "@/components/ui/button";
import skillsData, {
    FrameworkSkill,
    LanguageSkill,
    ToolSkill,
} from "@/data/programming-skills/data";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export type RegisterRef = (id: string) => (node: HTMLDivElement | null) => void;
export type GetRef = (id: string) => HTMLDivElement | undefined;

const SkillButton = ({
    dragging,
    skill,
}: {
    dragging: boolean;
    skill: ToolSkill;
}) => {
    return <>{skill.name}</>;
};

const FloatingDiv = ({
    anchorRefs,
    skill,
    registerRef,
}: {
    anchorRefs: React.RefObject<HTMLButtonElement | null>[];
    skill: ToolSkill;
    registerRef: RegisterRef;
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <FloatingDivBase
            className="cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
        >
            <div ref={registerRef(skill.id)}>
                <SkillButton dragging={dragging} skill={skill} />
            </div>
        </FloatingDivBase>
    );
};

type AnySkill = LanguageSkill | FrameworkSkill | ToolSkill;

type SkillGroupData<T extends AnySkill> = {
    id: string;
    message?: string;
    items: T[];
};

type SkillEntry<T extends AnySkill> = T | SkillGroupData<T>;

const isGroup = <T extends AnySkill>(
    skill: SkillEntry<T>
): skill is SkillGroupData<T> => "items" in skill;

const SkillGroup = <T extends AnySkill>({
    registerRef,
    skill,
    anchorRefs,
}: {
    registerRef: RegisterRef;
    skill: SkillGroupData<T>;
    anchorRefs: React.RefObject<HTMLButtonElement | null>[];
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <FloatingDivBase
            className="cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
        >
            <div ref={registerRef(skill.id)}>
                {skill.items.map((item) => (
                    <div
                        key={
                            typeof item.pic === "string"
                                ? item.pic
                                : item.pic[0]
                        }
                        ref={registerRef(item.id)}
                    >
                        <SkillButton dragging={dragging} skill={item} />
                    </div>
                ))}
            </div>
        </FloatingDivBase>
    );
};

const SkillCategoryColumn = <T extends AnySkill>({
    registerRef,
    getRef,
    label,
    data,
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
    label: "Languages" | "Frameworks" | "Tools";
    data: SkillEntry<T>[];
}) => {
    const ref = useRef<HTMLButtonElement | null>(null);

    return (
        <div>
            <Button
                ref={ref}
                variant={"programming"}
                size={"programming"}
                className="cursor-default"
            >
                {label}
            </Button>
            <div className="absolute">
                {data.map((skill) =>
                    isGroup(skill) ? (
                        <div key={skill.id}>
                            <SkillGroup
                                registerRef={registerRef}
                                skill={skill}
                                anchorRefs={[ref]}
                            />
                            {/* @ts-ignore */}
                            <Links
                                skill={skill.items[0]}
                                linkLanguages={label === "Frameworks"}
                                groupID={skill.id}
                                getRef={getRef}
                            />
                        </div>
                    ) : (
                        <div key={skill.id}>
                            <FloatingDiv
                                anchorRefs={[ref]}
                                registerRef={registerRef}
                                skill={skill}
                            />
                            {/* @ts-ignore */}
                            <Links
                                skill={skill}
                                linkLanguages={label === "Frameworks"}
                                getRef={getRef}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

const Links = ({
    skill,
    linkLanguages,
    getRef,
    groupID,
}: (
    | {
          skill: LanguageSkill | FrameworkSkill | ToolSkill;
          linkLanguages: false;
          groupID: null;
      }
    | { skill: FrameworkSkill; linkLanguages: true; groupID: string }
) & { getRef: GetRef }) => {
    return (
        <>
            {linkLanguages &&
                skill.languages?.map((lang, i) => {
                    const ref1 = getRef(lang);
                    const ref2 = getRef(groupID || skill.id);

                    return <LinkLine fromRef={ref2!} toRef={ref1!} key={i} />;
                })}
        </>
    );
};

const LanguageSkills = ({
    registerRef,
    getRef,
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
}) => (
    <SkillCategoryColumn<LanguageSkill>
        registerRef={registerRef}
        label="Languages"
        data={skillsData.languages}
        getRef={getRef}
    />
);

const FrameworkSkills = ({
    registerRef,
    getRef,
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
}) => (
    <SkillCategoryColumn<FrameworkSkill>
        registerRef={registerRef}
        label="Frameworks"
        data={skillsData.frameworks}
        getRef={getRef}
    />
);

const ToolSkills = ({
    registerRef,
    getRef,
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
}) => (
    <SkillCategoryColumn<ToolSkill>
        registerRef={registerRef}
        label="Tools"
        data={skillsData.tools}
        getRef={getRef}
    />
);

const SkillsGraphView = () => {
    const refIDs = useRef(new Map());

    const registerRef: RegisterRef = useCallback(
        (id) => (node) => {
            const map = refIDs.current;
            if (node) {
                map.set(id, node);
                return () => {
                    map.delete(id);
                };
            }
        },
        []
    );

    const getRef: GetRef = useCallback((id) => refIDs.current.get(id), []);

    const [, forceRender] = useState(0);
    useLayoutEffect(() => {
        forceRender((n) => n + 1);
    }, []);

    return (
        <div className="relative hidden h-full w-full overflow-hidden lg:inline">
            <div className="flex h-full items-center justify-around">
                <LanguageSkills registerRef={registerRef} getRef={getRef} />
                <FrameworkSkills registerRef={registerRef} getRef={getRef} />
                <ToolSkills registerRef={registerRef} getRef={getRef} />
            </div>
        </div>
    );
};

export default SkillsGraphView;
