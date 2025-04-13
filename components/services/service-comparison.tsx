"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

export function ServiceComparison() {
  const packages = [
    {
      name: "Essential",
      description:
        "Perfect for budget-conscious travelers seeking authentic experiences",
      price: "From $800",
      features: [
        { name: "Airport Transfers", included: true },
        { name: "Accommodation", included: true, note: "3-star lodges" },
        { name: "Transportation", included: true },
        { name: "Guided Tours", included: true },
        { name: "Meals", included: true, note: "Breakfast only" },
        { name: "Park Entrance Fees", included: true },
        { name: "Gorilla Permits", included: false },
        { name: "Photography Guide", included: false },
        { name: "Luxury Amenities", included: false },
      ],
      popular: false,
      color: "border-gray-200 hover:border-primary/50",
      buttonClass:
        "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
    },
    {
      name: "Premium",
      description:
        "Our most popular option with a perfect balance of comfort and experiences",
      price: "From $1,500",
      features: [
        { name: "Airport Transfers", included: true },
        { name: "Accommodation", included: true, note: "4-star lodges" },
        { name: "Transportation", included: true },
        { name: "Guided Tours", included: true },
        { name: "Meals", included: true, note: "Full board" },
        { name: "Park Entrance Fees", included: true },
        { name: "Gorilla Permits", included: true },
        { name: "Photography Guide", included: false },
        { name: "Luxury Amenities", included: true, note: "Selected" },
      ],
      popular: true,
      color: "border-primary shadow-lg",
      buttonClass: "bg-primary text-white hover:bg-primary/90",
    },
    {
      name: "Luxury",
      description:
        "The ultimate Ugandan experience with exclusive accommodations and services",
      price: "From $3,000",
      features: [
        { name: "Airport Transfers", included: true, note: "Private" },
        { name: "Accommodation", included: true, note: "5-star luxury" },
        { name: "Transportation", included: true, note: "Private 4x4" },
        { name: "Guided Tours", included: true, note: "Private" },
        { name: "Meals", included: true, note: "Gourmet" },
        { name: "Park Entrance Fees", included: true },
        { name: "Gorilla Permits", included: true },
        { name: "Photography Guide", included: true },
        { name: "Luxury Amenities", included: true },
      ],
      popular: false,
      color: "border-gray-200 hover:border-primary/50",
      buttonClass:
        "bg-white text-primary border border-primary hover:bg-primary hover:text-white",
    },
  ];

  return (
    <section className="bg-brand-green-50 py-24">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Service Packages
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer a range of service packages to suit different preferences
            and budgets. Compare our options to find the perfect fit for your
            Ugandan adventure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`rounded-2xl border-2 p-6 ${pkg.color} relative overflow-hidden transition-all duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {pkg.popular && (
                <div className="absolute right-0 top-0">
                  <div className="rounded-bl-lg bg-primary px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="mb-2 text-2xl font-bold">{pkg.name}</h3>
              <p className="mb-4 text-sm text-foreground/70">
                {pkg.description}
              </p>
              <p className="mb-6 text-2xl font-bold text-primary">
                {pkg.price}
              </p>

              <div className="mb-8 space-y-3">
                {pkg.features.map((feature) => (
                  <div key={feature.name} className="flex items-start">
                    {feature.included ? (
                      <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    ) : (
                      <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    )}
                    <div>
                      <span className={feature.included ? "" : "text-gray-500"}>
                        {feature.name}
                      </span>
                      {feature.note && (
                        <span className="block text-xs text-foreground/50">
                          {feature.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className={`w-full rounded-full px-4 py-3 text-center font-medium transition-colors ${pkg.buttonClass}`}
              >
                Book This Package
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-foreground/70">
            Need something more specific? We specialize in custom packages
            tailored to your exact requirements.
          </p>
          <Link
            href="/contact"
            className="font-medium text-primary hover:underline"
          >
            Contact us for a custom quote
          </Link>
        </div>
      </div>
    </section>
  );
}
