import { motion } from "framer-motion";

import { useGsapReveal } from "@/hooks/use-gsap-reveal";
import { galleryMoments } from "@/lib/site-content";

const ExperienceGallery = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section id="gallery" ref={ref} className="bg-[#0b101a] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div data-reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">Visual language</p>
            <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-5xl">
              Images now support the brand instead of filling space.
            </h2>
          </div>
          <p data-reveal className="max-w-xl text-base leading-8 text-white/62">
            Larger crops, cleaner framing, and stronger overlays make the gallery feel cinematic and premium on every device.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {galleryMoments.map((item) => (
            <motion.figure
              key={item.title}
              data-reveal
              whileHover={{ y: -6 }}
              className={`group relative min-h-[240px] overflow-hidden rounded-[32px] border border-white/10 ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(6,10,18,0.12)_50%,rgba(6,10,18,0.82)_100%)]" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">{item.label}</p>
                <p className="mt-3 text-2xl font-medium text-white">{item.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;
