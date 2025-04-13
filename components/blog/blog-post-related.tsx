"use client";

import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";
import type { BlogPost } from "@/types/blog-post";

interface BlogPostRelatedProps {
  posts: BlogPost[];
}

export function BlogPostRelated({ posts }: BlogPostRelatedProps) {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md mb-4">Related Articles</h2>
          <p className="text-foreground/70">
            You might also be interested in these related posts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post) => (
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
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="text-foreground/70">No related posts found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
