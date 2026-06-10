"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Tag, Clock } from "lucide-react";
import { motion } from "motion/react";
import { BlogPost } from "@/lib/notion";

interface BlogDetailProps {
  post: BlogPost;
  contentHtml: string;
}

const BlogDetail = ({ post, contentHtml }: BlogDetailProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Estimate read time based on content length (roughly 200 words per minute)
  const wordCount = contentHtml.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <motion.section
      className="py-24 w-full max-w-3xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8 -ml-3 scale-transition">
          <Link href="/blog">
            <span className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </span>
          </Link>
        </Button>

        {/* Article Header info */}
        <div className="space-y-6 mb-8">
          <motion.div variants={item} className="flex flex-wrap gap-3 items-center">
            <span className="flex items-center gap-1 bg-secondary px-3 py-1 rounded-full text-xs font-semibold text-secondary-foreground">
              <Tag className="h-3 w-3" />
              {post.category || "General"}
            </span>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime} min read
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight"
            variants={item}
          >
            {post.title}
          </motion.h1>

          {post.excerpt && (
            <motion.p
              className="text-lg md:text-xl text-muted-foreground italic border-l-2 border-primary/30 pl-4 py-1 leading-relaxed"
              variants={item}
            >
              {post.excerpt}
            </motion.p>
          )}
        </div>

        <Separator className="my-8" />

        {/* Dynamic HTML Content */}
        <motion.div
          className="prose dark:prose-invert max-w-none text-foreground/95 leading-relaxed text-base md:text-lg space-y-4"
          variants={item}
        >
          <div
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="blog-content"
          />
        </motion.div>

        <Separator className="my-12" />

        {/* Footer Navigation */}
        <div className="flex justify-between items-center">
          <Button asChild variant="ghost" className="scale-transition">
            <Link href="/blog">
              <span className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogDetail;
