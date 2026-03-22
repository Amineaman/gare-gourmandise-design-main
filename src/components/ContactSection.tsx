import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            Rendez-vous
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            À deux pas de <span className="italic text-gold">la gare</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            Facile à trouver, difficile à quitter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Address */}
          <a
            href="https://maps.google.com/?q=Café-Resto+LGV+Bouskoura"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-warm hover:-translate-y-1 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
              <MapPin className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">Adresse</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              En face la gare de Bouskoura
              <br />
              Bouskoura 27182, Maroc
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+212661571270"
            className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-warm hover:-translate-y-1 text-center"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 transition-colors">
              <Phone className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">Téléphone</h3>
            <p className="text-gold font-sans font-semibold text-lg">06 61 57 12 70</p>
          </a>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-8 border border-border text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5">
              <Clock className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">Horaires</h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed">
              Tous les jours
              <br />
              <span className="text-foreground font-semibold">7h00 — 22h00</span>
            </p>
            <p className="text-xs text-muted-foreground/70 font-sans mt-2 italic">
              Horaires indicatifs
            </p>
          </div>
        </div>

        {/* Map embed */}
        <div className="mt-10 rounded-2xl overflow-hidden border border-border shadow-warm">
          <iframe
            title="Café-Resto LGV — Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.5!2d-7.63!3d33.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBouskoura+Gare!5e0!3m2!1sfr!2sma!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
