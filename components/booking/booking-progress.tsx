import { CheckCircle2 } from "lucide-react"

interface BookingProgressProps {
  currentStep: number
}

export function BookingProgress({ currentStep }: BookingProgressProps) {
  const steps = [
    { id: 1, name: "Summary" },
    { id: 2, name: "Payment Method" },
    { id: 3, name: "Payment Details" },
    { id: 4, name: "Confirmation" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative">
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-1 ${currentStep > step.id ? "bg-primary" : "bg-gray-200"}`}
                style={{ transform: "translateX(50%)" }}
              ></div>
            )}

            {/* Step circle */}
            <div
              className={`z-10 flex items-center justify-center w-8 h-8 rounded-full ${
                currentStep > step.id
                  ? "bg-primary text-white"
                  : currentStep === step.id
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : <span>{step.id}</span>}
            </div>

            {/* Step name */}
            <span className={`mt-2 text-sm font-medium ${currentStep >= step.id ? "text-primary" : "text-gray-500"}`}>
              {step.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
