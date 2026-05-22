import { motion } from "motion/react";
import { ArrowDown, Phone, MapPin } from "lucide-react";
import HERO_IMAGE from "../assets/images/hero_dish_1779432682715.png";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden py-16 md:py-32 bg-bg-custom max-w-[1200px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-[30px] h-[1px] bg-green-custom inline-block"></span>
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-green-custom">
              Barlinek • Mickiewicza 3a
            </span>
          </motion.div>

          {/* Hero Title - 100-130px desktop, Cormorant Garamond Bold italic */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-7xl md:text-[100px] lg:text-[115px] font-bold italic text-green-deep tracking-[-0.02em] leading-[0.9] mb-8"
          >
            Obiady<br />u Marleny
          </motion.h1>

          {/* Body Text: DM Sans, 16px, line-height 1.9 — MINIMAL, left-aligned */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-[16px] text-text-mid leading-[1.9] max-w-md mb-10 text-left"
          >
            Wyjątkowe smaki dzieciństwa przyrządzane według tradycyjnych przepisów. 
            Gotujemy codziennie świeżo, lokalnie i z sercem. Możliwość szybkiego dowozu na terenie miasta Barlinek.
          </motion.p>

          {/* Buttons: DM Sans SemiBold, 13px, uppercase, letter-spacing 0.15em */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#daily-special"
              className="bg-green-deep hover:bg-green-custom text-bg-custom font-sans font-semibold text-[13px] uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300 shadow-md flex items-center gap-2"
            >
              <span>Zobacz Danie Dnia</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href="tel:665821239"
              className="border border-green-deep text-green-deep hover:bg-green-deep/5 font-sans font-semibold text-[13px] uppercase tracking-[0.15em] px-8 py-4 transition-all duration-300"
            >
              Zamów na dowóz
            </a>
          </motion.div>
        </div>

        {/* Right column - Asymmetrical visually pleasing image panel */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-10 overflow-hidden shadow-2xl rounded-2xl border border-green-pale/40 bg-white p-3"
          >
            <img
              src={HERO_IMAGE}
              alt="Domowe pierogi i gulasze w Barlinku"
              className="w-full h-auto object-cover rounded-xl grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Soft sticker layout floating */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm shadow-md px-4 py-3 rounded-lg border border-green-pale/30 text-left">
              <span className="font-sans text-[10px] uppercase tracking-widest text-green-custom block font-bold mb-1">
                Zawsze Świeżo
              </span>
              <span className="font-serif italic text-lg text-green-deep block">
                Tradycyjne Przepisy
              </span>
            </div>
          </motion.div>

          {/* Decorative organic blur or green accent disk behind */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-green-light/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-10 -right-6 w-52 h-52 bg-yellow-custom/10 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
