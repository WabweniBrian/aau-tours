import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Package, Calendar, MapPin, AlertCircle } from "lucide-react";
import Link from "next/link";
import { getUserBookings } from "@/data/user-bookings";

export default function AccountDashboard() {
  const bookings = getUserBookings();
  const upcomingBookings = bookings
    .filter((booking) => new Date(booking.travelDate) > new Date())
    .sort(
      (a, b) =>
        new Date(a.travelDate).getTime() - new Date(b.travelDate).getTime(),
    );

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Total Bookings
            </CardTitle>
            <CardDescription>All time bookings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="mr-3 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">{bookings.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Upcoming Trips
            </CardTitle>
            <CardDescription>Next 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Calendar className="mr-3 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">
                {
                  upcomingBookings.filter(
                    (booking) =>
                      (new Date(booking.travelDate).getTime() -
                        new Date().getTime()) /
                        (1000 * 60 * 60 * 24) <=
                      30,
                  ).length
                }
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Destinations</CardTitle>
            <CardDescription>Places visited</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <MapPin className="mr-3 h-8 w-8 text-primary" />
              <span className="text-3xl font-bold">
                {new Set(bookings.map((booking) => booking.destination)).size}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Upcoming Trips</h2>
      {upcomingBookings.length > 0 ? (
        <div className="space-y-4">
          {upcomingBookings.slice(0, 3).map((booking) => (
            <Card key={booking.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col justify-center bg-muted p-4 md:w-1/4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">
                      {new Date(booking.travelDate).toLocaleDateString(
                        "en-US",
                        { month: "short" },
                      )}
                    </div>
                    <div className="text-3xl font-bold">
                      {new Date(booking.travelDate).getDate()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(booking.travelDate).toLocaleDateString(
                        "en-US",
                        { year: "numeric" },
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <h3 className="text-lg font-semibold">
                    {booking.packageName}
                  </h3>
                  <p className="mb-2 text-muted-foreground">
                    <span className="inline-flex items-center">
                      <MapPin size={16} className="mr-1" />{" "}
                      {booking.destination}
                    </span>
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                      {booking.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4">
                  <Link
                    href={`/account/bookings/${booking.id}`}
                    className="btn-primary-outline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </Card>
          ))}

          {upcomingBookings.length > 3 && (
            <div className="mt-4 text-center">
              <Link href="/account/bookings" className="btn-primary-outline">
                View All Bookings
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-medium">No Upcoming Trips</h3>
            <p className="mb-4 text-muted-foreground">
              You don&apos;t have any upcoming trips scheduled.
            </p>
            <Link href="/tour-packages" className="btn-primary">
              Browse Tour Packages
            </Link>
          </CardContent>
        </Card>
      )}

      <h2 className="mb-4 mt-8 text-xl font-semibold">Recent Activity</h2>
      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {bookings.slice(0, 5).map((booking, index) => (
              <div key={index} className="flex items-center p-4">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Package size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    {booking.activity || `Booked ${booking.packageName}`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
