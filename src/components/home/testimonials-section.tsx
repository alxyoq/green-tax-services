"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Green Tax Services has been handling my business taxes for over 5 years. Their attention to detail and knowledge of tax law has saved me thousands. Elizia is always available to answer my questions throughout the year.",
    author: "Michelle S.",
    role: "Small Business Owner",
    rating: 5,
  },
  {
    id: 2,
    content:
      "As someone with multiple rental properties, my tax situation is complex. The team at Green Tax Services makes it simple and finds deductions I would never know about. Worth every penny!",
    author: "Robert T.",
    role: "Real Estate Investor",
    rating: 5,
  },
  {
    id: 3,
    content:
      "I switched to Green Tax Services last year after a recommendation from a friend. The difference in service quality is night and day. They're thorough, professional, and I'm paying less in taxes!",
    author: "Sarah L.",
    role: "Freelance Consultant",
    rating: 5,
  },
  {
    id: 4,
    content:
      "My wife and I have been using Green Tax Services for our retirement planning and annual taxes. Their advice has been invaluable in optimizing our withdrawals and minimizing tax burdens.",
    author: "Mark J.",
    role: "Retired Professional",
    rating: 5,
  },
  {
    id: 5,
    content:
      "As a busy healthcare worker, I don't have time to keep up with changing tax laws. Green Tax Services makes it easy and convenient, with their virtual appointments and clear communication.",
    author: "Jennifer K.",
    role: "Healthcare Professional",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayedTestimonials = testimonials.slice(activeIndex, activeIndex + 3);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(testimonials.length - 3, prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our clients have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 relative fade-in"
              >
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <div className="text-foreground/80 mb-6">{testimonial.content}</div>
                <div className="mt-auto">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.slice(0, testimonials.length - 2).map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === activeIndex
                    ? "bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial set ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute top-1/2 -left-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors ${
              activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex >= testimonials.length - 3}
            className={`absolute top-1/2 -right-4 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white transition-colors ${
              activeIndex >= testimonials.length - 3 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
