"use client";

import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import { Button } from "../components/ui/button";
import {
    BookIcon,
    Code2Icon,
    GuitarIcon,
    LanguagesIcon,
    LucideProps,
    SparklesIcon,
    SquareSlashIcon,
} from "lucide-react";
import FloatingDiv from "../components/FloatingDiv";
import { cn } from "@/lib/utils";

const ringColorPortal: { [key: string]: string } = {
    Programming: "ring-blue-400",
    "Music (Guitar)": "ring-rose-400",
    Polyglotism: "ring-teal-400",
    Productivity: "ring-orange-400",
};

const Portal = ({
    name,
    Icon,
}: {
    name: string;
    Icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
}) => {
    return (
        <Button
            variant={"lobby"}
            size={"lobby"}
            // TODO: Use Clamp for decreasing the size of the Portals
            className={cn(
                "z-40 bg-zinc-800 text-sm shadow-xl shadow-zinc-900 sm:text-xl",
                `ring-2 ${ringColorPortal[name]}`,
                "hover:p-9 hover:text-lg hover:opacity-90 active:p-7 active:text-xs active:opacity-100 hover:sm:p-11 hover:sm:text-2xl active:sm:p-10 active:sm:text-xl"
            )}
        >
            <div className="flex items-center justify-center space-x-3">
                <p className="text-gradient cursor-pointer" draggable={false}>
                    {name}
                </p>
                <Icon className="text-fg-base" />
            </div>
        </Button>
    );
};

const LobbyPortals = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative mx-auto mb-5 flex w-full max-w-4xl grow flex-col items-center justify-center">
            <div className="relative">
                <Button
                    variant={"lobby"}
                    ref={anchorRef}
                    size={"lobby"}
                    className="cursor-default"
                >
                    <span className="mr-2">
                        Explore my{" "}
                        <span className="text-gradient">Interests</span>{" "}
                    </span>{" "}
                    <SquareSlashIcon className="text-fg-dark hidden animate-pulse md:inline" />
                    <SparklesIcon className="text-fg-dark animate-pulse md:hidden" />
                </Button>
                <p className="text-fg-extralight/30 font-ubuntu absolute bottom-[-20] w-full text-center text-sm font-semibold md:hidden">
                    Desktop would&apos;ve been Better
                </p>
            </div>
            <>
                {/* TODO: Position the Floating Divs with Relative instead of Absolute | Plus, make it relative from center, and not from outside ;-; shit looks horrible bro */}
                <FloatingDiv
                    className="absolute top-10 left-10"
                    anchorRef={anchorRef!}
                >
                    <Portal name="Programming" Icon={Code2Icon} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute top-35 right-10 sm:top-10"
                    anchorRef={anchorRef!}
                >
                    <Portal name="Music (Guitar)" Icon={GuitarIcon} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute bottom-35 left-10 sm:bottom-10"
                    anchorRef={anchorRef!}
                >
                    <Portal name="Polyglotism" Icon={LanguagesIcon} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute right-10 bottom-10"
                    anchorRef={anchorRef!}
                >
                    <Portal name="Productivity" Icon={BookIcon} />
                </FloatingDiv>
            </>
        </div>
    );
};

export default LobbyPortals;
