import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";
import { remarkWikiLink } from "./remark-wiki-link";
import { remarkBlankLineBreak } from "./remark-blank-line-break";
import { MDXComponents } from "mdx/types";
import { remarkWikiEmbed } from "./remark-wiki-embed";

export async function renderMarkdown(source: string, mdxComponents: MDXComponents) {
    const code = String(
        await compile(source, {
            outputFormat: "function-body",
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [
                [remarkWikiEmbed, { baseFolder: "/pic/journals/" }],
                [remarkWikiLink, { baseFolder: "/programming/journal" }],
                remarkBlankLineBreak,
            ],
        })
    );

    const { default: Content } = await run(code, {
        ...(process.env.NODE_ENV === "development" ? devRuntime : runtime),
        baseUrl: import.meta.url,
    });

    return <Content components={mdxComponents} />;
}
