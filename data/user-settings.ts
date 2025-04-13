import type { UserSettings } from "@/types/user-settings";

const userSettings: UserSettings = {
  emailNotifications: true,
  smsNotifications: false,
  marketingEmails: true,
  twoFactorAuth: false,
  language: "en",
  currency: "USD",
  timezone: "EAT",
  dateFormat: "DD/MM/YYYY",
  shareBookingData: true,
};

export function getUserSettings(): UserSettings {
  return userSettings;
}
