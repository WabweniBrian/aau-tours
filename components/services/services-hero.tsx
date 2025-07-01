"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/safari-tours.jpg"
          alt="Safari landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6 text-white">
              Exceptional Travel Services
            </h1>
            <p className="mb-8 max-w-xl text-xl text-white/90">
              From thrilling wildlife safaris to cultural immersions, our
              comprehensive range of services ensures your Ugandan adventure is
              seamless, memorable, and tailored to your preferences.
            </p>

            <div className="mb-8 flex flex-wrap gap-4">
              <motion.div
                className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-1 font-bold text-white">Personalized</h3>
                <p className="text-sm text-white/80">
                  Tailored to your preferences
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl border border-primary/30 bg-primary/30 p-4 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-1 font-bold text-white">Professional</h3>
                <p className="text-sm text-white/80">
                  Expert guides and service
                </p>
              </motion.div>

              <motion.div
                className="rounded-xl border border-secondary/30 bg-secondary/30 p-4 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-1 font-bold text-white">Memorable</h3>
                <p className="text-sm text-white/80">
                  Unforgettable experiences
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 translate-y-8 transform overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/aau-safari.webp"
                    alt="Safari experience"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/hotel-booking.jpg"
                    alt="Hotel booking"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/custom-itenaries.jpg"
                    alt="Custom itenaries"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-48 translate-y-4 transform overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/images/airport-transfers.webp"
                    alt="Airport transfers"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
