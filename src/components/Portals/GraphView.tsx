"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import FloatingDiv from "../FloatingDiv";
import {
    MusicPortal,
    PolyglotPortal,
    ProductivityPortal,
    ProgrammingPortal,
} from "./Portal";
import { SettingsIcon, SquareSlashIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const LobbyGraphView = () => {
    const anchorRef = useRef<HTMLButtonElement>(null);

    const [programmingDrag, setProgrammingDrag] = useState<boolean>(false);
    const [musicDrag, setMusicDrag] = useState<boolean>(false);
    const [polyglotDrag, setPolyglotDrag] = useState<boolean>(false);
    const [productivityDrag, setProductivityDrag] = useState<boolean>(false);

    return (
        <>
            <Button
                variant={"lobby"}
                ref={anchorRef}
                size={"lobby"}
                className="cursor-default"
            >
                <span>
                    Explore my{" "}
                    <span className="text-gradient">Interests</span>{" "}
                </span>
                <div className="ml-2 flex items-center justify-center space-x-3 rounded-full border-2 border-gray-500/20 p-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <SquareSlashIcon
                                className="text-fg-lobby-dark hover:text-fg-lobby-extradark/75 hidden cursor-pointer md:inline"
                                onClick={() => {
                                    /* TODO: Open Command Palette */
                                }}
                            />
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p className="hidden items-center justify-center text-sm font-semibold text-blue-200 md:flex">
                                Try Ctrl/Cmd + K
                            </p>
                        </TooltipContent>
                    </Tooltip>
                    <SettingsIcon
                        className="text-fg-lobby-dark hover:text-fg-lobby-extradark/75 hidden cursor-pointer md:inline"
                        onClick={() => {
                            /* TODO: Open Settings Model */
                        }}
                    />
                </div>
            </Button>
            <div>
                <FloatingDiv
                    className="absolute top-10 left-10"
                    anchorRef={anchorRef!}
                    setDrag={setProgrammingDrag}
                >
                    <ProgrammingPortal dragging={programmingDrag} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute top-35 right-10 lg:top-10"
                    anchorRef={anchorRef!}
                    setDrag={setMusicDrag}
                >
                    <MusicPortal dragging={musicDrag} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute bottom-35 left-10 lg:bottom-10"
                    anchorRef={anchorRef!}
                    setDrag={setPolyglotDrag}
                >
                    <PolyglotPortal dragging={polyglotDrag} />
                </FloatingDiv>
                <FloatingDiv
                    className="absolute right-10 bottom-10"
                    anchorRef={anchorRef!}
                    setDrag={setProductivityDrag}
                >
                    <ProductivityPortal dragging={productivityDrag} />
                </FloatingDiv>
            </div>
        </>
    );
};

export default LobbyGraphView;
