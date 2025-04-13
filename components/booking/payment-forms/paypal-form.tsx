"use client";

import { useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";

interface PaypalFormProps {
  amount: number;
  onComplete: (details: any) => void;
}

export function PaypalForm({ amount, onComplete }: PaypalFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handlePaypalClick = () => {
    setIsLoading(true);

    // Simulate PayPal redirect
    setTimeout(() => {
      setIsLoading(false);
      setIsRedirecting(true);

      // Simulate PayPal payment completion
      setTimeout(() => {
        onComplete({
          paymentId: "PAYPAL-" + Math.random().toString(36).substring(2, 15),
          status: "completed",
          payerEmail: "customer@example.com",
        });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-blue-50 p-4 text-sm">
        <p className="text-blue-700">
          You will be redirected to PayPal to complete your payment securely.
          After payment, you&apos;ll return to this site.
        </p>
      </div>

      {isRedirecting ? (
        <div className="py-8 text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
          <h3 className="mb-2 text-lg font-medium">Returning from PayPal</h3>
          <p className="text-gray-600">
            Please wait while we process your payment...
          </p>
        </div>
      ) : (
        <div className="text-center">
          <div className="relative mx-auto mb-6 h-16 w-64">
            <Image
              src="/default-image.jpg?height=64&width=256"
              alt="PayPal"
              fill
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={handlePaypalClick}
            className="flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting to PayPal...
              </>
            ) : (
              "Pay with PayPal"
            )}
          </button>

          <p className="mt-4 text-sm text-gray-600">
            You will be charged ${amount.toFixed(2)} through PayPal&apos;s
            secure payment system.
          </p>
        </div>
      )}

      <div className="rounded-lg bg-gray-100 p-4">
        <h3 className="mb-2 font-medium">How it works:</h3>
        <ol className="list-inside list-decimal space-y-1 text-sm">
          <li>Click the &quot;Pay with PayPal&quot; button</li>
          <li>
            You&apos;ll be redirected to PayPal&apos;s secure payment page
          </li>
          <li>Log in to your PayPal account or pay as a guest</li>
          <li>Confirm your payment details</li>
          <li>
            After payment is complete, you&apos;ll be returned to our site
          </li>
        </ol>
      </div>
    </div>
  );
}
