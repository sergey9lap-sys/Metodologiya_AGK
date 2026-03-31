import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-gradient-to-r from-orange-1 to-orange-2",
    "text-white font-bold",
    "shadow-button",
    "motion-safe:hover:shadow-button-hover motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.03] motion-safe:hover:brightness-105",
    "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
    "motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out"
  ),
  secondary: cn(
    "border-2 border-orange-1",
    "bg-white text-orange-1 font-bold",
    "motion-safe:hover:bg-orange-1 motion-safe:hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-button",
    "motion-safe:active:translate-y-0",
    "motion-safe:transition-all motion-safe:duration-200 motion-safe:ease-out"
  ),
  ghost: cn(
    "text-text-secondary font-semibold",
    "motion-safe:hover:text-orange-1",
    "motion-safe:transition-colors motion-safe:duration-200"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
  sm: "px-6 py-3 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-xl font-bold tracking-wide",
          "focus-ring",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
