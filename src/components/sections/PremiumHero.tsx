import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Bot, Play, Sparkles, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import SplineScene from "@/components/ui/spline-scene";
import { heroStats } from "@/lib/site-content";
import { ROBOT_OBJECT_NAMES, ROBOT_SCENE_URL } from "@/lib/robot-scene";

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
      className="relative isolate min-h-screen overflow-hidden bg-[#070a12] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,177,255,0.2),_transparent_28%),radial-gradient(circle_at_82%_22%,_rgba(120,90,255,0.16),_transparent_26%),linear-gradient(160deg,_#070a12_12%,_#0e1320_45%,_#12192b_100%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_65%)]" />
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#7cb2ff]/16 blur-[150px]" />
        <div className="absolute bottom-12 right-[-6rem] h-80 w-80 rounded-full bg-[#9468ff]/16 blur-[170px]" />
        <div className="hero-grid absolute inset-0 opacity-[0.1]" />
      </div>

      <motion.div
        className="pointer-events-none absolute right-[12%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_62%)] blur-3xl"
        animate={{ x: [-10, 12, -10], y: [-8, 10, -8] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.02fr]">
        <div className="max-w-3xl">
          <div
            data-hero-badge
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur-xl"
          >
            <div className="flex items-center gap-0.5 text-[#f8c77a]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            Premium interactive robot experience
          </div>

          <h1
            data-hero-title
            className="font-display text-5xl leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            A 3D robot that
            <span className="block bg-[linear-gradient(135deg,_#dbeafe_0%,_#8fb4ff_38%,_#f5f3ff_100%)] bg-clip-text text-transparent">
              reacts to you.
            </span>
          </h1>

          <p
            data-hero-copy
            className="mt-6 max-w-2xl text-base leading-8 text-white/68 sm:text-lg"
          >
            Built with React, TypeScript, Tailwind, GSAP, Framer Motion, and Spline, this hero blends a real 3D robot into the interface with soft lighting, smooth cursor-follow interaction, and premium motion from first paint.
          </p>

          <div data-hero-actions className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-full border border-white/15 bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition hover:scale-[1.02] hover:bg-white/92"
            >
              <a href="#story">
                Explore the build
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-white/16 bg-white/6 px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-xl hover:bg-white/10 hover:text-white"
            >
              <a href="tel:+212661571270">
                <Play className="h-4 w-4 fill-current" />
                Book a demo
              </a>
            </Button>
          </div>

          <div data-hero-stats className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-[26px] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  {index === 0 ? <Sparkles className="h-4 w-4 text-[#8fb4ff]" /> : index === 1 ? <Bot className="h-4 w-4 text-[#8fb4ff]" /> : <Star className="h-4 w-4 text-[#8fb4ff]" />}
                  <p className="text-sm uppercase tracking-[0.18em] text-white/42">{stat.label}</p>
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-hero-visual className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-x-[10%] top-[15%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(143,180,255,0.22),rgba(143,180,255,0.04)_55%,transparent_75%)] blur-[120px]" />
          <SplineScene
            scene={ROBOT_SCENE_URL}
            bodyObject={ROBOT_OBJECT_NAMES.body}
            headObject={ROBOT_OBJECT_NAMES.head}
            className="max-w-[620px]"
            interactionClassName="min-h-[420px] sm:min-h-[520px]"
          />
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
