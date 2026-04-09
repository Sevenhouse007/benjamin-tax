"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How much does tax preparation cost?",
    a: "We offer free quotes — pricing depends on the complexity of your return. Most W-2 returns start at $99, and self-employed returns at $199. There is no upfront cost to get a quote.",
  },
  {
    q: "How fast can I get my refund?",
    a: "Most clients receive their refund within 10–14 days of e-filing. We also offer same-day Fast Cash Advances of up to $2,500 with no credit check.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Sí. Our entire team is bilingual and we serve a large Spanish-speaking client base across Greater Los Angeles.",
  },
  {
    q: "What documents do I need to file?",
    a: "Photo ID, Social Security card or ITIN, all W-2s and 1099s, last year's return (if available), and any 1095-A, 1098-T, or deduction receipts. You can upload them all securely from home.",
  },
  {
    q: "Can you help with prior year or back taxes?",
    a: "Yes — we routinely help clients catch up on multiple years of unfiled returns and handle IRS correspondence on their behalf. Everything is handled discreetly.",
  },
  {
    q: "Are you certified?",
    a: "Yes. All our preparers are CTEC-registered with active PTINs, and we hold an EFIN with the IRS as an authorized e-file provider.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold text-center">
          Questions
        </p>
        <h2 className="font-crimson text-[36px] text-hunter font-bold mt-2 text-center">
          Frequently Asked
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <Disclosure key={f.q}>
              {({ open }) => (
                <div className="border border-sage/30 rounded-xl bg-white overflow-hidden">
                  <Disclosure.Button className="w-full flex items-center justify-between text-left px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    <span className="font-instrument font-bold text-[14px] text-charcoal">
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={cn(
                        "text-hunter transition-transform",
                        open && "rotate-180"
                      )}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Disclosure.Panel className="px-5 pb-4 text-[13px] font-instrument text-charcoal/70 leading-relaxed">
                      {f.a}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
