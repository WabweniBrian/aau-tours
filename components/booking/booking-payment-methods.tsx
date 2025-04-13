"use client"

import { motion } from "framer-motion"
import { CreditCard, Phone, DollarSign } from "lucide-react"

interface BookingPaymentMethodsProps {
  onSelectMethod: (method: string) => void
  onBack: () => void
}

export function BookingPaymentMethods({ onSelectMethod, onBack }: BookingPaymentMethodsProps) {
  const paymentMethods = [
    {
      id: "mtn",
      name: "MTN Mobile Money",
      description: "Pay directly using your MTN Mobile Money account",
      icon: <Phone className="h-6 w-6 text-yellow-500" />,
      logo: "/images/payment/mtn-momo.png",
    },
    {
      id: "airtel",
      name: "Airtel Money",
      description: "Pay directly using your Airtel Money account",
      icon: <Phone className="h-6 w-6 text-red-500" />,
      logo: "/images/payment/airtel-money.png",
    },
    {
      id: "pesapal",
      name: "Pesapal",
      description: "Pay with credit/debit card or mobile money via Pesapal",
      icon: <CreditCard className="h-6 w-6 text-green-500" />,
      logo: "/images/payment/pesapal.png",
    },
    {
      id: "paypal",
      name: "PayPal",
      description: "Pay securely using your PayPal account",
      icon: <DollarSign className="h-6 w-6 text-blue-500" />,
      logo: "/images/payment/paypal.png",
    },
  ]

  return (
    <div className="p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Select Payment Method</h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-8">
          Choose your preferred payment method to complete your booking. All payment methods are secure and encrypted.
        </p>

        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <motion.div
              key={method.id}
              className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.01 }}
              onClick={() => onSelectMethod(method.id)}
            >
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{method.name}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
                <div className="ml-4">
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  )
}
