import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { locationList } from "@/lib/locations";
import { PHONE_TEL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locations | Benjamin Tax Service",
  description:
    "Find a Benjamin Tax Service office near you. 5 locations across Greater Los Angeles — Watts, Bell Gardens, Long Beach, and Compton.",
};

export default function LocationsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Locations"
        title="5 Offices Across Greater LA"
        subtitle="Walk in, call ahead, or book online. Every location is staffed with CTEC-certified, bilingual preparers."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locationList.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white border border-sage/30 rounded-2xl p-6 hover:border-gold transition-colors"
            >
              <p className="text-[11px] uppercase tracking-widest text-gold font-instrument font-bold">
                {loc.neighborhood}
              </p>
              <h2 className="font-crimson text-[22px] text-hunter font-bold mt-1">
                {loc.name}
              </h2>
              <ul className="mt-4 space-y-2 text-[13px] font-instrument text-charcoal/80">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-hunter mt-0.5 flex-shrink-0" />
                  {loc.address}
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-hunter flex-shrink-0" />
                  <a href={`tel:${PHONE_TEL}`} className="hover:text-hunter">
                    {loc.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} className="text-hunter flex-shrink-0" />
                  {loc.hours}
                </li>
              </ul>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 text-[12px] font-instrument font-bold text-gold hover:underline"
              >
                Get directions →
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
