import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactInfo() {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
        Contact Information
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="text-lg font-medium">Our Office</h3>
            <p className="text-gray-600">
              Plot 123, Kampala Road
              <br />
              Kampala, Uganda
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="text-lg font-medium">Phone</h3>
            <p className="text-gray-600">+256756555777</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-gray-600">aautours.travel@aau.co.ug</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
          <div>
            <h3 className="text-lg font-medium">Business Hours</h3>
            <p className="text-gray-600">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 3:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="mb-3 text-lg font-medium">Follow Us</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
