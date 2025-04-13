"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  CarIcon as Jeep,
  Plane,
  MapPin,
  Camera,
  Users,
  Car,
  Calendar,
  ChevronRight,
} from "lucide-react";

export function ServicesList() {
  const services = [
    {
      id: "safari-tours",
      title: "Safari Tours",
      shortDescription:
        "Experience Uganda's incredible wildlife in their natural habitats.",
      fullDescription:
        "Our safari tours take you through Uganda's most spectacular national parks, where you'll encounter diverse wildlife including elephants, lions, giraffes, and countless bird species. Our experienced guides ensure you have the best possible wildlife viewing opportunities while learning about conservation efforts and ecosystems.",
      icon: Jeep,
      image: "/images/safari-tours.jpg",
      features: [
        "Professional wildlife guides",
        "Comfortable 4x4 safari vehicles",
        "Accommodation in carefully selected lodges",
        "All park entrance fees included",
        "Customizable itineraries",
      ],
      link: "/services/safari-tours",
    },
    {
      id: "gorilla-trekking",
      title: "Gorilla Trekking",
      shortDescription:
        "Get up close with mountain gorillas in their natural habitat.",
      fullDescription:
        "Our gorilla trekking experiences in Bwindi Impenetrable Forest offer a once-in-a-lifetime opportunity to observe these magnificent creatures in their natural environment. Led by expert trackers and guides, you'll trek through lush forests to spend a precious hour with a gorilla family, witnessing their behaviors and social interactions.",
      icon: MapPin,
      image: "/images/gorilla-trekking.jpg",
      features: [
        "Gorilla permits secured for you",
        "Expert local trackers and guides",
        "Pre-trek briefing and preparation",
        "Comfortable accommodation options",
        "Conservation contribution included",
      ],
      link: "/services/gorilla-trekking",
    },
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      shortDescription:
        "Seamless transportation from the airport to your accommodation.",
      fullDescription:
        "Our reliable airport transfer service ensures a smooth start and end to your Ugandan adventure. We'll meet you at Entebbe International Airport and transport you comfortably to your accommodation in Kampala or elsewhere in Uganda. Our drivers are professional, punctual, and knowledgeable about the local area.",
      icon: Plane,
      image: "/images/airport-transfers.webp",
      features: [
        "Meet and greet service",
        "Comfortable, air-conditioned vehicles",
        "Professional, English-speaking drivers",
        "24/7 availability",
        "Luggage assistance",
      ],
      link: "/services/airport-transfers",
    },
    {
      id: "photography-tours",
      title: "Photography Tours",
      shortDescription:
        "Capture Uganda's stunning landscapes and wildlife with expert guidance.",
      fullDescription:
        "Designed for photography enthusiasts of all levels, our photography tours combine the best of Uganda's scenic beauty with expert photography guidance. Whether you're capturing the dramatic landscapes of the Rwenzori Mountains or the intimate moments of wildlife in Queen Elizabeth National Park, our photography guides help you get the perfect shot.",
      icon: Camera,
      image: "/images/photography-tours.jpg",
      features: [
        "Professional photography guides",
        "Optimal timing for lighting conditions",
        "Special access to photographic locations",
        "Small groups for personalized attention",
        "Post-processing workshops available",
      ],
      link: "/services/photography-tours",
    },
    {
      id: "cultural-experiences",
      title: "Cultural Experiences",
      shortDescription: "Immerse yourself in Uganda's rich cultural heritage.",
      fullDescription:
        "Our cultural experiences offer authentic insights into Uganda's diverse traditions, music, dance, and way of life. Visit local communities, participate in traditional activities, learn about crafts and cuisine, and engage with local people to gain a deeper understanding of Uganda's cultural heritage.",
      icon: Users,
      image: "/images/cultural-experiences.webp",
      features: [
        "Community-based tourism initiatives",
        "Traditional music and dance performances",
        "Craft workshops and demonstrations",
        "Local cuisine experiences",
        "Respectful cultural exchanges",
      ],
      link: "/services/cultural-experiences",
    },
    {
      id: "car-rentals",
      title: "Car Rentals",
      shortDescription:
        "Explore Uganda at your own pace with our reliable vehicles.",
      fullDescription:
        "Our car rental service provides well-maintained vehicles for those who prefer to explore Uganda independently. Choose from a range of options, from compact cars for city exploration to robust 4x4 vehicles for more adventurous journeys. All our vehicles are regularly serviced and come with comprehensive insurance for peace of mind.",
      icon: Car,
      image: "/images/car-rentals.jpg",
      features: [
        "Wide range of vehicles available",
        "Comprehensive insurance included",
        "24/7 roadside assistance",
        "Optional GPS navigation",
        "Self-drive or chauffeur options",
      ],
      link: "/services/car-rentals",
    },
    {
      id: "custom-itineraries",
      title: "Custom Itineraries",
      shortDescription: "Tailor-made travel experiences designed just for you.",
      fullDescription:
        "Our custom itinerary service creates personalized travel experiences based on your interests, timeframe, and budget. Whether you're seeking adventure, relaxation, wildlife encounters, or cultural immersion, our travel experts will craft a bespoke journey that perfectly matches your preferences and ensures a memorable Ugandan experience.",
      icon: Calendar,
      image: "/images/custom-itenaries.jpg",
      features: [
        "Personalized planning consultation",
        "Flexible scheduling and adjustments",
        "Accommodation matched to your preferences",
        "Special interest incorporation",
        "Detailed day-by-day itineraries",
      ],
      link: "/services/custom-itineraries",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services-list" className="bg-white py-24">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer a comprehensive range of travel services to make your
            Ugandan adventure unforgettable. Explore our offerings and find the
            perfect experience for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="mb-6 text-xl font-bold">Explore Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={`flex w-full items-center rounded-xl p-4 text-left transition-all ${
                      activeService.id === service.id
                        ? "bg-primary text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`mr-4 rounded-lg p-2 ${
                        activeService.id === service.id
                          ? "bg-white/20"
                          : "bg-primary/10"
                      }`}
                    >
                      <service.icon
                        size={20}
                        className={
                          activeService.id === service.id
                            ? "text-white"
                            : "text-primary"
                        }
                      />
                    </div>
                    <span className="font-medium">{service.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activeService.image || "/default-image.jpg"}
                    alt={activeService.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {activeService.title}
                    </h3>
                    <p className="text-white/90">
                      {activeService.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="mb-6 text-foreground/70">
                    {activeService.fullDescription}
                  </p>

                  <h4 className="mb-4 text-lg font-bold">Key Features:</h4>
                  <ul className="mb-6 space-y-2">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                          <svg
                            className="h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* 
                  <Link
                    href={activeService.link}
                    className="inline-flex items-center font-medium text-primary hover:underline"
                  >
                    Learn more about {activeService.title}{" "}
                    <ChevronRight size={16} className="ml-1" />
                  </Link> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
