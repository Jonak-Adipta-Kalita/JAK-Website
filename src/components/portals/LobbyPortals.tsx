"use client";

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
                <p className="text-fg-extralight/30 font-ubuntu absolute bottom-[-20] w-full text-center text-sm font-semibold md:hidden">
                    &#40;Desktop would&apos;ve been Better&#41;
                </p>
                <ProgrammingPortal dragging={false} mobile />
                <MusicPortal dragging={false} mobile />
                <PolyglotPortal dragging={false} mobile />
                <ProductivityPortal dragging={false} mobile />
            </div>
        </div>
    );
};

export default LobbyPortals;
