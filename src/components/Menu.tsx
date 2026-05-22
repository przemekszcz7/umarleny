import { motion } from "motion/react";
import { MENU_ITEMS } from "../data";
import { Sparkles } from "lucide-react";

const INGREDIENTS_IMAGE = "/src/assets/images/cozy_ingredients_1779432701167.png";

export default function Menu() {
  // Group menu items by category type
  const flourDishes = MENU_ITEMS.filter(item => item.category === "Dania Mączne");
  const meatsAndClassics = MENU_ITEMS.filter(
    item => item.category === "Dania Klasyczne" || item.category === "Dania Mięsne"
  );
  const soupsAndSides = MENU_ITEMS.filter(
    item => item.category === "Zupy" || item.category === "Dodatki"
  );

  return (
    <section id="menu" className="w-full bg-bg-custom py-24 md:py-36 max-w-[1200px] mx-auto px-6 md:px-12">
      
      {/* 2-Column Asymmetrical Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
        <div className="lg:col-span-7 text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[30px] h-[1px] bg-green-custom inline-block"></span>
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-green-custom">
              Nasza Tradycja
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-medium italic text-green-deep leading-[1.05]">
            Smaki Tradycyjnej Kuchni polskiej
          </h2>
        </div>
        <div className="lg:col-span-5 text-left pt-2 lg:pt-0">
          <p className="font-sans text-[15px] text-text-mid leading-[1.9] max-w-sm">
            Wszystkie kluski, kopytka, pierogi i krokiety lepimy ręcznie według sprawdzonych, przekazywanych z pokolenia na pokolenie przepisów. Poczytaj o naszej tradycyjnej karcie.
          </p>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left column (8 cols): Asymmetric List layout */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          {/* Section 1: Dania Mączne (Handmade dough dishes) */}
          <div className="text-left">
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-text-muted border-b border-green-pale/40 pb-3 mb-8 font-semibold">
              Ręcznie Robione Dania Mączne
            </h3>
            
            <div className="flex flex-col gap-8">
              {flourDishes.map((dish) => (
                <div key={dish.id} className="group flex flex-col items-start gap-2">
                  <div className="w-full flex justify-between items-baseline gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl italic text-green-deep font-medium group-hover:text-green-custom transition-colors duration-300">
                      {dish.name}
                    </h4>
                    <span className="font-sans text-xs text-green-custom tracking-wider font-semibold bg-green-pale/30 px-2.5 py-0.5 rounded-full uppercase">
                      Domowa receptura
                    </span>
                  </div>
                  {dish.description && (
                    <p className="font-sans text-[14px] text-text-mid leading-relaxed max-w-xl text-left">
                      {dish.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Tradycyjne Dania Mięsne i Klasyki */}
          <div className="text-left">
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-text-muted border-b border-green-pale/40 pb-3 mb-8 font-semibold">
              Wyśmienite Mięsa i Klasyki Domowe
            </h3>
            
            <div className="flex flex-col gap-8">
              {meatsAndClassics.map((dish) => (
                <div key={dish.id} className="group flex flex-col items-start gap-2">
                  <div className="w-full flex justify-between items-baseline gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl italic text-green-deep font-medium group-hover:text-green-custom transition-colors duration-300">
                      {dish.name}
                    </h4>
                    <span className="font-sans text-xs text-green-custom tracking-wider font-semibold bg-green-pale/30 px-2.5 py-0.5 rounded-full uppercase">
                      Klasyka kuchni
                    </span>
                  </div>
                  {dish.description && (
                    <p className="font-sans text-[14px] text-text-mid leading-relaxed max-w-xl text-left">
                      {dish.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Zupy i Dodatki */}
          <div className="text-left">
            <h3 className="font-sans text-xs uppercase tracking-[0.25em] text-text-muted border-b border-green-pale/40 pb-3 mb-8 font-semibold">
              Świeże Zupy i Dodatki Obiadowe
            </h3>
            
            <div className="flex flex-col gap-8">
              {soupsAndSides.map((dish) => (
                <div key={dish.id} className="group flex flex-col items-start gap-2">
                  <div className="w-full flex justify-between items-baseline gap-4">
                    <h4 className="font-serif text-xl sm:text-2xl italic text-green-deep font-medium group-hover:text-green-custom transition-colors duration-300">
                      {dish.name}
                    </h4>
                    <span className="font-sans text-xs text-green-custom tracking-wider font-semibold bg-green-pale/30 px-2.5 py-0.5 rounded-full uppercase">
                      Darmowa porada
                    </span>
                  </div>
                  {dish.description && (
                    <p className="font-sans text-[14px] text-text-mid leading-relaxed max-w-xl text-left">
                      {dish.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right column (4 cols): Sticky Side Cover Image with botanical styling & quote */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col items-start text-left bg-bg-alt/60 p-6 sm:p-8 rounded-3xl border border-green-pale/30">
          <div className="relative w-full rounded-2xl overflow-hidden mb-8 border border-green-pale/20 shadow-sm leading-none">
            <img
              src={INGREDIENTS_IMAGE}
              alt="Świeże polskie zioła i warzywa u Marleny"
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-750"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-green-custom" />
            <h4 className="font-sans font-semibold text-xs uppercase tracking-widest text-[#1D3A22]">
              BEZ SZTUCZNYCH DODATKÓW
            </h4>
          </div>

          <p className="font-serif text-[18px] italic text-green-deep leading-relaxed mb-6">
            „Nasze dania opierają się na świeżych ziołach, wiejskim maśle i powolnym gotowaniu. Tu nie ma pośpiechu, za to jest bezkompromisowy smak, który znasz z domu.”
          </p>

          <div className="flex flex-col gap-1">
            <span className="font-sans text-[10px] uppercase tracking-widest text-text-muted font-bold">
              KUCHENNA GWARANCJA
            </span>
            <span className="font-sans text-xs text-text-mid">
              Tradycyjne receptury Marleny
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
