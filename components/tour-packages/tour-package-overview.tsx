"use client";

import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Calendar,
  Users,
  MapPin,
  Utensils,
  Wifi,
  Coffee,
  Car,
} from "lucide-react";
import type { TourPackage } from "@/types/tour-package";

interface TourPackageOverviewProps {
  tourPackage: TourPackage;
}

export function TourPackageOverview({ tourPackage }: TourPackageOverviewProps) {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.h2
              className="mb-6 text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tour Overview
            </motion.h2>

            <motion.div
              className="prose max-w-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-6 text-lg">{tourPackage.description}</p>

              <h3 className="mb-4 text-xl font-bold">Highlights</h3>
              <ul className="mb-8 space-y-2">
                {tourPackage.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check
                      size={20}
                      className="mr-2 mt-1 flex-shrink-0 text-primary"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24 rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-6 text-xl font-bold">Tour Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-foreground/70">{tourPackage.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Tour Type</p>
                    <p className="text-foreground/70">{tourPackage.tourType}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Group Size</p>
                    <p className="text-foreground/70">
                      Max {tourPackage.groupSize} people
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground/70">{tourPackage.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Utensils size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Meals</p>
                    <p className="text-foreground/70">{tourPackage.meals}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="mb-3 font-bold">Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <Car size={16} className="mr-2 text-primary" />
                      <span className="text-sm">Transportation</span>
                    </div>
                    <div className="flex items-center">
                      <Wifi size={16} className="mr-2 text-primary" />
                      <span className="text-sm">Wifi (at lodges)</span>
                    </div>
                    <div className="flex items-center">
                      <Coffee size={16} className="mr-2 text-primary" />
                      <span className="text-sm">Refreshments</span>
                    </div>
                    <div className="flex items-center">
                      <Check size={16} className="mr-2 text-primary" />
                      <span className="text-sm">Guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
