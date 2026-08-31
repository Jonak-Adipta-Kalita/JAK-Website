"use client";

import buildGraphData from "@/data/programming-skills/graph-parser"

const graphData = buildGraphData();

console.log(graphData);

const SkillsGraphView = () => {
    return (
        <div className="hidden h-full w-full overflow-hidden lg:inline relative">
            <div>

            </div>
        </div>
    );
};

export default SkillsGraphView;
