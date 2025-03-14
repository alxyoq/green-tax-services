"use client";

import Link from "next/link";
import { Facebook, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Green Tax Services</h3>
            <p className="text-white/80 mb-4">
              Fighting to reduce your tax. We are a full-service accounting firm offering a broad
              range of services for business owners, executives, and independent professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Green-Tax-Services-Inc/100063495913443/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com/emgreentaxinc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white/80"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:EM@greentaxinc.com"
                className="text-white hover:text-white/80"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us/" className="text-white/80 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services/" className="text-white/80 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/our-process/" className="text-white/80 hover:text-white">
                  Our Process
                </a>
              </li>
              <li>
                <a href="/contact-us/" className="text-white/80 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="http://greentaxinc.taxdome.com/app"
                  className="text-white/80 hover:text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-white/80">
                  P.O. Box 519<br />Lady Lake, FL 32158
                </span>
              </li>
              <li>
                <a href="tel:+13526332042" className="text-white/80 hover:text-white">
                  (352) 633-2042
                </a>
              </li>
              <li>
                <a href="mailto:EM@greentaxinc.com" className="text-white/80 hover:text-white">
                  EM@greentaxinc.com
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Schedule</h3>
            <p className="text-white font-semibold mb-1">Tax Season:</p>
            <p className="text-white/80 mb-3">
              February 1st - April 15th<br />
              Monday - Saturday, 9:00 AM - 5:00 PM
            </p>
            <p className="text-white font-semibold mb-1">Off Season:</p>
            <p className="text-white/80 mb-3">
              May - December<br />
              By appointment only
            </p>
            <a
              href="https://calendly.com/em--gts"
              className="inline-block px-4 py-2 bg-white text-primary rounded-md font-medium hover:bg-white/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Appointment
            </a>
          </div>
        </div>

        {/* TaxDome Integration */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <a
            href="https://taxdome.com"
            className="flex items-center text-white mb-4 md:mb-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs uppercase tracking-wider mr-2">TAXDOME</span>
            <span className="text-xs text-white/70">Secure Client Portal</span>
          </a>
          <div className="text-white/70 text-sm">
            © {currentYear} Green Tax Services, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
