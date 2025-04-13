"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function DestinationsCTA() {
  return (
    <section className="bg-brand-green-50/10 pattern-bg py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Explore Uganda?
          </motion.h2>
          <motion.p
            className="mb-8 text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us today to plan your perfect Ugandan adventure. Our team of
            experts will help you create a customized itinerary based on your
            interests and preferences.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/tour-packages" className="btn-outline">
              View Tour Packages
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
