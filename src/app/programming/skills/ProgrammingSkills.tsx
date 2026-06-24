import ScrollSnapSection from "../ProgrammingSection";
import SkillsGraphView from "./GraphView";
import SkillsGridView from "./GridView";

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <div className="md:hidden">
                <p className="text-fg-programming-secondary font-salsa text-2xl">My Skillset :D</p>
                <SkillsGridView />
            </div>
            <SkillsGraphView />
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
