import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We begin with a comprehensive consultation to understand your financial situation, goals, and tax concerns. This meeting helps us identify the specific services you need and develop a personalized approach to your tax planning and preparation."
  },
  {
    id: 2,
    title: "Information Gathering",
    description: "After our initial meeting, we'll provide you with a tailored checklist of documents and information we need to prepare your taxes efficiently. We make this process as smooth as possible with secure document sharing options."
  },
  {
    id: 3,
    title: "Tax Planning",
    description: "Before preparing your return, we analyze your financial data to identify tax-saving opportunities. We develop strategies to minimize your tax liability within legal boundaries, ensuring you only pay what you owe."
  },
  {
    id: 4,
    title: "Tax Preparation",
    description: "Our experienced professionals meticulously prepare your tax returns, ensuring accuracy and compliance with current tax laws. We review all documentation carefully to maximize deductions and credits available to you."
  },
  {
    id: 5,
    title: "Review and Filing",
    description: "We conduct a thorough review of your prepared returns, then schedule a meeting to explain our findings and answer any questions. Once you approve, we file your returns electronically for faster processing and refunds."
  },
  {
    id: 6,
    title: "Year-Round Support",
    description: "Our relationship doesn't end after filing. We provide ongoing support throughout the year, addressing any tax notices you receive and offering guidance for major financial decisions to optimize your tax position."
  }
];

export default function OurProcess() {
  return (
    <div className="container py-24 mt-16">
      <h1 className="text-4xl font-bold mb-4">Our Process</h1>
      <p className="text-lg mb-12">
        We follow a proven, systematic approach to ensuring your tax preparation is accurate, compliant, and optimized for your financial benefit.
      </p>

      <div className="relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-[39px] top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
              {/* Step number */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold relative z-10">
                {step.id}
              </div>

              {/* Step content */}
              <div className="flex-grow pt-3">
                <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                <p className="text-foreground/70 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-accent rounded-xl">
          <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6">
            Contact us today to schedule your initial consultation and begin your journey to optimized tax planning and preparation.
          </p>
          <a
            href="https://calendly.com/em--gts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
