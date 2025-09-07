"use client";

import React, { useRef } from "react";
import { Button } from "../components/ui/button";
import { SparklesIcon, SquareSlashIcon } from "lucide-react";
import FloatingDiv from "../components/FloatingDiv";

const LobbyPortals = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);

    return (
        <div className="relative mx-auto mb-5 flex w-full max-w-4xl grow flex-col items-center justify-center">
            <div className="relative">
                <Button
                    variant={"lobby"}
                    ref={anchorRef}
                    size={"lobby"}
                    className="font-salsa text-fg-extralight relative z-50 cursor-default rounded-full bg-zinc-700/50 p-8 text-xl font-semibold shadow-2xl ring shadow-zinc-900 ring-zinc-900 ring-offset-[0.5] sm:p-10 sm:text-2xl"
                >
                    <span className="mr-2">
                        Explore my{" "}
                        <span className="text-gradient">Interests</span>{" "}
                    </span>{" "}
                    <SquareSlashIcon className="text-fg-dark hidden animate-pulse md:inline" />
                    <SparklesIcon className="text-fg-dark animate-pulse md:hidden" />
                </Button>
                <p className="text-fg-extralight/30 font-ubuntu absolute bottom-[-20] w-full text-center text-sm font-semibold md:hidden">
                    Desktop would&quot;ve been Better
                </p>
            </div>
            <>
                <FloatingDiv
                    className="absolute top-10 left-10"
                    anchorRef={anchorRef!}
                >
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-500 p-5 text-xs font-extrabold">
                        <span>Hello World - WIP</span>
                        <span>Dragable</span>
                    </div>
                </FloatingDiv>
                <FloatingDiv
                    className="absolute top-10 right-10"
                    anchorRef={anchorRef!}
                >
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-500 p-5 text-xs font-extrabold">
                        <span>Hello World - WIP</span>
                        <span>Dragable</span>
                    </div>
                </FloatingDiv>
                <FloatingDiv
                    className="absolute bottom-10 left-10"
                    anchorRef={anchorRef!}
                >
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-500 p-5 text-xs font-extrabold">
                        <span>Hello World - WIP</span>
                        <span>Dragable</span>
                    </div>
                </FloatingDiv>
                <FloatingDiv
                    className="absolute right-10 bottom-10"
                    anchorRef={anchorRef!}
                >
                    <div className="flex flex-col items-center justify-center rounded-2xl bg-indigo-500 p-5 text-xs font-extrabold">
                        <span>Hello World - WIP</span>
                        <span>Dragable</span>
                    </div>
                </FloatingDiv>
            </>
        </div>
    );
};

export default LobbyPortals;
