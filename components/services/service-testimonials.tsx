"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function ServiceTestimonials() {
  const testimonials = [
    {
      id: "test1",
      name: "Kabuye Paul",
      location: "Kampala, Uganda",
      avatar: "/images/avatar.png",
      rating: 5,
      testimonial:
        "The safari experience with AAU Tours was exceptional. Our guide was incredibly knowledgeable about the wildlife and went above and beyond to ensure we had amazing sightings. The accommodations were comfortable and the food was delicious. I can't recommend their services enough!",
      service: "Safari Tours",
    },
    {
      id: "test2",
      name: "Nakato Licia",
      location: "Entebbe, Uganda",
      avatar: "/images/avatar.png",
      rating: 5,
      testimonial:
        "Gorilla trekking with AAU Tours was a dream come true. Everything was perfectly organized from the permits to the accommodation. Our guide was fantastic and made sure we had an incredible hour with the gorillas. It was truly a life-changing experience that I'll never forget.",
      service: "Gorilla Trekking",
    },
    {
      id: "test3",
      name: "Mugisha Benjamin",
      location: "Jinja, Uganda",
      avatar: "/images/avatar.png",
      rating: 5,
      testimonial:
        "As a photography enthusiast, I was looking for a tour that would allow me to capture Uganda's beauty. AAU Tours' photography package exceeded my expectations. The guide knew exactly where and when to position us for the best shots, and I came home with incredible images.",
      service: "Photography Tours",
    },
    {
      id: "test4",
      name: "Nabatanzi Sandrah",
      location: "Mbarara, Uganda",
      avatar: "/images/avatar.png",
      rating: 4,
      testimonial:
        "The cultural experiences arranged by AAU Tours gave us a genuine insight into Ugandan life. We visited local communities, participated in traditional activities, and had meaningful interactions with local people. It added a rich dimension to our wildlife-focused trip.",
      service: "Cultural Experiences",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative overflow-hidden bg-foreground py-24 text-white">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/default-image.jpg?height=1080&width=1920"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Read testimonials from travelers who have experienced our services
            and created unforgettable memories in Uganda.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm md:p-12"
            >
              <div className="relative mx-auto mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src={testimonials[activeIndex].avatar || "/default-image.jpg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mb-6 flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < testimonials[activeIndex].rating
                        ? "fill-current text-yellow-400"
                        : "text-gray-400"
                    }
                  />
                ))}
              </div>

              <blockquote className="mb-8 text-xl italic">
                &quot;{testimonials[activeIndex].testimonial}&quot;
              </blockquote>

              <div>
                <h4 className="text-xl font-bold">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-white/70">
                  {testimonials[activeIndex].location}
                </p>
                <div className="mt-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                  {testimonials[activeIndex].service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-primary md:translate-x-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 flex h-12 w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-colors hover:bg-primary md:translate-x-0"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoplay(false);
                setActiveIndex(index);
              }}
              className={`h-3 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
