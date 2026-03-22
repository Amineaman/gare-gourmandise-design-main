import { Phone, Sparkles } from "lucide-react";

const VIPSection = () => {
  return (
    <section id="vip" className="relative py-24 sm:py-32 bg-vip grain overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-wider">
            Exclusif
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
          L'Espace <span className="text-gradient-gold italic">VIP</span>
        </h2>

        <p className="text-lg sm:text-xl text-primary-foreground/70 font-sans max-w-2xl mx-auto mb-6 leading-relaxed">
          Un espace privatif et élégant, pensé pour vos moments d'exception. 
          Réunions d'affaires, célébrations en famille, ou simplement une soirée 
          entre amis dans un cadre raffiné.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Réunions d'affaires", "Événements privés", "Célébrations", "Service dédié"].map(
            (tag) => (
              <span
                key={tag}
                className="text-sm font-sans text-gold/80 border border-gold/20 rounded-full px-4 py-1.5"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <a
          href="tel:+212661571270"
          className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-espresso font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-gold hover:scale-105"
          aria-label="Réserver l'espace VIP"
        >
          <Phone className="w-5 h-5" />
          Réserver l'espace VIP
        </a>
      </div>
    </section>
  );
};

export default VIPSection;
