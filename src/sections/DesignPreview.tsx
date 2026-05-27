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
    id: "noir-rose-cream",
    name: "Noir Rose Cream",
    mood: "Черно-золотая база, разбавленная кремовым и чистым оранжевым акцентом.",
    colors: [
      { name: "Black", hex: "#0D0D0C" },
      { name: "Cream", hex: "#EFE2CF" },
      { name: "Gold", hex: "#C99A3E" },
      { name: "Orange", hex: "#FFA700" },
    ],
    tokens: {
      "--design-ink": "#F6EAD7",
      "--design-accent": "#C99A3E",
      "--design-accent-strong": "#E8C979",
      "--design-surface": "#12100D",
      "--design-wash": "#080807",
      "--design-button": "#FFA700",
      "--design-button-hover": "#E8C979",
      "--design-mix": "#EFE2CF",
      "--design-mix-strong": "#FFA700",
      "--design-card-shadow": "rgba(0,0,0,0.52)",
    } as CSSProperties,
  },
  {
    id: "charcoal-caramel-orange",
    name: "Charcoal Caramel Orange",
    mood: "Черно-золотая база с карамелью, терракотой и оранжевым для живых акцентов.",
    colors: [
      { name: "Charcoal", hex: "#353535" },
      { name: "Caramel", hex: "#EBB760" },
      { name: "Terracotta", hex: "#87330F" },
      { name: "Orange", hex: "#E4691C" },
      { name: "Gold", hex: "#D5A451" },
    ],
    tokens: {
      "--design-ink": "#F7E8CC",
      "--design-accent": "#D5A451",
      "--design-accent-strong": "#EBB760",
      "--design-surface": "#1A1815",
      "--design-wash": "#070706",
      "--design-button": "#E4691C",
      "--design-button-hover": "#EBB760",
      "--design-mix": "#87330F",
      "--design-mix-strong": "#E4691C",
      "--design-card-shadow": "rgba(0,0,0,0.48)",
    } as CSSProperties,
  },
  {
    id: "merlot-gold",
    name: "Merlot Gold",
    mood: "Черно-золотая база с глубоким merlot: богато, мрачно, без лишней помпезности.",
    colors: [
      { name: "Black", hex: "#060504" },
      { name: "Merlot", hex: "#340D1A" },
      { name: "Deep Wine", hex: "#17060B" },
      { name: "Gold", hex: "#C79A4D" },
    ],
    tokens: {
      "--design-ink": "#F3E4C9",
      "--design-accent": "#C79A4D",
      "--design-accent-strong": "#E4C777",
      "--design-surface": "#13080C",
      "--design-wash": "#050404",
      "--design-button": "#340D1A",
      "--design-button-hover": "#C79A4D",
      "--design-mix": "#340D1A",
      "--design-mix-strong": "#6C1830",
      "--design-card-shadow": "rgba(0,0,0,0.56)",
    } as CSSProperties,
  },
  {
    id: "dark-sienna-gold",
    name: "Dark Sienna Gold",
    mood: "Черно-золотой с темным sienna-бордо: теплее и плотнее, чем merlot.",
    colors: [
      { name: "Black", hex: "#070504" },
      { name: "Dark Sienna", hex: "#370507" },
      { name: "Auburn", hex: "#5D1510" },
      { name: "Gold", hex: "#C49A4F" },
    ],
    tokens: {
      "--design-ink": "#F5E7CD",
      "--design-accent": "#C49A4F",
      "--design-accent-strong": "#E1C277",
      "--design-surface": "#150806",
      "--design-wash": "#060403",
      "--design-button": "#370507",
      "--design-button-hover": "#C49A4F",
      "--design-mix": "#370507",
      "--design-mix-strong": "#5D1510",
      "--design-card-shadow": "rgba(0,0,0,0.58)",
    } as CSSProperties,
  },
  {
    id: "method-donat",
    name: "Method Donat Smoke",
    mood: "Темный сине-фиолетовый фон, бирюзовый дым, объемное золото и мягкие сливовые акценты.",
    colors: [
      { name: "Ink Navy", hex: "#11151D" },
      { name: "Smoke Plum", hex: "#342638" },
      { name: "Deep Teal", hex: "#0B666B" },
      { name: "Soft Gold", hex: "#D5AF64" },
      { name: "Champagne", hex: "#F4DE9D" },
    ],
    tokens: {
      "--design-ink": "#F8E9C2",
      "--design-accent": "#B8893E",
      "--design-accent-strong": "#F4DE9D",
      "--design-surface": "#121722",
      "--design-wash": "#07080D",
      "--design-button": "#C79A4A",
      "--design-button-hover": "#F4DE9D",
      "--design-mix": "#0B666B",
      "--design-mix-strong": "#342638",
      "--design-card-shadow": "rgba(0,0,0,0.62)",
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
          Новые черно-золотые варианты с добавочными цветами
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/68 sm:text-base">
          Старые варианты убраны. В каждом направлении основа остается черно-золотой,
          а дополнительные цвета работают в кнопках, карточках и отдельных акцентах.
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
