"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold">
          What We Do
        </p>
        <h2 className="font-crimson text-[36px] text-hunter font-bold mt-2">
          Every Tax Situation, Covered
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-sage/30 hover:border-gold transition-colors p-6 cursor-pointer"
              >
                <Icon className="text-hunter" size={26} />
                <h3 className="mt-4 text-[14px] font-bold font-instrument text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 text-[12px] text-charcoal/60 font-instrument leading-relaxed">
                  {s.description}
                </p>
                <p className="mt-4 text-[12px] text-gold font-instrument font-bold">
                  Learn more →
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
