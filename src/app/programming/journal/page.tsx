import { getAllPosts } from "@/data/journals/posts";
import Link from "next/link";

const ProgrammingJournalPage = () => {
    const journals = getAllPosts();

    return (
        <main className="scrollbar-programming">
            {/* Layer on top of another ; Using Markdown to write the entries! */}
            <div className="mt-50" />
            {journals.map((post) => (
                <div key={post.slug}>
                    <Link href={`/programming/journal/${post.slug}`}>{post.frontmatter.title}</Link>
                    <p>{post.frontmatter.excerpt}</p>
                </div>
            ))}
        </main>
    );
};

export default ProgrammingJournalPage;
