import { TourPackagesCTA } from "@/components/tour-packages/tour-packages-cta";
import { TourPackagesHero } from "@/components/tour-packages/tour-packages-hero";
import { TourPackagesList } from "@/components/tour-packages/tour-packages-list";
import { tourPackagesData } from "@/data/tour-packages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages | AAU Tours and Travel",
  description:
    "Explore our wide range of tour packages including wildlife safaris, gorilla trekking, bird watching, and cultural tours across Uganda.",
};

export default function TourPackagesPage() {
  return (
    <>
      <TourPackagesHero />
      <TourPackagesList packages={tourPackagesData} />
      <TourPackagesCTA />
    </>
  );
}
