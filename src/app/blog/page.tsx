import { getPublishedPosts } from "@/lib/notion";
import BlogList from "@/components/blog/blog-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Lalith Sai Kumar",
  description: "Insights and tutorials on AI, LLMs, FastAPI, and web development by Lalith Sai Kumar.",
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  
  return (
    <div className="mx-auto w-[90%] flex flex-col justify-center items-center">
      <BlogList posts={posts} />
    </div>
  );
}
