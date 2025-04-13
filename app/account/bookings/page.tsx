"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, MapPin, Calendar, Search, Filter } from "lucide-react"
import Link from "next/link"
import { getUserBookings } from "@/data/user-bookings"
import { Badge } from "@/components/ui/badge"

export default function BookingsPage() {
  const allBookings = getUserBookings()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBookings = allBookings.filter((booking) => {
    const matchesSearch =
      booking.packageName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.bookingId.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold mb-4 sm:mb-0">My Bookings</h2>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search bookings..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-40">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredBookings.length > 0 ? (
        <div className="space-y-4">
          {filteredBookings.map((booking) => (
            <Card key={booking.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-muted p-4 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">
                        {new Date(booking.travelDate).toLocaleDateString("en-US", { month: "short" })}
                      </div>
                      <div className="text-3xl font-bold">{new Date(booking.travelDate).getDate()}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(booking.travelDate).toLocaleDateString("en-US", { year: "numeric" })}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{booking.packageName}</h3>
                      <div className="mt-1 md:mt-0">
                        <Badge
                          className={`
                            ${booking.status === "Confirmed" ? "bg-green-100 text-green-800" : ""}
                            ${booking.status === "Pending" ? "bg-yellow-100 text-yellow-800" : ""}
                            ${booking.status === "Completed" ? "bg-blue-100 text-blue-800" : ""}
                            ${booking.status === "Cancelled" ? "bg-red-100 text-red-800" : ""}
                          `}
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-y-1 sm:gap-x-4 mb-3">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {booking.destination}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {booking.duration} days
                      </div>
                      <div className="flex items-center">
                        <Package size={16} className="mr-1" />
                        Booking ID: {booking.bookingId}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-3">
                      <Link href={`/account/bookings/${booking.id}`} className="btn-primary-outline text-sm">
                        View Details
                      </Link>

                      {booking.status === "Confirmed" && (
                        <button className="btn-secondary-outline text-sm">Download Itinerary</button>
                      )}

                      {booking.status === "Pending" && (
                        <button className="text-red-500 hover:text-red-700 text-sm font-medium">Cancel Booking</button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">No Bookings Found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== "all"
                ? "No bookings match your search criteria. Try adjusting your filters."
                : "You haven't made any bookings yet."}
            </p>
            <Link href="/tour-packages" className="btn-primary">
              Browse Tour Packages
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
