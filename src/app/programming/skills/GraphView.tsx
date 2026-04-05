"use client"

import { GraphData } from "@/lib/programming-skills/parser";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ForceGraph = dynamic(() => import("react-force-graph-2d"), {
    ssr: false,
});

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

const SkillsGraphView = ({ graphData }: { graphData: GraphData }) => {
    const fgRef = useRef<any>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setDimensions({ w: width, h: height });
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const fg = fgRef.current;
        if (!fg) return;

        fg.centerAt(0, 0, 0);

        fg.d3Force("x")!.x((node: any) => {
            const pos = parentPositions[node.parentId];
            return pos ? pos.x : 0;
        }).strength(0.3);

        fg.d3Force("y")!.y((node: any) => {
            const pos = parentPositions[node.parentId];
            return pos ? pos.y : 0;
        }).strength(0.3);

        fg.d3Force("charge")!.strength(-80);
        fg.d3Force("link")!.distance(60);

        fg.zoom(1, 0);

        fg.d3ReheatSimulation();
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full overflow-hidden">
            <ForceGraph
                ref={fgRef}
                width={dimensions.w}
                height={dimensions.h}
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
                onNodeDrag={(node: any) => {
                    if (["languages", "frameworks", "tools"].includes(node.id)) {
                        const pos = parentPositions[node.id]
                        node.x = pos.x;
                        node.y = pos.y;
                    }
                }}
                onEngineTick={() => {
                    const { w, h } = dimensions;
                    const PADDING = 40;
                    graphData.nodes.forEach((node: any) => {
                        if (node.fx) {
                            node.x = Math.max(-w / 2 + PADDING, Math.min(w / 2 - PADDING, node.x ?? 0));
                            node.y = Math.max(-h / 2 + PADDING, Math.min(h / 2 - PADDING, node.y ?? 0));
                        }
                    });
                }}
            />
        </div>
    )
}

export default SkillsGraphView
