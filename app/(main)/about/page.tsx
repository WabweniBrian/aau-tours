import Link from "next/link";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { OurStory } from "@/components/about/our-story";
import { MeetTheTeam } from "@/components/about/meet-the-team";
import { CoreValues } from "@/components/about/core-values";
import { Achievements } from "@/components/about/achievements";
import { AboutFaq } from "@/components/about/about-faq";
import CTA from "@/components/about/cta";

export const metadata: Metadata = {
  title: "About Us | AAU Tours and Travel",
  description:
    "Learn about AAU Tours and Travel, our story, mission, and the team behind your unforgettable Ugandan adventures.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <MeetTheTeam />
      <Achievements />
      <AboutFaq />
      <CTA />
    </>
  );
}
