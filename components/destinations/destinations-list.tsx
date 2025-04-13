"use client";

import { useState } from "react";
import { DestinationCard } from "@/components/common/destination-card";
import type { Destination } from "@/types/destination";
import { formatWord } from "@/lib/utils";

interface DestinationsListProps {
  destinations: Destination[];
}

export function DestinationsList({ destinations }: DestinationsListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(destinations.map((d) => d.category))),
  ];

  const filteredDestinations =
    activeCategory === "all"
      ? destinations
      : destinations.filter(
          (destination) => destination.category === activeCategory,
        );

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-foreground/80 hover:bg-gray-200"
              }`}
            >
              {formatWord(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              id={destination.id}
              title={destination.title}
              image={destination.image}
              tourCount={destination.tourCount}
              slug={destination.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
