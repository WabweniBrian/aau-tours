import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { tourPackagesData } from "@/data/tour-packages";

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom pb-8 pt-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="AAU Tours and Travel"
                width={200}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="mb-6 text-white/80">
              AAU Tours and Travel is a Kampala based tours and travel
              organization that specializes in providing tailor made affordable
              travel and tour packages to clients to experience the most of
              their time and resources with us.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 transition-colors hover:bg-primary"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="relative mb-6 text-xl font-bold">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 h-1 w-12 rounded-full bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
                { title: "Tour Packages", href: "/tour-packages" },
                { title: "Destinations", href: "/destinations" },
                { title: "Services", href: "/services" },
                { title: "Blog", href: "/blog" },
                { title: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="flex items-center text-white/80 transition-colors hover:text-primary"
                  >
                    <ChevronRight size={16} className="mr-2 text-primary" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="relative mb-6 text-xl font-bold">
              <span className="relative z-10">Popular Tours</span>
              <span className="absolute bottom-0 left-0 h-1 w-12 rounded-full bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              {tourPackagesData.map((tour) => (
                <li key={tour.title}>
                  <Link
                    href={`/tour-packages/${tour.slug}`}
                    className="flex items-center text-white/80 transition-colors hover:text-primary"
                  >
                    <ChevronRight size={16} className="mr-2 text-primary" />
                    {tour.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="relative mb-6 text-xl font-bold">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute bottom-0 left-0 h-1 w-12 rounded-full bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0 text-primary"
                />
                <span className="text-white/80">
                  Plot 8, Old Portbell Road, Kampala, Uganda
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-primary" />
                <span className="text-white/80">
                  +256 752 413 322 / +256 756 555 777
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 flex-shrink-0 text-primary" />
                <span className="text-white/80">info@aautours.com</span>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white/10 p-4">
              <h4 className="mb-2 font-bold">Working Hours</h4>
              <p className="text-sm text-white/80">
                Monday - Friday: 8:00 AM - 6:00 PM
              </p>
              <p className="text-sm text-white/80">
                Saturday: 9:00 AM - 4:00 PM
              </p>
              <p className="text-sm text-white/80">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-6 md:flex-row">
          <p className="mb-4 text-sm text-white/60 md:mb-0">
            &copy; {new Date().getFullYear()} AAU Tours and Travel. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-white/60 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-sm text-white/60 hover:text-primary"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/faq"
              className="text-sm text-white/60 hover:text-primary"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
