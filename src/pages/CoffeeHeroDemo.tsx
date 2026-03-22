import CoffeeHero3D from "@/components/sections/CoffeeHero3D";

/**
 * Demo page showcasing the CoffeeHero3D component
 *
 * This demonstrates how to use the premium 3D interactive hero section
 * with customizable props for different coffee brands or campaigns.
 */
const CoffeeHeroDemo = () => {
  return (
    <div className="min-h-screen">
      {/* Default configuration */}
      <CoffeeHero3D />

      {/* Custom configuration example */}
      {/*
      <CoffeeHero3D
        splineScene="https://prod.spline.design/your-custom-scene/scene.splinecode"
        title="Artisan Coffee Experience"
        subtitle="Handcrafted perfection in every cup. Experience the difference that passion makes."
        ctaPrimary={{ text: "Reserve Table", href: "#reservation" }}
        ctaSecondary={{ text: "View Gallery", href: "#gallery" }}
        trustBadge={{ text: "Award-winning café since 2010", rating: 5 }}
      />
      */}
    </div>
  );
};

export default CoffeeHeroDemo;