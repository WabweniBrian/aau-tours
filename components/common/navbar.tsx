"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { destinationsData } from "@/data/destinations";
import { tourPackagesData } from "@/data/tour-packages";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  // {
  //   title: "Destinations",
  //   href: "/destinations",
  //   children: destinationsData.map((dest) => ({
  //     title: dest.title,
  //     href: `/destinations/${dest.slug}`,
  //   })),
  // },
  {
    title: "Tour Packages",
    href: "/tour-packages",
    children: tourPackagesData.map((pkg) => ({
      title: pkg.title,
      href: `/tour-packages/${pkg.slug}`,
    })),
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <>
      <div className="hidden bg-primary py-2 text-white md:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span className="text-sm">+256752413322</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span className="text-sm">info@aautours.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span className="text-sm">
                Plot 8, Old Portbell Road, Kampala
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="#" aria-label="Facebook">
              <Facebook
                size={16}
                className="transition-colors hover:text-secondary"
              />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram
                size={16}
                className="transition-colors hover:text-secondary"
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter
                size={16}
                className="transition-colors hover:text-secondary"
              />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube
                size={16}
                className="transition-colors hover:text-secondary"
              />
            </Link>
          </div>
        </div>
      </div>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white py-2 shadow-md"
            : "bg-white/80 py-4 backdrop-blur-md",
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            <Link href="/" className="relative z-10">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="AAU Tours and Travel"
                  width={250}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-1 lg:flex">
              {navLinks.map((link) => (
                <div key={link.title} className="group relative">
                  {link.children ? (
                    <button
                      className="flex items-center rounded-full px-4 py-2 text-foreground/80 transition-colors hover:text-primary"
                      onClick={() => toggleDropdown(link.title)}
                      aria-expanded={activeDropdown === link.title}
                    >
                      {link.title}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "ml-1 transition-transform duration-200",
                          activeDropdown === link.title ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="rounded-full px-4 py-2 text-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  )}

                  {link.children && (
                    <div className="invisible absolute left-0 mt-2 w-56 translate-y-2 transform opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-2xl border border-border/50 bg-white py-2 shadow-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:block">
              {/* <Link href="/contact" className="btn-primary">
                Book Now
              </Link> */}
              <div>
                <Image
                  src="/twi-logo.png"
                  alt="TWI Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="relative z-10 lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Menu size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white lg:hidden"
            >
              <div className="container-custom py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.title}>
                      {link.children ? (
                        <>
                          <button
                            className="flex w-full items-center justify-between border-b border-border/50 py-2 text-foreground/80 hover:text-primary"
                            onClick={() => toggleDropdown(link.title)}
                            aria-expanded={activeDropdown === link.title}
                          >
                            {link.title}
                            <ChevronDown
                              size={16}
                              className={cn(
                                "transition-transform duration-200",
                                activeDropdown === link.title
                                  ? "rotate-180"
                                  : "",
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === link.title && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 space-y-2 pl-4"
                              >
                                {link.children.map((child) => (
                                  <Link
                                    key={child.title}
                                    href={child.href}
                                    className="block py-2 text-sm text-foreground/70 hover:text-primary"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={link.href}
                          className="block border-b border-border/50 py-2 text-foreground/80 hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  {/* <Link
                    href="/contact"
                    className="btn-primary mt-4 w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Link> */}
                  <div className="relative">
                    <Image
                      src="/twi-logo.png"
                      alt="TWI Logo"
                      width={200}
                      height={60}
                      className="object-contain"
                      priority
                    />
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
