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
    id: "plum-blue",
    name: "Plum Noir / Cool Blue",
    mood: "Глубокий сливовый, ледяной голубой и серебряный акцент.",
    colors: [
      { name: "Plum Noir", hex: "#351E28" },
      { name: "Cool Blue", hex: "#D7EFFF" },
      { name: "Silver", hex: "#A7B5BE" },
    ],
    tokens: {
      "--design-ink": "#351E28",
      "--design-accent": "#A7B5BE",
      "--design-accent-strong": "#351E28",
      "--design-surface": "#D7EFFF",
      "--design-wash": "#EEF7FF",
      "--design-button": "#351E28",
      "--design-button-hover": "#26141C",
      "--design-card-shadow": "rgba(53,30,40,0.18)",
    } as CSSProperties,
  },
  {
    id: "violet-sage",
    name: "Midnight Violet / Dry Sage",
    mood: "Темный фиолетовый и спокойный природный sage.",
    colors: [
      { name: "Midnight Violet", hex: "#261732" },
      { name: "Dry Sage", hex: "#AEA989" },
    ],
    tokens: {
      "--design-ink": "#261732",
      "--design-accent": "#AEA989",
      "--design-accent-strong": "#261732",
      "--design-surface": "#EEEAD8",
      "--design-wash": "#F6F2E7",
      "--design-button": "#261732",
      "--design-button-hover": "#190E22",
      "--design-card-shadow": "rgba(38,23,50,0.18)",
    } as CSSProperties,
  },
  {
    id: "warm-academy",
    name: "Warm Academy",
    mood: "Теплый академический вариант: золото, бордо и темная глубина.",
    colors: [
      { name: "Porcelain", hex: "#F4D9B5" },
      { name: "Gold", hex: "#EDC483" },
      { name: "Burgundy", hex: "#770523" },
      { name: "Dark Wine", hex: "#53131E" },
      { name: "Black Brown", hex: "#231919" },
    ],
    tokens: {
      "--design-ink": "#231919",
      "--design-accent": "#EDC483",
      "--design-accent-strong": "#231919",
      "--design-surface": "#F4D9B5",
      "--design-wash": "#F8E1BF",
      "--design-button": "#770523",
      "--design-button-hover": "#53131E",
      "--design-card-shadow": "rgba(35,25,25,0.24)",
    } as CSSProperties,
  },
  {
    id: "wine-black",
    name: "Wine Red / Rich Black",
    mood: "Винный акцент, черная строгость и светлые молочные поверхности.",
    colors: [
      { name: "Wine Red", hex: "#68191E" },
      { name: "Rich Black", hex: "#141414" },
      { name: "Sea Sand", hex: "#FFF4E4" },
      { name: "Light Gray", hex: "#E3E3E3" },
    ],
    tokens: {
      "--design-ink": "#141414",
      "--design-accent": "#E3E3E3",
      "--design-accent-strong": "#68191E",
      "--design-surface": "#FFF4E4",
      "--design-wash": "#FFFAF2",
      "--design-button": "#68191E",
      "--design-button-hover": "#4D1014",
      "--design-card-shadow": "rgba(20,20,20,0.18)",
    } as CSSProperties,
  },
  {
    id: "dark-plum",
    name: "Dark Plum / Periwinkle",
    mood: "Сливовый контраст и прохладный periwinkle.",
    colors: [
      { name: "Dark Plum", hex: "#4F0C28" },
      { name: "Periwinkle", hex: "#C5D2F8" },
    ],
    tokens: {
      "--design-ink": "#4F0C28",
      "--design-accent": "#C5D2F8",
      "--design-accent-strong": "#4F0C28",
      "--design-surface": "#E5EBFF",
      "--design-wash": "#F5F7FF",
      "--design-button": "#4F0C28",
      "--design-button-hover": "#37051A",
      "--design-card-shadow": "rgba(79,12,40,0.18)",
    } as CSSProperties,
  },
  {
    id: "black-gold-red",
    name: "Black / Gold / Red",
    mood: "Черная основа, золото для премиальности и красный для сильных CTA.",
    colors: [
      { name: "Deep Black", hex: "#12100D" },
      { name: "Antique Gold", hex: "#D8AE54" },
      { name: "Warm Gold", hex: "#F0D28A" },
      { name: "Royal Red", hex: "#7D0915" },
    ],
    tokens: {
      "--design-ink": "#F8ECD2",
      "--design-accent": "#D8AE54",
      "--design-accent-strong": "#D8AE54",
      "--design-surface": "#221B11",
      "--design-wash": "#0B0907",
      "--design-button": "#7D0915",
      "--design-button-hover": "#58040D",
      "--design-card-shadow": "rgba(0,0,0,0.42)",
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
          Те же блоки сайта в разных палитрах
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/68 sm:text-base">
          В каждом варианте структура не меняется: сначала текущее херо, затем
          следующий блок сайта. Меняются только цвета и акценты.
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
