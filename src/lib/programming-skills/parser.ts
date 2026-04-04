import skills, { AllFields } from "./data";
import { LinkObject, NodeObject } from "react-force-graph-2d"

type Node = {
    id: string;
    name: string;
    type: "language" | "framework" | "tool" | "field" | "group";
};
type Link = { source: string; target: string };

const buildGraphData = () => {
    const nodes: NodeObject<Node>[] = [];
    const links: LinkObject<Link>[] = [];
    const nodeIds = new Set<string>();

    const addNode = (node: NodeObject<Node>) => {
        if (!nodeIds.has(node.id)) {
            nodes.push(node);
            nodeIds.add(node.id);
        }
    };

    const linkFieldAndExtra = (
        node: Record<string, unknown> & {
            id: string;
            fields: (typeof AllFields)[number][] | null;
            extraLinks?: string[];
        }
    ) => {
        node.fields?.forEach((i) => {
            links.push({ source: i, target: node.id });
        });

        if (node.extraLinks === undefined) return;
        node.extraLinks.forEach((i) => {
            links.push({ source: i, target: node.id });
        });
    };

    AllFields.forEach((i) => {
        addNode({ id: i, name: i, type: "field" });
    });

    addNode({ id: "languages", name: "Languages", type: "field", fx: -200, fy: 0 });
    for (const lang of skills.languages) {
        addNode({ id: lang.id, name: lang.name, type: "language", parentId: "languages" });
        linkFieldAndExtra(lang as Record<string, unknown> & typeof lang);
        links.push({ source: "languages", target: lang.id });
    }

    addNode({ id: "frameworks", name: "Frameworks", type: "field", fx: 0, fy: 0 });
    const allFrameworks = skills.frameworks.flatMap((f) =>
        "frameworks" in f ? f.frameworks : [f]
    );
    for (const fw of allFrameworks) {
        addNode({ id: fw.id, name: fw.name, type: "framework", parentId: "frameworks" });

        for (const langName of fw.languages ?? []) {
            const lang = skills.languages.find((l) => l.name === langName);
            if (lang) links.push({ source: lang.id, target: fw.id });
        }

        linkFieldAndExtra(fw as Record<string, unknown> & typeof fw);
        links.push({ source: "frameworks", target: fw.id });
    }

    addNode({ id: "tools", name: "Tools", type: "field", fx: 200, fy: 0 });
    const allTools = skills.tools.flatMap((t) =>
        "tools" in t ? t.tools : [t]
    );
    for (const tool of allTools) {
        addNode({ id: tool.id, name: tool.name, type: "tool", parentId: "tools" });
        linkFieldAndExtra(tool);
        links.push({ source: "tools", target: tool.id });
    }

    return { nodes, links };
};

export default buildGraphData;
