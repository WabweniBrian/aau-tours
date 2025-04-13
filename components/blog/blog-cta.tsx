"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function BlogCTA() {
  return (
    <section className="bg-brand-green-50/10 pattern-bg py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with our latest blog posts, travel tips, and exclusive
            offers. Join our community of adventure seekers!
          </motion.p>
          <motion.div
            className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-border bg-white px-6 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe <Mail size={16} className="ml-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
