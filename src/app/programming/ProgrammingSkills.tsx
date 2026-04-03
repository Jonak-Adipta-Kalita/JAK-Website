"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection";
import buildGraphData from "@/lib/programming-skills/parser";
import dynamic from "next/dynamic";

const ForceGraph = dynamic(() => import("react-force-graph-2d"), {
    ssr: false,
});
const graphData = buildGraphData();

// TODO: Mention that all of them are related to Tech/Programming, the Fields are just to specify any particular use case

const nodeColors = ({
    language: "#7F77DD",
    framework: "#1D9E75",
    tool: "#D85A30",
    field: "#888780",
    group: "#fff",
}) as { [key: string]: string }


const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <div className="overflow-x-hidden">
                <ForceGraph
                    graphData={graphData}
                    nodeColor={(node) => nodeColors[node.type] ?? "#888"}
                    nodeVal={(node) => {
                        const linkCount = graphData.links.filter(
                            (link) => link.source === node.id || link.target === node.id
                        ).length;

                        return linkCount;
                    }}
                    nodeLabel={(node) => node.name}
                    enableZoomInteraction={false}
                    enablePanInteraction={false}
                />
            </div>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
