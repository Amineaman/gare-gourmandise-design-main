import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-espresso/95 backdrop-blur-md shadow-warm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-2xl font-serif font-bold text-gold tracking-wider">LGV</span>
          <span className="hidden sm:inline text-xs text-primary-foreground/70 font-sans tracking-wide uppercase">
            Café · Resto
          </span>
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Concept", "#concept"],
            ["Menu", "#menu"],
            ["VIP", "#vip"],
            ["Avis", "#avis"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-sans text-primary-foreground/80 hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+212661571270"
          className="flex items-center gap-2 bg-gold hover:bg-gold-light text-espresso font-sans font-semibold text-sm px-4 py-2.5 rounded-full transition-all duration-300 hover:shadow-gold"
          aria-label="Appeler le restaurant"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Appeler</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
