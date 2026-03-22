import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const vipFeatures = [
  "Private meetings and client breakfasts",
  "Celebration-ready tables and premium service",
  "Calmer acoustics with a more intimate atmosphere",
];

const VipLounge = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section id="vip" ref={ref} className="relative overflow-hidden bg-[#efe6da] px-4 py-24 sm:px-6">
      <div className="absolute right-[-4rem] top-10 h-72 w-72 rounded-full bg-[#f5b15f]/18 blur-[150px]" />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal className="rounded-[36px] bg-[#111827] p-8 text-white shadow-[0_38px_110px_rgba(15,23,42,0.28)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">VIP lounge</p>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
            Private hospitality with a more composed tone.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
            The VIP section now feels like a premium offer instead of a simple callout. It has stronger contrast, clearer benefits, and a visual rhythm consistent with the rest of the brand.
          </p>

          <div className="mt-10 space-y-4">
            {vipFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-4">
                <div className="h-2.5 w-2.5 rounded-full bg-[#f5b15f]" />
                <p className="text-sm text-white/76">{feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="h-14 rounded-full bg-white px-7 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 hover:bg-white/92">
              <a href="tel:+212661571270">
                <Phone />
                Reserve VIP
              </a>
            </Button>
            <Button asChild variant="outline" className="h-14 rounded-full border-white/14 bg-transparent px-7 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/10 hover:text-white">
              <Link to="/#visit">
                Visit the venue
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        <motion.div
          data-reveal
          whileHover={{ y: -6 }}
          className="relative overflow-hidden rounded-[36px] border border-black/6 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,177,95,0.2),transparent_30%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8c5b2d]">Hosting narrative</p>
              <p className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] text-slate-950">
                Built for business conversations, private dinners, and elevated celebrations.
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-[#f8f3ec] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Mood</p>
                <p className="mt-3 text-lg font-medium text-slate-950">Warm, intimate, polished</p>
              </div>
              <div className="rounded-[28px] bg-[#f8f3ec] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Use case</p>
                <p className="mt-3 text-lg font-medium text-slate-950">Reservation-led premium service</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VipLounge;
