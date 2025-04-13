"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUserSettings } from "@/data/user-settings";
import { Bell, Globe, Lock, Shield, Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const settings = getUserSettings();
  const [formData, setFormData] = useState(settings);

  const handleToggleChange = (key: string) => {
    setFormData((prev) => ({
      ...prev,
      [key as keyof typeof prev]: !prev[key as keyof typeof prev],
    }));
  };

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold">Account Settings</h2>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Manage how you receive notifications and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="emailNotifications" className="font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive booking updates and promotions via email
                  </p>
                </div>
                <Switch
                  id="emailNotifications"
                  checked={formData.emailNotifications}
                  onCheckedChange={() =>
                    handleToggleChange("emailNotifications")
                  }
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="smsNotifications" className="font-medium">
                    SMS Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive booking updates and alerts via SMS
                  </p>
                </div>
                <Switch
                  id="smsNotifications"
                  checked={formData.smsNotifications}
                  onCheckedChange={() => handleToggleChange("smsNotifications")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingEmails" className="font-medium">
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive promotional offers and newsletters
                  </p>
                </div>
                <Switch
                  id="marketingEmails"
                  checked={formData.marketingEmails}
                  onCheckedChange={() => handleToggleChange("marketingEmails")}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary" />
              <CardTitle>Password & Security</CardTitle>
            </div>
            <CardDescription>
              Manage your password and security settings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Change Password</h3>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="confirmPassword">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                <Button>Update Password</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="twoFactorAuth" className="font-medium">
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={formData.twoFactorAuth}
                    onCheckedChange={() => handleToggleChange("twoFactorAuth")}
                  />
                </div>

                {formData.twoFactorAuth && (
                  <div className="rounded-lg bg-muted p-4">
                    <div className="mb-3 flex items-center gap-3">
                      <Smartphone size={20} className="text-primary" />
                      <span className="font-medium">
                        Phone Number Verification
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-muted-foreground">
                      We&apos;ll send a verification code to your phone when you
                      sign in.
                    </p>
                    <div className="flex gap-3">
                      <Input
                        value="+256 752 XXX XXX"
                        readOnly
                        className="max-w-xs"
                      />
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Language & Region</CardTitle>
            </div>
            <CardDescription>
              Customize your language and regional preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select
                  id="language"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.language}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      language: e.target.value,
                    }))
                  }
                >
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="es">Spanish</option>
                  <option value="de">German</option>
                  <option value="sw">Swahili</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <select
                  id="currency"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.currency}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      currency: e.target.value,
                    }))
                  }
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="UGX">UGX - Ugandan Shilling</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.timezone}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      timezone: e.target.value,
                    }))
                  }
                >
                  <option value="UTC+3">East Africa Time (UTC+3)</option>
                  <option value="UTC+0">Greenwich Mean Time (UTC+0)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <select
                  id="dateFormat"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.dateFormat}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      dateFormat: e.target.value,
                    }))
                  }
                >
                  <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                  <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                  <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Privacy</CardTitle>
            </div>
            <CardDescription>
              Manage your privacy settings and data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="shareBookingData" className="font-medium">
                    Share Booking Data
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Allow us to use your booking data to improve our services
                  </p>
                </div>
                <Switch
                  id="shareBookingData"
                  checked={formData.shareBookingData}
                  onCheckedChange={() => handleToggleChange("shareBookingData")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="cookiePreferences" className="font-medium">
                    Cookie Preferences
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Manage how we use cookies to enhance your experience
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Manage Cookies
                </Button>
              </div>

              <Separator />

              <div>
                <h3 className="mb-2 font-medium">Data Management</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  You can download or delete your personal data from our
                  systems.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline">Download My Data</Button>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
