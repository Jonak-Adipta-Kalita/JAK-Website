import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../posts";
import { renderMarkdown } from "@/lib/mdx/mdx";
import { Lexend } from "next/font/google";
import moment from "moment";
import Link from "next/link";
import { MDXComponents } from "mdx/types";

const lexendFont = Lexend({
    subsets: ["latin"],
});

const mdxComponents: MDXComponents = {
    h1: (props) => (
        <p
            className="mt-8 mb-3 text-2xl font-bold text-[#b4befe] lg:text-3xl xl:text-4xl"
            {...props}
        />
    ),
    h2: (props) => (
        <p
            className="mt-7 mb-3 text-xl font-semibold text-[#89b4fa] lg:text-2xl xl:text-3xl"
            {...props}
        />
    ),
    h3: (props) => (
        <p
            className="mt-6 mb-3 text-lg font-semibold text-[#89dceb] lg:text-xl xl:text-2xl"
            {...props}
        />
    ),
    h4: (props) => (
        <p
            className="text-md mt-5 mb-3 font-semibold text-[#cba6f7] lg:text-lg xl:text-xl"
            {...props}
        />
    ),
    h5: (props) => (
        <p
            className="lg:text-md mt-4 mb-3 text-base font-semibold text-[#f5c2e7] xl:text-lg"
            {...props}
        />
    ),
    h6: (props) => (
        <p
            className="lg:text-md mt-3 mb-3 text-base font-semibold text-[#f2cdcd]"
            {...props}
        />
    ),
    p: (props) => (
        <p
            className="mt-2 mb-1 text-justify text-base leading-7 font-semibold tracking-tight"
            {...props}
        />
    ),
    a: (props) => {
        if (props.href.startsWith("http")) {
            return (
                <a
                    className="text-[#f38ba8] decoration-stone-500/80 hover:underline"
                    {...props}
                />
            );
        } else if (props.href.startsWith("/"))
            return (
                <Link
                    className="text-[#f38ba8] decoration-stone-500/80 hover:underline"
                    {...props}
                />
            );
    },
    ul: (props) => (
        <ul className="mr-2 list-disc pl-5 lg:pl-7 xl:pl-10" {...props} />
    ),
    li: (props) => (
        <li
            className="mt-2 mb-1 text-justify text-base leading-7 font-semibold tracking-tight"
            {...props}
        />
    ),
    code: (props) => (
        <code
            className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
            {...props}
        />
    ),
};

export function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let post;
    try {
        post = getPostBySlug(slug);
    } catch {
        notFound();
    }

    const content = await renderMarkdown(post.content, mdxComponents);

    return (
        <main
            className={`scrollbar-programming relative z-10 w-full overflow-y-auto px-2 pt-28 pb-20 xl:px-0 xl:pt-40 ${lexendFont.className}`}
        >
            <article className="mx-auto max-w-7xl">
                <div className="text-fg-programming-secondary mb-5 flex items-center justify-between text-sm font-semibold">
                    <div className="flex">
                        <p>Tags:</p>
                        <div className="ml-2">
                            {post.frontmatter.tags
                                .filter((tag: string) =>
                                    tag.startsWith("Literature/Writing")
                                )
                                .map((tag: string) => (
                                    <p className="text-[#f5e0dc]" key={tag}>
                                        {"#" +
                                            tag.split("/").slice(2).join("/")}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <p className="self-start">
                        Created:{" "}
                        {moment(post.frontmatter.created)
                            .format("Do MMMM YYYY")
                            .toString()}
                    </p>
                </div>
                <div className="border-fg-programming-secondary/50 mb-10 border-b-1" />
                <p className="mb-5 text-2xl font-bold text-[#b4befe] lg:text-3xl xl:text-4xl">
                    {post.frontmatter.title}
                </p>
                {content}
            </article>
        </main>
    );
}
