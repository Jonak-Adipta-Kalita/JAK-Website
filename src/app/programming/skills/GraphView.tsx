"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import buildGraphData from "@/data/programming-skills/parser";

const ForceGraph = dynamic(() => import("react-force-graph-2d"), {
    ssr: false,
});

const nodeColors = {
    language: "#7F77DD",
    framework: "#1D9E75",
    tool: "#D85A30",
    field: "#888780",
    group: "#fff",
} as { [key: string]: string };

const parentPositions: Record<string, { x: number; y: number }> = {
    languages: { x: -500, y: 0 },
    frameworks: { x: 0, y: 0 },
    tools: { x: 500, y: 0 },
};

const graphData = buildGraphData();

const SkillsGraphView = () => {
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

        const fx = fg.d3Force("x");
        const fy = fg.d3Force("y");
        const charge = fg.d3Force("charge");
        const link = fg.d3Force("link");

        if (!fx || !fy || !charge || !link) return;

        fg.centerAt(0, 0, 0);

        fx.x((node: any) => parentPositions[node.parentId]?.x ?? 0).strength(
            0.3
        );

        fy.y((node: any) => parentPositions[node.parentId]?.y ?? 0).strength(
            0.3
        );

        charge.strength(-80);
        link.distance(60);

        fg.zoom(1, 0);
        fg.d3ReheatSimulation();
    }, [fgRef.current]);

    return (
        <div
            ref={containerRef}
            className="hidden h-full w-full overflow-hidden lg:inline"
        >
            <ForceGraph
                ref={fgRef}
                width={dimensions.w}
                height={dimensions.h}
                graphData={graphData}
                enableZoomInteraction={false}
                enablePanInteraction={false}
                linkColor={() => "rgba(255,255,255,0.15)"}
                linkWidth={1.5}
                nodeCanvasObject={(node: any, ctx, globalScale) => {
                    const x = node.x ?? 0;
                    const y = node.y ?? 0;
                    const color = nodeColors[node.type] ?? "#888";

                    if (node.type === "group") {
                        const label = node.name;
                        ctx.font = `bold ${13 / globalScale}px Sans-Serif`;
                        const textWidth = ctx.measureText(label).width;
                        const rx = textWidth / 2 + 12;
                        const ry = 10 / globalScale;

                        ctx.beginPath();
                        ctx.ellipse(x, y, rx, ry, 0, 0, 2 * Math.PI);
                        ctx.fillStyle = "rgba(255,255,255,0.08)";
                        ctx.fill();
                        ctx.strokeStyle = "rgba(255,255,255,0.7)";
                        ctx.lineWidth = 1.2 / globalScale;
                        ctx.stroke();

                        ctx.fillStyle = "white";
                        ctx.textAlign = "center";
                        ctx.textBaseline = "middle";
                        ctx.fillText(label, x, y);
                    } else {
                        const r = 4;
                        ctx.beginPath();
                        ctx.arc(x, y, r, 0, 2 * Math.PI);
                        ctx.fillStyle = color;
                        ctx.fill();
                    }
                }}
                nodePointerAreaPaint={(node: any, color, ctx) => {
                    const x = node.x ?? 0;
                    const y = node.y ?? 0;

                    ctx.beginPath();
                    if (node.type === "group") {
                        ctx.ellipse(x, y, 50, 14, 0, 0, 2 * Math.PI);
                    } else {
                        ctx.arc(x, y, 6, 0, 2 * Math.PI);
                    }
                    ctx.fillStyle = color;
                    ctx.fill();
                }}
                nodeLabel={(node: any) =>
                    node.type !== "group" ? node.name : ""
                }
                onNodeDrag={(node: any) => {
                    if (
                        ["languages", "frameworks", "tools"].includes(node.id)
                    ) {
                        const pos = parentPositions[node.id];
                        node.x = pos.x;
                        node.y = pos.y;
                    }
                }}
                onEngineTick={() => {
                    const { w, h } = dimensions;
                    const PADDING = 40;
                    graphData.nodes.forEach((node: any) => {
                        if (node.fx) {
                            node.x = Math.max(
                                -w / 2 + PADDING,
                                Math.min(w / 2 - PADDING, node.x ?? 0)
                            );
                            node.y = Math.max(
                                -h / 2 + PADDING,
                                Math.min(h / 2 - PADDING, node.y ?? 0)
                            );
                        }
                    });
                }}
            />
        </div>
    );
};

export default SkillsGraphView;
