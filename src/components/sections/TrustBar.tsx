"use client";

import { motion } from "framer-motion";
import Counter from "../Counter";

const items = [
  { value: 15, suffix: "+", l1: "Years serving", l2: "Los Angeles" },
  { value: 5, suffix: "", l1: "Locations across", l2: "Greater LA" },
  { value: 100, suffix: "%", l1: "Accuracy", l2: "guaranteed" },
  { value: 0, prefix: "$", l1: "Upfront cost", l2: "to get a quote" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-hunter/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-hunter/10">
        {items.map((it, i) => (
          <motion.div
            key={`${it.l1}-${i}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3 px-4 py-3"
          >
            <span className="w-[3px] h-8 bg-gold rounded" />
            <div>
              <p className="font-crimson text-[28px] leading-none text-hunter font-bold">
                <Counter value={it.value} prefix={it.prefix} suffix={it.suffix} />
              </p>
              <p className="text-[12px] text-charcoal/60 font-instrument leading-tight">
                {it.l1}
                <br />
                {it.l2}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
