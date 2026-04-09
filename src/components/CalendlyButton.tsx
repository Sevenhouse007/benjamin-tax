"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function CalendlyButton({ children, className }: Props) {
  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/benjamintax";

  useEffect(() => {
    setRootEl(document.body);
  }, []);

  if (!rootEl) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(className)}
      >
        {children}
      </a>
    );
  }

  return (
    <PopupButton
      url={url}
      rootElement={rootEl}
      text={children as string}
      className={cn(className)}
    />
  );
}
