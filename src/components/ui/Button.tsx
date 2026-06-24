import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "cream" | "secondary" | "ghost";
type ButtonSize = "default" | "lg" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-[#D96A32]",
    "text-white font-semibold uppercase",
    "shadow-[0_14px_32px_rgba(217,106,50,0.28)]",
    "motion-safe:hover:bg-[#C45A29] motion-safe:hover:shadow-[0_18px_42px_rgba(217,106,50,0.34)] motion-safe:hover:-translate-y-0.5",
    "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
  ),
  cream: cn(
    "border border-[#F2E5C5]/70",
    "bg-[#F2E5C5] text-[#550B18] font-semibold uppercase",
    "shadow-[0_14px_34px_rgba(0,0,0,0.18)]",
    "motion-safe:hover:bg-[#F7EBCF] motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_18px_42px_rgba(0,0,0,0.22)]",
    "motion-safe:active:translate-y-0 motion-safe:active:scale-100",
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
  ),
  secondary: cn(
    "border-2 border-[#D96A32]",
    "bg-[#F7EBCF] text-[#D96A32] font-semibold uppercase",
    "motion-safe:hover:bg-[#D96A32] motion-safe:hover:text-white motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_14px_32px_rgba(217,106,50,0.28)]",
    "motion-safe:active:translate-y-0",
    "motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out"
  ),
  ghost: cn(
    "text-text-secondary font-semibold",
    "motion-safe:hover:text-orange-2",
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
          "rounded-[12px] font-semibold tracking-wide cursor-pointer",
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
