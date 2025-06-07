"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Car, Plane, Trophy, Camera } from "lucide-react";

// Define the slide data
const slides = [
  {
    id: 1,
    title: "Game & Safari Tours",
    subtitle:
      "Discover Uganda's breathtaking wildlife and landscapes with our premium safari packages",
    image: "/images/safari-tours.jpg",
    icon: Camera,
    cta: {
      primary: {
        text: "View Tour Packages",
        link: "/tour-packages",
      },
      secondary: {
        text: "Learn More",
        link: "/services#safari-tours",
      },
    },
    location: "Uganda National Parks",
  },
  {
    id: 2,
    title: "Motorsport Tours",
    subtitle:
      "Experience the thrill of international motorsport events with our specialized rally tour packages",
    image: "/images/motorsport.jpg",
    icon: Trophy,
    cta: {
      primary: {
        text: "Explore Motorsport Tours",
        link: "/services#motorsport-tours",
      },
      secondary: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    location: "Kenya & Uganda",
  },

  {
    id: 3,
    title: "Airport Transfers",
    subtitle:
      "Professional and reliable airport pickup and drop-off services available 24/7",
    image: "/images/airport-transfers.webp",
    icon: Plane,
    cta: {
      primary: {
        text: "Book Transfer",
        link: "/services#airport-transfers",
      },
      secondary: {
        text: "Get Quote",
        link: "/contact",
      },
    },
    location: "Entebbe & Kampala",
  },
  {
    id: 4,
    title: "Car Leasing",
    subtitle:
      "Premium vehicle leasing for organizations and individuals with full fleet management",
    image: "/images/car-rentals.jpg",
    icon: Car,
    cta: {
      primary: {
        text: "View Fleet",
        link: "/services#car-leasing",
      },
      secondary: {
        text: "Request Quote",
        link: "/contact",
      },
    },
    location: "Nationwide Coverage",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsAnimating(false), 1000); // Match this with animation duration
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 1000); // Match this with animation duration
    }
  };

  // Animation variants
  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] },
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.2,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
  };

  return (
    <section className="relative h-[85vh] max-h-[900px] min-h-[600px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          initial="enter"
          animate={index === currentSlide ? "center" : "exit"}
          variants={slideVariants}
          style={{
            display:
              index === currentSlide ||
              index === (currentSlide - 1 + slides.length) % slides.length
                ? "block"
                : "none",
          }}
        >
          <Image
            src={slide.image || "/default-image.jpg"}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </motion.div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 flex h-full flex-col justify-center">
        <motion.div
          key={slides[currentSlide].id}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-white"
        >
          <motion.div
            className="mb-6 inline-flex items-center rounded-full bg-brand-orange/80 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
            custom={0}
            variants={contentVariants}
          >
            {(() => {
              const Icon = slides[currentSlide].icon;
              return <Icon size={16} className="mr-2" />;
            })()}
            {slides[currentSlide].location}
          </motion.div>

          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            custom={1}
            variants={contentVariants}
          >
            {slides[currentSlide].title}
          </motion.h1>

          <motion.p
            className="mb-8 max-w-2xl text-xl text-white/90 md:text-2xl"
            custom={2}
            variants={contentVariants}
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            custom={3}
            variants={contentVariants}
          >
            <Link
              href={slides[currentSlide].cta.primary.link}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              {slides[currentSlide].cta.primary.text}
            </Link>
            <Link
              href={slides[currentSlide].cta.secondary.link}
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
            >
              {slides[currentSlide].cta.secondary.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Card */}
        <motion.div
          className="absolute bottom-12 right-8 hidden max-w-xs rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur-md md:block lg:right-16"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="mb-2 text-lg font-bold">
            Professional Travel Services
          </h3>
          <p className="mb-4 text-sm text-foreground/70">
            From motorsport adventures to airport transfers, we provide
            comprehensive travel solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center font-medium text-primary hover:underline"
          >
            Contact Us <ChevronRight size={16} className="ml-1" />
          </Link>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 transform space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-8 top-1/4 hidden h-24 w-24 rounded-full border-2 border-primary/30 lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 hidden h-16 w-16 rounded-full border-2 border-secondary/30 lg:block"></div>
      <div className="absolute right-1/3 top-1/3 hidden h-8 w-8 rounded-full bg-primary/20 lg:block"></div>
    </section>
  );
}
