"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function AboutFaq() {
  const faqs = [
    {
      question: "How long has AAU Tours and Travel been operating?",
      answer:
        "AAU Tours and Travel has been operating for over 15 years. We were established in 2008 as a subsidiary of the Automobile Association of Uganda, bringing together expertise in both automotive and tourism sectors to create exceptional travel experiences.",
    },
    {
      question: "What makes AAU Tours different from other tour operators?",
      answer:
        "As a subsidiary of the Automobile Association of Uganda, we have unique access to a global network of travel and automotive resources. We combine this with our deep local knowledge, commitment to sustainability, and personalized service approach to create truly distinctive experiences that showcase the best of Uganda.",
    },
    {
      question: "Are your tours suitable for families with children?",
      answer:
        "Yes, many of our tours are family-friendly and can be customized to accommodate children of different ages. We offer special family safari packages, cultural experiences, and activities that are engaging for both adults and children. Our team can help design an itinerary that ensures everyone in your family has a memorable experience.",
    },
    {
      question: "How do you contribute to conservation and local communities?",
      answer:
        "Sustainability is at the core of our operations. We contribute to conservation through partnerships with wildlife protection organizations, practicing responsible tourism, and educating our clients about conservation issues. We also support local communities by employing local guides, using locally-owned accommodations, and contributing to community development projects in the areas we visit.",
    },
    {
      question: "What qualifications do your guides have?",
      answer:
        "All our guides are professionally trained and certified by the Uganda Tourism Board. They have extensive knowledge of Uganda's wildlife, culture, and history, as well as first aid training and safety certifications. Many of our guides have over 10 years of experience and speak multiple languages to better serve our international clients.",
    },
    {
      question: "Can you arrange custom or private tours?",
      answer:
        "Custom and private tours are our specialty. We work closely with you to understand your interests, preferences, and requirements, then design a tailor-made itinerary that delivers exactly the experience you're looking for. Whether it's a special interest tour, a family adventure, or a luxury private safari, we can create it for you.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="heading-md mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-foreground/70 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have questions about our company? Find answers to commonly asked questions below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all ${
                  activeIndex === index ? "bg-primary text-white" : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-50 rounded-b-xl border-t border-gray-100">
                      <p className="text-foreground/70">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
