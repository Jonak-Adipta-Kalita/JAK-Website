import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/data/journals/posts";
import { renderMarkdown } from "@/lib/mdx";

export function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    let post;
    try {
        post = getPostBySlug(params.slug);
    } catch {
        notFound();
    }

    const content = await renderMarkdown(post.content);

    return (
        <article>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            {content}
        </article>
    );
}
