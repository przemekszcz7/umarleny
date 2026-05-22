import { motion } from "motion/react";
import { Phone, MapPin, Clock, Truck, Award } from "lucide-react";
import { OPENING_HOURS } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-bg-custom py-24 md:py-36 max-w-[1200px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Direct info, Operating hours, Badges */}
        <div className="lg:col-span-5 text-left flex flex-col items-start">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="w-[30px] h-[1px] bg-green-custom inline-block"></span>
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-green-custom">
              Kontakt & Adres
            </span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-medium italic text-green-deep leading-[1.1] mb-8">
            Zapraszamy do nas
          </h2>

          <p className="font-sans text-[15px] text-text-mid leading-[1.9] mb-10 max-w-sm">
            Potrawy przyrządzane według tradycyjnych przepisów. Jesteśmy w samym sercu Barlinka. Zamów z dostawą do domu lub odbierz osobiście!
          </p>

          {/* Quick Contacts details */}
          <div className="flex flex-col gap-6 w-full mb-10">
            <a href="tel:665821239" className="group flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-green-pale/50 flex items-center justify-center text-green-deep group-hover:bg-green-custom group-hover:text-white transition-all duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest font-bold">
                  Telefon (ZAMÓWIENIA)
                </span>
                <span className="font-sans text-[18px] font-bold text-green-deep block group-hover:text-green-custom transition-colors">
                  665 821 239
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-green-pale/50 flex items-center justify-center text-green-deep">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest font-bold">
                  Nasza Lokalizacja
                </span>
                <span className="font-sans text-[16px] font-semibold text-green-deep block">
                  ul. Mickiewicza 3a, 74-320 Barlinek
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-green-pale/50 flex items-center justify-center text-green-deep">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest font-bold">
                  Darmowy Dowóz
                </span>
                <span className="font-sans text-[16px] font-semibold text-green-deep block">
                  Możliwość dostawy do domu i biura
                </span>
              </div>
            </div>
          </div>

          {/* Hours Card Block */}
          <div className="w-full bg-bg-alt/75 p-6 sm:p-8 rounded-3xl border border-green-pale/30">
            <div className="flex items-center gap-2.5 mb-6 text-green-deep">
              <Clock className="w-4 h-4 shrink-0" />
              <h4 className="font-sans font-semibold text-xs uppercase tracking-widest">
                Godziny Otwarcia
              </h4>
            </div>

            <div className="flex flex-col gap-3 font-sans text-sm">
              {OPENING_HOURS.map((oh) => (
                <div key={oh.day} className="flex justify-between items-center border-b border-green-pale/20 pb-2 last:border-none last:pb-0">
                  <span className={`font-medium ${oh.isClosed ? 'text-text-muted' : 'text-text-dark'}`}>
                    {oh.day}
                  </span>
                  <span className={`font-mono text-xs ${oh.isClosed ? 'text-red-500 font-semibold' : 'text-text-mid'}`}>
                    {oh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Google Maps Google Embedded Iframe styled like premium catalog */}
        <div className="lg:col-span-7 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white p-4 sm:p-6 rounded-3xl shadow-lg border border-green-pale/40 relative"
          >
            {/* Embedded Iframe Container */}
            <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden grayscale-[20%] hover:grayscale-0 transition-all duration-750 border border-green-pale/20 relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2401.2882915100467!2d15.218129777127288!3d52.99720050078961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47072e42716389b9%3A0xc03d03524b3aad66!2sAdama%20Mickiewicza%203A%2C%2074-320%20Barlinek!5e0!3m2!1spl!2spl!4v1779431894343!5m2!1spl!2spl"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Little decorative tag below the map */}
            <div className="mt-4 flex items-center gap-2 px-2 text-text-muted font-sans text-xs">
              <Award className="w-3.5 h-3.5 text-green-custom shrink-0" />
              <span>Wejście do lokalu od ulicy Mickiewicza. Przystanek autobusowy tuż obok.</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
