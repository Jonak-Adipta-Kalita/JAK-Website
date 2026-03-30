"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection";
import buildGraphData from "@/lib/programming-skills/parser";
import dynamic from "next/dynamic";

const ForceGraph = dynamic(() => import("react-force-graph-2d"), {
    ssr: false,
});

// TODO: Mention that all of them are related to Tech/Programming, the Fields are just to specify any particular use case

const graphData = buildGraphData();

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            {/* TODO: Style Better ; A fixed Container */}
            <div className="">
                <ForceGraph
                    graphData={graphData}
                    nodeColor={(node) =>
                        (
                            ({
                                language: "#7F77DD",
                                framework: "#1D9E75",
                                tool: "#D85A30",
                                field: "#888780",
                                group: "#fff",
                            }) as { [key: string]: string }
                        )[node.type] ?? "#888"
                    }
                    nodeLabel={(node) => node.name}
                />
            </div>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
