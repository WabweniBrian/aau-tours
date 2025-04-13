export interface UserBooking {
  id: string
  bookingId: string
  packageName: string
  destination: string
  image?: string
  travelDate: string
  duration: number
  travelers: number
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled"
  totalAmount: number
  packagePrice: number
  discount: number
  paymentMethod: string
  transactionId: string
  bookingDate: string
  customerName: string
  customerEmail: string
  customerPhone: string
  activity?: string
}
