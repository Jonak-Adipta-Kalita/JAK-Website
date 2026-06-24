import ScrollSnapSection from "../ProgrammingSection";
import SkillsGraphView from "./GraphView";
import SkillsGridView from "./GridView";

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection
            id="skills"
            className="flex w-full items-center justify-center"
        >
            <div className="lg:hidden">
                <p className="text-fg-programming-secondary font-salsa mb-7 text-center text-3xl">
                    My Skillset :D
                </p>
                <SkillsGridView />
            </div>
            <SkillsGraphView />
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
