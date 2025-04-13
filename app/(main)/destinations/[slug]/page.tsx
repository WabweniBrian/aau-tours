import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DestinationHero } from "@/components/destinations/destination-hero"
import { DestinationOverview } from "@/components/destinations/destination-overview"
import { DestinationTours } from "@/components/destinations/destination-tours"
import { destinationsData } from "@/data/destinations"
import { tourPackagesData } from "@/data/tour-packages"

interface DestinationPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const destination = destinationsData.find((dest) => dest.slug === params.slug)

  if (!destination) {
    return {
      title: "Destination Not Found | AAU Tours and Travel",
      description: "The requested destination could not be found.",
    }
  }

  return {
    title: `${destination.title} | AAU Tours and Travel`,
    description: destination.shortDescription,
  }
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = destinationsData.find((dest) => dest.slug === params.slug)

  if (!destination) {
    notFound()
  }

  // Filter tour packages related to this destination
  const relatedTours = tourPackagesData
    .filter((tour) => tour.location.includes(destination.title) || destination.relatedTourSlugs.includes(tour.slug))
    .slice(0, 3)

  return (
    <>
      <DestinationHero destination={destination} />
      <DestinationOverview destination={destination} />
      <DestinationTours tours={relatedTours} destinationName={destination.title} />
    </>
  )
}
