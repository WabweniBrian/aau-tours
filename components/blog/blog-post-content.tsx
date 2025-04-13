"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import type { BlogPost } from "@/types/blog-post";
import { blogPostsData } from "@/data/blog-posts";
import Link from "next/link";
import { formatWord } from "@/lib/utils";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Social sharing sidebar */}
          <motion.div
            className="hidden lg:col-span-1 lg:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32 flex flex-col items-center space-y-4">
              <p className="mb-2 text-sm text-foreground/60">Share</p>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
                aria-label="Share via Email"
              >
                <Mail size={18} />
              </button>
            </div>
          </motion.div>

          {/* Main content */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="lead">{post.excerpt}</p>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-foreground/70 transition-colors hover:bg-gray-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-32 rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Popular Posts</h3>
              <div className="space-y-4">
                {blogPostsData.slice(0, 3).map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    className="flex items-start"
                  >
                    <div className="relative mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={post.image || "/default-image.jpg"}
                        alt="Popular post"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="line-clamp-2 cursor-pointer text-sm font-medium transition-colors hover:text-primary">
                        {post.title}
                      </h4>
                      <p className="mt-1 text-xs text-foreground/60">
                        {post.date}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-xl font-bold">Categories</h3>
                <div className="space-y-2">
                  {(
                    Array.from(
                      new Set(blogPostsData.map((post) => post.category)),
                    ) as string[]
                  ).map((category) => (
                    <div
                      key={category}
                      className="flex cursor-pointer items-center justify-between transition-colors hover:text-primary"
                    >
                      <span>{formatWord(category)}</span>
                      <span className="text-sm text-foreground/60">
                        {
                          blogPostsData.filter(
                            (post) => post.category === category,
                          ).length
                        }
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
