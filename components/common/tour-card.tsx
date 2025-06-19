"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight } from "lucide-react";

interface TourCardProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  featured?: boolean;
  slug: string;
}

export function TourCard({
  id,
  title,
  location,
  duration,
  image,
  featured = false,
  slug,
}: TourCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/tour-packages/${slug}`} className="block">
      <motion.div
        className={`group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 ${
          featured ? "border-2 border-primary" : "border border-border/50"
        }`}
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
          {featured && (
            <div className="absolute left-4 top-4 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-foreground">
              Featured
            </div>
          )}
          <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 flex items-center text-white">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center">
            <Calendar size={16} className="mr-2 text-primary" />
            <span className="text-sm text-foreground/70">{duration}</span>
          </div>
          <h3 className="mb-3 line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white">
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
