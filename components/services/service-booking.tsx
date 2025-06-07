"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Clock } from "lucide-react";

export function ServiceBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    groupSize: "",
    travelDates: "",
    duration: "",
    specialRequests: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
    } else if (currentStep === 2) {
      if (!formData.serviceType) {
        newErrors.serviceType = "Please select a service type";
      }
      if (!formData.groupSize) {
        newErrors.groupSize = "Please select your group size";
      }
      if (!formData.travelDates.trim()) {
        newErrors.travelDates = "Please provide your travel dates";
      }
      if (!formData.duration) {
        newErrors.duration = "Please select your preferred duration";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(step)) return;

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-24" id="service-booking">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <motion.h2
              className="heading-md mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Book Your Service
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-foreground/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to experience Uganda with us? Fill out this form to start
              planning your adventure. Our team will contact you within 24 hours
              to discuss your requirements in detail.
            </motion.p>
          </div>

          {isSuccess ? (
            <motion.div
              className="rounded-3xl bg-brand-green-50 p-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <svg
                  className="h-10 w-10 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold">
                Booking Request Received!
              </h3>
              <p className="mb-6 text-foreground/70">
                Thank you for your interest in our services. Our team will
                review your request and contact you within 24 hours to discuss
                your Ugandan adventure in detail.
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setStep(1);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    serviceType: "",
                    groupSize: "",
                    travelDates: "",
                    duration: "",
                    specialRequests: "",
                  });
                }}
                className="btn-primary"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg">
              {/* Progress Steps */}
              <div className="bg-gray-50 p-6">
                <div className="mx-auto flex max-w-md items-center justify-between">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step >= 1
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      1
                    </div>
                    <span className="mt-2 text-sm">Personal Info</span>
                  </div>
                  <div
                    className={`h-1 flex-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`}
                  ></div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step >= 2
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      2
                    </div>
                    <span className="mt-2 text-sm">Trip Details</span>
                  </div>
                  <div
                    className={`h-1 flex-1 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`}
                  ></div>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step >= 3
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      3
                    </div>
                    <span className="mt-2 text-sm">Confirmation</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-6 text-xl font-bold">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1 block text-sm font-medium"
                        >
                          Full Name <span className="text-red-500">*</span>
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
                      <div className="md:col-span-2">
                        <label
                          htmlFor="phone"
                          className="mb-1 block text-sm font-medium"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full rounded-lg border px-4 py-2 ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          placeholder="+1 (123) 456-7890"
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-6 text-xl font-bold">Trip Details</h3>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="serviceType"
                          className="mb-1 block text-sm font-medium"
                        >
                          Service Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`w-full rounded-lg border px-4 py-2 ${
                            errors.serviceType
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        >
                          <option value="">Select a service</option>
                          <option value="safari">Safari Tours</option>
                          <option value="gorilla">Gorilla Trekking</option>
                          <option value="airport">Airport Transfers</option>
                          <option value="photography">Photography Tours</option>
                          <option value="cultural">Cultural Experiences</option>
                          <option value="car">Car Rentals</option>
                          <option value="custom">Custom Itinerary</option>
                        </select>
                        {errors.serviceType && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.serviceType}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="groupSize"
                          className="mb-1 block text-sm font-medium"
                        >
                          Group Size <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="groupSize"
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleChange}
                          className={`w-full rounded-lg border px-4 py-2 ${
                            errors.groupSize
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                        >
                          <option value="">Select group size</option>
                          <option value="1">1 person</option>
                          <option value="2">2 people</option>
                          <option value="3-5">3-5 people</option>
                          <option value="6-10">6-10 people</option>
                          <option value="11+">11+ people</option>
                        </select>
                        {errors.groupSize && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.groupSize}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="travelDates"
                          className="mb-1 block text-sm font-medium"
                        >
                          Travel Dates <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="travelDates"
                            name="travelDates"
                            value={formData.travelDates}
                            onChange={handleChange}
                            className={`w-full rounded-lg border px-4 py-2 pl-10 ${
                              errors.travelDates
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                            placeholder="MM/DD/YYYY - MM/DD/YYYY"
                          />
                          <Calendar
                            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                            size={16}
                          />
                        </div>
                        {errors.travelDates && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.travelDates}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="duration"
                          className="mb-1 block text-sm font-medium"
                        >
                          Preferred Duration{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="duration"
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className={`w-full rounded-lg border px-4 py-2 pl-10 ${
                              errors.duration
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          >
                            <option value="">Select duration</option>
                            <option value="1-3">1-3 days</option>
                            <option value="4-7">4-7 days</option>
                            <option value="8-14">8-14 days</option>
                            <option value="15+">15+ days</option>
                          </select>
                          <Clock
                            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                            size={16}
                          />
                        </div>
                        {errors.duration && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.duration}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="specialRequests"
                          className="mb-1 block text-sm font-medium"
                        >
                          Special Requests or Requirements
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="Tell us about any special requirements or preferences..."
                        ></textarea>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="mb-6 text-xl font-bold">
                      Review Your Information
                    </h3>
                    <div className="mb-6 rounded-xl bg-gray-50 p-6">
                      <h4 className="mb-4 font-bold">Personal Information</h4>
                      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">{formData.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email Address</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone Number</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                      </div>

                      <h4 className="mb-4 font-bold">Trip Details</h4>
                      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm text-gray-500">Service Type</p>
                          <p className="font-medium">{formData.serviceType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Group Size</p>
                          <p className="font-medium">{formData.groupSize}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Travel Dates</p>
                          <p className="font-medium">{formData.travelDates}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Preferred Duration
                          </p>
                          <p className="font-medium">{formData.duration}</p>
                        </div>
                      </div>

                      {formData.specialRequests && (
                        <div>
                          <p className="text-sm text-gray-500">
                            Special Requests
                          </p>
                          <p className="font-medium">
                            {formData.specialRequests}
                          </p>
                        </div>
                      )}
                    </div>

                    <p className="mb-6 text-sm text-gray-500">
                      By submitting this form, you agree to be contacted by our
                      team regarding your travel inquiry. We respect your
                      privacy and will never share your information with third
                      parties.
                    </p>

                    {errors.form && (
                      <div className="mb-6 rounded-lg bg-red-50 p-3 text-sm text-red-500">
                        {errors.form}
                      </div>
                    )}
                  </motion.div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="rounded-full border border-gray-300 px-6 py-2 transition-colors hover:bg-gray-50"
                    >
                      Back
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto rounded-full bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary ml-auto"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Request <Send size={16} className="ml-2" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
