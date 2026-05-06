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
    "bg-[#7D0000]",
    "text-white font-semibold uppercase",
    "shadow-[0_6px_20px_rgba(125,0,0,0.25)]",
    "motion-safe:hover:bg-[#5E0000] motion-safe:hover:shadow-[0_8px_24px_rgba(125,0,0,0.32)] motion-safe:hover:-translate-y-0.5",
    "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
  ),
  secondary: cn(
    "border-2 border-[#7D0000]",
    "bg-white text-[#7D0000] font-semibold uppercase",
    "motion-safe:hover:bg-[#7D0000] motion-safe:hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_6px_20px_rgba(125,0,0,0.25)]",
    "motion-safe:active:translate-y-0",
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
  ),
  ghost: cn(
    "text-text-secondary font-semibold",
    "motion-safe:hover:text-orange-1",
    "motion-safe:transition-colors motion-safe:duration-200"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-9 py-[18px] text-base",
  lg: "px-11 py-5 text-lg",
  sm: "px-7 py-3.5 text-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "rounded-[12px] font-semibold tracking-wide",
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
