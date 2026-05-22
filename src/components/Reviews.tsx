import { motion } from "motion/react";
import { Star, MessageSquare, Facebook, ExternalLink } from "lucide-react";
import { REVIEWS } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="w-full bg-bg-alt py-24 md:py-36">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* Asymmetrical Header section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 text-left">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-[30px] h-[1px] bg-green-custom inline-block"></span>
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-green-custom">
                Opinie z Facebooka
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[60px] font-medium italic text-green-deep leading-[1.1]">
              Co mówią nasi Goście?
            </h2>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <a
              href="https://www.facebook.com/profile.php?id=100083032102442&sk=reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-green-deep pb-1 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1D3A22] hover:text-green-custom hover:border-green-custom transition-all duration-300"
            >
              <span>Zobacz wszystkie na FB</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Testimonials layout (Never more than 3 in a row - exactly 3 reviews!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-green-pale/35 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* Star Bar */}
              <div>
                <div className="flex items-center gap-1 mb-6 text-yellow-custom">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-yellow-custom" />
                  ))}
                </div>

                {/* Main Quote Text in Cormorant Garamond */}
                <blockquote className="font-serif text-xl sm:text-2xl italic text-green-deep font-light leading-relaxed mb-8">
                  „{review.text}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between pt-6 border-t border-green-pale/30">
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#1D3A22]">
                    {review.author}
                  </h4>
                  <span className="font-sans text-[10px] text-text-muted uppercase tracking-wider block mt-0.5">
                    Rekomendacja zweryfikowana
                  </span>
                </div>
                
                {/* Facebook Blue Badge decoration */}
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1877F2]">
                  <Facebook className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facebook Link Widget Invitation */}
        <div className="mt-16 p-8 bg-green-deep rounded-3xl text-text-light flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
          <div>
            <h3 className="font-serif text-2xl italic text-yellow-custom mb-1">
              Dołącz do naszej społeczności!
            </h3>
            <p className="font-sans text-[14px] text-text-light-muted max-w-xl">
              Chcesz dowiedzieć się jako pierwszy o dzisiejszym obiedzie i zobaczyć zdjęcia potraw? Zaobserwuj nasz oficjalny fanpage.
            </p>
          </div>
          
          <a
            href="https://www.facebook.com/profile.php?id=100083032102442"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white hover:bg-green-pale text-green-deep px-6 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 shadow-sm flex items-center gap-2 leading-none"
          >
            <Facebook className="w-4 h-4 fill-current text-[#1877F2]" />
            <span>Odwiedź Facebook</span>
          </a>
        </div>

      </div>
    </section>
  );
}
