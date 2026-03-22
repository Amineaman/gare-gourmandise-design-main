import logoLgv from "@/assets/logo-lgv.jpg";
import { navItems } from "@/lib/site-content";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-white/8 bg-[#090c14] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <div className="mb-5 flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-2xl border border-white/15">
              <img src={logoLgv} alt="Cafe Resto LGV logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-display text-lg uppercase tracking-[0.26em] text-white">LGV</p>
              <p className="text-xs uppercase tracking-[0.24em] text-white/50">Premium cafe and social dining</p>
            </div>
          </div>
          <p className="max-w-lg text-sm leading-7 text-white/62">
            Built around hospitality, proximity, and warm detail. Cafe Resto LGV turns a station-side address into a memorable brand experience.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-sm text-white/62">
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} to={`/${item.href}`} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a href="tel:+212661571270" className="transition hover:text-white">
              +212 661 57 12 70
            </a>
            <span>Facing Bouskoura train station, Morocco</span>
          </div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/35">Cafe Resto LGV 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
