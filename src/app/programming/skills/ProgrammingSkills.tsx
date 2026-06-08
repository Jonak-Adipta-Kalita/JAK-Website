import ScrollSnapSection from "../ProgrammingSection";
import SkillsGraphView from "./GraphView";
import SkillsGridView from "./GridView";

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <SkillsGraphView />
            <SkillsGridView />
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
