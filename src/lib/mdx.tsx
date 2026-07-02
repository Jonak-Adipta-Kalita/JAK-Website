import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import * as devRuntime from "react/jsx-dev-runtime";

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

    return <Content />;
}
