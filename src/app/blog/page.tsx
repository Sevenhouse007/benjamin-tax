import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog | Benjamin Tax Service",
  description:
    "Tax tips, deadline reminders, and LA-specific advice from the Benjamin Tax Service team.",
};

const posts = [
  {
    slug: "2024-deadline-checklist",
    title: "Your 2024 Tax Filing Checklist",
    date: "March 14, 2025",
    excerpt:
      "Everything you need to gather before you file — W-2s, 1099s, ITIN info, and deductible receipts. Print this and check the boxes.",
    category: "Filing Tips",
  },
  {
    slug: "self-employed-deductions",
    title: "10 Deductions Self-Employed Angelenos Always Miss",
    date: "February 28, 2025",
    excerpt:
      "Mileage, home office, phone bills, and more. If you freelance or contract, these are the deductions you're probably leaving on the table.",
    category: "Self-Employed",
  },
  {
    slug: "itin-application-guide",
    title: "How to Apply for an ITIN in 2025",
    date: "February 10, 2025",
    excerpt:
      "A step-by-step guide for applying for an Individual Taxpayer Identification Number — what documents you need and how long it takes.",
    category: "ITIN",
  },
  {
    slug: "fast-cash-advance",
    title: "How Our Same-Day $2,500 Cash Advance Works",
    date: "January 22, 2025",
    excerpt:
      "Get cash in hand the day you file. No credit check, no surprises. Here's exactly how the program works and who qualifies.",
    category: "Refunds",
  },
  {
    slug: "back-taxes-explained",
    title: "Behind on Taxes? Here's What to Do",
    date: "January 5, 2025",
    excerpt:
      "Owing the IRS for prior years feels overwhelming, but it's fixable. We walk through the options and how we help.",
    category: "Back Taxes",
  },
  {
    slug: "small-business-2025",
    title: "Small Business Tax Changes for 2025",
    date: "December 18, 2024",
    excerpt:
      "QBI, 1099-K thresholds, and the new R&D rules — what LA small business owners need to know for the 2024 filing year.",
    category: "Small Business",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Blog"
        title="Tax Tips for Real People"
        subtitle="Plain-English guides from our preparers — filing tips, deduction checklists, and LA-specific advice."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="bg-white border border-sage/30 rounded-2xl p-6 hover:border-gold transition-colors"
            >
              <p className="text-[11px] uppercase tracking-widest text-gold font-instrument font-bold">
                {p.category}
              </p>
              <h2 className="mt-2 font-crimson text-[20px] text-hunter font-bold leading-tight">
                {p.title}
              </h2>
              <p className="mt-2 text-[11px] text-charcoal/50 font-instrument">
                {p.date}
              </p>
              <p className="mt-3 text-[13px] text-charcoal/70 font-instrument leading-relaxed">
                {p.excerpt}
              </p>
              <a
                href={`/blog/${p.slug}`}
                className="inline-block mt-4 text-[12px] font-instrument font-bold text-gold hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
