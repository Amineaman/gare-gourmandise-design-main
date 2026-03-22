import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Ali Abouarab",
    text: "L'endroit idéal pour moi. Cuisine excellente, service impeccable et ambiance au top.",
    rating: 5,
  },
  {
    name: "TGV CAR",
    text: "Cadre parfait. Cuisine : 5/5. Service : 5/5. Le meilleur café-resto de Bouskoura.",
    rating: 5,
  },
  {
    name: "Samine Brothers",
    text: "L'espace VIP est magnifique. Un endroit chaleureux pour se retrouver entre amis ou en famille.",
    rating: 5,
  },
];

const ownerResponse = "Merci infiniment pour votre confiance. Nous mettons tout notre cœur pour que chaque visite soit parfaite. Au plaisir de vous revoir !";

const ReviewsSection = () => {
  return (
    <section id="avis" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            Ils en parlent
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Noté <span className="text-gradient-gold">parfait</span> par nos clients
          </h2>
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-5 py-2.5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-base font-sans font-bold text-foreground">5.0 / 5</span>
            <span className="text-sm text-muted-foreground font-sans">— 55 avis </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-warm hover:-translate-y-1 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground font-sans leading-relaxed mb-6 flex-1">
                "{review.text}"
              </p>
              <p className="text-sm font-sans font-semibold text-muted-foreground">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Owner response */}
        <div className="max-w-2xl mx-auto bg-gold/5 border border-gold/15 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <MessageCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-sans font-semibold text-foreground mb-2">
                Réponse du propriétaire
              </p>
              <p className="text-sm text-muted-foreground font-sans italic leading-relaxed">
                "{ownerResponse}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
