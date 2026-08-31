"use client";

import FloatingDivBase from "@/components/FloatingDiv";
import { Button } from "@/components/ui/button";
import skillsData, {
    FrameworkSkill,
    LanguageSkill,
    ToolSkill,
} from "@/data/programming-skills/data";
import { useCallback, useRef, useState } from "react";

export type RegisterRef = (id: string) => (node: HTMLDivElement | null) => void;

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
    anchorRef,
    skill,
    ref,
}: {
    anchorRef: React.RefObject<HTMLButtonElement | null>;
    skill: ToolSkill;
    ref: React.Ref<HTMLDivElement>;
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <div ref={ref}>
            <FloatingDivBase
                className="cursor-default"
                setDrag={setDrag}
                anchorRef={anchorRef}
            >
                <SkillButton dragging={dragging} skill={skill} />
            </FloatingDivBase>
        </div>
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
    anchorRef,
}: {
    registerRef: RegisterRef;
    skill: SkillGroupData<T>;
    anchorRef: React.RefObject<HTMLButtonElement | null>;
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <div ref={registerRef(skill.id)} key={skill.id}>
            <FloatingDivBase
                className="cursor-default"
                setDrag={setDrag}
                anchorRef={anchorRef}
            >
                {skill.items.map((item) => (
                    <div ref={registerRef(item.name as string)} key={item.id}>
                        <SkillButton dragging={dragging} skill={item} />
                    </div>
                ))}
            </FloatingDivBase>
        </div>
    );
};

const SkillCategoryColumn = <T extends AnySkill>({
    registerRef,
    label,
    data,
}: {
    registerRef: RegisterRef;
    label: string;
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
                        <SkillGroup
                            registerRef={registerRef}
                            skill={skill}
                            anchorRef={ref}
                            key={skill.id}
                        />
                    ) : (
                        <FloatingDiv
                            key={skill.id}
                            anchorRef={ref}
                            ref={registerRef(skill.name as string)}
                            skill={skill}
                        />
                    )
                )}
            </div>
        </div>
    );
};

// Usage
const LanguageSkills = ({ registerRef }: { registerRef: RegisterRef }) => (
    <SkillCategoryColumn<LanguageSkill>
        registerRef={registerRef}
        label="Languages"
        data={skillsData.languages}
    />
);

const FrameworkSkills = ({ registerRef }: { registerRef: RegisterRef }) => (
    <SkillCategoryColumn<FrameworkSkill>
        registerRef={registerRef}
        label="Frameworks"
        data={skillsData.frameworks}
    />
);

const ToolSkills = ({ registerRef }: { registerRef: RegisterRef }) => (
    <SkillCategoryColumn<ToolSkill>
        registerRef={registerRef}
        label="Tools"
        data={skillsData.tools}
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

    return (
        <div className="relative hidden h-full w-full overflow-hidden lg:inline">
            <div className="flex h-full items-center justify-around">
                <LanguageSkills registerRef={registerRef} />
                <FrameworkSkills registerRef={registerRef} />
                <ToolSkills registerRef={registerRef} />
            </div>
        </div>
    );
};

export default SkillsGraphView;
