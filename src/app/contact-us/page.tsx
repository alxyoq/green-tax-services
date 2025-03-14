import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="container py-24 mt-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            We're here to answer your questions and provide the tax assistance you need. Contact us today to schedule a consultation or learn more about our services.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 bg-accent p-3 rounded-full text-primary">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <Link href="tel:+13526332042" className="text-primary hover:underline">
                  (352) 633-2042
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-accent p-3 rounded-full text-primary">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <Link href="mailto:EM@greentaxinc.com" className="text-primary hover:underline">
                  EM@greentaxinc.com
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-accent p-3 rounded-full text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Mailing Address</h3>
                <p>
                  P.O. Box 519<br />
                  Lady Lake, FL 32158
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 bg-accent p-3 rounded-full text-primary">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Hours of Operation</h3>
                <p className="font-medium mt-1">Tax Season (February 1st - April 15th):</p>
                <p className="mb-2">Monday - Saturday, 9:00 AM - 5:00 PM</p>
                <p className="font-medium">Off Season (May - December):</p>
                <p>By appointment only</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/people/Green-Tax-Services-Inc/100063495913443/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/emgreentaxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-accent p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
          <p className="mb-6">
            The best way to get started is to schedule a consultation. We offer both in-person and virtual meetings to accommodate your schedule and preferences.
          </p>
          <Link
            href="https://calendly.com/em--gts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Book an Appointment
          </Link>

          <div className="mt-8 pt-8 border-t border-primary/10">
            <h3 className="text-xl font-bold mb-4">Client Portal</h3>
            <p className="mb-6">
              Existing clients can access their documents and communicate securely through our TaxDome client portal.
            </p>
            <Link
              href="http://greentaxinc.taxdome.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-white transition-colors"
            >
              Access Client Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
