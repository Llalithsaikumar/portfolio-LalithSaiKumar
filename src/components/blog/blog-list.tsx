"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { m } from "motion/react";
import { ArrowLeft, Calendar, Tag, BookOpen, Search } from "lucide-react";
import { BlogPost } from "@/lib/notion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories
  const categories = Array.from(
    new Set(posts.map((post) => post.category || "General"))
  );

  // Filter posts based on search query and category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 w-full">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Button
            asChild
            variant="ghost"
            className="mb-6 scale-transition -ml-3"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Blog & Insights
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts, tutorials, and deep dives into AI, LLMs, RAG pipelines,
            FastAPI backends, and engineering best practices.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 items-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 text-xs rounded-full border transition-all ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-muted-foreground"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 text-xs rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            {filteredPosts.map((post) => (
              <m.div
                key={post.id}
                variants={fadeUp}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                {/* Visual highlights */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4">
                  {post.coverImage && (
                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-lg border aspect-video bg-muted relative">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        loading="lazy"
                        decoding="async"
                        className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </Link>
                  )}

                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground font-medium">
                      <Tag className="h-3 w-3" />
                      {post.category || "General"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <div className="space-y-2">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h3 className="font-bold text-xl leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="pt-6 mt-auto border-t border-border/50 flex justify-between items-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline gap-1"
                  >
                    Read Article
                    <BookOpen className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </m.div>
            ))}
          </m.div>
        ) : (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 border rounded-2xl bg-card/20"
          >
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </m.div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
