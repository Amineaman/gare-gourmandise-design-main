import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

import groupDiningImg from "@/assets/group-dining.jpg";
import { Button } from "@/components/ui/button";
import CoffeeCanvas from "@/components/ui/coffee-canvas";
import { heroStats, quickAccessLinks } from "@/lib/site-content";

const toSectionRoute = (href: string) => `/${href}`;

const PremiumHero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

      timeline
        .fromTo("[data-hero-badge]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo("[data-hero-title]", { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.75 }, "-=0.2")
        .fromTo("[data-hero-copy]", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .fromTo("[data-hero-actions]", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.3")
        .fromTo("[data-hero-stats]", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.25")
        .fromTo("[data-hero-visual]", { opacity: 0, scale: 0.94, y: 28 }, { opacity: 1, scale: 1, y: 0, duration: 0.8 }, "-=0.45");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#080c18] px-4 pb-10 pt-28 sm:px-6 sm:pb-14 sm:pt-32"
    >
      <div className="absolute inset-0">
        <img
          src={groupDiningImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.06] object-cover blur-[2px] brightness-[0.22] saturate-[0.62]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,12,24,0.82)_0%,rgba(8,12,24,0.52)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,170,100,0.12),_transparent_30%),radial-gradient(circle_at_82%_22%,_rgba(125,177,255,0.12),_transparent_24%)]" />
      </div>

      <motion.div
        className="pointer-events-none absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(200,170,100,0.2),transparent_62%)] blur-3xl"
        animate={{ x: [-8, 10, -8], y: [-6, 8, -6] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-x-12 gap-y-8 lg:grid-cols-[1.05fr_0.95fr] lg:grid-rows-[1fr_auto]">
        <div className="max-w-3xl">
          <div
            data-hero-badge
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c8aa64]/25 bg-[#c8aa64]/6 px-4 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8aa64]" />
            <span className="font-jost text-[10px] font-normal uppercase tracking-[0.24em] text-[#c8aa64]">
              Bouskoura · ouvert 7j/7
            </span>
          </div>

          <h1
            data-hero-title
            className="font-editorial text-[clamp(2.9rem,6vw,5.3rem)] font-light leading-[0.98] tracking-[-0.03em] text-[#f0e8d8]"
          >
            L'art du cafe,
            <span className="block">
              une <em className="font-editorial text-[#c8aa64]">experience</em>
            </span>
            <span className="block">a part entiere.</span>
          </h1>

          <p
            data-hero-copy
            className="mt-6 max-w-[27rem] font-jost text-[15px] font-light leading-[1.9] text-[rgba(240,232,216,0.58)]"
          >
            Au coeur de Bouskoura, LGV vous invite dans un espace ou chaque tasse raconte une histoire. Cuisine soignee, ambiance chaleureuse, instants inoubliables.
          </p>

          <div data-hero-actions className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button
              asChild
              size="lg"
              className="h-auto rounded-full bg-[#c8aa64] px-8 py-3.5 font-jost text-[11px] font-medium uppercase tracking-[0.2em] text-[#080c18] shadow-none transition hover:-translate-y-0.5 hover:bg-[#c8aa64]/90"
            >
              <Link to="/#menu">Voir le menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group h-auto gap-3 rounded-full bg-transparent px-0 py-0 font-jost text-[11px] font-normal uppercase tracking-[0.18em] text-[rgba(240,232,216,0.52)] hover:bg-transparent hover:text-[#f0e8d8]"
            >
              <Link to="/#story">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition group-hover:border-white/45">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Decouvrir l'espace
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {quickAccessLinks.map((item) => (
              <Link
                key={item.href}
                to={toSectionRoute(item.href)}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 font-jost text-[10px] uppercase tracking-[0.18em] text-white/78 transition hover:border-white/24 hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div data-hero-visual className="relative flex items-center justify-center lg:justify-end">
          <div className="absolute inset-x-[14%] top-[28%] h-[40%] rounded-full bg-[radial-gradient(circle,rgba(200,170,100,0.18),rgba(200,170,100,0.04)_55%,transparent_75%)] blur-[110px]" />
          <CoffeeCanvas className="mx-auto max-w-[260px] sm:max-w-[320px] lg:mr-0 lg:max-w-[460px] xl:max-w-[520px]" />
        </div>

        <div
          data-hero-stats
          className="grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-3 lg:pt-10"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="border-white/10 sm:border-r sm:pr-6 lg:pr-10"
            >
              <p className="font-editorial text-[2rem] font-light leading-none text-[#f0e8d8]">{stat.value}</p>
              <p className="mt-2 font-jost text-[10px] uppercase tracking-[0.18em] text-[rgba(240,232,216,0.46)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
