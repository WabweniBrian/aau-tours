"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function AboutHero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("our-story");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aau-safari.webp"
          alt="Ugandan landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute left-1/4 top-1/4 hidden h-32 w-32 rounded-full border-4 border-primary/30 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 hidden h-24 w-24 rounded-full border-4 border-secondary/30 lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6 text-white">Discover Our Story</h1>
            <p className="mb-8 max-w-xl text-xl text-white/90">
              AAU Tours and Travel is more than just a travel company.
              We&apos;re storytellers, adventure seekers, and passionate
              ambassadors of Uganda&apos;s natural beauty and cultural heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div
                className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white/10 p-4 text-white backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xl font-bold">15+</span>
                <span className="text-xs">Years</span>
              </motion.div>
              <motion.div
                className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary/20 p-4 text-white backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xl font-bold">1000+</span>
                <span className="text-xs">Tours</span>
              </motion.div>
              <motion.div
                className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-secondary/20 p-4 text-white backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xl font-bold">20+</span>
                <span className="text-xs">Experts</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 mx-auto h-[400px] w-[400px] overflow-hidden rounded-full border-8 border-white/20 shadow-2xl">
              <Image
                src="/images/bwindi.jpg"
                alt="About AAU Tours"
                fill
                className="object-cover"
              />
            </div>
            <div className="animate-spin-slow border-brand-orange absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed"></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:block">
          <motion.div
            className="absolute bottom-0 left-1/2 flex -translate-x-1/2 transform cursor-pointer flex-col items-center"
            onClick={scrollToNextSection}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="mb-2 text-sm text-white/80">
              Scroll to discover
            </span>
            <ChevronDown className="animate-bounce text-white" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
