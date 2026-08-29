"use client";

import { useRef } from "react";


const SkillsGraphView = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={containerRef}
            className="hidden h-full w-full overflow-hidden lg:inline"
        >
        </div>
    );
};

export default SkillsGraphView;
