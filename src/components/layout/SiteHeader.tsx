import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Menu, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";

import logoLgv from "@/assets/logo-lgv.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, quickAccessLinks } from "@/lib/site-content";

const toSectionRoute = (href: string) => `/${href}`;

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current?.querySelectorAll("[data-nav-item]"),
        { opacity: 0, y: -18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.15,
        },
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        ref={navRef}
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-[24px] border px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled
            ? "border-white/10 bg-[rgba(8,12,24,0.46)] shadow-[0_20px_60px_rgba(8,10,20,0.28)] backdrop-blur-xl"
            : "border-white/8 bg-[rgba(8,12,24,0.3)] backdrop-blur-md",
        )}
      >
        <Link to="/" data-nav-item className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[#c8aa64]/25 bg-[#c8aa64]/8 shadow-[0_12px_30px_rgba(0,0,0,0.16)]">
            <img src={logoLgv} alt="Cafe Resto LGV logo" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-editorial text-lg uppercase tracking-[0.28em] text-white">LGV</p>
            <p className="font-jost text-[10px] uppercase tracking-[0.26em] text-white/52">Cafe Resto Bouskoura</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={toSectionRoute(item.href)}
              data-nav-item
              className="font-jost text-[11px] font-normal uppercase tracking-[0.18em] text-white/52 transition duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block" data-nav-item>
          <Button
            asChild
            className="rounded-full border border-white/25 bg-transparent px-5 font-jost text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-none transition hover:scale-[1.02] hover:border-white/50 hover:bg-white/8 hover:text-white"
          >
            <a href="tel:+212661571270">
              <Phone />
              Reserver
            </a>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className="mx-auto mt-3 flex max-w-7xl gap-2 overflow-x-auto px-1 pb-1 md:hidden">
        {quickAccessLinks.map((item) => (
          <Link
            key={item.href}
            to={toSectionRoute(item.href)}
            className="shrink-0 rounded-full border border-white/12 bg-[rgba(8,12,24,0.62)] px-4 py-2 font-jost text-[10px] uppercase tracking-[0.18em] text-white/80 backdrop-blur-xl transition hover:border-white/24 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <a
          href="tel:+212661571270"
          className="shrink-0 rounded-full border border-[#c8aa64]/28 bg-[#c8aa64]/10 px-4 py-2 font-jost text-[10px] uppercase tracking-[0.18em] text-[#f0e8d8] transition hover:border-[#c8aa64]/46 hover:bg-[#c8aa64]/16"
        >
          Reserver
        </a>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 max-w-7xl rounded-[24px] border border-white/12 bg-[rgba(8,12,24,0.88)] p-4 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={toSectionRoute(item.href)}
                className="rounded-2xl px-4 py-3 font-jost text-sm uppercase tracking-[0.18em] text-white/78 transition hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full border border-white/15 bg-white/8 font-jost text-sm font-medium uppercase tracking-[0.16em] text-white hover:bg-white/12"
            >
              <a href="tel:+212661571270">
                <Phone />
                Reserver
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default SiteHeader;
