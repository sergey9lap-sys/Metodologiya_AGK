"use client";

import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero, hide when at pricing section
      const pricingSection = document.getElementById("pricing");
      const pricingTop = pricingSection?.getBoundingClientRect().top ?? Infinity;
      
      setIsVisible(window.scrollY > 500 && pricingTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 pb-safe bg-white/95 backdrop-blur-xl border-t-2 border-orange-1 lg:hidden z-40 motion-safe:animate-slide-up shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-orange-1 text-xs font-semibold bg-orange-1/10 px-3 py-2 rounded-full">
          <Users className="w-4 h-4" />
          <span>12 мест</span>
        </div>
        <a href="#pricing" className="flex-1">
          <Button variant="primary" className="w-full">
            Записаться
          </Button>
        </a>
      </div>
    </div>
  );
}
