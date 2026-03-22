import { lazy, Suspense, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { Application } from "@splinetool/runtime";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";

import { cn } from "@/lib/utils";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

type ObjectSelector = string | string[];

interface SplineSceneProps {
  scene: string;
  className?: string;
  interactionClassName?: string;
  bodyObject?: ObjectSelector;
  headObject?: ObjectSelector;
  disableInteractionOnMobile?: boolean;
}

const findObject = (app: Application, selector?: ObjectSelector) => {
  if (!selector) return null;

  const names = Array.isArray(selector) ? selector : [selector];

  for (const name of names) {
    const match = app.findObjectByName(name);
    if (match) return match;
  }

  return null;
};

const lerp = (from: number, to: number, speed: number) => from + (to - from) * speed;

const SplineScene = ({
  scene,
  className,
  interactionClassName,
  bodyObject = ["Robot", "robot", "Body", "body"],
  headObject = ["Head", "head", "Robot_Head"],
  disableInteractionOnMobile = true,
}: SplineSceneProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const splineRef = useRef<Application | null>(null);
  const bodyRef = useRef<any>(null);
  const headRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const motionState = useMemo(
    () => ({
      currentX: 0,
      currentY: 0,
      targetX: 0,
      targetY: 0,
      spotlightX: 50,
      spotlightY: 35,
    }),
    [],
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const isMobileViewport = () => disableInteractionOnMobile && window.innerWidth < 768;

    const animate = () => {
      motionState.currentX = lerp(motionState.currentX, motionState.targetX, 0.08);
      motionState.currentY = lerp(motionState.currentY, motionState.targetY, 0.08);

      wrapper.style.transform = `perspective(1600px) rotateX(${motionState.currentY * -3.2}deg) rotateY(${motionState.currentX * 4.2}deg) scale(${isHovering ? 1.015 : 1})`;
      wrapper.style.setProperty("--spotlight-x", `${motionState.spotlightX}%`);
      wrapper.style.setProperty("--spotlight-y", `${motionState.spotlightY}%`);

      if (!isMobileViewport()) {
        if (bodyRef.current?.rotation) {
          bodyRef.current.rotation.y = motionState.currentX * 0.2;
          bodyRef.current.rotation.x = motionState.currentY * 0.05;
        }

        if (headRef.current?.rotation) {
          headRef.current.rotation.y = motionState.currentX * 0.34;
          headRef.current.rotation.x = motionState.currentY * 0.1;
        }
      }

      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, [disableInteractionOnMobile, isHovering, motionState]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (disableInteractionOnMobile && window.innerWidth < 768) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

    motionState.targetX = normalizedX;
    motionState.targetY = normalizedY;
    motionState.spotlightX = ((event.clientX - bounds.left) / bounds.width) * 100;
    motionState.spotlightY = ((event.clientY - bounds.top) / bounds.height) * 100;
  };

  const resetInteraction = () => {
    motionState.targetX = 0;
    motionState.targetY = 0;
    motionState.spotlightX = 50;
    motionState.spotlightY = 35;
    setIsHovering(false);
  };

  return (
    <motion.div
      className={cn("relative w-full", className)}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 6.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
    >
      <div className="absolute inset-[14%] rounded-full bg-[radial-gradient(circle,rgba(110,155,255,0.26),rgba(110,155,255,0.07)_46%,transparent_74%)] blur-3xl" />
      <div className="absolute inset-x-[22%] bottom-[10%] h-10 rounded-full bg-black/18 blur-3xl" />

      <motion.div
        ref={wrapperRef}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={resetInteraction}
        className={cn(
          "group relative overflow-hidden rounded-[36px] transition-transform duration-300 will-change-transform",
          interactionClassName,
        )}
        style={
          {
            "--spotlight-x": "50%",
            "--spotlight-y": "35%",
          } as CSSProperties
        }
      >
        <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(255,255,255,0.16),transparent_26%)] opacity-75 transition duration-300" />
        <div className={cn("relative aspect-[0.88/1] overflow-hidden", loaded ? "bg-transparent" : "bg-transparent")}>
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.18),transparent_20%),radial-gradient(circle_at_50%_74%,rgba(0,0,0,0.18),transparent_24%)]" />
          <Suspense
            fallback={
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/80 backdrop-blur-xl">
                    <Bot className="h-9 w-9" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">Loading visual</p>
                </div>
              </div>
            }
          >
            <LazySpline
              scene={scene}
              onLoad={(app) => {
                splineRef.current = app;
                bodyRef.current = findObject(app, bodyObject);
                headRef.current = findObject(app, headObject);
                setLoaded(true);
              }}
              className="h-full w-full scale-[1.06] mix-blend-screen !bg-transparent"
              style={{ background: "transparent" }}
            />
          </Suspense>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplineScene;
