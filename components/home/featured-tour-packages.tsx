import { tourPackagesData } from "@/data/tour-packages";
import Link from "next/link";
import { SectionHeading } from "../common/section-heading";
import { TourCard } from "../common/tour-card";

const FeaturedTourPackages = () => {
  const featuredTours = tourPackagesData.slice(0, 3);
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Explore Our Popular Tour Packages"
          subtitle="Discover the beauty of Uganda with our carefully crafted tour packages that offer unforgettable experiences and adventures."
          centered
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.id} {...tour} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tour-packages" className="btn-outline">
            View All Tour Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTourPackages;
