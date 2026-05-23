import type { CSSProperties } from "react";
import { Benefits } from "@/sections/Benefits";
import { Hero } from "@/sections/Hero";

type Palette = {
  id: string;
  name: string;
  mood: string;
  colors: Array<{ name: string; hex: string }>;
  tokens: CSSProperties;
};

const palettes: Palette[] = [
  {
    id: "satin-noir",
    name: "Satin Noir",
    mood: "Черный первый экран, мягкая атласная лента, золотая градиентная кнопка.",
    colors: [
      { name: "Velvet Black", hex: "#050403" },
      { name: "Soft Black", hex: "#14110D" },
      { name: "Satin Gold", hex: "#D9B46C" },
      { name: "Champagne", hex: "#F4D59A" },
    ],
    tokens: {
      "--design-ink": "#F6E7C8",
      "--design-accent": "#D9B46C",
      "--design-accent-strong": "#F4D59A",
      "--design-surface": "#15110D",
      "--design-wash": "#050403",
      "--design-button": "#D9B46C",
      "--design-button-hover": "#F4D59A",
      "--design-card-shadow": "rgba(0,0,0,0.52)",
    } as CSSProperties,
  },
  {
    id: "black-champagne",
    name: "Black Champagne",
    mood: "Черный верх, широкая шампань-плашка и дорогой спокойный контраст.",
    colors: [
      { name: "Black", hex: "#070604" },
      { name: "Warm Champagne", hex: "#F1C991" },
      { name: "Deep Bronze", hex: "#7A5A2A" },
      { name: "Muted Gold", hex: "#C79B54" },
    ],
    tokens: {
      "--design-ink": "#F4E6CF",
      "--design-accent": "#F1C991",
      "--design-accent-strong": "#C79B54",
      "--design-surface": "#18130C",
      "--design-wash": "#070604",
      "--design-button": "#E7B56B",
      "--design-button-hover": "#F1C991",
      "--design-card-shadow": "rgba(0,0,0,0.48)",
    } as CSSProperties,
  },
  {
    id: "materialization-noir",
    name: "Materialization Noir",
    mood: "Более мистический темный вариант: дворцовая глубина, дымка и точечное золото.",
    colors: [
      { name: "Deep Noir", hex: "#030303" },
      { name: "Graphite", hex: "#11100E" },
      { name: "Old Gold", hex: "#B9904D" },
      { name: "Pale Gold", hex: "#F0D28C" },
    ],
    tokens: {
      "--design-ink": "#EEE7DC",
      "--design-accent": "#B9904D",
      "--design-accent-strong": "#F0D28C",
      "--design-surface": "#12100E",
      "--design-wash": "#030303",
      "--design-button": "#D7A75F",
      "--design-button-hover": "#F0D28C",
      "--design-card-shadow": "rgba(0,0,0,0.56)",
    } as CSSProperties,
  },
  {
    id: "legal-gold",
    name: "Legal Gold",
    mood: "Строгий премиум: почти черный фон, металлические золотые панели и тонкие рамки.",
    colors: [
      { name: "Absolute Black", hex: "#020202" },
      { name: "Metal Gold", hex: "#A88A45" },
      { name: "Light Gold", hex: "#E8D08A" },
      { name: "Soft White", hex: "#F6F1E7" },
    ],
    tokens: {
      "--design-ink": "#F6F1E7",
      "--design-accent": "#A88A45",
      "--design-accent-strong": "#E8D08A",
      "--design-surface": "#0C0B09",
      "--design-wash": "#020202",
      "--design-button": "#B8954A",
      "--design-button-hover": "#E8D08A",
      "--design-card-shadow": "rgba(0,0,0,0.58)",
    } as CSSProperties,
  },
];

function PaletteLabel({ palette }: { palette: Palette }) {
  return (
    <div className="border-b border-white/15 bg-[#120D12] px-5 py-5 text-white sm:px-8 lg:px-12">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-black uppercase text-white/50">Палитра</p>
          <h2 className="mt-1 font-heading text-2xl font-black uppercase sm:text-3xl">
            {palette.name}
          </h2>
          <p className="mt-2 text-sm text-white/66">{palette.mood}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {palette.colors.map((color) => (
            <div
              key={`${palette.id}-${color.hex}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold"
            >
              <span
                className="h-3.5 w-3.5 rounded-full border border-white/40"
                style={{ backgroundColor: color.hex }}
              />
              <span>{color.name}</span>
              <span className="font-mono text-white/55">{color.hex}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesignPreview() {
  return (
    <main className="min-h-screen bg-[#100C10] px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto mb-6 max-w-[1440px] rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-5 text-white sm:px-8 lg:mb-8">
        <p className="text-xs font-black uppercase text-white/50">
          Методология / пример смены цвета
        </p>
        <h1 className="mt-2 font-heading text-3xl font-black uppercase sm:text-4xl">
          Черно-золотые варианты для выбора визуального стиля
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/68 sm:text-base">
          Старые палитры убраны. Здесь четыре новых направления по референсам:
          черная база, золото, легкий градиент и разная степень атласной глубины.
        </p>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:gap-12">
        {palettes.map((palette) => (
          <article
            key={palette.id}
            className={`design-theme design-theme-${palette.id} overflow-hidden rounded-2xl border border-white/16 shadow-[0_28px_90px_rgba(0,0,0,0.32)]`}
            style={palette.tokens}
          >
            <PaletteLabel palette={palette} />
            <div className="design-theme-body">
              <Hero />
              <Benefits />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
