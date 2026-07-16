import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../posts";
import { renderMarkdown } from "@/lib/mdx/mdx";
import { Lexend } from "next/font/google";
import moment from "moment";

const lexendFont = Lexend({
    subsets: ["latin"],
});

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

    const content = await renderMarkdown(post.content);

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
