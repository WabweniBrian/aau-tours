import { BookingClient } from "@/components/booking/booking-client";
import { tourPackagesData } from "@/data/tour-packages";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Booking",
};

export default function BookingPage({ params }: { params: { slug: string } }) {
  const tourPackage = tourPackagesData.find((pkg) => pkg.slug === params.slug);

  if (!tourPackage) notFound();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <BookingClient tourPackage={tourPackage} />
    </div>
  );
}
