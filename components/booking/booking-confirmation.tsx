"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Calendar,
  Users,
  MapPin,
  Clock,
  Download,
  Share2,
} from "lucide-react";
import type { TourPackage } from "@/types/tour-package";

interface BookingConfirmationProps {
  bookingData: {
    travelers: number;
    date: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
    specialRequests: string;
    paymentMethod: string;
    totalAmount: number;
    bookingId: string;
  };
  tourPackage: TourPackage;
  onBookAnother: () => void;
}

export function BookingConfirmation({
  bookingData,
  tourPackage,
  onBookAnother,
}: BookingConfirmationProps) {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getPaymentMethodName = () => {
    switch (bookingData.paymentMethod) {
      case "mtn":
        return "MTN Mobile Money";
      case "airtel":
        return "Airtel Money";
      case "pesapal":
        return "Pesapal";
      case "paypal":
        return "PayPal";
      default:
        return "Online Payment";
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600">
            Thank you for booking with AAU Tours and Travel. Your adventure
            awaits!
          </p>
        </motion.div>

        <motion.div
          className="mb-8 rounded-xl bg-gray-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Booking Details</h2>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              Booking ID: {bookingData.bookingId}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Tour Package</p>
              <p className="font-medium">{tourPackage.title}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Travel Date</p>
              <p className="flex items-center font-medium">
                <Calendar size={16} className="mr-1 text-primary" />
                {formatDate(bookingData.date)}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Number of Travelers</p>
              <p className="flex items-center font-medium">
                <Users size={16} className="mr-1 text-primary" />
                {bookingData.travelers}{" "}
                {bookingData.travelers === 1 ? "person" : "people"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="flex items-center font-medium">
                <Clock size={16} className="mr-1 text-primary" />
                {tourPackage.duration}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Destination</p>
              <p className="flex items-center font-medium">
                <MapPin size={16} className="mr-1 text-primary" />
                {tourPackage.location}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="font-medium">{getPaymentMethodName()}</p>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Total Amount Paid:</span>
              <span className="text-xl font-bold text-primary">
                ${bookingData.totalAmount}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-8 rounded-xl bg-gray-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{bookingData.contactName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email Address</p>
              <p className="font-medium">{bookingData.contactEmail}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">{bookingData.contactPhone}</p>
            </div>
          </div>

          {bookingData.specialRequests && (
            <div className="mt-4">
              <p className="text-sm text-gray-500">Special Requests</p>
              <p className="font-medium">{bookingData.specialRequests}</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="mb-8 rounded-xl bg-blue-50 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-4 text-lg font-semibold">What&apos;s Next?</h2>

          <div className="space-y-3">
            <p className="text-sm">
              <span className="font-medium">1. Confirmation Email:</span>{" "}
              We&apos;ve sent a detailed confirmation to{" "}
              {bookingData.contactEmail} with all your booking information.
            </p>

            <p className="text-sm">
              <span className="font-medium">2. Pre-Trip Communication:</span>{" "}
              Our team will contact you 7 days before your trip to confirm final
              details.
            </p>

            <p className="text-sm">
              <span className="font-medium">3. Prepare for Your Trip:</span>{" "}
              Check our travel tips and packing suggestions in the confirmation
              email.
            </p>

            <p className="text-sm">
              <span className="font-medium">4. Questions?</span> Contact our
              support team at{" "}
              <a href="mailto:support@aautours.com" className="text-primary">
                support@aautours.com
              </a>{" "}
              or call{" "}
              <a href="tel:+256123456789" className="text-primary">
                +256 123 456 789
              </a>
              .
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center gap-4 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 transition-colors hover:bg-gray-50"
          >
            <Download size={18} className="mr-2" />
            Download Booking Details
          </button>

          <button
            type="button"
            className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 transition-colors hover:bg-gray-50"
          >
            <Share2 size={18} className="mr-2" />
            Share Booking
          </button>

          <button
            type="button"
            onClick={onBookAnother}
            className="flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
          >
            Book Another Tour
          </button>
        </motion.div>
      </div>
    </div>
  );
}
