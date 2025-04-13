import type { Metadata } from "next"
import { DestinationsHero } from "@/components/destinations/destinations-hero"
import { DestinationsList } from "@/components/destinations/destinations-list"
import { DestinationsCTA } from "@/components/destinations/destinations-cta"
import { destinationsData } from "@/data/destinations"

export const metadata: Metadata = {
  title: "Destinations | AAU Tours and Travel",
  description:
    "Explore Uganda's most beautiful destinations including national parks, wildlife reserves, and cultural sites.",
}

export default function DestinationsPage() {
  return (
    <>
      <DestinationsHero />
      <DestinationsList destinations={destinationsData} />
      <DestinationsCTA />
    </>
  )
}
