import { Lexend } from "next/font/google";
import { getPostsInGroups, Post } from "./posts";
import Link from "next/link";

const lexendFont = Lexend({
    subsets: ["latin"],
});

const Section = ({ posts, title }: { posts: Post[], title: string }) => {
    return (
        <div className="">
            <p className="text-5xl font-bold mb-10">#{title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {posts.map((post) => (
                    <Link href={`/programming/journal/${post.slug}`} className="group bg-fg-programming-secondary/10 p-5 rounded-lg">
                        <p className="cursor-pointer group-hover:underline text-xl text-fg-programming-text font-semibold">
                            {post.frontmatter.title}
                        </p>
                        <p className="cursor-pointer text-sm text-fg-programming-secondary">{post.frontmatter.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const Divider = () => {
    return <div
        className="my-10 flex items-center gap-3"
    >
        <div className="bg-[#6c7086] h-[2px] flex-1 rounded-l-full" />
        <div className="bg-[#b4befe] size-2 rounded-full" />
        <div className="bg-[#6c7086] h-[2px] flex-1 rounded-r-full" />
    </div>
}

const ProgrammingJournalPage = () => {
    const [journey, thoughts, projects] = getPostsInGroups()

    return (
        <main className={"scrollbar-programming max-w-9xl mx-auto relative z-10 mt-44 mb-20 space-y-5 lg:space-y-14 w-full " + lexendFont.className}>
            <Section posts={thoughts} title="Thoughts" />
            <Divider />
            <Section posts={projects} title="Projects" />
            <Divider />
            <Section posts={journey} title="Journeys" />
        </main>
    );
};

export default ProgrammingJournalPage;
