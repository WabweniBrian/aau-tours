import type { UserPaymentMethod } from "@/types/user-payment-method"

const userPaymentMethods: UserPaymentMethod[] = [
  {
    id: "1",
    cardType: "Visa",
    lastFour: "4242",
    expiryMonth: "09",
    expiryYear: "25",
    isDefault: true,
  },
  {
    id: "2",
    cardType: "Mastercard",
    lastFour: "8765",
    expiryMonth: "03",
    expiryYear: "24",
    isDefault: false,
  },
]

export function getUserPaymentMethods(): UserPaymentMethod[] {
  return userPaymentMethods
}
