export interface UserProfile {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  city: string
  address: string
  bio: string
  profilePicture: string
  preferences?: {
    destinations: string
    travelStyle: string
    interests: string
  }
}
