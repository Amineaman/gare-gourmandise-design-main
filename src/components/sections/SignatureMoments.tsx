import { motion } from "framer-motion";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { signatureMoments } from "@/lib/site-content";

const SignatureMoments = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a101b] px-4 py-24 sm:px-6">
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#f5b15f]/12 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#4b7cff]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">Experience design</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              A smoother rhythm from sunrise coffee to evening energy.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {signatureMoments.map((item) => (
              <motion.div
                key={item.title}
                data-reveal
                whileHover={{ y: -8 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3 text-[#f5b15f]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureMoments;
