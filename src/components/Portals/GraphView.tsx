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
import { SquareSlashIcon } from "lucide-react";

const GraphView = () => {
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
                <span className="mr-2">
                    Explore my{" "}
                    <span className="text-gradient">Interests</span>{" "}
                </span>{" "}
                <SquareSlashIcon className="text-fg-dark hidden animate-pulse md:inline" />
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

export default GraphView;
