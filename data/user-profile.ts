import type { UserProfile } from "@/types/user-profile";

const userProfile: UserProfile = {
  id: "1",
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+256 752 123 456",
  country: "United States",
  city: "New York",
  address: "123 Main Street, Apt 4B",
  bio: "Passionate traveler and wildlife enthusiast. I love exploring new cultures and natural landscapes. Always looking for my next adventure!",
  profilePicture: "/images/avatar.png",
  preferences: {
    destinations: "Wildlife, Mountains, Cultural Sites",
    travelStyle: "Adventure, Photography",
    interests: "Wildlife, Photography, Hiking",
  },
};

export function getUserProfile(): UserProfile {
  return userProfile;
}
