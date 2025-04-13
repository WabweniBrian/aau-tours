"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import type { Destination } from "@/types/destination";

interface DestinationHeroProps {
  destination: Destination;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={destination.image || "/default-image.jpg"}
          alt={destination.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 pb-12 pt-32">
        <div className="max-w-3xl">
          <motion.div
            className="mb-4 inline-flex items-center rounded-full bg-primary/80 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {destination.category === "national-parks"
              ? "National Park"
              : destination.category === "wildlife-reserves"
                ? "Wildlife Reserve"
                : destination.category === "lakes-rivers"
                  ? "Natural Wonder"
                  : "Cultural Site"}
          </motion.div>

          <motion.h1
            className="heading-lg mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {destination.title}
          </motion.h1>

          <motion.div
            className="mb-6 flex flex-wrap items-center gap-4 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center">
              <MapPin size={18} className="mr-1" />
              <span>{destination.location}</span>
            </div>
            {destination.bestTime && (
              <div className="flex items-center">
                <Calendar size={18} className="mr-1" />
                <span>Best time to visit: {destination.bestTime}</span>
              </div>
            )}
          </motion.div>

          <motion.p
            className="max-w-2xl text-lg text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {destination.shortDescription}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
