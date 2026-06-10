import { notFound } from "next/navigation";
import { getPostBySlug, getPostContent, getPublishedPosts } from "@/lib/notion";
import BlogDetail from "@/components/blog/blog-detail";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Lalith Sai Kumar",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${post.title} | Lalith Sai Kumar`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export const revalidate = 60; // Revalidate every minute

export default async function BlogDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await getPostContent(post.id);

  return (
    <div className="w-[90%] flex flex-col justify-center items-center mx-auto">
      <BlogDetail post={post} contentHtml={contentHtml} />
    </div>
  );
}
