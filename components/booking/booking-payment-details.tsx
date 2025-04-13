"use client";

import type React from "react";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { MobileMoneyForm } from "./payment-forms/mobile-money-form";
import { PesapalForm } from "./payment-forms/pesapal-form";
import { PaypalForm } from "./payment-forms/paypal-form";

interface BookingPaymentDetailsProps {
  method: string;
  amount: number;
  isLoading: boolean;
  onSubmit: (details: any) => void;
  onBack: () => void;
}

export function BookingPaymentDetails({
  method,
  amount,
  isLoading,
  onSubmit,
  onBack,
}: BookingPaymentDetailsProps) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
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

    if (method === "mtn" || method === "airtel") {
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone number is required";
      }
      if (!formData.fullName) {
        newErrors.fullName = "Full name is required";
      }
    } else if (method === "pesapal") {
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required";
      }
      if (!formData.cardholderName) {
        newErrors.cardholderName = "Cardholder name is required";
      }
      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required";
      }
      if (!formData.cvv) {
        newErrors.cvv = "CVV is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const getPaymentMethodTitle = () => {
    switch (method) {
      case "mtn":
        return "MTN Mobile Money";
      case "airtel":
        return "Airtel Money";
      case "pesapal":
        return "Pesapal";
      case "paypal":
        return "PayPal";
      default:
        return "Payment";
    }
  };

  return (
    <div className="p-6 md:p-8">
      <h1 className="mb-6 text-2xl font-bold">
        {getPaymentMethodTitle()} Payment
      </h1>

      <div className="mx-auto max-w-2xl">
        <div className="mb-6 rounded-xl bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">Amount to Pay:</span>
            <span className="text-xl font-bold text-primary">${amount}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {method === "mtn" && (
            <MobileMoneyForm
              provider="mtn"
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {method === "airtel" && (
            <MobileMoneyForm
              provider="airtel"
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {method === "pesapal" && (
            <PesapalForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {method === "paypal" && (
            <PaypalForm
              amount={amount}
              onComplete={(details) => onSubmit(details)}
            />
          )}

          <div className="mt-8 flex justify-between border-t border-gray-200 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50"
              disabled={isLoading}
            >
              Back
            </button>

            {method !== "paypal" && (
              <button
                type="submit"
                className="flex items-center rounded-full bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Complete Payment"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
