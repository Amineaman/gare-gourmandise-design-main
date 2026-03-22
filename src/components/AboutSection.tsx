import { UtensilsCrossed, Armchair, Crown } from "lucide-react";

const features = [
  {
    icon: UtensilsCrossed,
    title: "Cuisine soignée",
    desc: "Des plats préparés avec passion, des produits frais, et un petit-déjeuner qui vaut le détour.",
  },
  {
    icon: Armchair,
    title: "Ambiance parfaite",
    desc: "Un cadre chaleureux et soigné, pensé pour que chaque visite soit un moment de plaisir.",
  },
  {
    icon: Crown,
    title: "Espace VIP",
    desc: "Un espace privatif et élégant pour vos réunions, célébrations et moments d'exception.",
  },
];

const AboutSection = () => {
  return (
    <section id="concept" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            Notre histoire
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            Né au cœur de Bouskoura,
            <br />
            <span className="italic text-gold">pour vous accueillir</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
            En face de la gare de Bouskoura, Café-Resto LGV est bien plus qu'un restaurant — 
            c'est une escale. Un lieu où les voyageurs font une pause, où les habitués retrouvent 
            leur table, et où chaque client est traité comme un invité. Notre secret ? Un patron 
            qui répond personnellement à chaque avis, parce qu'ici, chaque détail compte.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 sm:p-10 border border-border hover:border-gold/40 transition-all duration-500 hover:shadow-warm hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <f.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground font-sans leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
