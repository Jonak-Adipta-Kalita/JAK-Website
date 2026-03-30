"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection";
import buildGraphData from "@/lib/programming-skills/parser";
import ForceGraph from "react-force-graph-2d";

// TODO: Mention that all of them are related to Tech/Programming, the Fields are just to specify any particular use case

const graphData = buildGraphData();

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            {/* TODO: Style Better ; A fixed Container */}
            <div className="bg-slate-200">
                <ForceGraph
                    graphData={graphData}
                    nodeColor={(node) =>
                        ({
                            language: "#7F77DD",
                            framework: "#1D9E75",
                            tool: "#D85A30",
                            field: "#888780",
                            group: "#fff",
                        })[node.type] ?? "#888"
                    }
                    nodeLabel={(node) => node.name}
                />
            </div>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
