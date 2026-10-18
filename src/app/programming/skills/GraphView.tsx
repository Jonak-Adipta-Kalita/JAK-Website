"use client";

import FloatingDivBase from "@/components/FloatingDiv";
import LinkLine from "@/components/LinkLine";
import { Button } from "@/components/ui/button";
import skillsData, {
    FrameworkSkill,
    LanguageSkill,
    ToolSkill,
} from "@/data/programming-skills/data";
import useInView from "@/lib/hooks/useInView";
import Image from "next/image";
import { useCallback, useLayoutEffect, useRef, useState } from "react";

export type RegisterRef = (id: string) => (node: HTMLDivElement | null) => void;
export type GetRef = (id: string) => HTMLDivElement | undefined;

const SkillButton = ({
    dragging,
    skill,
    registerRef,
    item,
}: {
    dragging: boolean;
    skill: ToolSkill;
    registerRef: RegisterRef;
    item?: boolean;
}) => {
    return (
        <div
            draggable={false}
            ref={registerRef(skill.id)}
            className={`${item ? "graph-skills" : ""}`}
        >
            <Image
                src={skill.pic as string}
                alt={skill.name as string}
                draggable={false}
                height={40}
                width={40}
                className="max-w-none shrink-0 size-[calc(40px*var(--graph-scale,1))]"
            />
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
    anchorRefs,
    itemStyle,
}: {
    registerRef: RegisterRef;
    skill: SkillGroupData<T>;
    anchorRefs: React.RefObject<HTMLButtonElement | null>[];
    itemStyle: React.CSSProperties;
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <FloatingDivBase
            className="absolute z-50 cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
            style={itemStyle}
        >
            <div
                ref={registerRef(skill.id)}
                className="graph-skills flex items-center justify-center gap-[calc(20px*var(--graph-scale,1))]"
            >
                {skill.items.map((item) => (
                    <SkillButton
                        dragging={dragging}
                        skill={item}
                        registerRef={registerRef}
                        key={item.pic as string}
                    />
                ))}
            </div>
        </FloatingDivBase>
    );
};

const SkillItem = ({
    anchorRefs,
    skill,
    registerRef,
    itemStyle,
}: {
    anchorRefs: React.RefObject<HTMLButtonElement | null>[];
    skill: ToolSkill;
    registerRef: RegisterRef;
    itemStyle: React.CSSProperties;
}) => {
    const [dragging, setDrag] = useState(false);

    return (
        <FloatingDivBase
            className="absolute z-50 cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
            style={itemStyle}
        >
            <SkillButton
                dragging={dragging}
                skill={skill}
                registerRef={registerRef}
                item
            />
        </FloatingDivBase>
    );
};

const SkillCategoryColumn = <T extends AnySkill>({
    registerRef,
    getRef,
    label,
    data,
    radiusX,
    radiusY,
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
    label: "Languages" | "Frameworks" | "Tools";
    data: SkillEntry<T>[];
    radiusX: number;
    radiusY: number;
}) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const n = data.length;

    const groupedData = data.filter(isGroup);
    const nonGroupedData = data.filter((x) => !isGroup(x));

    const sortedData = [...groupedData, ...nonGroupedData];

    return (
        <div className="relative">
            <Button
                ref={ref}
                variant={"programming"}
                size={"programming"}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-default"
                style={{
                    padding: "calc(32px * var(--graph-scale, 1))",
                    fontSize: "calc(24px * var(--graph-scale, 1))",
                }}
            >
                {label}
            </Button>
            {sortedData.map((skill, i) => {
                const angleDeg = 180 + (360 / n) * i;
                const angleRad = (angleDeg * Math.PI) / 180;
                const x = radiusX * Math.cos(angleRad);
                const y = radiusY * Math.sin(angleRad);

                const itemStyle: React.CSSProperties = {
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                };

                return isGroup(skill) ? (
                    <div key={skill.id}>
                        <SkillGroup
                            registerRef={registerRef}
                            skill={skill}
                            anchorRefs={[ref]}
                            itemStyle={itemStyle}
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
                        <SkillItem
                            anchorRefs={[ref]}
                            registerRef={registerRef}
                            skill={skill}
                            itemStyle={itemStyle}
                        />
                        {/* @ts-ignore */}
                        <Links
                            skill={skill}
                            linkLanguages={label === "Frameworks"}
                            getRef={getRef}
                        />
                    </div>
                );
            })}
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

                    return (
                        <LinkLine fromRef={ref2!} toRef={ref1!} key={i} zPop />
                    );
                })}
        </>
    );
};

const LanguageSkills = ({
    registerRef,
    getRef,
    radiusX, radiusY
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
    radiusX: number;
    radiusY: number;
}) => (
    <SkillCategoryColumn<LanguageSkill>
        registerRef={registerRef}
        label="Languages"
        data={skillsData.languages}
        getRef={getRef} radiusX={radiusX} radiusY={radiusY}
    />
);

const FrameworkSkills = ({
    registerRef,
    getRef,
    radiusX, radiusY
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
    radiusX: number;
    radiusY: number;

}) => (
    <SkillCategoryColumn<FrameworkSkill>
        registerRef={registerRef}
        label="Frameworks"
        data={skillsData.frameworks}
        getRef={getRef} radiusX={radiusX} radiusY={radiusY}
    />
);

const ToolSkills = ({
    registerRef,
    getRef,
    radiusX, radiusY
}: {
    registerRef: RegisterRef;
    getRef: GetRef;
    radiusX: number;
    radiusY: number;
}) => (
    <SkillCategoryColumn<ToolSkill>
        registerRef={registerRef}
        label="Tools"
        data={skillsData.tools}
        getRef={getRef} radiusX={radiusX} radiusY={radiusY}
    />
);

const REF = { w: 1536, h: 900 };

const SkillsGraph = ({
    radiusX,
    radiusY,
}: {
    radiusX: number;
    radiusY: number;
}) => {
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
        <div className="flex h-full items-center justify-around">
            <LanguageSkills registerRef={registerRef} getRef={getRef} radiusX={radiusX} radiusY={radiusY} />
            <FrameworkSkills registerRef={registerRef} getRef={getRef} radiusX={radiusX} radiusY={radiusY} />
            <ToolSkills registerRef={registerRef} getRef={getRef} radiusX={radiusX} radiusY={radiusY} />
        </div>

    )
}

const SkillsGraphView = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const inView = useInView(containerRef, 0.1)
    const [size, setSize] = useState({ w: 0, h: 0 });

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ h: height, w: width })
        });

        ro.observe(el);
        return () => ro.disconnect()
    })

    const scale = size.w
        ? Math.min(1, size.w / REF.w, size.h / REF.h)
        : 1;

    return (
        <div className="relative hidden h-full w-full overflow-hidden lg:block" ref={containerRef} style={{ "--graph-scale": scale } as React.CSSProperties}>
            {inView && (
                <SkillsGraph radiusX={180 * scale} radiusY={400 * scale} />
            )}
        </div>
    );
};

export default SkillsGraphView;
