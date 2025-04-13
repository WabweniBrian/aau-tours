import React from "react";
import { SectionHeading } from "../common/section-heading";
import { TestimonialCard } from "../common/testimonial-card";
import { testimonials } from "@/data/home";

const Testimonials = () => {
  return (
    <section className="section-padding bg-brand-green-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Read testimonials from our satisfied clients who have experienced our tours and services."
          centered
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
