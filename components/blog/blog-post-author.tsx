"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import type { Author } from "@/types/blog-post";

interface BlogPostAuthorProps {
  author: Author;
}

export function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container-custom">
        <motion.div
          className="mx-auto max-w-3xl rounded-2xl border border-gray-100 bg-white p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-primary/10">
              <Image
                src={author.avatar || "/default-image.jpg"}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold">About {author.name}</h3>
              <p className="mb-4 text-foreground/70">{author.bio}</p>
              <div className="flex justify-center space-x-4 md:justify-start">
                {author.social?.facebook && (
                  <a
                    href={author.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                )}
                {author.social?.twitter && (
                  <a
                    href={author.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-500 transition-colors hover:bg-sky-500 hover:text-white"
                    aria-label="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                )}
                {author.social?.linkedin && (
                  <a
                    href={author.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
