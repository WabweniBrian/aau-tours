"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";

export function TourPackagesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bwindi.jpg"
          alt="Uganda wildlife safari"
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
            Discover Uganda
          </motion.div>

          <motion.h1
            className="heading-xl mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Unforgettable Tour Packages
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our carefully crafted tour packages designed to showcase the
            best of Uganda&apos;s wildlife, landscapes, and cultural heritage.
          </motion.p>

          {/* <motion.div
            className="relative max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <input
              type="text"
              placeholder="Search for tours, destinations, or activities..."
              className="w-full rounded-full border-2 border-white/30 bg-white/10 px-6 py-4 pr-12 text-white backdrop-blur-md placeholder:text-white/60 focus:border-primary focus:outline-none"
            />
            <button
              className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary text-white"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
          </motion.div> */}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
