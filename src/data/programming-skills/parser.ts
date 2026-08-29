import skills, { ToolSkill } from "./data";

export const mobileToolData = skills.tools.map((tool) => {
    if (!("tools" in tool)) return tool;

    return {
        id: tool.id,
        name: tool.tools.map((subTool) => subTool.name),
        pic: [...tool.tools.map((subTool) => subTool.pic)],
        fields: [],
        message: tool.groupName,
    };
}) as ToolSkill[];
