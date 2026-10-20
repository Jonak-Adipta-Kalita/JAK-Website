import { AnySkill, ToolSkill } from "@/data/programming-skills/data";
import { RegisterRef, SkillGroupData } from "./GraphView";
import Image from "next/image";
import { useState } from "react";
import FloatingDiv from "@/components/FloatingDiv";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const SkillButton = ({
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
                className="size-[calc(37px*var(--graph-scale,1))] max-w-none shrink-0"
            />
        </div>
    );
};

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
    console.log(skill.groupName)

    return (
        <FloatingDiv
            className="absolute z-50 cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
            style={itemStyle}
        >
            <Tooltip disableHoverableContent>
                <TooltipTrigger>
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
                </TooltipTrigger>
                {(skill.groupName || skill.message) && (
                    <TooltipContent>
                        <p className="text-xl text-fg-programming-text font-semibold">
                            {skill.groupName || skill.message}
                        </p>
                    </TooltipContent>
                )}
            </Tooltip>
        </FloatingDiv>
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
        <FloatingDiv
            className="absolute z-50 cursor-default"
            setDrag={setDrag}
            anchorRefs={anchorRefs}
            style={itemStyle}
        >
            <Tooltip disableHoverableContent>
                <TooltipTrigger>
                    <SkillButton
                        dragging={dragging}
                        skill={skill}
                        registerRef={registerRef}
                        item
                    />
                </TooltipTrigger>
                {skill.message && (
                    <TooltipContent>
                        <p className="text-xl text-fg-programming-text font-semibold">
                            {skill.message}
                        </p>
                    </TooltipContent>
                )}
            </Tooltip>
        </FloatingDiv>
    );
};


export { SkillItem, SkillGroup }
