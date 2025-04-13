import Link from "next/link";
import { DestinationCard } from "../common/destination-card";
import { SectionHeading } from "../common/section-heading";
import { destinationsData } from "@/data/destinations";

const PopularDestinations = () => {
  const popularDestinations = destinationsData.slice(0, 3);
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Explore Popular Destinations"
          subtitle="Discover the most breathtaking and exciting destinations across Uganda and beyond."
          centered
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/destinations" className="btn-outline">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
