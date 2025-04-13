"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { BookingSummary } from "@/components/booking/booking-summary"
import { BookingPaymentMethods } from "@/components/booking/booking-payment-methods"
import { BookingPaymentDetails } from "@/components/booking/booking-payment-details"
import { BookingConfirmation } from "@/components/booking/booking-confirmation"
import { BookingProgress } from "@/components/booking/booking-progress"
import type { TourPackage } from "@/types/tour-package"

interface BookingClientProps {
  tourPackage: TourPackage
}

export function BookingClient({ tourPackage }: BookingClientProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    travelers: 2,
    date: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    specialRequests: "",
    paymentMethod: "",
    paymentDetails: {},
    bookingId: `AAU-${Math.floor(100000 + Math.random() * 900000)}`,
    totalAmount: tourPackage.price * 2, // Default 2 travelers
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleNextStep = () => {
    window.scrollTo(0, 0)
    setCurrentStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    window.scrollTo(0, 0)
    setCurrentStep((prev) => prev - 1)
  }

  const updateBookingData = (data: Partial<typeof bookingData>) => {
    setBookingData((prev) => ({
      ...prev,
      ...data,
      totalAmount: tourPackage.price * (data.travelers || prev.travelers),
    }))
  }

  const handlePaymentMethodSelect = (method: string) => {
    updateBookingData({ paymentMethod: method })
    handleNextStep()
  }

  const handlePaymentSubmit = (details: any) => {
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      updateBookingData({ paymentDetails: details })
      setIsLoading(false)
      handleNextStep()
    }, 2000)
  }

  const handleBookAnother = () => {
    router.push("/tour-packages")
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-custom">
        <BookingProgress currentStep={currentStep} />

        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {currentStep === 1 && (
            <BookingSummary
              tourPackage={tourPackage}
              bookingData={bookingData}
              updateBookingData={updateBookingData}
              onContinue={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <BookingPaymentMethods onSelectMethod={handlePaymentMethodSelect} onBack={handlePrevStep} />
          )}

          {currentStep === 3 && (
            <BookingPaymentDetails
              method={bookingData.paymentMethod}
              amount={bookingData.totalAmount}
              isLoading={isLoading}
              onSubmit={handlePaymentSubmit}
              onBack={handlePrevStep}
            />
          )}

          {currentStep === 4 && (
            <BookingConfirmation
              bookingData={bookingData}
              tourPackage={tourPackage}
              onBookAnother={handleBookAnother}
            />
          )}
        </div>
      </div>
    </div>
  )
}
