"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/constants";

const Star = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold" aria-hidden="true">
    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.401 8.169L12 18.896l-7.335 3.871 1.401-8.169L.132 9.211l8.2-1.193z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-gold uppercase tracking-widest text-[12px] font-instrument font-bold">
          Testimonials
        </p>
        <h2 className="font-crimson text-[36px] text-hunter font-bold mt-2">
          What Our Clients Say
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl border border-sage/30 p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} />
                ))}
              </div>
              <p className="mt-4 italic text-[13px] leading-[1.6] text-charcoal/70 font-instrument">
                “{t.quote}”
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span
                  className={`w-9 h-9 rounded-full ${t.avatarBg} text-white flex items-center justify-center font-instrument font-bold text-[12px]`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-instrument font-bold text-[13px] text-charcoal">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-charcoal/60 font-instrument">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
