import ScrollSnapSection from "@/components/ScrollSnapSection";

type Skill = {
    pic: string;
    name: string;
    message: string;
    link?: string;
}

const skills: {
    languages: Skill[],
    frameworks: Skill[],
    tools: Skill[]
} = {
    languages: [],
    frameworks: [],
    tools: [],
};

const ProgrammingSkills = () => {
    return (
        <ScrollSnapSection id="skills"
            className="flex w-full items-center justify-center"
        >
            <div className="">
                {/* Graph View! */}
            </div>
        </ScrollSnapSection>
    );
};

export default ProgrammingSkills;
