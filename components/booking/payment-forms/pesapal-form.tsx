"use client";

import type React from "react";

interface PesapalFormProps {
  formData: any;
  errors: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export function PesapalForm({ formData, errors, onChange }: PesapalFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-green-50 p-4 text-sm">
        <p className="text-green-700">
          Pesapal allows you to pay with credit/debit cards or mobile money.
          Your payment information is secure and encrypted.
        </p>
      </div>

      <div>
        <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium">
          Card Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber || ""}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2 ${
            errors.cardNumber ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
        />
        {errors.cardNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="cardholderName"
          className="mb-1 block text-sm font-medium"
        >
          Cardholder Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          value={formData.cardholderName || ""}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2 ${
            errors.cardholderName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="Name as it appears on card"
        />
        {errors.cardholderName && (
          <p className="mt-1 text-sm text-red-500">{errors.cardholderName}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="expiryDate"
            className="mb-1 block text-sm font-medium"
          >
            Expiry Date <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate || ""}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2 ${
              errors.expiryDate ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="MM/YY"
            maxLength={5}
          />
          {errors.expiryDate && (
            <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>
          )}
        </div>

        <div>
          <label htmlFor="cvv" className="mb-1 block text-sm font-medium">
            CVV <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv || ""}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-2 ${
              errors.cvv ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary/50`}
            placeholder="123"
            maxLength={4}
          />
          {errors.cvv && (
            <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>
          )}
        </div>
      </div>

      <div className="rounded-lg bg-gray-100 p-4">
        <h3 className="mb-2 font-medium">Secure Payment:</h3>
        <p className="text-sm">
          Your payment information is encrypted and secure. We do not store your
          card details. The transaction is processed securely through
          Pesapal&apos;s payment gateway.
        </p>
      </div>
    </div>
  );
}
