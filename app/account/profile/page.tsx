"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { getUserProfile } from "@/data/user-profile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera } from "lucide-react"

export default function ProfilePage() {
  const userProfile = getUserProfile()
  const [formData, setFormData] = useState(userProfile)
  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save the data to your backend
    setIsEditing(false)
    // Show success message or notification
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" value={formData.city} onChange={handleChange} disabled={!isEditing} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={handleChange}
                      disabled={!isEditing}
                      placeholder="Tell us a bit about yourself..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3">
                  {isEditing ? (
                    <>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setIsEditing(false)
                          setFormData(userProfile)
                        }}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Save Changes</Button>
                    </>
                  ) : (
                    <Button type="button" onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Profile Picture</CardTitle>
              <CardDescription>Update your profile photo</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative mb-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={formData.profilePicture} alt={`${formData.firstName} ${formData.lastName}`} />
                  <AvatarFallback className="text-2xl">
                    {formData.firstName.charAt(0)}
                    {formData.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <div className="text-center space-y-1 mb-4">
                <h3 className="font-medium text-lg">
                  {formData.firstName} {formData.lastName}
                </h3>
                <p className="text-sm text-muted-foreground">{formData.email}</p>
                <p className="text-sm text-muted-foreground">{formData.country}</p>
              </div>

              <div className="w-full">
                <div className="flex justify-between text-sm mb-1">
                  <span>Profile Completion</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Complete your profile to get personalized tour recommendations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Travel Preferences</CardTitle>
              <CardDescription>Help us personalize your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDestinations">Preferred Destinations</Label>
                  <Input
                    id="preferredDestinations"
                    name="preferredDestinations"
                    value={formData.preferences?.destinations || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="e.g. Wildlife, Mountains, Beaches"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="travelStyle">Travel Style</Label>
                  <Input
                    id="travelStyle"
                    name="travelStyle"
                    value={formData.preferences?.travelStyle || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="e.g. Adventure, Luxury, Budget"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Interests</Label>
                  <Input
                    id="interests"
                    name="interests"
                    value={formData.preferences?.interests || ""}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="e.g. Photography, Hiking, Culture"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
