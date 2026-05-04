import Image from "next/image";

type SectionBackgroundProps = {
  src: string;
  variant: "dark" | "light" | "orange";
  position?: string;
  className?: string;
};

const overlays = {
  dark: "bg-[linear-gradient(rgba(0,0,0,0.52),rgba(0,0,0,0.52))]",
  orange:
    "bg-[linear-gradient(rgba(255,167,0,0.68),rgba(255,167,0,0.68)),linear-gradient(rgba(0,0,0,0.50),rgba(0,0,0,0.50))]",
  light: "bg-[rgba(255,255,255,0.76)]",
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
