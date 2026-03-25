"use client";

import ScrollSnapSection from "@/components/ScrollSnapSection";
import ForceGraph, { GraphData, LinkObject, NodeObject } from "react-force-graph-2d"

// TODO: Mention that all of them are related to Tech/Programming, the Fields are just to specify any particular use case

const ProgrammingSkills = () => {
    // const getGraphData = (): GraphData<NodeObject<{}>, LinkObject<{}, {}>> => {
    //     return {}
    // }

    return (
        <ScrollSnapSection id="skills"
            className="flex w-full items-center justify-center"
        >
            <>{/* <ForceGraph graphData={getGraphData()} /> */}</>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
