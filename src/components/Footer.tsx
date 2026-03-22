const Footer = () => {
  return (
    <footer className="bg-espresso py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-3xl font-serif font-bold text-gold tracking-widest">LGV</span>
          <p className="text-sm text-primary-foreground/50 font-sans mt-2 italic">
            Votre escale idéale à Bouskoura
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-primary-foreground/60 font-sans mb-8">
          <a href="tel:+212661571270" className="hover:text-gold transition-colors">
            06 61 57 12 70
          </a>
          <span className="hidden sm:inline text-primary-foreground/20">·</span>
          <span>En face la gare de Bouskoura, 27182</span>
        </div>

        {/* Divider */}
        <div className="w-16 h-px bg-gold/20 mx-auto mb-6" />

        <p className="text-xs text-primary-foreground/30 font-sans">
          © 2025 Café-Resto LGV — Bouskoura, Maroc
        </p>
      </div>
    </footer>
  );
};

export default Footer;
