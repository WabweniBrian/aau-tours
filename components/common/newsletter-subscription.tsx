"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success simulation
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Stay updated with our latest tour packages, travel tips, and exclusive offers. Join our community of
              adventure seekers!
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-full border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                required
                disabled={isSubmitting || isSuccess}
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap" disabled={isSubmitting || isSuccess}>
              {isSubmitting ? (
                "Subscribing..."
              ) : isSuccess ? (
                "Subscribed!"
              ) : (
                <>
                  Subscribe <Send size={16} className="ml-2" />
                </>
              )}
            </button>
          </motion.form>

          {error && (
            <motion.p className="mt-4 text-destructive text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {error}
            </motion.p>
          )}

          {isSuccess && (
            <motion.p className="mt-4 text-primary text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Thank you for subscribing! We'll keep you updated with our latest offers.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  )
}
