"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { formatWord } from "@/lib/utils";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  slug: string;
}

export function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  author,
  category,
  slug,
}: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getRandomCategoryColor = () => {
    const colors = [
      "bg-green-100 text-green-800",
      "bg-blue-100 text-blue-800",
      "bg-purple-100 text-purple-800",
      "bg-yellow-100 text-yellow-800",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <Link href={`/blog/${slug}`} className="block">
      <motion.div
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-white shadow-lg transition-all duration-500"
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image || "/default-image.jpg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute left-4 top-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${getRandomCategoryColor()}`}
            >
              {formatWord(category)}
            </span>
          </div>
        </div>
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-4 flex items-center text-sm text-foreground/60">
            <div className="mr-4 flex items-center">
              <Calendar size={14} className="mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <User size={14} className="mr-1" />
              <span>{author.name}</span>
            </div>
          </div>
          <h3 className="mb-3 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 line-clamp-3 flex-grow text-foreground/70">
            {excerpt}
          </p>
          <div className="mt-auto inline-flex items-center font-medium text-primary hover:underline">
            Read More <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
