"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100]);

  const timelineEvents = [
    {
      year: "2008",
      title: "Our Beginning",
      description:
        "AAU Tours and Travel was established as a subsidiary of the Automobile Association of Uganda.",
    },
    {
      year: "2012",
      title: "Expansion",
      description:
        "We expanded our services to include specialized safari tours and gorilla trekking experiences.",
    },
    {
      year: "2015",
      title: "International Recognition",
      description:
        "Received our first international tourism award for excellence in safari experiences.",
    },
    {
      year: "2018",
      title: "Sustainability Initiative",
      description:
        "Launched our eco-tourism program focused on conservation and community development.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Embraced technology to enhance customer experiences and streamline booking processes.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          style={{ opacity, y }}
        >
          <h2 className="heading-md mb-6">Our Journey</h2>
          <p className="text-lg text-foreground/70">
            From our humble beginnings as a small tour operator to becoming one
            of Uganda&apos;s premier travel companies, our journey has been
            defined by passion, perseverance, and a deep love for showcasing the
            beauty of the Pearl of Africa.
          </p>
        </motion.div>

        {/* Creative Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform rounded-full bg-primary/20"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`relative z-10 mb-16 flex items-center last:mb-0 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className={`w-1/2 ${index % 2 === 0 ? "pr-6 text-right md:pr-12" : "pl-6 text-left md:pl-12"}`}
              >
                <div className="rounded-2xl border border-border/50 bg-white p-3 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 md:p-6">
                  <span className="text-xl font-bold text-primary">
                    {event.year}
                  </span>
                  <h3 className="mb-3 mt-2 text-xl font-bold">{event.title}</h3>
                  <p className="text-foreground/70">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-primary">
                <span className="font-bold text-white">
                  {event.year.substring(2)}
                </span>
              </div>

              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            className="bg-brand-green-50 relative overflow-hidden rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10"></div>
            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-primary/10"></div>
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="mb-4 text-foreground/80">
                To provide exceptional travel experiences that showcase
                Uganda&apos;s natural beauty and cultural heritage while
                promoting sustainable tourism practices that benefit local
                communities and conservation efforts.
              </p>
              <ul className="space-y-2">
                {[
                  "Exceptional service",
                  "Authentic experiences",
                  "Sustainable practices",
                  "Community support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-primary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="bg-brand-orange-50 relative overflow-hidden rounded-3xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-secondary/10"></div>
            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-secondary/10"></div>
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
              <p className="mb-4 text-foreground/80">
                To be the leading tour operator in East Africa, recognized for
                our commitment to excellence, innovation, and responsible
                tourism that preserves Uganda&apos;s natural wonders for future
                generations.
              </p>
              <ul className="space-y-2">
                {[
                  "Industry leadership",
                  "Innovation",
                  "Conservation",
                  "Global recognition",
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-2 h-2 w-2 rounded-full bg-secondary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
