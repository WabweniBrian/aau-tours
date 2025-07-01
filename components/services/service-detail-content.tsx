"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lightbox } from "@/components/ui/lightbox";
import { Check, ExternalLink } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  images?: string[];
  features: string[];
  cta: string;
  link: string;
}

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const isExternalLink = service.link.startsWith("http");

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Service Features</h2>
            <div className="space-y-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-foreground/80">{feature}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border/50 bg-muted/30 p-6">
              <h3 className="mb-4 text-xl font-bold">Ready to Book?</h3>
              <p className="mb-4 text-foreground/80">
                Contact us today to customize this service according to your
                needs and preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                {isExternalLink ? (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>{service.cta}</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link href={service.link} className="btn-primary">
                    {service.cta}
                  </Link>
                )}
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6">Gallery</h2>

            {service.images && service.images.length > 0 ? (
              // Motor tours with multiple images
              <div className="grid grid-cols-2 gap-4">
                {service.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative cursor-pointer overflow-hidden rounded-xl"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={image || "/default-image.jpg"}
                      alt={`${service.title} ${index + 1}`}
                      width={300}
                      height={200}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
                      <svg
                        className="text-white transition-opacity duration-300 group-hover:opacity-100 md:opacity-0"
                        width={36}
                        height={36}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                        <path d="M11 8v6" />
                        <path d="M8 11h6" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Other services with single main image
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={service.image || "/default-image.jpg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-96 w-full object-cover"
                />
              </div>
            )}

            {/* Additional service info */}
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-border/50 bg-white p-4">
                <h4 className="font-semibold text-primary">
                  Professional Service
                </h4>
                <p className="text-sm text-foreground/70">
                  Our experienced team ensures quality service delivery with
                  attention to detail.
                </p>
              </div>
              <div className="rounded-xl border border-border/50 bg-white p-4">
                <h4 className="font-semibold text-primary">
                  Customizable Options
                </h4>
                <p className="text-sm text-foreground/70">
                  We tailor our services to meet your specific requirements and
                  preferences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for motor tours */}
      {service.images && (
        <Lightbox
          images={service.images}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          initialIndex={lightboxIndex}
        />
      )}
    </section>
  );
}
