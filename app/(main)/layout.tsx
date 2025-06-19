import type React from "react";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { NewsletterSubscription } from "@/components/common/newsletter-subscription";
import WhatsAppFloatingButton from "@/components/common/whatsapp-floating-button";

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

      <WhatsAppFloatingButton
        phoneNumber="256756555777"
        message="Hello, I got your number from your website; AAU Tours. Tell me more anout your services and booking process."
      />
    </div>
  );
}
