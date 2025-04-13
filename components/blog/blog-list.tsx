"use client";

import { useState } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/types/blog-post";
import { formatWord } from "@/lib/utils";

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-foreground/80 hover:bg-gray-200"
              }`}
            >
              {formatWord(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              date={post.date}
              author={post.author}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
