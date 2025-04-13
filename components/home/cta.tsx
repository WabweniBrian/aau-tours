import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-foreground py-16 text-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-md mb-6">Ready to Start Your Adventure?</h2>
          <p className="mb-8 text-lg text-white/80">
            Contact us today to plan your perfect tour package or get more
            information about our services.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Book a Tour
            </Link>
            <Link href="/tour-packages" className="btn-secondary">
              Explore Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
