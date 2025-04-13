"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-brand-orange-50 py-16">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-sm mb-4">Get in Touch</h2>
              <p className="mb-6 text-foreground/70">
                Have questions about our tours or need a custom itinerary? Fill
                out this quick form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-foreground/70">
                      +256 752 413 322 / +256 756 555 777
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-foreground/70">info@aautours.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {isSuccess ? (
                <div className="bg-brand-green-50 rounded-2xl p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-primary" />
                  <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
                  <p className="text-foreground/70">
                    Your message has been sent successfully. Our team will
                    contact you shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 font-medium text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm font-medium"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2 ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border px-4 py-2 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1 block text-sm font-medium"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="+256 700 000 000"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className={`w-full rounded-lg border px-4 py-2 ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        placeholder="I'm interested in booking a safari tour..."
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {errors.form && (
                      <div className="rounded-lg bg-red-50 p-3 text-sm text-red-500">
                        {errors.form}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
