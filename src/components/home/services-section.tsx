"use client";

import Link from "next/link";
import { FileText, Building2, PiggyBank, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

const services = [
  {
    id: "individual",
    title: "Individual Tax Returns",
    description: "Personalized tax preparation for individuals, ensuring maximum deductions and accurate filing.",
    icon: FileText,
    href: "/services#individual"
  },
  {
    id: "business",
    title: "Business Tax Returns",
    description: "Comprehensive tax services for businesses of all sizes, from self-employed to corporations.",
    icon: Building2,
    href: "/services#business"
  },
  {
    id: "planning",
    title: "Tax Planning",
    description: "Strategic planning to minimize your tax liability and maximize your financial future.",
    icon: PiggyBank,
    href: "/services#planning"
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Professional bookkeeping services to keep your finances organized throughout the year.",
    icon: BarChart3,
    href: "/services#bookkeeping"
  },
  {
    id: "audit",
    title: "Audit Representation",
    description: "Expert representation before the IRS in case of an audit, protecting your interests.",
    icon: ShieldCheck,
    href: "/services#audit"
  },
  {
    id: "support",
    title: "Year-Round Support",
    description: "Ongoing tax advice and support to help you make informed financial decisions.",
    icon: HelpCircle,
    href: "/services#support"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We offer a wide range of professional tax and accounting services to meet your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={service.href} className="group">
              <div className="feature-card h-full flex flex-col">
                <div className="mb-4 text-primary">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 flex-grow mb-4">
                  {service.description}
                </p>
                <div className="text-primary text-sm font-medium flex items-center">
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center btn-outline px-6 py-3 rounded-md font-medium"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
