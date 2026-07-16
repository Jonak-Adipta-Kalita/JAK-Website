import { Lexend } from "next/font/google";
import { getPostsInGroups, Post } from "./posts";
import Link from "next/link";

const lexendFont = Lexend({
    subsets: ["latin"],
});

const Section = ({ posts, title }: { posts: Post[]; title: string }) => {
    return (
        <div className="">
            <p className="mb-10 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">#{title}</p>
            <div className="grid grid-cols-1 gap-5 2xl:gap-10 md:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                    <Link
                        href={`/programming/journal/${post.slug}`}
                        className="group bg-fg-programming-secondary/10 rounded-lg p-5"
                        key={post.slug}
                    >
                        <p className="text-fg-programming-text cursor-pointer text-base md:text-lg xl:text-xl font-semibold group-hover:underline">
                            {post.frontmatter.title}
                        </p>
                        <p className="text-fg-programming-secondary cursor-pointer text-xs lg:text-sm">
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
                "scrollbar-programming overflow-y-auto relative z-10 px-4 pt-28 pb-20 xl:pt-40 w-full " +
                lexendFont.className
            }
        >
            <div className="max-w-9xl mx-auto space-y-5 lg:space-y-14">
                <Section posts={thoughts} title="Thoughts" />
                <Divider />
                <Section posts={projects} title="Projects" />
                <Divider />
                <Section posts={journey} title="Journeys" />
            </div>
        </main>
    );
};

export default ProgrammingJournalPage;
