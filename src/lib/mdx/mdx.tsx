import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";
import { remarkWikiLink } from "./remark-wiki-link";
import { remarkBlankLineBreak } from "./remark-blank-line-break";
import Link from "next/link";

const mdxComponents = {
    h1: (props: any) => (
        <p
            className="mt-8 mb-3 text-2xl font-bold text-[#b4befe] lg:text-3xl xl:text-4xl"
            {...props}
        />
    ),
    h2: (props: any) => (
        <p
            className="mt-7 mb-3 text-xl font-semibold text-[#89b4fa] lg:text-2xl xl:text-3xl"
            {...props}
        />
    ),
    h3: (props: any) => (
        <p
            className="mt-6 mb-3 text-lg font-semibold text-[#89dceb] lg:text-xl xl:text-2xl"
            {...props}
        />
    ),
    h4: (props: any) => (
        <p
            className="text-md mt-5 mb-3 font-semibold text-[#cba6f7] lg:text-lg xl:text-xl"
            {...props}
        />
    ),
    h5: (props: any) => (
        <p
            className="lg:text-md mt-4 mb-3 text-base font-semibold text-[#f5c2e7] xl:text-lg"
            {...props}
        />
    ),
    h6: (props: any) => (
        <p
            className="lg:text-md mt-3 mb-3 text-base font-semibold text-[#f2cdcd]"
            {...props}
        />
    ),
    p: (props: any) => (
        <p
            className="mt-2 mb-1 text-justify text-base leading-7 font-semibold tracking-tight"
            {...props}
        />
    ),
    a: (props: any) => {
        if (props.href.startsWith("http")) {
            return (
                <a
                    className="text-[#f38ba8] decoration-stone-500/80 hover:underline"
                    {...props}
                />
            )
        } else if (props.href.startsWith("/")) return (
            <Link
                className="text-[#f38ba8] decoration-stone-500/80 hover:underline"
                {...props}
            />
        )
    },
    ul: (props: any) => (
        <ul className="mr-2 list-disc pl-5 lg:pl-7 xl:pl-10" {...props} />
    ),
    li: (props: any) => (
        <li
            className="mt-2 mb-1 text-justify text-base leading-7 font-semibold tracking-tight"
            {...props}
        />
    ),
    code: (props: any) => (
        <code
            className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
            {...props}
        />
    ),
};

export async function renderMarkdown(source: string) {
    const code = String(
        await compile(source, {
            outputFormat: "function-body",
            development: process.env.NODE_ENV === "development",
            remarkPlugins: [
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
