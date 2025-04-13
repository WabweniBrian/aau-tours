"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import type { Destination } from "@/types/destination";

interface DestinationOverviewProps {
  destination: Destination;
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-6">About {destination.title}</h2>
            <div className="prose max-w-none text-foreground/70">
              <p className="mb-6">{destination.description}</p>

              {destination.highlights && destination.highlights.length > 0 && (
                <>
                  <h3 className="mb-4 text-xl font-bold">Highlights</h3>
                  <ul className="mb-8 space-y-2">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Check
                          size={20}
                          className="mr-2 mt-1 flex-shrink-0 text-primary"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 translate-y-8 transform overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/chimpanzee.jpg"
                    alt={`${destination.title} scenery 1`}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/murchison-falls.webp"
                    alt={`${destination.title} scenery 2`}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/zan.jpg"
                    alt={`${destination.title} scenery 3`}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-48 translate-y-4 transform overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/lake-mburo-park.png"
                    alt={`${destination.title} scenery 4`}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
