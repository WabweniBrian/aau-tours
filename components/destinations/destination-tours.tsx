"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TourCard } from "@/components/common/tour-card";
import type { TourPackage } from "@/types/tour-package";

interface DestinationToursProps {
  tours: TourPackage[];
  destinationName: string;
}

export function DestinationTours({
  tours,
  destinationName,
}: DestinationToursProps) {
  return (
    <section className="pattern-bg bg-brand-green-50/10 py-16">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md mb-4">Tours in {destinationName}</h2>
          <p className="text-foreground/70">
            Explore our carefully crafted tour packages that include visits to{" "}
            {destinationName}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tours.length > 0 ? (
            tours.map((tour) => (
              <TourCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                location={tour.location}
                duration={tour.duration}
                image={tour.image}
                featured={tour.featured}
                slug={tour.slug}
              />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <p className="mb-4 text-foreground/70">
                No specific tours available for this destination at the moment.
              </p>
              <p className="text-foreground/70">
                Contact us to create a custom itinerary that includes{" "}
                {destinationName}.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tour-packages" className="btn-primary">
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
