import { motion } from "framer-motion";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { storyPillars } from "@/lib/site-content";

const EditorialSection = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section id="story" ref={ref} className="relative bg-[#f5efe7] px-4 py-24 text-slate-900 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div data-reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8c5b2d]">Brand story</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Designed to feel intentional at every touchpoint.
            </h2>
          </div>
          <p data-reveal className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            The new identity treats LGV as a premium local brand, not a generic cafe site. Rich contrast, warmer neutrals, refined spacing, and editorial typography create a clearer emotional signature from hero to footer.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {storyPillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              data-reveal
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="group rounded-[32px] border border-black/6 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-[#111827] p-3 text-[#f7c98d]">
                  <pillar.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-slate-300">0{index + 1}</span>
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#8c5b2d]">{pillar.eyebrow}</p>
              <h3 className="mt-4 text-2xl font-medium leading-tight text-slate-950">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
