"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Globe, Lightbulb, Award } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "We are passionate about travel and sharing the beauty of Uganda with our guests.",
      color: "bg-red-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and ethical business practices in all we do.",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our clients' satisfaction and safety are our top priorities in every experience we create.",
      color: "bg-purple-500",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We are committed to environmentally responsible tourism that preserves natural resources.",
      color: "bg-green-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new ways to enhance our services and create unique experiences.",
      color: "bg-yellow-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in every aspect of our service delivery.",
      color: "bg-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="bg-brand-green-50/10 pattern-bg relative overflow-hidden py-24">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            These principles guide everything we do, from how we design our
            tours to how we interact with our clients, partners, and the
            communities we visit.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              variants={itemVariants}
            >
              <div className="relative z-10 h-full transform rounded-2xl border border-border/50 bg-white p-8 shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <div
                  className={`h-16 w-16 rounded-xl ${value.color} mb-6 flex items-center justify-center text-white`}
                >
                  <value.icon size={32} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
              <div className="absolute inset-0 transform rounded-2xl bg-primary/5 transition-all duration-300 group-hover:rotate-1 group-hover:scale-105"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border/50 bg-white p-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="mb-4 text-center text-xl font-bold">
            Our Commitment to You
          </h3>
          <p className="text-center text-foreground/70">
            When you travel with AAU Tours and Travel, you&apos;re not just a
            customer – you&apos;re part of our family. We promise to deliver
            experiences that exceed your expectations, create memories that last
            a lifetime, and ensure your journey through Uganda is as seamless as
            it is spectacular.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
