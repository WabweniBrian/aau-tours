"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Users, AlertCircle } from "lucide-react";
import type { TourPackage } from "@/types/tour-package";

interface BookingSummaryProps {
  tourPackage: TourPackage;
  bookingData: {
    travelers: number;
    date: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    specialRequests: string;
    totalAmount: number;
  };
  updateBookingData: (
    data: Partial<BookingSummaryProps["bookingData"]>,
  ) => void;
  onContinue: () => void;
}

export function BookingSummary({
  tourPackage,
  bookingData,
  updateBookingData,
  onContinue,
}: BookingSummaryProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "travelers") {
      updateBookingData({ [name]: Number.parseInt(value) || 1 });
    } else {
      updateBookingData({ [name]: value });
    }

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

    if (!bookingData.date) {
      newErrors.date = "Please select a travel date";
    }

    if (!bookingData.contactName) {
      newErrors.contactName = "Name is required";
    }

    if (!bookingData.contactEmail) {
      newErrors.contactEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(bookingData.contactEmail)) {
      newErrors.contactEmail = "Email is invalid";
    }

    if (!bookingData.contactPhone) {
      newErrors.contactPhone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onContinue();
    }
  };

  return (
    <div className="p-6 md:p-8">
      <h1 className="mb-6 text-2xl font-bold">Booking Summary</h1>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="flex flex-col gap-4 rounded-xl bg-gray-50 p-4 md:flex-row">
                <div className="relative h-40 w-full overflow-hidden rounded-lg md:w-1/3">
                  <Image
                    src={tourPackage.image || "/default-image.jpg"}
                    alt={tourPackage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="mb-2 text-xl font-bold">
                    {tourPackage.title}
                  </h2>
                  <p className="mb-3 text-gray-600">
                    {tourPackage.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-1 text-primary" />
                      <span>{tourPackage.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-1 text-primary" />
                      <span>Max {tourPackage.groupSize} people</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">Trip Details</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travelers"
                      className="mb-1 block text-sm font-medium"
                    >
                      Number of Travelers
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={bookingData.travelers}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      {[...Array(tourPackage.groupSize)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1} {i === 0 ? "person" : "people"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1 block text-sm font-medium"
                    >
                      Travel Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={bookingData.date}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 ${
                        errors.date ? "border-red-500" : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-500">{errors.date}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contactName"
                      className="mb-1 block text-sm font-medium"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={bookingData.contactName}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 ${
                        errors.contactName
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="John Doe"
                    />
                    {errors.contactName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.contactName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="mb-1 block text-sm font-medium"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      name="contactEmail"
                      value={bookingData.contactEmail}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 ${
                        errors.contactEmail
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="john@example.com"
                    />
                    {errors.contactEmail && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.contactEmail}
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="contactPhone"
                      className="mb-1 block text-sm font-medium"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      name="contactPhone"
                      value={bookingData.contactPhone}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-2 ${
                        errors.contactPhone
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="+256 123 456 789"
                    />
                    {errors.contactPhone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.contactPhone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="specialRequests"
                  className="mb-1 block text-sm font-medium"
                >
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Any dietary requirements, accessibility needs, or special preferences..."
                ></textarea>
              </div>
            </div>

            <div className="mt-8 flex justify-end border-t border-gray-200 pt-6">
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold">Price Details</h3>

            <div className="mb-6 space-y-3">
              <div className="flex justify-between">
                <span>Tour Price</span>
                <span>$234</span>
              </div>

              <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-medium">
                <span>Total</span>
                <span className="text-primary">${bookingData.totalAmount}</span>
              </div>
            </div>

            <div className="flex items-start rounded-lg bg-blue-50 p-4 text-sm">
              <AlertCircle
                size={18}
                className="mr-2 mt-0.5 flex-shrink-0 text-blue-500"
              />
              <p className="text-blue-700">
                A 20% deposit (${(bookingData.totalAmount * 0.2).toFixed(2)}) is
                required to secure your booking. The remaining balance can be
                paid 30 days before your trip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
