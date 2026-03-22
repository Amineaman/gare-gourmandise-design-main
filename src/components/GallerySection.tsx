import coffeeLatteImg from "@/assets/coffee-latte.jpg";
import espressoMachineImg from "@/assets/espresso-machine.jpg";
import couscousImg from "@/assets/couscous.jpg";
import liveMusicImg from "@/assets/live-music.jpg";
import groupDiningImg from "@/assets/group-dining.jpg";

const photos = [
  { src: espressoMachineImg, alt: "Préparation d'un espresso artisanal", span: "col-span-2 row-span-2" },
  { src: couscousImg, alt: "Couscous traditionnel du vendredi", span: "" },
  { src: coffeeLatteImg, alt: "Latte art signature LGV", span: "" },
  { src: groupDiningImg, alt: "Dîner de groupe dans l'espace VIP", span: "col-span-2" },
  { src: liveMusicImg, alt: "Soirée musique live au Café-Resto LGV", span: "" },
];

const GallerySection = () => {
  return (
    <section id="galerie" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-semibold text-gold uppercase tracking-[0.2em] mb-4 block">
            En images
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Vivez l'expérience <span className="italic text-gold">LGV</span>
          </h2>
          <p className="text-muted-foreground font-sans">
            Cuisine authentique, ambiance chaleureuse, moments inoubliables.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${photo.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover min-h-[200px] transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500 flex items-end p-4">
                <span className="text-primary-foreground font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
