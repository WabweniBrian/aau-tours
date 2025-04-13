"use client";

import type React from "react";

interface MobileMoneyFormProps {
  provider: "mtn" | "airtel";
  formData: any;
  errors: Record<string, string>;
  onChange: (name: string, value: string) => void;
}

export function MobileMoneyForm({
  provider,
  formData,
  errors,
  onChange,
}: MobileMoneyFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const providerColor = provider === "mtn" ? "yellow" : "red";
  const providerName = provider === "mtn" ? "MTN Mobile Money" : "Airtel Money";

  return (
    <div className="space-y-6">
      <div className={`bg-${providerColor}-50 rounded-lg p-4 text-sm`}>
        <p className={`text-${providerColor}-700`}>
          You will receive a prompt on your phone to confirm the payment. Please
          ensure your phone is on and has sufficient balance.
        </p>
      </div>

      <div>
        <label htmlFor="phoneNumber" className="mb-1 block text-sm font-medium">
          {providerName} Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber || ""}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2 ${
            errors.phoneNumber ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder={
            provider === "mtn" ? "+256 77X XXX XXX" : "+256 75X XXX XXX"
          }
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
        )}
      </div>

      <div>
        <label htmlFor="fullName" className="mb-1 block text-sm font-medium">
          Registered Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName || ""}
          onChange={handleChange}
          className={`w-full rounded-lg border px-4 py-2 ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
          placeholder="Name as registered with your mobile money account"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
        )}
      </div>

      <div className="rounded-lg bg-gray-100 p-4">
        <h3 className="mb-2 font-medium">How it works:</h3>
        <ol className="list-inside list-decimal space-y-1 text-sm">
          <li>Enter your {providerName} phone number and registered name</li>
          <li>
            Click &quot;Complete Payment&quot; to initiate the transaction
          </li>
          <li>
            You will receive a prompt on your phone to confirm the payment
          </li>
          <li>Enter your PIN to authorize the payment</li>
          <li>
            Once payment is confirmed, you will be redirected to the
            confirmation page
          </li>
        </ol>
      </div>
    </div>
  );
}
