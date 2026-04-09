import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center font-instrument font-bold rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-60 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        gold: "bg-gold text-white hover:brightness-95",
        outline: "bg-white border border-hunter text-hunter hover:bg-hunter/5",
        ghost: "text-hunter hover:bg-hunter/5",
      },
      size: {
        sm: "text-[13px] px-4 py-2",
        md: "text-sm px-5 py-3",
        lg: "text-base px-6 py-3.5",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(button({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export const buttonClasses = (
  opts?: VariantProps<typeof button> & { className?: string }
) => cn(button({ variant: opts?.variant, size: opts?.size }), opts?.className);
