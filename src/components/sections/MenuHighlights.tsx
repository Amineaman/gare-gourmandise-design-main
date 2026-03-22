import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { menuHighlights } from "@/lib/site-content";

const MenuHighlights = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section id="menu" ref={ref} className="bg-[#f8f3ec] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8c5b2d]">Menu highlights</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Signature offers presented with clearer hierarchy.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-slate-600">
            Instead of generic blocks, the menu section now reads like a curated collection of reasons to visit.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {menuHighlights.map((item, index) => (
            <motion.article
              key={item.title}
              data-reveal
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[32px] border border-black/6 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,177,95,0.18),transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">0{index + 1} / {item.meta}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-950">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
                <div className="rounded-full border border-black/8 p-3 text-slate-400 transition duration-300 group-hover:border-[#8c5b2d]/20 group-hover:bg-[#8c5b2d] group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
