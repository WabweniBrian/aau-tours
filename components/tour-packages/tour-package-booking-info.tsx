"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import type { TourPackage } from "@/types/tour-package";

interface TourPackageBookingInfoProps {
  tourPackage: TourPackage;
}

export function TourPackageBookingInfo({
  tourPackage,
}: TourPackageBookingInfoProps) {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <motion.h2
              className="mb-6 text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Package Includes & Excludes
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="mb-4 text-xl font-bold text-primary">
                  Inclusions
                </h3>
                <ul className="space-y-3">
                  {tourPackage.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check
                        size={20}
                        className="mr-2 mt-1 flex-shrink-0 text-primary"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-bold text-red-500">
                  Exclusions
                </h3>
                <ul className="space-y-3">
                  {tourPackage.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X
                        size={20}
                        className="mr-2 mt-1 flex-shrink-0 text-red-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {tourPackage.additionalInfo &&
              tourPackage.additionalInfo.length > 0 && (
                <motion.div
                  className="mt-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="mb-4 text-xl font-bold">
                    Additional Information
                  </h3>
                  <ul className="space-y-3">
                    {tourPackage.additionalInfo.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 font-bold text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
          </div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24 rounded-2xl bg-brand-green-50 p-6">
              <h3 className="mb-6 text-xl font-bold">Book This Tour</h3>
              <p className="mb-6 text-foreground/70">
                Ready to embark on this adventure? Contact us to check
                availability and make your reservation.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Duration:</span>
                  <span>{tourPackage.duration}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Tour Type:</span>
                  <span>{tourPackage.tourType}</span>
                </div>
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium">Group Size:</span>
                  <span>Max {tourPackage.groupSize} people</span>
                </div>
              </div>

              <Link
                href={`/contact?message=${tourPackage.title} - Booking`}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
              >
                Book Now
              </Link>

              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/70">
                  Need more information? Send us a WhatsApp message
                  <button className="ml-1 inline-flex items-center rounded-full bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                    <a
                      href="https://wa.me/256756555777"
                      className="font-medium text-white"
                    >
                      Whatsapp
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
