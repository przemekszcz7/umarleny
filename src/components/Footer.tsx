import { Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="w-full bg-green-deep text-text-light py-12 border-t border-text-light-muted/10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-xl italic font-bold text-yellow-custom">
            Obiady u Marleny
          </span>
          <p className="font-sans text-xs text-text-light-muted">
            ul. Mickiewicza 3a, 74-320 Barlinek • 665 821 239
          </p>
        </div>

        {/* Center Side - Slogan with Heart */}
        <div className="flex items-center gap-1.5 font-sans text-xs text-text-light-muted">
          <span>Potrawy przyrządzane z pasją i sercem</span>
          <Heart className="w-3.5 h-3.5 text-red-400 fill-current animate-pulse" />
        </div>

        {/* Right Side - Socials and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-4 text-text-light-muted hover:text-white">
            <a
              href="https://www.facebook.com/profile.php?id=100083032102442"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-yellow-custom transition-colors font-sans text-xs uppercase tracking-wider"
            >
              <Facebook className="w-4 h-4 fill-current text-white" />
              <span>Facebook</span>
            </a>
          </div>
          <p className="font-sans text-[11px] text-text-light-muted/60">
            &copy; {currentYear} Obiady u Marleny. Wszystkie prawa zastrzeżone.
          </p>
        </div>

      </div>
    </footer>
  );
}
