"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Update to use direct links with .html extension for static site compatibility
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us/" }, // trailing slash helps with Netlify
  { name: "Services", href: "/services/" },
  { name: "Our Process", href: "/our-process/" },
  { name: "Contact Us", href: "/contact-us/" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-primary text-white z-50 shadow-md">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold">
          Green Tax Services
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-white/90 hover:text-white font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="http://greentaxinc.taxdome.com/app"
            className="px-3 py-2 text-white/90 hover:text-white font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Client Portal
          </a>
          <a
            href="https://calendly.com/em--gts"
            className="ml-4 px-4 py-2 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-primary border-t border-white/10 pb-4">
          <div className="container flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-white/90 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="http://greentaxinc.taxdome.com/app"
              className="px-3 py-2 text-white/90 hover:text-white font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Client Portal
            </a>
            <a
              href="https://calendly.com/em--gts"
              className="mt-2 px-4 py-2 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
