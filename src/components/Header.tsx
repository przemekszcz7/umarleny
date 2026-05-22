import { motion } from "motion/react";
import { Phone, MapPin, Facebook } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      id="main-header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full py-6 px-6 md:px-12 border-b border-green-pale/30 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-bg-custom/85 backdrop-blur-md sticky top-0 z-50 max-w-[1400px] mx-auto"
    >
      <div className="flex items-center gap-3">
        <a href="#hero" className="group">
          <span className="font-serif text-2xl font-bold italic text-green-deep tracking-tight group-hover:text-green-custom transition-colors duration-300">
            Obiady u Marleny
          </span>
        </a>
        <div className="h-4 w-[1px] bg-green-pale/60 hidden sm:block"></div>
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-text-muted hidden sm:inline-block">
          Tradycyjna Kuchnia Domowa
        </span>
      </div>

      <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-xs uppercase tracking-[0.12em] text-text-mid">
        <a href="#daily-special" className="hover:text-green-custom transition-colors">Danie Dnia</a>
        <a href="#menu" className="hover:text-green-custom transition-colors">Menu</a>
        <a href="#reviews" className="hover:text-green-custom transition-colors">Opinie</a>
        <a href="#contact" className="hover:text-green-custom transition-colors">Kontakt</a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100083032102442"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-mid hover:text-green-custom transition-colors"
          title="Nasz profil Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href="tel:665821239"
          className="flex items-center gap-2 bg-green-deep hover:bg-green-custom text-bg-custom px-4 py-2 rounded-full font-sans text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>665 821 239</span>
        </a>
      </div>
    </motion.header>
  );
}
