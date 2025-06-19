"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Success simulation
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return null;

  return (
    <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-4">Subscribe to Our Newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl text-foreground/70">
              Stay updated with our latest tour packages, travel tips, and
              exclusive offers. Join our community of adventure seekers!
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full rounded-full border border-border bg-white px-6 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                required
                disabled={isSubmitting || isSuccess}
              />
            </div>
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
              disabled={isSubmitting || isSuccess}
            >
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
            <motion.p
              className="mt-4 text-sm text-destructive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {error}
            </motion.p>
          )}

          {isSuccess && (
            <motion.p
              className="mt-4 text-sm text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Thank you for subscribing! We&apos;ll keep you updated with our
              latest offers.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
