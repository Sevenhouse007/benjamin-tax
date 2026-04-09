import {
  FileText,
  Layers,
  Building2,
  Clock,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const PHONE_DISPLAY = "(323) 982-7929";
export const PHONE_TEL = "+13239827929";
export const EMAIL = "info@benjamintaxes.com";
export const ADDRESS = "1601 E Imperial Hwy, Los Angeles, CA 90059";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "W-2 & Individual Returns",
    description:
      "Full-service individual tax preparation for employees, retirees, and standard income filers.",
    icon: FileText,
  },
  {
    title: "Self-Employed & 1099",
    description:
      "Maximize deductions for freelancers, gig workers, and independent contractors.",
    icon: Layers,
  },
  {
    title: "Small Business Returns",
    description:
      "S-Corp, LLC, and sole proprietor returns with expert guidance on business deductions.",
    icon: Building2,
  },
  {
    title: "Prior Year & Back Taxes",
    description:
      "Behind on filings? We handle prior year returns and IRS correspondence discreetly.",
    icon: Clock,
  },
  {
    title: "ITIN Applications",
    description:
      "We help individuals without Social Security Numbers obtain an ITIN and file correctly.",
    icon: Users,
  },
  {
    title: "Fast Cash Advance",
    description:
      "Get up to $2,500 the same day you file. Approval in minutes, no credit check required.",
    icon: Zap,
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  initials: string;
  avatarBg: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Benjamin Tax got my money fast and the whole process was easy. They got me the biggest refund I've ever had.",
    name: "Martha A.",
    location: "Watts, CA",
    initials: "MA",
    avatarBg: "bg-amber-500",
  },
  {
    quote:
      "Professional, bilingual, and genuinely cared about my situation as a self-employed contractor. They found deductions my previous preparer missed for years.",
    name: "K. Wilson",
    location: "Long Beach, CA",
    initials: "KW",
    avatarBg: "bg-teal-600",
  },
  {
    quote:
      "I had a complicated international tax situation and they handled it perfectly. They saved me $400 compared to my old CPA.",
    name: "J. Wale",
    location: "Los Angeles, CA",
    initials: "JW",
    avatarBg: "bg-blue-600",
  },
];

export const locations = ["103rd", "Gage", "IMP", "LBC"];
