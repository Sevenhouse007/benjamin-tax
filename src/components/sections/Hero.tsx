"use client";

import { motion } from "framer-motion";
import Dropzone from "../Dropzone";
import { buttonClasses } from "../ui/Button";

const badges = [
  "CTEC Certified",
  "PTIN Certified",
  "15+ Years",
  "Hablamos Español",
  "Fast Cash Advance",
];

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-sage" />
            <span className="text-[12px] uppercase tracking-widest text-charcoal/60 font-instrument">
              Serving Greater Los Angeles · Hablamos Español
            </span>
          </div>
          <h1 className="font-crimson text-[56px] leading-[1.05] text-charcoal font-bold">
            Get Your <span className="text-gold">Maximum</span> Refund.{" "}
            <span className="text-gold">Guaranteed.</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] text-charcoal/70 font-instrument">
            LA&apos;s certified tax experts — CTEC & PTIN certified, bilingual,
            and backed by 15+ years of experience. Upload your documents and
            let us handle the rest.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="text-[11px] font-instrument text-charcoal/70 border border-sage/50 rounded-full px-3 py-1"
              >
                {b}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/book" className={buttonClasses({ variant: "gold", size: "md" })}>
              Book Free Consultation
            </a>
            <a
              href={process.env.NEXT_PUBLIC_PORTAL_URL || "#"}
              className={buttonClasses({ variant: "outline", size: "md" })}
            >
              Upload Documents
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-7"
        >
          <p className="text-[13px] text-charcoal/60 font-instrument">
            Your estimated refund
          </p>
          <p className="font-crimson text-gold text-[48px] leading-none mt-1 font-bold">
            $4,070
          </p>
          <p className="text-[12px] text-charcoal/60 font-instrument mt-1">
            Based on W-2 + 1099 income
          </p>

          <div className="mt-5 space-y-3">
            <div>
              <div className="flex justify-between text-[12px] font-instrument text-charcoal/70 mb-1">
                <span>Federal</span>
                <span>$3,240</span>
              </div>
              <div className="h-2 bg-cream rounded-full overflow-hidden">
                <div className="h-full bg-gold" style={{ width: "75%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[12px] font-instrument text-charcoal/70 mb-1">
                <span>CA State</span>
                <span>$830</span>
              </div>
              <div className="h-2 bg-cream rounded-full overflow-hidden">
                <div className="h-full bg-gold" style={{ width: "26%" }} />
              </div>
            </div>
          </div>

          <div className="my-5 border-t border-hunter/10" />

          <Dropzone />
        </motion.div>
      </div>
    </section>
  );
}
