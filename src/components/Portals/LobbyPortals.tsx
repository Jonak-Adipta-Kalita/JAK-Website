"use client";

import { SettingsIcon } from "lucide-react";
import GraphView from "./GraphView";
import {
    MusicPortal,
    PolyglotPortal,
    ProductivityPortal,
    ProgrammingPortal,
} from "./Portal";

const LobbyPortals = () => {
    return (
        <div className="mx-auto mb-5 flex w-full max-w-4xl grow">
            <div className="relative hidden max-h-[90vh] w-full grow flex-col items-center justify-center md:flex">
                <GraphView />
            </div>
            <div className="relative flex w-full flex-col items-center justify-center space-y-10 md:hidden">
                <div className="absolute bottom-[-20] w-full flex items-center justify-center space-x-5">
                    <p className="text-fg-lobby-extralight/75 font-ubuntu text-center text-sm font-semibold">
                        &#40;Desktop would&apos;ve been Better&#41;
                    </p>
                    <SettingsIcon
                        className="text-fg-lobby-extralight text-base"
                        onClick={() => {
                            /* TODO: Open Settings Model */
                        }}
                    />
                </div>
                <ProgrammingPortal dragging={false} mobile />
                <MusicPortal dragging={false} mobile />
                <PolyglotPortal dragging={false} mobile />
                <ProductivityPortal dragging={false} mobile />
            </div>
        </div>
    );
};

export default LobbyPortals;
