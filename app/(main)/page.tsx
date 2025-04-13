import AboutUs from "@/components/home/about-us-section";
import CTA from "@/components/home/cta";
import FeaturedTourPackages from "@/components/home/featured-tour-packages";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersSection } from "@/components/home/partners-section";
import PopularDestinations from "@/components/home/popular-destinations";
import { QuickContactForm } from "@/components/home/quick-contact-form";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tour Packages */}
      <FeaturedTourPackages />

      {/* About Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Services Section */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* Partners Section */}
      <PartnersSection />

      {/* Quick Contact Form */}
      <QuickContactForm />

      {/* Call to Action */}
      <CTA />
    </>
  );
}
