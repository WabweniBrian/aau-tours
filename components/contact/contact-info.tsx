import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-lg">Our Office</h3>
            <p className="text-gray-600">
              Plot 123, Kampala Road
              <br />
              Kampala, Uganda
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-lg">Phone</h3>
            <p className="text-gray-600">
              +256 (0) 414 123 456
              <br />
              +256 (0) 772 123 456 (WhatsApp)
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-lg">Email</h3>
            <p className="text-gray-600">
              info@aautours.com
              <br />
              bookings@aautours.com
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-lg">Business Hours</h3>
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
          <h3 className="font-medium text-lg mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
