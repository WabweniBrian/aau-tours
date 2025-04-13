"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ArrowRight, Check } from "lucide-react";

interface TourCardListProps {
  id: string;
  title: string;
  location: string;
  duration: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  highlights: string[];
  featured?: boolean;
  slug: string;
}

export function TourCardList({
  id,
  title,
  location,
  duration,
  image,
  price,
  rating,
  description,
  highlights,
  featured = false,
  slug,
}: TourCardListProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 ${
        featured ? "border-2 border-primary" : "border border-border/50"
      }`}
      whileHover={{
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="relative h-64 overflow-hidden md:h-auto md:w-1/3">
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
          <div className="absolute bottom-4 right-4 flex items-center rounded-full bg-white/90 px-2 py-1">
            <Star size={14} className="mr-1 text-yellow-500" />
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="flex flex-col p-6 md:w-2/3">
          <div className="mb-2 flex items-center">
            <Calendar size={16} className="mr-2 text-primary" />
            <span className="text-sm text-foreground/70">{duration}</span>
          </div>
          <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-foreground/70">{description}</p>

          <div className="mb-4">
            <h4 className="mb-2 text-sm font-semibold">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <Check
                    size={16}
                    className="mr-2 mt-0.5 flex-shrink-0 text-primary"
                  />
                  <span className="text-sm text-foreground/70">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div>
              <span className="text-sm text-foreground/70">From</span>
              <p className="text-xl font-bold text-primary">${price}</p>
            </div>
            <Link
              href={`/tour-packages/${slug}`}
              className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              View Details <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
