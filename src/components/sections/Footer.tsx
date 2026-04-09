import { LogoWhite } from "../Logo";

const Facebook = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
  </svg>
);
const Instagram = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-hunter text-cream mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <LogoWhite className="h-24" />
          <p className="mt-4 text-[12px] text-cream/70 font-instrument leading-relaxed">
            Individual tax preparation for Greater Los Angeles. CTEC & PTIN
            certified. Hablamos Español.
          </p>
        </div>

        <div>
          <p className="font-instrument font-bold text-[13px] text-white uppercase tracking-wider">
            Services
          </p>
          <ul className="mt-3 space-y-2 text-[13px] font-instrument">
            {["W-2 Returns", "Self-Employed", "Small Business", "ITIN Applications", "Back Taxes"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-cream/80 hover:text-gold">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-instrument font-bold text-[13px] text-white uppercase tracking-wider">
            Company
          </p>
          <ul className="mt-3 space-y-2 text-[13px] font-instrument">
            {["About Us", "Locations", "Join Our Team", "Blog", "Contact"].map((s) => (
              <li key={s}>
                <a href="#" className="text-cream/80 hover:text-gold">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-instrument font-bold text-[13px] text-white uppercase tracking-wider">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-[13px] font-instrument">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="text-cream/80 hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="text-cream/80 hover:text-gold">
                {EMAIL}
              </a>
            </li>
            <li className="text-cream/80">Imperial · MLK · Gage · Long Beach</li>
            <li>
              <a
                href={process.env.NEXT_PUBLIC_PORTAL_URL || "#"}
                className="text-gold hover:underline"
              >
                Client Portal →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-cream/60 font-instrument">
            © 2026 Benjamin Tax Service · 1601 E Imperial Hwy, Los Angeles, CA 90059
          </p>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button className="text-[11px] font-instrument bg-gold text-white px-3 py-1 rounded-full">
                English
              </button>
              <button className="text-[11px] font-instrument border border-cream/30 text-cream/80 px-3 py-1 rounded-full">
                Español
              </button>
            </div>
            <div className="flex gap-3 ml-3">
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
