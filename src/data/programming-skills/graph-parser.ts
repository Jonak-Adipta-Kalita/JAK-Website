import skills, { AllFields, FrameworkSkill, LanguageSkill, ToolSkill } from "./data"

export type Node = {
    id: string;
    name: string;
}

export type Link = { source: string; target: string };

export type GraphData = {
    languages: (LanguageSkill & { links: Link[] })[],
    frameworks: (FrameworkSkill & { links: Link[] })[],
    tools: (ToolSkill & { links: Link[] })[],
    fields: string[],
}

export default (): GraphData => {

    return { fields: AllFields.map((field) => field) } as GraphData
}
