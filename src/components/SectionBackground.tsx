import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  variant: "dark" | "light" | "orange";
  position?: string;
  className?: string;
};

const overlays = {
  dark: "bg-[linear-gradient(rgba(58,0,12,0.68),rgba(58,0,12,0.74))]",
  orange:
    "bg-[linear-gradient(135deg,rgba(85,11,24,0.78),rgba(58,0,12,0.7)),linear-gradient(rgba(242,229,197,0.24),rgba(242,229,197,0.18))]",
  light: "bg-[linear-gradient(rgba(242,229,197,0.82),rgba(247,235,207,0.78))]",
};

export function SectionBackground({
  src,
  variant,
  position = "object-center",
  className = "",
}: SectionBackgroundProps) {
  return (
    <>
      <Image
        src={src}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className={`pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover ${position} ${className}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 ${overlays[variant]}`}
      />
    </>
  );
}
