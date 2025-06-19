"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesList() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold md:text-4xl"
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
            We offer a comprehensive range of travel and transportation services
            to make your Ugandan experience unforgettable. From motorsport
            adventures to airport transfers, we&apos;ve got you covered.
          </motion.p>
        </div>

        {/* Services in alternating grid layout */}
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-24">
            <motion.div
              className={`mb-24 grid grid-cols-1 items-center gap-12 ${
                index % 2 === 0
                  ? "lg:grid-cols-[3fr,2fr]"
                  : "lg:grid-cols-[2fr,3fr] lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content */}
              <div
                className={index % 2 === 0 ? "lg:pr-12" : "lg:order-2 lg:pl-12"}
              >
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className="text-2xl font-bold md:text-3xl">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-6 text-lg text-foreground/70">
                  {service.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-4 text-lg font-semibold">What we offer:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <svg
                            className="h-3 w-3 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
                >
                  {service.cta}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>

              {/* Image */}
              <div className={index % 2 === 0 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-[300px] w-full lg:h-[400px]"
                  >
                    <Image
                      src={service.image || "/default-image.jpg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Divider (except for last item) */}
            {index < services.length - 1 && (
              <div className="mx-auto mb-24 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
