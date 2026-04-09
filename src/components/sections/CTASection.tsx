import { Upload, Users } from "lucide-react";
import { buttonClasses } from "../ui/Button";

export default function CTASection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
        <div className="border border-hunter rounded-2xl bg-cream p-8">
          <Upload className="text-hunter" size={28} />
          <h3 className="font-crimson text-[24px] text-hunter font-bold mt-4">
            Ready to file?
          </h3>
          <p className="text-[13px] text-charcoal/70 font-instrument mt-3">
            Book a free appointment at any of our 4 LA locations, or start
            online from home. Same-day fast cash advance available.
          </p>
          <a
            href="/book"
            className={buttonClasses({ variant: "gold", size: "md", className: "mt-5" })}
          >
            Book Free Appointment →
          </a>
        </div>

        <div className="border border-sage rounded-2xl bg-white p-8">
          <Users className="text-hunter" size={28} />
          <h3 className="font-crimson text-[24px] text-hunter font-bold mt-4">
            Join our team
          </h3>
          <p className="text-[13px] text-charcoal/70 font-instrument mt-3">
            We&apos;re hiring CTEC-certified tax preparers across all LA
            locations. Flexible hours, competitive commission, and ongoing
            training provided.
          </p>
          <a
            href="#careers"
            className={buttonClasses({ variant: "outline", size: "md", className: "mt-5" })}
          >
            View Open Positions →
          </a>
        </div>
      </div>
    </section>
  );
}
