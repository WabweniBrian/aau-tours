"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface DestinationCardProps {
  id: string;
  title: string;
  image: string;
  tourCount: number;
  slug: string;
}

export function DestinationCard({
  id,
  title,
  image,
  tourCount,
  slug,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/destinations/${slug}`} className="block">
      <motion.div
        className="group relative h-[400px] overflow-hidden rounded-3xl"
        whileHover={{
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Image
          src={image || "/default-image.jpg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 z-10 w-full p-6">
          <div className="mb-2 flex items-center">
            <MapPin size={16} className="mr-2 text-primary" />
            <span className="text-sm text-white/90">{tourCount} Tours</span>
          </div>
          <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
          <div
            className={`inline-flex items-center justify-center rounded-full transition-all duration-300 ${
              isHovered
                ? "bg-primary px-6 py-2 text-white"
                : "bg-white/20 px-5 py-1.5 text-white"
            }`}
          >
            {isHovered ? "Explore Destination" : "Discover"}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
