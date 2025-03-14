"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-accent pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              Fighting to <span className="text-primary">Reduce</span> <br />Your Tax
            </h1>
            <p className="text-lg text-foreground/80 max-w-xl">
              Professional tax services for business owners, executives, and independent professionals. Affordable, experienced, and friendly.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://calendly.com/em--gts"
                className="btn-primary px-6 py-3 rounded-md font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="btn-outline px-6 py-3 rounded-md font-medium"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-foreground/70">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
                alt="Tax professional helping a client"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Badges */}
            <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center">
              <CheckCircle2 className="text-primary mr-2" size={20} />
              <div>
                <div className="text-sm font-medium">IRS Enrolled Agent</div>
                <div className="text-xs text-foreground/70">Certified Professional</div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 bg-white rounded-xl shadow-lg p-4 flex items-center">
              <div className="mr-2 text-primary font-bold">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Secure Client Portal</div>
                <div className="text-xs text-foreground/70">TaxDome Integrated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
