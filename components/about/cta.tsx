import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="bg-brand-orange py-16 text-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-md mb-6">
            Ready to Experience Uganda with Us?
          </h2>
          <p className="mb-8 text-white/80">
            Let us help you create memories that will last a lifetime. Our team
            is ready to craft the perfect journey for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link
              href="/tour-packages"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
