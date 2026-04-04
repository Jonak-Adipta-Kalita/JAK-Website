"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection";
import buildGraphData from "@/lib/programming-skills/parser";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ForceGraphMethods } from "react-force-graph-2d";

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

const parentPositions: Record<string, { x: number; y: number }> = {
    languages: { x: -200, y: 0 },
    frameworks: { x: 0, y: 0 },
    tools: { x: 200, y: 0 },
};


const ProgrammingSkills = () => {
    const fgRef = useRef<any>(null);

    useEffect(() => {
        const fg = fgRef.current;
        if (!fg) return;

        // Pull each child node toward its parent hub
        fg.d3Force("x")?.x((node: any) => {
            const pos = parentPositions[node.parentId];
            return pos ? pos.x : 0;
        }).strength(0.3);

        fg.d3Force("y")?.y((node: any) => {
            const pos = parentPositions[node.parentId];
            return pos ? pos.y : 0;
        }).strength(0.3);

        fg.d3Force("charge")?.strength(-80);
        fg.d3Force("link")?.distance(60);

        fg.d3ReheatSimulation();
    }, []);

    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <ForceGraph
                ref={(el: any) => { fgRef.current = el; }}
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
                linkColor={() => "rgba(255,255,255,0.15)"}
                linkWidth={1.5}
            />
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
