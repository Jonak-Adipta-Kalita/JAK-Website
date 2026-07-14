import { getAllPosts } from "./posts";
import Link from "next/link";

const ProgrammingJournalPage = () => {
    const journals = getAllPosts();

    return (
        <main className="scrollbar-programming max-w-9xl relative z-10 mt-44">
            {journals.map((post) => (
                <div key={post.slug}>
                    <Link href={`/programming/journal/${post.slug}`}>
                        {post.frontmatter.title}
                    </Link>
                    <p>{post.frontmatter.excerpt}</p>
                </div>
            ))}
        </main>
    );
};

export default ProgrammingJournalPage;
