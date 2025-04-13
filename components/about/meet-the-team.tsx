"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function MeetTheTeam() {
  const teamMembers = [
    {
      id: "member1",
      name: "David Mukasa",
      role: "Founder & CEO",
      bio: "With over 20 years in the tourism industry, David founded AAU Tours and Travel with a vision to showcase Uganda's natural beauty to the world. His passion for conservation and sustainable tourism has shaped the company's core values.",
      image: "/images/avatar.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "member2",
      name: "Sarah Namukasa",
      role: "Operations Director",
      bio: "Sarah oversees all tour operations, ensuring every client receives exceptional service. Her attention to detail and commitment to excellence have been instrumental in building our reputation for quality experiences.",
      image: "/images/avatar.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "member3",
      name: "Robert Kigozi",
      role: "Head Safari Guide",
      bio: "With extensive knowledge of Uganda's wildlife and natural habitats, Robert leads our team of expert guides. His infectious enthusiasm and storytelling abilities make every safari an unforgettable adventure.",
      image: "/images/avatar.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "member4",
      name: "Grace Atwine",
      role: "Customer Experience Manager",
      bio: "Grace ensures that every aspect of your journey with us exceeds expectations. From your first inquiry to your return home, she works tirelessly to create seamless, personalized experiences for all our clients.",
      image: "/images/avatar.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      id: "member5",
      name: "Joseph Okello",
      role: "Conservation Specialist",
      bio: "Joseph leads our sustainability initiatives and ensures our tours contribute positively to conservation efforts. His background in environmental science brings valuable expertise to our eco-tourism programs.",
      image: "/images/avatar.png",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const [activeMember, setActiveMember] = useState(0);

  const nextMember = () => {
    setActiveMember((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevMember = () => {
    setActiveMember((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

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
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our passionate team of travel experts, guides, and specialists work
            together to create unforgettable experiences that showcase the best
            of Uganda.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={teamMembers[activeMember].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 items-center gap-12 md:grid-cols-2"
            >
              <div className="relative">
                <div className="relative z-10 aspect-square overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={
                      teamMembers[activeMember].image || "/default-image.jpg"
                    }
                    alt={teamMembers[activeMember].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 z-0 h-48 w-48 rounded-full bg-primary/20"></div>
                <div className="absolute -left-6 -top-6 z-0 h-32 w-32 rounded-full bg-primary/20"></div>
              </div>

              <div>
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  {teamMembers[activeMember].role}
                </span>
                <h3 className="mb-4 text-3xl font-bold">
                  {teamMembers[activeMember].name}
                </h3>
                <p className="mb-6 text-foreground/70">
                  {teamMembers[activeMember].bio}
                </p>

                <div className="mb-8 flex space-x-4">
                  <a
                    href={teamMembers[activeMember].social.facebook}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={teamMembers[activeMember].social.twitter}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={teamMembers[activeMember].social.linkedin}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary hover:text-white"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={prevMember}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextMember}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Team member indicators */}
          <div className="mt-12 flex justify-center space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMember(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeMember
                    ? "w-8 bg-primary"
                    : "w-3 bg-gray-300 hover:bg-primary/50"
                }`}
                aria-label={`View team member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
