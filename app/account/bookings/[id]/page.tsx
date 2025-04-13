import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getUserBookingById } from "@/data/user-bookings";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CreditCard,
  Phone,
  Mail,
  Download,
  Printer,
  Share2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BookingDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const booking = getUserBookingById(params.id);

  if (!booking) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col justify-between sm:flex-row sm:items-center">
        <div>
          <div className="mb-1 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/account/bookings" className="hover:underline">
              My Bookings
            </Link>
            <span>/</span>
            <span>Booking Details</span>
          </div>
          <h2 className="text-2xl font-semibold">
            Booking #{booking.bookingId}
          </h2>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 sm:mt-0">
          <button className="btn-secondary-outline flex items-center text-sm">
            <Download size={16} className="mr-2" />
            Download
          </button>
          <button className="btn-secondary-outline flex items-center text-sm">
            <Printer size={16} className="mr-2" />
            Print
          </button>
          <button className="btn-secondary-outline flex items-center text-sm">
            <Share2 size={16} className="mr-2" />
            Share
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle>Booking Details</CardTitle>
                <span
                  className={`rounded-full border px-3 py-1 text-sm font-medium ${getStatusColor(booking.status)}`}
                >
                  {booking.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg md:w-1/3">
                  <Image
                    src={booking.image || "/default-image.jpg"}
                    alt={booking.packageName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="mb-2 text-xl font-semibold">
                    {booking.packageName}
                  </h3>
                  <div className="grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-2">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-primary" />
                      <span>{booking.destination}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-primary" />
                      <span>
                        {new Date(booking.travelDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-primary" />
                      <span>{booking.duration} days</span>
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-primary" />
                      <span>{booking.travelers} travelers</span>
                    </div>
                  </div>

                  {booking.status === "Confirmed" && (
                    <div className="mt-4 rounded-lg border border-green-100 bg-green-50 p-3 text-sm">
                      <p className="mb-1 font-medium text-green-800">
                        Your booking is confirmed!
                      </p>
                      <p className="text-green-700">
                        Please check your email for detailed itinerary and
                        preparation instructions.
                      </p>
                    </div>
                  )}

                  {booking.status === "Pending" && (
                    <div className="mt-4 rounded-lg border border-yellow-100 bg-yellow-50 p-3 text-sm">
                      <p className="mb-1 font-medium text-yellow-800">
                        Your booking is pending confirmation
                      </p>
                      <p className="text-yellow-700">
                        We&apos;re processing your payment. You&apos;ll receive
                        a confirmation email soon.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Separator className="my-6" />

              <div>
                <h4 className="mb-3 font-medium">Booking Timeline</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="relative mr-4">
                      <div className="mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      <div className="absolute bottom-0 left-1.5 top-4 w-0.5 bg-border"></div>
                    </div>
                    <div>
                      <p className="font-medium">Booking Created</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(booking.bookingDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="relative mr-4">
                      <div className="mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      <div className="absolute bottom-0 left-1.5 top-4 w-0.5 bg-border"></div>
                    </div>
                    <div>
                      <p className="font-medium">Payment Processed</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(
                          new Date(booking.bookingDate).getTime() +
                            1000 * 60 * 30,
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>

                  {booking.status === "Confirmed" && (
                    <div className="flex">
                      <div className="relative mr-4">
                        <div className="mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                        {booking.status !== "Completed" && (
                          <div className="absolute bottom-0 left-1.5 top-4 w-0.5 bg-border"></div>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">Booking Confirmed</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(
                            new Date(booking.bookingDate).getTime() +
                              1000 * 60 * 60 * 2,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  )}

                  {booking.status === "Completed" && (
                    <div className="flex">
                      <div className="mr-4">
                        <div className="mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                      </div>
                      <div>
                        <p className="font-medium">Tour Completed</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(
                            new Date(booking.travelDate).getTime() +
                              1000 * 60 * 60 * 24 * booking.duration,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Itinerary Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: Math.min(3, booking.duration) }).map(
                  (_, index) => (
                    <div key={index} className="flex">
                      <div className="relative mr-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 font-medium text-primary">
                          {index + 1}
                        </div>
                        {index < Math.min(2, booking.duration - 1) && (
                          <div className="absolute bottom-0 left-4 top-8 w-0.5 bg-border"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">
                          Day {index + 1}:{" "}
                          {index === 0
                            ? "Arrival & Welcome"
                            : index === 1
                              ? "Exploration"
                              : "Adventure"}
                        </p>
                        <p className="mb-2 text-sm text-muted-foreground">
                          {new Date(
                            new Date(booking.travelDate).getTime() +
                              1000 * 60 * 60 * 24 * index,
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm">
                          {index === 0
                            ? "Arrival at the destination, transfer to accommodation, welcome dinner and briefing about the tour."
                            : index === 1
                              ? "Morning exploration of key attractions, lunch at a local restaurant, afternoon activities and cultural experiences."
                              : "Full day adventure activities, wildlife viewing, or cultural immersion depending on the tour package."}
                        </p>
                      </div>
                    </div>
                  ),
                )}

                {booking.duration > 3 && (
                  <div className="ml-12 mt-2">
                    <button className="text-sm font-medium text-primary hover:text-primary/80">
                      View Full Itinerary
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="flex items-center font-medium">
                    <CreditCard size={16} className="mr-2" />
                    {booking.paymentMethod}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID</span>
                  <span className="font-medium">{booking.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Date</span>
                  <span className="font-medium">
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <Separator className="my-3" />

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Package Price</span>
                  <span className="font-medium">
                    ${booking.packagePrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Travelers</span>
                  <span className="font-medium">× {booking.travelers}</span>
                </div>
                {booking.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">
                      -${booking.discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <Separator className="my-3" />

                <div className="flex justify-between text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">
                    ${booking.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="font-medium">{booking.customerName}</p>
                  <p className="text-sm text-muted-foreground">Lead Traveler</p>
                </div>

                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-muted-foreground" />
                  <span>{booking.customerEmail}</span>
                </div>

                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-muted-foreground" />
                  <span>{booking.customerPhone}</span>
                </div>

                <Separator className="my-3" />

                <div>
                  <p className="mb-1 font-medium">Need assistance?</p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Our customer support team is available 24/7 to help you with
                    any questions.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
