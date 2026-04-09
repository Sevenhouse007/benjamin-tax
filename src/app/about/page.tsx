import type { Metadata } from "next";
import { Award, Users, Heart, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About | Benjamin Tax Service",
  description:
    "15+ years preparing taxes for Greater Los Angeles families and small businesses. CTEC and PTIN certified. Bilingual. Community first.",
};

const values = [
  {
    icon: Award,
    title: "Certified Expertise",
    body: "Every preparer is CTEC-registered with an active IRS PTIN. We hold an EFIN as an authorized e-file provider.",
  },
  {
    icon: Users,
    title: "Bilingual Team",
    body: "We serve a large Spanish-speaking client base across LA. Toda nuestra plantilla es bilingüe.",
  },
  {
    icon: Heart,
    title: "Community First",
    body: "We've been a fixture of South LA since 2010, with deep ties to the neighborhoods we serve.",
  },
  {
    icon: ShieldCheck,
    title: "Accuracy Guaranteed",
    body: "If we make a mistake on your return, we cover the penalty and interest. 100% accuracy promise.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="About Us"
        title="LA's Tax Experts Since 2010"
        subtitle="Family-owned, bilingual, and community-rooted. We've spent 15+ years helping Angelenos file with confidence and walk out with the maximum refund they deserve."
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2 className="font-crimson text-[32px] text-hunter font-bold">
            Our Story
          </h2>
          <p className="mt-4 text-[15px] text-charcoal/80 font-instrument leading-relaxed">
            Benjamin Tax Service started in 2010 as a single storefront on
            Imperial Highway with one goal: bring honest, expert tax help to a
            community that had been underserved for too long. Word spread fast.
            Within five years we had three locations; today we operate four
            offices across Greater LA and prepare thousands of returns every
            season.
          </p>
          <p className="mt-4 text-[15px] text-charcoal/80 font-instrument leading-relaxed">
            We&apos;re proud to be CTEC and PTIN certified, an authorized IRS
            e-file provider, and a fully bilingual team that treats every client
            like family. Whether you&apos;re a W-2 employee, a self-employed
            contractor, or running a small business, we&apos;ll find every
            deduction you&apos;re entitled to and file on your behalf — fast.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-crimson text-[32px] text-hunter font-bold text-center">
            What We Stand For
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-white border border-sage/30 rounded-2xl p-6"
                >
                  <Icon className="text-hunter" size={26} />
                  <h3 className="mt-4 font-instrument font-bold text-[14px] text-charcoal">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[12px] text-charcoal/60 font-instrument leading-relaxed">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
