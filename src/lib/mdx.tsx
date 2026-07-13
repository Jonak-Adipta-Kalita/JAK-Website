import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";

const mdxComponents = {
    h1: (props: any) => <h1 className="mb-4 text-3xl font-bold" {...props} />,
    h2: (props: any) => (
        <h2 className="mb-3 text-2xl font-semibold" {...props} />
    ),
    p: (props: any) => <p className="mb-4 text-base leading-7" {...props} />,
    a: (props: any) => (
        <a className="text-blue-600 underline hover:text-blue-800" {...props} />
    ),
    ul: (props: any) => <ul className="mb-4 list-disc pl-6" {...props} />,
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
        })
    );

    const { default: Content } = await run(code, {
        ...(process.env.NODE_ENV === "development" ? devRuntime : runtime),
        baseUrl: import.meta.url,
    });

    return <Content components={mdxComponents} />;
}
