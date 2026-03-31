import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

type CardVariant = "default" | "accent";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, string> = {
  default: "border-card-border",
  accent: "border-2 border-orange-1 shadow-card-hover",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group",
          "rounded-2xl",
          "bg-white",
          "border",
          "shadow-card",
          "p-5 lg:p-6",
          "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out",
          "motion-safe:hover:-translate-y-2 motion-safe:hover:shadow-card-hover motion-safe:hover:border-orange-1/60",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
