import { motion } from "motion/react";
import { Utensils, Soup, Check, RefreshCw, Truck } from "lucide-react";
import { DAILY_SPECIAL } from "../data";

export default function DailySpecial() {
  return (
    <section id="daily-special" className="w-full bg-bg-alt py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Editorial Heading Block */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[30px] h-[1px] bg-green-custom inline-block"></span>
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-green-custom">
                Codziennie Coś Nowego
              </span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[56px] font-medium italic text-green-deep leading-[1.1] mb-6">
              Menu Dnia na Piątek
            </h2>

            <p className="font-sans text-[15px] text-text-mid leading-[1.9] mb-8">
              Nasz zestaw dnia to pełny, dwudaniowy obiad ugotowany z rano dostarczonych składników. 
              Możesz go zamówić trực tiếp z odbiorem na miejscu lub z błyskawicznym dowozem pod Twoje drzwi.
            </p>

            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-start gap-3 p-4 bg-white/60 border border-green-pale/40 rounded-xl">
                <Truck className="w-5 h-5 text-green-custom shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-semibold text-xs uppercase tracking-wide text-green-deep">
                    Ciepły Dowóz
                  </h4>
                  <p className="font-sans text-xs text-text-muted mt-0.5">
                    Dowozimy na terenie całego Barlinka od 11:30 do 16:00.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Core Menu Card */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* The Main course Board - Beautiful dark card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-green-deep text-text-light p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Background botanical shadow texture */}
              <div className="absolute right-0 bottom-0 opacity-[0.03] text-[200px] pointer-events-none font-serif select-none italic">
                M
              </div>

              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-text-light-muted block mb-2 font-semibold">
                  Główny Zestaw Dnia
                </span>
                <span className="font-serif text-2xl italic text-yellow-custom block mb-8">
                  {DAILY_SPECIAL.date}
                </span>

                {/* Soup */}
                <div className="border-b border-text-light-muted/20 pb-6 mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Soup className="w-4 h-4 text-text-light-muted" />
                    <span className="font-sans text-[11px] uppercase tracking-wider text-text-light-muted">
                      Zupa (Pierwsze Danie)
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-light italic text-text-light">
                    {DAILY_SPECIAL.soup}
                  </h3>
                </div>

                {/* Second course */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Utensils className="w-4 h-4 text-text-light-muted" />
                    <span className="font-sans text-[11px] uppercase tracking-wider text-text-light-muted">
                      Drugie Danie
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold italic text-text-light leading-snug">
                    {DAILY_SPECIAL.mainCourse}
                  </h3>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-text-light-muted/20 flex justify-between items-center">
                <span className="font-sans text-[11px] uppercase tracking-widest text-text-light-muted">
                  Gotowe do wydania
                </span>
                <span className="bg-yellow-custom text-green-deep px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Tradycyjny smak
                </span>
              </div>
            </motion.div>

            {/* Replacements / Alternatives list - Clean white card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-green-pale/30 text-left flex flex-col justify-between"
            >
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-green-custom block mb-2 font-semibold">
                  Możliwość Wymiany
                </span>
                <h3 className="font-serif text-2xl italic text-green-deep mb-6">
                  Alternatywy Kuchenne
                </h3>
                
                <p className="font-sans text-xs text-text-muted leading-relaxed mb-6">
                  Nie masz ochoty na udko? Żaden problem. U nas dowolnie skomponujesz swój piatkowy obiad, wymieniając drugie danie na jeden ze świeżych specjałów:
                </p>

                <ul className="flex flex-col gap-4">
                  {DAILY_SPECIAL.replacements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-pale/50 flex items-center justify-center shrink-0 mt-0.5 text-green-deep">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-serif text-[17px] italic text-text-dark leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-green-pale/30 flex items-center gap-2 text-text-muted">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-sans text-[10px] uppercase tracking-wider">
                  Wymiana drugiego dania jest bezpłatna
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
