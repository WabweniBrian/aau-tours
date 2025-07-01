"use client";

import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar, Users } from "lucide-react";

const motorsportEvents = [
  {
    id: 1,
    title: "Ugandan National Motorsports Championship Events",
    description:
      "Experience the thrill of local racing talent competing at the highest national level",
    icon: Trophy,
    features: ["Local racing circuits", "National champions"],
  },
  {
    id: 2,
    title: "East African Regional Motorsports Championship Events",
    description:
      "Witness regional competition as the best drivers from across East Africa compete",
    icon: MapPin,
    features: ["Multi-country events", "Regional champions"],
  },
  {
    id: 3,
    title: "African Continental Motorsports Championships Events",
    description:
      "Continental-level racing featuring Africa's premier motorsport talent",
    icon: Users,
    features: ["Continental series", "International drivers"],
  },
  {
    id: 4,
    title: "World Motorsports Championship Events",
    description:
      "Global motorsport events featuring world-class drivers and international competition",
    icon: Calendar,
    features: ["World championship", "Global venues"],
  },
];

export function MotorsportEvents() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="heading-lg mb-4">Championship Events Coverage</h2>
          <p className="mx-auto max-w-3xl text-xl text-foreground/70">
            From local championships to world-class racing events, we provide
            exclusive access and premium experiences for motorsport enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {motorsportEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon size={24} className="text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mb-4 text-foreground/70">
                      {event.description}
                    </p>
                    <ul className="space-y-2">
                      {event.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-foreground/80"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
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
