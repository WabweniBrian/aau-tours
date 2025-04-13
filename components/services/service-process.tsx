"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Calendar,
  CreditCard,
  Map,
  Compass,
  ThumbsUp,
} from "lucide-react";

export function ServiceProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Initial Consultation",
      description:
        "We begin by understanding your travel preferences, interests, budget, and timeframe to create a personalized experience.",
      color: "bg-blue-500",
    },
    {
      icon: Calendar,
      title: "Itinerary Planning",
      description:
        "Our experts craft a detailed itinerary based on your requirements, suggesting the best destinations and experiences.",
      color: "bg-green-500",
    },
    {
      icon: CreditCard,
      title: "Booking & Confirmation",
      description:
        "Once you approve the itinerary, we handle all bookings and provide you with a comprehensive travel package.",
      color: "bg-purple-500",
    },
    {
      icon: Map,
      title: "Pre-Trip Preparation",
      description:
        "We provide detailed information about your trip, including packing lists, visa requirements, and travel tips.",
      color: "bg-orange-500",
    },
    {
      icon: Compass,
      title: "Your Adventure",
      description:
        "Enjoy your Ugandan journey with our expert guides and support team available 24/7 to ensure everything runs smoothly.",
      color: "bg-yellow-500",
    },
    {
      icon: ThumbsUp,
      title: "Post-Trip Follow-Up",
      description:
        "We value your feedback and stay in touch after your trip to ensure your experience met or exceeded expectations.",
      color: "bg-red-500",
    },
  ];

  return (
    <section className="bg-brand-green-50/10 pattern-bg py-24">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Service Process
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From your first inquiry to your return home, we ensure a seamless
            and enjoyable experience. Here&apos;s how we work with you to create
            your perfect Ugandan adventure.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 bg-primary/20 md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex justify-center md:w-1/2">
                  <div
                    className={`relative z-10 h-20 w-20 rounded-full ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <step.icon size={36} />
                    <div className="animate-spin-slow absolute -inset-2 rounded-full border-2 border-dashed border-gray-200"></div>
                  </div>
                </div>

                <div className="text-center md:w-1/2 md:text-left">
                  <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
