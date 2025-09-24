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
            <div className="flex w-full flex-col items-center justify-center space-y-10 md:hidden">
                {/* TODO: Have a better Design */}
                <ProgrammingPortal dragging={false} />
                <MusicPortal dragging={false} />
                <PolyglotPortal dragging={false} />
                <ProductivityPortal dragging={false} />
            </div>
        </div>
    );
};

export default LobbyPortals;
