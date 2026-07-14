import { visit } from "unist-util-visit";
import type { Root, Parent } from "mdast";
import type { Plugin } from "unified";

export const remarkBlankLineBreak: Plugin<[], Root> = () => {
    return (tree) => {
        visit(tree, (node) => {
            const parent = node as unknown as Parent;
            if (!parent.children || parent.children.length < 2) return;

            const newChildren: any[] = [];

            for (let i = 0; i < parent.children.length; i++) {
                const child = parent.children[i];
                newChildren.push(child);

                const next = parent.children[i + 1];
                if (!next || !child.position || !next.position) continue;

                const gap =
                    next.position.start.line - child.position.end.line - 1;

                for (let g = 0; g < gap; g++) {
                    newChildren.push({
                        type: "mdxJsxFlowElement",
                        name: "div",
                        attributes: [
                            {
                                type: "mdxJsxAttribute",
                                name: "className",
                                value: "h-2 lg:h-3",
                            },
                        ],
                        children: [],
                    });
                }
            }

            parent.children = newChildren;
        });
    };
};
