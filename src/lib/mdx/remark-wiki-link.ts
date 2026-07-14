import { visit } from "unist-util-visit";
import type { Root, Text, Link } from "mdast";
import type { Plugin } from "unified";

const WIKI_LINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

interface Options {
    baseFolder?: string;
    slugify?: (name: string) => string;
}

const defaultSlugify = (name: string) =>
    name.trim().toLowerCase().replace(/\s+/g, "-");

export const remarkWikiLink: Plugin<[Options?], Root> = (options = {}) => {
    const baseFolder = options.baseFolder ?? "";
    const slugify = options.slugify ?? defaultSlugify;

    return (tree) => {
        visit(tree, "text", (node: Text, index, parent) => {
            if (!parent || index == null) return;
            if (!WIKI_LINK_RE.test(node.value)) return;
            WIKI_LINK_RE.lastIndex = 0;

            const newNodes: (Text | Link)[] = [];
            let lastIndex = 0;
            let match: RegExpExecArray | null;

            while ((match = WIKI_LINK_RE.exec(node.value))) {
                const [fullMatch, page, alias] = match;
                const start = match.index;

                if (start > lastIndex) {
                    newNodes.push({
                        type: "text",
                        value: node.value.slice(lastIndex, start),
                    });
                }

                newNodes.push({
                    type: "link",
                    url: `${baseFolder}/${slugify(page)}`,
                    children: [{ type: "text", value: alias ?? page }],
                });

                lastIndex = start + fullMatch.length;
            }

            if (lastIndex < node.value.length) {
                newNodes.push({
                    type: "text",
                    value: node.value.slice(lastIndex),
                });
            }

            parent.children.splice(index, 1, ...newNodes);
        });
    };
};
