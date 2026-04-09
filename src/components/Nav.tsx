"use client";

import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Menu, X, Phone } from "lucide-react";
import { LogoHorizontal } from "./Logo";
import CalendlyButton from "./CalendlyButton";
import { buttonClasses } from "./ui/Button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const links = [
  { name: "Services", href: "/#services" },
  { name: "Locations", href: "/locations" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Español", href: "/es" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`sticky top-0 z-50 bg-white border-b border-hunter/10 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
            <a href="/" aria-label="Benjamin Tax Service home">
              <LogoHorizontal className="h-20" />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="text-sm font-instrument text-charcoal hover:text-hunter hover:font-bold transition-all focus-visible:ring-2 focus-visible:ring-gold rounded"
                >
                  {l.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-sm font-instrument text-hunter hover:text-sage"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_PORTAL_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "outline", size: "sm" })}
              >
                Login
              </a>
              <CalendlyButton className={buttonClasses({ variant: "gold", size: "sm" })}>
                Book Appointment
              </CalendlyButton>
            </div>

            <Disclosure.Button className="lg:hidden p-2 text-hunter focus-visible:ring-2 focus-visible:ring-gold rounded">
              {open ? <X size={22} /> : <Menu size={22} />}
            </Disclosure.Button>
          </div>

          <Disclosure.Panel className="lg:hidden bg-white border-t border-hunter/10">
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="text-sm font-instrument text-charcoal py-2"
                >
                  {l.name}
                </a>
              ))}
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-sm font-instrument text-hunter py-2"
              >
                <Phone size={14} />
                {PHONE_DISPLAY}
              </a>
              <a
                href={process.env.NEXT_PUBLIC_PORTAL_URL || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({ variant: "outline", size: "sm", className: "w-full" })}
              >
                Login
              </a>
              <CalendlyButton className={buttonClasses({ variant: "gold", size: "sm", className: "w-full" })}>
                Book Appointment
              </CalendlyButton>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
