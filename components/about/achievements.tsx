"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Trophy, ThumbsUp, Users, Calendar } from "lucide-react";
import Image from "next/image";

export function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );

  const stats = [
    { icon: Trophy, value: "15+", label: "Years of Excellence" },
    { icon: ThumbsUp, value: "98%", label: "Client Satisfaction" },
    { icon: Users, value: "10,000+", label: "Happy Travelers" },
    { icon: Calendar, value: "1,200+", label: "Tours Completed" },
  ];

  const awards = [
    {
      year: "2022",
      title: "Best Tour Operator in Uganda",
      organization: "Uganda Tourism Board",
      image: "/default-image.jpg?height=100&width=100",
    },
    {
      year: "2021",
      title: "Excellence in Sustainable Tourism",
      organization: "East African Tourism Awards",
      image: "/default-image.jpg?height=100&width=100",
    },
    {
      year: "2019",
      title: "Top Safari Experience Provider",
      organization: "World Travel Awards",
      image: "/default-image.jpg?height=100&width=100",
    },
    {
      year: "2017",
      title: "Community Impact Award",
      organization: "Responsible Tourism Initiative",
      image: "/default-image.jpg?height=100&width=100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground py-24 text-white"
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/default-image.jpg?height=1080&width=1920"
          alt="Background texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          style={{ opacity, scale }}
        >
          <h2 className="heading-md mb-6">Our Achievements</h2>
          <p className="text-lg text-white/80">
            Over the years, we&apos;ve been recognized for our commitment to
            excellence, sustainability, and creating exceptional travel
            experiences. Here are some of our proudest achievements.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <stat.icon size={28} className="text-primary" />
              </div>
              <h3 className="mb-2 text-3xl font-bold">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <h3 className="mb-8 text-center text-2xl font-bold">
          Awards & Recognition
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={award.image || "/default-image.jpg"}
                    alt={award.organization}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold">{award.year}</span>
              </div>
              <h4 className="mb-2 text-lg font-bold">{award.title}</h4>
              <p className="text-sm text-white/70">{award.organization}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-6 text-center text-2xl font-bold">
            Our Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
                  <Image
                    src="/default-image.jpg?height=60&width=60"
                    alt={`Certification ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-white/80">
                  Certified{" "}
                  {index === 0
                    ? "Tour Operator"
                    : index === 1
                      ? "Eco-Tourism Provider"
                      : index === 2
                        ? "Safety Standards"
                        : "Quality Service"}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
