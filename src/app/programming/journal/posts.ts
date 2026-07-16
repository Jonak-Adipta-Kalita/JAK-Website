import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";

export type Post = {
    slug: string;
    frontmatter: {
        [key: string]: any;
    };
    content: string;
};

const postsDirectory = path.join(process.cwd(), "src/data/journals");

export function getAllPostSlugs() {
    return fs
        .readdirSync(postsDirectory)
        .filter((file) => file.endsWith(".md"))
        .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    return { slug, frontmatter, content };
}

export function getAllPosts() {
    return getAllPostSlugs()
        .map((slug) => getPostBySlug(slug))
        .sort((a, b) =>
            moment(a.frontmatter.created) < moment(b.frontmatter.created)
                ? 1
                : -1
        );
}

export function getPostsInGroups() {
    const allPosts = getAllPosts();

    const journey: Post[] = [];
    const thoughts: Post[] = [];
    const projects: Post[] = [];

    for (const post of allPosts) {
        post.frontmatter.tags.forEach((tag: string) => {
            switch (tag) {
                case "Literature/Writing/Journey":
                    journey.push(post);
                    return;
                case "Literature/Writing/Thoughts":
                    thoughts.push(post);
                    return;
                case "Literature/Writing/Project":
                    projects.push(post);
                    return;
            }
        });
    }

    return [journey, thoughts, projects];
}
