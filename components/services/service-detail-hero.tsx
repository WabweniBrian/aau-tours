"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const isExternalLink = service.link.startsWith("http");

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image || "/default-image.jpg"}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center space-x-3">
              <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </div>
              <span className="text-sm font-medium uppercase tracking-wider text-white/80">
                Our Services
              </span>
            </div>

            <h1 className="heading-xl mb-6 text-white">{service.title}</h1>

            <p className="mb-8 max-w-xl text-xl text-white/90">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {isExternalLink ? (
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {service.cta}
                </a>
              ) : (
                <Link href={service.link} className="btn-primary">
                  {service.cta}
                </Link>
              )}
              <Link href="/contact" className="btn-secondary">
                Get Quote
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-bold text-white">
                What&apos;s Included
              </h3>
              <ul className="space-y-2">
                {service.features.slice(0, 4).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 text-white/90"
                  >
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-secondary"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
