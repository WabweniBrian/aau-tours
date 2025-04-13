"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import type { TourPackage } from "@/types/tour-package";

interface TourPackageHeroProps {
  tourPackage: TourPackage;
}

export function TourPackageHero({ tourPackage }: TourPackageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={tourPackage.image || "/default-image.jpg"}
          alt={tourPackage.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {tourPackage.title}
            </h1>
            <p className="mb-6 text-lg text-white/90 md:text-xl">
              {tourPackage.shortDescription}
            </p>

            <div className="mb-8 flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center">
                <MapPin size={20} className="text-primary-300 mr-2" />
                <span>{tourPackage.location}</span>
              </div>
              <div className="flex items-center">
                <Clock size={20} className="text-primary-300 mr-2" />
                <span>{tourPackage.duration}</span>
              </div>
              <div className="flex items-center">
                <Users size={20} className="text-primary-300 mr-2" />
                <span>Max {tourPackage.groupSize} people</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="text-primary-300 mr-2" />
                <span>{tourPackage.tourType}</span>
              </div>
              <div className="flex items-center">
                <Star size={20} className="mr-2 text-yellow-400" />
                <span>
                  {tourPackage.rating} ({Math.floor(Math.random() * 50) + 10}{" "}
                  reviews)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* <Link
                href={`/booking/${tourPackage.slug}`}
                className="btn-primary"
              >
                Book Now - ${tourPackage.price} per person
              </Link> */}
              <Link href="/contact" className="btn-outline-white">
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
