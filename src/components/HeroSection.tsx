import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Phone, MapPin, Star, Coffee } from "lucide-react";
import logoLgv from "@/assets/logo-lgv.jpg";

const CoffeeCup = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  const cupRef = useRef<SVGSVGElement>(null);
  const liquidRef = useRef<SVGPathElement>(null);
  const steamRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!cupRef.current || !liquidRef.current || !steamRef.current) return;

    // Calculate tilt based on mouse position (subtle effect)
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const tiltX = (mouseX - centerX) / centerX * 2; // Max 2 degrees
    const tiltY = (mouseY - centerY) / centerY * 2;

    gsap.to(cupRef.current, {
      rotationY: tiltX,
      rotationX: -tiltY,
      duration: 0.3,
      ease: "power2.out"
    });

    // Animate liquid ripple
    gsap.to(liquidRef.current, {
      transformOrigin: "center",
      scaleX: 1 + Math.abs(tiltX) * 0.05,
      scaleY: 1 + Math.abs(tiltY) * 0.05,
      duration: 0.2,
      ease: "power1.out"
    });

    // Steam follows cursor direction slightly
    gsap.to(steamRef.current, {
      x: tiltX * 5,
      y: -tiltY * 3,
      duration: 0.4,
      ease: "power2.out"
    });
  }, [mouseX, mouseY]);

  return (
    <div className="relative">
      <svg
        ref={cupRef}
        width="200"
        height="220"
        viewBox="0 0 200 220"
        className="drop-shadow-2xl"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Steam */}
        <g ref={steamRef}>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${85 + i * 10} 30 Q${90 + i * 10} 15 ${85 + i * 10} 5`}
              fill="none"
              stroke="hsl(38 68% 47% / 0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: '2s' }}
            />
          ))}
        </g>

        {/* Cup shadow */}
        <ellipse cx="100" cy="200" rx="60" ry="8" fill="rgba(0,0,0,0.2)" />

        {/* Cup body */}
        <path
          d="M60 160 Q60 120 80 100 L120 100 Q140 120 140 160 L140 180 Q140 190 130 190 L70 190 Q60 190 60 180 Z"
          fill="hsl(25 30% 15%)"
          stroke="hsl(25 25% 20%)"
          strokeWidth="2"
        />

        {/* Cup handle */}
        <path
          d="M140 140 Q155 135 155 150 Q155 165 140 160"
          fill="none"
          stroke="hsl(25 25% 20%)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Coffee liquid */}
        <path
          ref={liquidRef}
          d="M65 165 Q65 125 85 105 L115 105 Q135 125 135 165 Z"
          fill="hsl(25 45% 25%)"
          style={{ transformOrigin: '100px 135px' }}
        />

        {/* Coffee surface with foam */}
        <path
          d="M65 165 Q75 162 85 165 Q95 162 105 165 Q115 162 125 165 Q135 162 135 165 L135 168 Q135 170 125 168 Q115 170 105 168 Q95 170 85 168 Q75 170 65 168 Z"
          fill="hsl(38 68% 47%)"
        />

        {/* Light reflection */}
        <path
          d="M85 110 Q90 115 95 110 Q100 105 105 110 Q110 115 115 110"
          fill="none"
          stroke="hsl(45 100% 80% / 0.4)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

const FloatingBlob = ({ delay = 0, size = 200, color = "bg-amber-900/10" }: {
  delay?: number;
  size?: number;
  color?: string;
}) => (
  <div
    className={`absolute rounded-full ${color} blur-3xl animate-float`}
    style={{
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      animationDuration: '8s'
    }}
  />
);

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const coffeeRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // Entry animations
    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(coffeeRef.current,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.5"
    );

    // Floating background animation
    gsap.to(".floating-blob", {
      y: "+=20",
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5
    });
  }, []);

  const handleCoffeeHover = (hovering: boolean) => {
    setIsHovered(hovering);
    if (coffeeRef.current) {
      gsap.to(coffeeRef.current, {
        scale: hovering ? 1.03 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden"
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 z-0">
        <FloatingBlob delay={0} size={300} color="bg-amber-900/5" className="floating-blob top-20 right-10" />
        <FloatingBlob delay={2} size={250} color="bg-orange-800/5" className="floating-blob bottom-20 left-10" />
        <FloatingBlob delay={4} size={200} color="bg-yellow-700/5" className="floating-blob top-1/2 left-1/4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            {/* Monogram */}
            <div className="relative inline-block mb-8 lg:mb-12">
              <div className="w-20 h-20 mx-auto lg:mx-0 rounded-full border-2 border-amber-600/40 overflow-hidden shadow-lg">
                <img src={logoLgv} alt="Logo Café-Resto LGV" className="w-full h-full object-cover" />
              </div>
            </div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6"
            >
              Crafted Coffee
              <br />
              <span className="text-amber-700 italic">Experience</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl text-gray-600 font-sans max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Where every moment becomes perfect. Premium coffee, exceptional service,
              and the warmth of Bouskoura's finest café-restaurant experience.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="tel:+212661571270"
                className="flex items-center gap-3 bg-amber-700 hover:bg-amber-800 text-white font-sans font-bold text-base px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                aria-label="Order Now"
              >
                <Coffee className="w-5 h-5" />
                Order Now
              </a>
              <a
                href="#about"
                className="flex items-center gap-3 border-2 border-amber-700/30 text-amber-700 hover:border-amber-700 hover:bg-amber-700 hover:text-white font-sans font-semibold text-base px-8 py-4 rounded-full transition-all duration-300"
                aria-label="Discover Our Story"
              >
                <Star className="w-5 h-5" />
                Discover Story
              </a>
            </div>

            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-sans text-amber-700 font-semibold">5.0 — 12 Google Reviews</span>
            </div>
          </div>

          {/* Right side - Interactive Coffee Cup */}
          <div className="flex justify-center lg:justify-end">
            <div
              ref={coffeeRef}
              className="relative cursor-pointer"
              onMouseEnter={() => handleCoffeeHover(true)}
              onMouseLeave={() => handleCoffeeHover(false)}
            >
              <CoffeeCup mouseX={mousePosition.x} mouseY={mousePosition.y} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-gray-400/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-amber-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
