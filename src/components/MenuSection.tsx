import { Coffee, Sun, Flame, Crown } from "lucide-react";

const menuItems = [
  {
    icon: Sun,
    title: "Petit-déjeuner",
    desc: "Notre fierté — un petit-déjeuner complet et généreux pour bien commencer la journée.",
    highlight: true,
  },
  {
    icon: Flame,
    title: "Plats du jour",
    desc: "Cuisine marocaine et méditerranéenne, préparée chaque jour avec des produits frais du marché.",
    highlight: false,
  },
  {
    icon: Coffee,
    title: "Boissons & Cafés",
    desc: "Expressos, thé à la menthe, jus frais — les essentiels, préparés avec soin.",
    highlight: false,
  },
  {
    icon: Crown,
    title: "Carte VIP",
    desc: "Une sélection exclusive réservée à notre espace VIP — demandez-la sur place.",
    highlight: false,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            Nos saveurs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Un avant-goût de
            <span className="italic text-gold"> notre carte</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            Découvrez nos spécialités — le menu complet vous attend sur place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 sm:p-10 border transition-all duration-500 hover:-translate-y-1 ${
                item.highlight
                  ? "bg-espresso border-gold/30 hover:border-gold/60 shadow-warm"
                  : "bg-card border-border hover:border-gold/30 hover:shadow-warm"
              }`}
            >
              {item.highlight && (
                <span className="absolute top-4 right-4 text-xs font-sans font-bold text-espresso bg-gold rounded-full px-3 py-1 uppercase tracking-wider">
                  ★ Signature
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  item.highlight ? "bg-gold/20" : "bg-gold/10 group-hover:bg-gold/20"
                } transition-colors duration-300`}
              >
                <item.icon className={`w-6 h-6 ${item.highlight ? "text-gold" : "text-gold"}`} />
              </div>
              <h3
                className={`text-xl font-serif font-bold mb-3 ${
                  item.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`font-sans leading-relaxed ${
                  item.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground font-sans italic">
          Menu complet disponible sur place · Les plats varient selon les saisons
        </p>
      </div>
    </section>
  );
};

export default MenuSection;
