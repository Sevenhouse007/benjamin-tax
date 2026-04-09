"use client";

import { motion } from "framer-motion";

const steps = [
  { t: "Upload your documents securely", d: "Drag-and-drop W-2s, 1099s, or photos. Bank-grade encryption end-to-end." },
  { t: "AI reads and organizes everything", d: "Our system extracts every field automatically — no manual entry required." },
  { t: "A certified preparer reviews your return", d: "A CTEC-certified human checks every figure before anything is filed." },
  { t: "E-filed directly with the IRS", d: "Fast, secure submission with confirmation and tracking the same day." },
];

const clients = [
  { name: "Maria G.", sub: "2024 Return", status: "Filed", badge: "bg-sage/20 text-hunter", note: "$2,100 + $640 refund", pct: 100, color: "bg-sage", date: "Refund deposited · Apr 4, 2025" },
  { name: "James T.", sub: "2024 Return", status: "In Review", badge: "bg-amber-100 text-amber-800", note: "Self-employed 1099", pct: 65, color: "bg-amber-500", date: "Preparer review in progress" },
  { name: "Rosa M.", sub: "2024 Return", status: "Uploading", badge: "bg-gray-200 text-gray-700", note: "W-2 received", pct: 30, color: "bg-gray-400", date: "Upload remaining documents to continue" },
];

export default function TechSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-flex items-center gap-2 border border-sage/40 rounded-full px-3 py-1 text-[11px] font-instrument text-charcoal/70">
            <span className="w-2 h-2 rounded-full bg-sage" />
            New: AI-Powered Filing
          </span>
          <p className="mt-4 text-gold uppercase tracking-widest text-[12px] font-instrument font-bold">
            Technology
          </p>
          <h2 className="font-crimson text-[34px] text-hunter font-bold mt-2">
            Zero-Touch Tax Filing
          </h2>
          <p className="mt-4 text-[14px] text-charcoal/70 font-instrument max-w-md">
            The only LA tax service with AI-assisted preparation. Upload your
            documents once — our technology reads, calculates, and prepares
            your return with expert review before it&apos;s filed.
          </p>
          <ol className="mt-8 space-y-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex gap-4 pb-4 border-b border-hunter/10 last:border-0"
              >
                <span className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-instrument font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-instrument font-bold text-[14px] text-hunter">
                    {s.t}
                  </p>
                  <p className="text-[12px] text-charcoal/60 font-instrument mt-1">
                    {s.d}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="bg-cream rounded-2xl border border-sage/30 p-7">
          <p className="text-[12px] text-charcoal/60 font-instrument">
            Client Portal · 2024 Tax Season
          </p>
          <div className="mt-4 space-y-4">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl border border-sage/20 p-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-instrument font-bold text-[14px] text-charcoal">
                      {c.name}
                    </p>
                    <p className="text-[11px] text-charcoal/60 font-instrument">
                      {c.sub}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-instrument font-bold px-2 py-1 rounded ${c.badge}`}
                  >
                    {c.status}
                  </span>
                </div>
                <p className="mt-2 text-[12px] text-charcoal/70 font-instrument">
                  {c.note}
                </p>
                <div className="mt-3 h-1.5 bg-cream rounded-full overflow-hidden">
                  <div
                    className={`h-full ${c.color}`}
                    style={{ width: `${c.pct}%` }}
                  />
                </div>
                <p className="mt-2 text-[11px] text-charcoal/60 font-instrument">
                  {c.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
