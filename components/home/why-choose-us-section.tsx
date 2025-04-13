"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/common/section-heading";
import {
  Award,
  Users,
  Map,
  Clock,
  ThumbsUp,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    id: "experience",
    title: "Years of Experience",
    description:
      "With over 15 years in the tourism industry, we have the expertise to create unforgettable travel experiences.",
    icon: Award,
  },
  {
    id: "local",
    title: "Local Knowledge",
    description:
      "Our team consists of local experts who know Uganda inside out, ensuring you experience the authentic beauty of our country.",
    icon: Map,
  },
  {
    id: "customization",
    title: "Tailor-Made Tours",
    description:
      "We customize every aspect of your journey to match your preferences, interests, and budget.",
    icon: Users,
  },
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Our dedicated team is available around the clock to assist you with any questions or concerns during your trip.",
    icon: Clock,
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description:
      "We maintain high standards in all our services, from transportation to accommodation and guided tours.",
    icon: ThumbsUp,
  },
  {
    id: "value",
    title: "Value for Money",
    description:
      "We offer competitive pricing without compromising on the quality of your travel experience.",
    icon: HeartHandshake,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-brand-green-50/10 pattern-bg">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Discover what sets AAU Tours and Travel apart and why travelers trust us for their Ugandan adventures."
          centered
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-start">
                  <div className="mr-4 rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{reason.title}</h3>
                    <p className="text-sm text-foreground/70">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
