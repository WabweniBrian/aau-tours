"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/travel-blog.jpg"
          alt="Uganda travel blog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full bg-primary/80 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            Travel Insights
          </motion.div>

          <motion.h1
            className="heading-xl mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Travel Blog
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover travel tips, destination guides, and stories from our
            adventures across Uganda and East Africa.
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
