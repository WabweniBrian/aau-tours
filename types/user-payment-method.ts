export interface UserPaymentMethod {
  id: string
  cardType: string
  lastFour: string
  expiryMonth: string
  expiryYear: string
  isDefault: boolean
}
