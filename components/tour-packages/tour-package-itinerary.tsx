"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  MapPin,
  Coffee,
  Utensils,
  Hotel,
  Camera,
} from "lucide-react";
import type { TourItineraryDay } from "@/types/tour-package";

interface TourPackageItineraryProps {
  itinerary: TourItineraryDay[];
}

export function TourPackageItinerary({ itinerary }: TourPackageItineraryProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(0);

  const toggleDay = (dayIndex: number) => {
    setExpandedDay(expandedDay === dayIndex ? null : dayIndex);
  };

  return (
    <section className="bg-brand-green-50 pattern-bg py-16">
      <div className="container-custom">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-md mb-4">Tour Itinerary</h2>
          <p className="text-foreground/70">
            A day-by-day breakdown of your journey, including activities,
            accommodations, and meals.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          {itinerary.map((day, index) => (
            <motion.div
              key={index}
              className="mb-4 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleDay(index)}
                className={`flex w-full items-center justify-between rounded-xl p-6 text-left transition-all ${
                  expandedDay === index
                    ? "rounded-b-none bg-primary text-white"
                    : "bg-white shadow-sm hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-4 flex h-10 w-10 items-center justify-center rounded-full ${
                      expandedDay === index ? "bg-white/20" : "bg-primary/10"
                    }`}
                  >
                    <span
                      className={
                        expandedDay === index ? "text-white" : "text-primary"
                      }
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">
                      Day {index + 1}: {day.title}
                    </h3>
                    <p
                      className={
                        expandedDay === index
                          ? "text-white/80"
                          : "text-foreground/70"
                      }
                    >
                      <MapPin size={14} className="mr-1 inline" />{" "}
                      {day.location}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`transition-transform ${expandedDay === index ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>

              <AnimatePresence>
                {expandedDay === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-b-xl bg-white shadow-sm"
                  >
                    <div className="border-t border-gray-100 p-6">
                      <div className="prose mb-6 max-w-none">
                        <p>{day.description}</p>
                      </div>

                      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Camera size={16} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="mb-1 font-medium">Activities</h4>
                            <ul className="space-y-1">
                              {day.activities.map((activity, actIndex) => (
                                <li
                                  key={actIndex}
                                  className="text-sm text-foreground/70"
                                >
                                  • {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <Hotel size={16} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="mb-1 font-medium">Accommodation</h4>
                            <p className="text-sm text-foreground/70">
                              {day.accommodation}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center rounded-full bg-gray-50 px-3 py-1.5">
                          <Coffee size={16} className="mr-2 text-primary" />
                          <span className="text-sm">
                            Breakfast:{" "}
                            {day.meals.breakfast ? "Included" : "Not included"}
                          </span>
                        </div>
                        <div className="flex items-center rounded-full bg-gray-50 px-3 py-1.5">
                          <Utensils size={16} className="mr-2 text-primary" />
                          <span className="text-sm">
                            Lunch:{" "}
                            {day.meals.lunch ? "Included" : "Not included"}
                          </span>
                        </div>
                        <div className="flex items-center rounded-full bg-gray-50 px-3 py-1.5">
                          <Utensils size={16} className="mr-2 text-primary" />
                          <span className="text-sm">
                            Dinner:{" "}
                            {day.meals.dinner ? "Included" : "Not included"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
