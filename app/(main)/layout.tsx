import type React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { NewsletterSubscription } from "@/components/common/newsletter-subscription";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <NewsletterSubscription />
      <Footer />
    </div>
  );
}
