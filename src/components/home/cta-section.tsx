"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reduce Your Tax Burden?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our tax experts today. We'll help you navigate the complexities of tax law and find every legitimate deduction you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://calendly.com/em--gts"
              className="px-6 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-md border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Tax Season Hours */}
          <div className="bg-primary-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Tax Season Hours</h3>
            <p className="text-white/90 mb-1">February 1st - April 15th</p>
            <p className="text-white/80">Monday - Saturday, 9am - 5pm</p>
          </div>

          {/* Off Season Hours */}
          <div className="bg-primary-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Off Season Hours</h3>
            <p className="text-white/90 mb-1">May - December</p>
            <p className="text-white/80">By appointment only</p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-dark p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">Contact Information</h3>
            <p className="text-white/90 mb-1">Phone: <Link href="tel:+13526332042" className="hover:text-white/80">(352) 633-2042</Link></p>
            <p className="text-white/90">Email: <Link href="mailto:EM@greentaxinc.com" className="hover:text-white/80">EM@greentaxinc.com</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}
