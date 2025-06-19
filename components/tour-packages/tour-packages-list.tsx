"use client";

import { useState } from "react";
import { TourCard } from "@/components/common/tour-card";
import { TourCardList } from "@/components/tour-packages/tour-card-list";
import { Grid, List } from "lucide-react";
import type { TourPackage } from "@/types/tour-package";

interface TourPackagesListProps {
  packages: TourPackage[];
}

export function TourPackagesList({ packages }: TourPackagesListProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Showing <span className="text-primary">{packages.length}</span> tour
            packages
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-2 ${
                viewMode === "grid"
                  ? "bg-primary/10 text-primary"
                  : "bg-gray-100 text-foreground/60"
              }`}
              aria-label="Grid view"
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md p-2 ${
                viewMode === "list"
                  ? "bg-primary/10 text-primary"
                  : "bg-gray-100 text-foreground/60"
              }`}
              aria-label="List view"
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((tourPackage) => (
              <TourCard
                key={tourPackage.id}
                id={tourPackage.id}
                title={tourPackage.title}
                location={tourPackage.location}
                duration={tourPackage.duration}
                image={tourPackage.image}
                featured={tourPackage.featured}
                slug={tourPackage.slug}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {packages.map((tourPackage) => (
              <TourCardList
                key={tourPackage.id}
                id={tourPackage.id}
                title={tourPackage.title}
                location={tourPackage.location}
                duration={tourPackage.duration}
                image={tourPackage.image}
                description={tourPackage.shortDescription}
                highlights={tourPackage.highlights.slice(0, 3)}
                featured={tourPackage.featured}
                slug={tourPackage.slug}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
