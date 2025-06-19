import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TourPackageHero } from "@/components/tour-packages/tour-package-hero";
import { TourPackageOverview } from "@/components/tour-packages/tour-package-overview";
import { TourPackageItinerary } from "@/components/tour-packages/tour-package-itinerary";
import { TourPackageBookingInfo } from "@/components/tour-packages/tour-package-booking-info";
import { tourPackagesData } from "@/data/tour-packages";
import ShareButtons from "@/components/common/share-buttons";

interface TourPackagePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: TourPackagePageProps): Promise<Metadata> {
  const tourPackage = tourPackagesData.find(
    (tour) => tour.slug === params.slug,
  );

  if (!tourPackage) {
    return {
      title: "Tour Package Not Found | AAU Tours and Travel",
      description: "The requested tour package could not be found.",
    };
  }

  return {
    title: tourPackage.title,
    description: tourPackage.shortDescription,
    openGraph: {
      title: tourPackage.title,
      description: tourPackage.shortDescription,
      url: `https://aau-tours.vercel.app/tour-packages/${tourPackage.slug}`,
      type: "article",
      images: [
        {
          url: tourPackage.image,
          width: 1200,
          height: 630,
          alt: tourPackage.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: tourPackage.title,
      description: tourPackage.shortDescription,
      images: [tourPackage.image],
    },
  };
}

export default function TourPackagePage({ params }: TourPackagePageProps) {
  const tourPackage = tourPackagesData.find(
    (tour) => tour.slug === params.slug,
  );

  if (!tourPackage) {
    notFound();
  }

  return (
    <>
      <TourPackageHero tourPackage={tourPackage} />
      <TourPackageOverview tourPackage={tourPackage} />
      <TourPackageItinerary itinerary={tourPackage.itinerary} />
      <TourPackageBookingInfo tourPackage={tourPackage} />

      <ShareButtons
        title={tourPackage.title}
        url={`https://aau-tours.vercel.app/tour-packages/${tourPackage.slug}`}
      />
    </>
  );
}
