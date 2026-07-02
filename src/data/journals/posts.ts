import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
        .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}
