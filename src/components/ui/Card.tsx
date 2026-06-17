import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type CardVariant = "default" | "accent";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default: "border-card-border",
  accent: "border-2 border-orange-2 shadow-card-hover",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group",
          "relative overflow-hidden",
          "rounded-[22px]",
          "bg-card-bg/92",
          "border",
          "shadow-card",
          "p-5 lg:p-6",
          "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
          "before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-orange-2/45 before:to-transparent",
          "motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card-hover motion-safe:hover:border-orange-2/60",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
