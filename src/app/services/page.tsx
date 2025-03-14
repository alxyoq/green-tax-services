import { FileText, Building2, PiggyBank, BarChart3, ShieldCheck, HelpCircle } from "lucide-react";

const services = [
  {
    id: "individual",
    title: "Individual Tax Returns",
    description: "Personalized tax preparation for individuals, ensuring maximum deductions and accurate filing.",
    icon: FileText,
    details: "Our individual tax return services include comprehensive tax preparation tailored to your unique financial situation. We analyze your income, expenses, investments, and life changes to identify all possible deductions and credits, ensuring you pay only what you legally owe. Our experienced tax professionals stay current with the ever-changing tax laws to maximize your refund or minimize your liability."
  },
  {
    id: "business",
    title: "Business Tax Returns",
    description: "Comprehensive tax services for businesses of all sizes, from self-employed to corporations.",
    icon: Building2,
    details: "Whether you're a sole proprietor, partnership, LLC, S-Corporation, or C-Corporation, our business tax services are designed to help you navigate complex tax regulations. We provide strategic tax planning, preparation, and filing services that address your specific industry challenges. Our goal is to minimize your tax burden while ensuring compliance with all federal, state, and local requirements."
  },
  {
    id: "planning",
    title: "Tax Planning",
    description: "Strategic planning to minimize your tax liability and maximize your financial future.",
    icon: PiggyBank,
    details: "Proactive tax planning is essential for long-term financial success. Our tax planning services look beyond the current year to develop comprehensive strategies that align with your business and personal goals. We identify opportunities for tax savings through timing of income and deductions, entity structure analysis, retirement planning, and investment strategies, all designed to legally reduce your tax burden."
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Professional bookkeeping services to keep your finances organized throughout the year.",
    icon: BarChart3,
    details: "Our professional bookkeeping services help you maintain accurate financial records throughout the year. We assist with accounts payable, accounts receivable, payroll processing, bank reconciliations, and financial statement preparation. By keeping your books organized and up-to-date, we provide you with the financial clarity needed to make informed business decisions while preparing for a smooth tax season."
  },
  {
    id: "audit",
    title: "Audit Representation",
    description: "Expert representation before the IRS in case of an audit, protecting your interests.",
    icon: ShieldCheck,
    details: "Facing an IRS audit can be intimidating. Our enrolled agents provide professional representation during the entire audit process. We communicate with the IRS on your behalf, gather necessary documentation, prepare responses, attend meetings, and work diligently to resolve issues efficiently. Our expertise in tax law and audit procedures helps minimize additional tax assessments and penalties."
  },
  {
    id: "support",
    title: "Year-Round Support",
    description: "Ongoing tax advice and support to help you make informed financial decisions.",
    icon: HelpCircle,
    details: "Tax considerations impact financial decisions throughout the year. Our year-round support service provides you with access to our tax professionals whenever you need guidance. Whether you're considering a major purchase, selling property, starting a business, or planning for retirement, we're available to help you understand the tax implications and make decisions that align with your financial goals."
  }
];

export default function Services() {
  return (
    <div className="container py-24 mt-16">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-lg mb-12">
        We offer a wide range of professional tax and accounting services to meet your needs
      </p>

      <div className="space-y-16">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-accent rounded-lg text-primary mr-4">
                    <service.icon size={32} />
                  </div>
                  <h2 className="text-2xl font-bold">{service.title}</h2>
                </div>
                <p className="text-foreground/70">{service.description}</p>
              </div>
              <div className="lg:col-span-8">
                <div className="bg-accent p-8 rounded-xl">
                  <p className="text-foreground">{service.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
