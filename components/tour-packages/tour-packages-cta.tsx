"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function TourPackagesCTA() {
  return (
    <section className="pattern-bg bg-brand-green-50/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="mb-8 text-lg text-foreground/70">
              We specialize in creating custom tour packages tailored to your
              specific interests, timeframe, and budget. Let our travel experts
              design the perfect Ugandan adventure just for you.
            </p>
            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Personalized Itineraries</h3>
                  <p className="text-foreground/70">
                    Our team will work with you to create a custom itinerary
                    based on your interests and preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Flexible Budgeting</h3>
                  <p className="text-foreground/70">
                    We can work with various budget levels to create an
                    experience that meets your financial requirements.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/contact" className="btn-primary">
              Request Custom Tour
            </Link>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/custom-itenaries.jpg"
                alt="Custom tour experience"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 z-0 h-48 w-48 rounded-full bg-primary/20"></div>
            <div className="absolute -left-6 -top-6 z-0 h-32 w-32 rounded-full bg-primary/20"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
