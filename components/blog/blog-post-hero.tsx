"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import type { BlogPost } from "@/types/blog-post";

interface BlogPostHeroProps {
  post: BlogPost;
}

export function BlogPostHero({ post }: BlogPostHeroProps) {
  const categoryLabel =
    post.category === "wildlife"
      ? "Wildlife"
      : post.category === "travel-tips"
        ? "Travel Tips"
        : post.category === "culture"
          ? "Culture"
          : "Destinations";

  const categoryColor =
    post.category === "wildlife"
      ? "bg-green-100 text-green-800"
      : post.category === "travel-tips"
        ? "bg-blue-100 text-blue-800"
        : post.category === "culture"
          ? "bg-purple-100 text-purple-800"
          : "bg-yellow-100 text-yellow-800";

  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={post.image || "/default-image.jpg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 pb-12 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center text-white/80 hover:text-white"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            className={`mb-4 inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium ${categoryColor}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {categoryLabel}
          </motion.div>

          <motion.h1
            className="heading-lg mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          <motion.div
            className="mb-6 flex flex-wrap items-center gap-4 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center">
              <Tag size={18} className="mr-2" />
              <span>{post.readTime} min read</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
