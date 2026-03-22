import { motion } from "framer-motion";
import { Clock3, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useGsapReveal } from "@/hooks/use-gsap-reveal";

const visitCards = [
  {
    icon: MapPin,
    title: "Address",
    description: "Facing Bouskoura train station, a location built for convenience with stronger visual presence.",
  },
  {
    icon: Phone,
    title: "Contact",
    description: "+212 661 57 12 70 for reservations, private hosting, and large-table requests.",
  },
  {
    icon: Clock3,
    title: "Hours",
    description: "Open daily from early coffee to evening service, approximately 7AM to 11PM.",
  },
];

const VisitSection = () => {
  const ref = useGsapReveal<HTMLElement>();

  return (
    <section id="visit" ref={ref} className="relative overflow-hidden bg-[#0a101b] px-4 py-24 sm:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,177,95,0.12),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">Visit LGV</p>
          <h2 className="mt-5 font-display text-4xl leading-tight tracking-[-0.04em] text-white sm:text-5xl">
            Easy to find, now much harder to forget.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">
            The contact area is now treated as a premium conversion section, with clearer information hierarchy, better spacing, and stronger calls to action.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {visitCards.map((card) => (
              <motion.div
                key={card.title}
                data-reveal
                whileHover={{ x: 4 }}
                className="rounded-[30px] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
              >
                <card.icon className="h-5 w-5 text-[#f5b15f]" />
                <h3 className="mt-5 text-2xl font-medium text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <div
            data-reveal
            className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-5 shadow-[0_40px_100px_rgba(2,6,23,0.36)] backdrop-blur-2xl"
          >
            <div className="rounded-[28px] border border-white/10 bg-[#0f1523] p-6 sm:p-8">
              <div className="flex flex-col gap-4 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5b15f]">Reservation desk</p>
                  <p className="mt-4 text-3xl font-medium text-white">Call for tables, VIP bookings, and private events.</p>
                </div>
                <Button asChild className="rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.16em] text-slate-950 hover:bg-white/92">
                  <a href="tel:+212661571270">Call now</a>
                </Button>
              </div>

              <div className="mt-6 aspect-[16/10] overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(135deg,#1b2336_0%,#12192b_100%)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-dashed border-white/12 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/38">Location cue</p>
                    <p className="mt-3 text-2xl font-medium text-white">Facing Bouskoura station</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[20px] bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/42">Distance feeling</p>
                      <p className="mt-3 text-sm leading-6 text-white/68">Convenient for commuters, strong enough for destination dining.</p>
                    </div>
                    <div className="rounded-[20px] bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/42">Service mode</p>
                      <p className="mt-3 text-sm leading-6 text-white/68">Walk-in energy with a reservation-quality presentation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
