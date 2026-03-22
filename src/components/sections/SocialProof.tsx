import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { testimonials, trustNotes } from "@/lib/site-content";

const SocialProof = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-[#f8f3ec] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8c5b2d]">Social proof</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Trust signals that feel branded and credible.
            </h2>
            <div className="mt-8 flex items-center gap-1 text-[#f5b15f]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-lg font-medium text-slate-950">Guest-approved hospitality, all day long.</p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-3">
              {trustNotes.map((item) => (
                <div key={item.label} data-reveal className="rounded-[28px] border border-black/6 bg-white p-5 shadow-[0_18px_60px_rgba(15,23,42,0.07)]">
                  <item.icon className="h-5 w-5 text-[#8c5b2d]" />
                  <p className="mt-5 text-2xl font-medium text-slate-950">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  data-reveal
                  whileHover={{ y: -8 }}
                  className="rounded-[30px] border border-black/6 bg-[#111827] p-6 text-white shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
                >
                  <Quote className="h-6 w-6 text-[#f5b15f]" />
                  <p className="mt-6 text-sm leading-7 text-white/72">{testimonial.quote}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{testimonial.name}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
