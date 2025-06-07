"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green-50 to-white">
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mb-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="AAU Tours and Travel"
                  width={250}
                  height={80}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>
            {children}
          </div>
        </div>

        {/* Right side - Image/Branding */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/aau-safari.webp"
              alt="Uganda landscape"
              fill
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
          </motion.div>

          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold">
                Discover Uganda&apos;s Beauty
              </h2>
              <p className="mt-4 text-lg text-white/90">
                From thrilling motorsport adventures to serene wildlife safaris,
                your journey begins here.
              </p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                  <span className="ml-2 text-sm">Professional Guides</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-white/60" />
                  <span className="ml-2 text-sm">24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
