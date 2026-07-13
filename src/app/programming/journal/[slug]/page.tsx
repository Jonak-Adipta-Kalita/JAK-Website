import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "../posts";
import { renderMarkdown } from "@/lib/mdx";

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
        <article className="scrollbar-programming overflow-y-auto">
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            {content}
        </article>
    );
}
