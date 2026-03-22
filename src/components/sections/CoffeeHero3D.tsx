import { useEffect, useRef, useState, Suspense } from "react";
import { gsap } from "gsap";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Coffee, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CoffeeHero3DProps {
  splineScene?: string;
  title?: string;
  subtitle?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  trustBadge?: {
    text: string;
    rating?: number;
  };
}

const CoffeeHero3D = ({
  splineScene = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode",
  title = "Premium Coffee Experience",
  subtitle = "Where every moment becomes perfect. Crafted with passion, served with excellence.",
  ctaPrimary = { text: "Order Now", href: "#order" },
  ctaSecondary = { text: "Explore Menu", href: "#menu" },
  trustBadge = { text: "Loved by 500+ coffee lovers", rating: 5 }
}: CoffeeHero3DProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;

      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    if (!isLoaded) return;

    const tl = gsap.timeline();

    // Staggered entrance animations
    tl.fromTo(contentRef.current?.querySelector('h1'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(contentRef.current?.querySelector('p'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(contentRef.current?.querySelector('.cta-buttons'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(contentRef.current?.querySelector('.trust-badge'),
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.2"
    );

    // Spotlight effect animation
    gsap.to('.spotlight', {
      opacity: 0.6,
      scale: 1.1,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

  }, [isLoaded]);

  const onSplineLoad = (spline: any) => {
    splineRef.current = spline;
    setIsLoaded(true);

    // Optional: Add any Spline-specific interactions here
    // For example, you could control objects in the scene
  };

  const handleSplineMouseMove = (e: any) => {
    if (isMobile || !splineRef.current) return;

    // Subtle camera movement based on mouse
    const splineApp = splineRef.current;
    if (splineApp && splineApp.camera) {
      const intensity = 0.02;
      splineApp.camera.position.x += (e.target.clientX - window.innerWidth / 2) * intensity * 0.001;
      splineApp.camera.position.y += (e.target.clientY - window.innerHeight / 2) * intensity * 0.001;
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-amber-900/5 blur-3xl spotlight"
          style={{ rotateX, rotateY }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-orange-800/5 blur-3xl"
          style={{ rotateX: rotateX.get() * -0.5, rotateY: rotateY.get() * -0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-yellow-700/5 blur-3xl"
          style={{ rotateX: rotateX.get() * 0.3, rotateY: rotateY.get() * 0.3 }}
        />
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] z-10"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
           }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            ref={contentRef}
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Trust Badge */}
            <motion.div
              className="trust-badge inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full px-4 py-2 shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex gap-0.5">
                {[...Array(trustBadge.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-medium text-amber-700">{trustBadge.text}</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight">
                {title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="text-amber-700 italic">
                  {title.split(' ').slice(-1)}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a href={ctaPrimary.href} className="flex items-center gap-2">
                    <Coffee className="w-5 h-5" />
                    {ctaPrimary.text}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  <a href={ctaSecondary.href}>
                    {ctaSecondary.text}
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Additional visual elements */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-8">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-white shadow-sm"
                    style={{ zIndex: 3 - i }}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">Join 500+ satisfied customers</span>
            </div>
          </motion.div>

          {/* Right side - 3D Spline Scene */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              className="relative w-full max-w-lg h-[400px] lg:h-[500px]"
              whileHover={{ scale: isMobile ? 1 : 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-radial from-amber-200/20 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

              <Suspense fallback={
                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Coffee className="w-12 h-12 text-amber-600 mx-auto animate-pulse" />
                    <p className="text-amber-700 font-medium">Loading 3D Experience...</p>
                  </div>
                </div>
              }>
                <Spline
                  scene={splineScene}
                  onLoad={onSplineLoad}
                  onMouseMove={handleSplineMouseMove}
                  className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    transform: isMobile ? 'none' : `perspective(1000px) rotateX(${rotateX.get() * 0.1}deg) rotateY(${rotateY.get() * 0.1}deg)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              </Suspense>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent rounded-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex items-start justify-center p-1.5 bg-white/20 backdrop-blur-sm">
          <div className="w-1.5 h-3 rounded-full bg-amber-600" />
        </div>
      </motion.div>
    </section>
  );
};

export default CoffeeHero3D;