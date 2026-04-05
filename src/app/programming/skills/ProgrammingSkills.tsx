import ScrollSnapSection from "@/components/ScrollSnapSection";
import SkillsGraphView from "./GraphView";
import buildGraphData from "@/lib/programming-skills/parser";

const graphData = buildGraphData();

// TODO: Mention that all of them are related to Tech/Programming, the Fields are just to specify any particular use case

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <>
                <SkillsGraphView graphData={graphData} />
            </>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
