import { Lexend } from "next/font/google";
import { getPostsInGroups, Post } from "./posts";
import Link from "next/link";

const lexendFont = Lexend({
    subsets: ["latin"],
});

const Section = ({ posts, title }: { posts: Post[]; title: string }) => {
    return (
        <div className="">
            <p className="mb-10 text-5xl font-bold">#{title}</p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        href={`/programming/journal/${post.slug}`}
                        className="group bg-fg-programming-secondary/10 rounded-lg p-5"
                        key={post.slug}
                    >
                        <p className="text-fg-programming-text cursor-pointer text-xl font-semibold group-hover:underline">
                            {post.frontmatter.title}
                        </p>
                        <p className="text-fg-programming-secondary cursor-pointer text-sm">
                            {post.frontmatter.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Divider = () => {
    return (
        <div className="my-10 flex items-center gap-3">
            <div className="h-[2px] flex-1 rounded-l-full bg-[#6c7086]" />
            <div className="size-2 rounded-full bg-[#b4befe]" />
            <div className="h-[2px] flex-1 rounded-r-full bg-[#6c7086]" />
        </div>
    );
};

const ProgrammingJournalPage = () => {
    const [journey, thoughts, projects] = getPostsInGroups();

    return (
        <main
            className={
                "scrollbar-programming max-w-9xl relative z-10 mx-auto mt-44 mb-20 w-full space-y-5 lg:space-y-14 " +
                lexendFont.className
            }
        >
            <Section posts={thoughts} title="Thoughts" />
            <Divider />
            <Section posts={projects} title="Projects" />
            <Divider />
            <Section posts={journey} title="Journeys" />
        </main>
    );
};

export default ProgrammingJournalPage;
