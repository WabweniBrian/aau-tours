"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  testimonial: string;
  tourName?: string;
}

export function TestimonialCard({
  id,
  name,
  location,
  avatar,
  rating,
  testimonial,
  tourName,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="flex h-full flex-col rounded-3xl border border-border/50 bg-white p-6 shadow-lg"
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex items-start">
        <div className="relative mr-4 h-14 w-14 overflow-hidden rounded-full border-2 border-primary">
          <Image
            src={avatar || "/default-image.jpg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-sm text-foreground/70">{location}</p>
          {tourName && (
            <p className="mt-1 text-sm text-primary">Tour: {tourName}</p>
          )}
        </div>
      </div>

      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>

      <p className="flex-grow text-foreground/80">&quot;{testimonial}&quot;</p>

      <div className="mt-4 border-t border-border/50 pt-4 text-right">
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          Verified Review
        </div>
      </div>
    </motion.div>
  );
}
