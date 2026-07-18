import { visit } from "unist-util-visit";
import type { Root, Text, Image } from "mdast";
import type { Plugin } from "unified";

const WIKI_EMBED_RE = /!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

interface Options {
    baseFolder?: string;
}

export const remarkWikiEmbed: Plugin<[Options?], Root> = (options = {}) => {
    const baseFolder = options.baseFolder ?? "";

    return (tree) => {
        visit(tree, "text", (node: Text, index, parent) => {
            if (!parent || index == null) return;
            if (!WIKI_EMBED_RE.test(node.value)) return;
            WIKI_EMBED_RE.lastIndex = 0;

            const newNodes: (Text | Image)[] = [];
            let lastIndex = 0;
            let match: RegExpExecArray | null;

            while ((match = WIKI_EMBED_RE.exec(node.value))) {
                const [fullMatch, filename, alias] = match;
                const start = match.index;

                if (start > lastIndex) {
                    newNodes.push({
                        type: "text",
                        value: node.value.slice(lastIndex, start),
                    });
                }

                newNodes.push({
                    type: "image",
                    url: `${baseFolder}/${filename.trim()}`,
                    alt: alias ?? filename.trim(),
                    data: {
                        hProperties: {
                            className: "wiki-embed",
                            "data-wiki-embed": "true",
                        },
                    },
                });

                lastIndex = start + fullMatch.length;
            }

            if (lastIndex < node.value.length) {
                newNodes.push({ type: "text", value: node.value.slice(lastIndex) });
            }

            parent.children.splice(index, 1, ...newNodes);
        });
    };
};
