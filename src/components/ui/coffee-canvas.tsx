import { useEffect, useRef } from "react";
import * as THREE from "three";

import { cn } from "@/lib/utils";

type CoffeeCanvasProps = {
  className?: string;
};

const CoffeeCanvas = ({ className }: CoffeeCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const getWidth = () => canvas.clientWidth || 1;
    const getHeight = () => canvas.clientHeight || 1;
    const isMobileViewport = () => window.matchMedia("(max-width: 900px)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(getWidth(), getHeight(), false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, getWidth() / getHeight(), 0.1, 100);
    camera.position.set(0, 2, 7.5);
    camera.lookAt(0, 0.4, 0);

    const ceramicMat = new THREE.MeshStandardMaterial({ color: 0x0d0a07, roughness: 0.12, metalness: 0.06 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xc8aa64, roughness: 0.25, metalness: 0.85 });
    const darkGoldMat = new THREE.MeshStandardMaterial({ color: 0x8a7240, roughness: 0.35, metalness: 0.75 });
    const plateMat = new THREE.MeshStandardMaterial({ color: 0x0a0806, roughness: 0.1, metalness: 0.12 });
    const coffeeLiqMat = new THREE.MeshStandardMaterial({ color: 0x1e0c04, roughness: 0.35, metalness: 0.05 });

    const group = new THREE.Group();

    const saucerProfile = [
      new THREE.Vector2(0, -0.02),
      new THREE.Vector2(0.5, -0.02),
      new THREE.Vector2(1.0, 0.04),
      new THREE.Vector2(1.5, 0.1),
      new THREE.Vector2(1.85, 0.15),
      new THREE.Vector2(2.1, 0.22),
      new THREE.Vector2(2.18, 0.3),
      new THREE.Vector2(2.1, 0.36),
      new THREE.Vector2(1.8, 0.38),
      new THREE.Vector2(1.0, 0.32),
      new THREE.Vector2(0.55, 0.28),
      new THREE.Vector2(0, 0.28),
    ];

    const saucer = new THREE.Mesh(new THREE.LatheGeometry(saucerProfile, 60), plateMat);
    saucer.position.y = -1.1;
    saucer.receiveShadow = true;
    group.add(saucer);

    const saucerRim = new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.022, 8, 80), goldMat);
    saucerRim.rotation.x = Math.PI / 2;
    saucerRim.position.y = -0.74;
    group.add(saucerRim);

    const saucerInnerRim = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.014, 6, 60), darkGoldMat);
    saucerInnerRim.rotation.x = Math.PI / 2;
    saucerInnerRim.position.y = -0.78;
    group.add(saucerInnerRim);

    const cupProfile = [
      new THREE.Vector2(0, -0.88),
      new THREE.Vector2(0.6, -0.88),
      new THREE.Vector2(0.66, -0.82),
      new THREE.Vector2(0.72, -0.55),
      new THREE.Vector2(0.82, -0.15),
      new THREE.Vector2(0.96, 0.28),
      new THREE.Vector2(1.08, 0.72),
      new THREE.Vector2(1.12, 0.82),
      new THREE.Vector2(1.06, 0.9),
      new THREE.Vector2(0.98, 0.92),
      new THREE.Vector2(0, 0.92),
    ];

    const cup = new THREE.Mesh(new THREE.LatheGeometry(cupProfile, 64), ceramicMat);
    cup.castShadow = true;
    cup.receiveShadow = true;
    group.add(cup);

    const topBand = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.022, 8, 70), goldMat);
    topBand.rotation.x = Math.PI / 2;
    topBand.position.y = 0.9;
    group.add(topBand);

    const midBand = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.01, 6, 60), goldMat);
    midBand.rotation.x = Math.PI / 2;
    midBand.position.y = 0;
    group.add(midBand);

    const footBand = new THREE.Mesh(new THREE.TorusGeometry(0.63, 0.018, 6, 50), goldMat);
    footBand.rotation.x = Math.PI / 2;
    footBand.position.y = -0.86;
    group.add(footBand);

    const coffeeLiq = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 0.7, 1.6, 48), coffeeLiqMat);
    coffeeLiq.position.y = -0.08;
    group.add(coffeeLiq);

    const foamCanvas = document.createElement("canvas");
    foamCanvas.width = 512;
    foamCanvas.height = 512;
    const foamTex = new THREE.CanvasTexture(foamCanvas);
    const foamMat = new THREE.MeshStandardMaterial({ map: foamTex, roughness: 0.6, transparent: true, opacity: 1 });
    const foamDisc = new THREE.Mesh(new THREE.CircleGeometry(1.04, 64), foamMat);
    foamDisc.rotation.x = -Math.PI / 2;
    foamDisc.position.y = 0.75;
    group.add(foamDisc);

    const milkCanvas = document.createElement("canvas");
    milkCanvas.width = 256;
    milkCanvas.height = 256;
    const milkTex = new THREE.CanvasTexture(milkCanvas);
    const milkMat = new THREE.MeshBasicMaterial({ map: milkTex, transparent: true, opacity: 0.92, depthWrite: false });
    const milkDisc = new THREE.Mesh(new THREE.CircleGeometry(0.9, 48), milkMat);
    milkDisc.rotation.x = -Math.PI / 2;
    milkDisc.position.y = 0.77;
    group.add(milkDisc);

    const drawFoam = () => {
      const ctx = foamCanvas.getContext("2d");
      if (!ctx) return;

      const size = 512;
      const cx = 256;
      const cy = 256;
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 256);
      bg.addColorStop(0, "#4a2510");
      bg.addColorStop(0.7, "#2e1308");
      bg.addColorStop(1, "#1e0c04");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, size, size);

      ctx.save();
      ctx.translate(cx, cy + 10);
      const heartSize = 54;
      ctx.fillStyle = "rgba(230,195,130,0.82)";
      ctx.beginPath();
      ctx.moveTo(0, -heartSize * 0.28);
      ctx.bezierCurveTo(heartSize * 0.55, -heartSize * 0.95, heartSize * 1.12, -heartSize * 0.18, 0, heartSize * 0.72);
      ctx.bezierCurveTo(-heartSize * 1.12, -heartSize * 0.18, -heartSize * 0.55, -heartSize * 0.95, 0, -heartSize * 0.28);
      ctx.fill();

      ctx.fillStyle = "rgba(200,160,90,0.45)";
      ctx.beginPath();
      ctx.moveTo(0, -heartSize * 0.28);
      ctx.bezierCurveTo(heartSize * 0.4, -heartSize * 0.75, heartSize * 0.85, -heartSize * 0.1, 0, heartSize * 0.55);
      ctx.bezierCurveTo(-heartSize * 0.85, -heartSize * 0.1, -heartSize * 0.4, -heartSize * 0.75, 0, -heartSize * 0.28);
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "rgba(220,185,110,0.3)";
      ctx.lineWidth = 2.5;
      for (let index = 0; index < 4; index += 1) {
        ctx.beginPath();
        ctx.arc(cx, cy + 5, 72 + index * 14, Math.PI * 0.15, Math.PI * 0.85);
        ctx.stroke();
      }

      foamTex.needsUpdate = true;
    };

    const drawMilk = (time: number) => {
      const ctx = milkCanvas.getContext("2d");
      if (!ctx) return;

      const cx = 128;
      const cy = 128;
      ctx.clearRect(0, 0, 256, 256);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.4);

      const blob = ctx.createRadialGradient(0, 0, 4, 0, 0, 90);
      blob.addColorStop(0, "rgba(240,220,170,0.90)");
      blob.addColorStop(0.45, "rgba(230,200,140,0.55)");
      blob.addColorStop(1, "rgba(220,185,110,0)");
      ctx.fillStyle = blob;
      ctx.beginPath();
      for (let index = 0; index < 8; index += 1) {
        const angle = (index / 8) * Math.PI * 2;
        const wobble = 1 + 0.22 * Math.sin(angle * 3 + time * 1.5);
        const radius = 55 * wobble;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();

      ctx.rotate(Math.PI * 0.55 + time * 0.2);
      const secondaryBlob = ctx.createRadialGradient(30, 0, 2, 30, 0, 55);
      secondaryBlob.addColorStop(0, "rgba(250,235,190,0.75)");
      secondaryBlob.addColorStop(1, "rgba(240,215,160,0)");
      ctx.fillStyle = secondaryBlob;
      ctx.beginPath();
      ctx.arc(30, 0, 42, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      milkTex.needsUpdate = true;
    };

    drawFoam();
    drawMilk(0);

    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.08, 0.4, 0),
      new THREE.Vector3(1.58, 0.35, 0),
      new THREE.Vector3(1.82, 0.15, 0),
      new THREE.Vector3(1.88, -0.15, 0),
      new THREE.Vector3(1.78, -0.42, 0),
      new THREE.Vector3(1.5, -0.58, 0),
      new THREE.Vector3(1.08, -0.6, 0),
    ]);
    group.add(new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 36, 0.07, 10, false), ceramicMat));
    group.add(new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 36, 0.028, 8, false), goldMat));

    const spoonGroup = new THREE.Group();
    const spoonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 1.15, 0),
      new THREE.Vector3(0.02, 0.4, 0),
      new THREE.Vector3(0.04, -0.4, 0),
      new THREE.Vector3(0.04, -1.15, 0),
    ]);
    spoonGroup.add(new THREE.Mesh(new THREE.TubeGeometry(spoonCurve, 20, 0.028, 8, false), goldMat));
    const spoonBowlGeometry = new THREE.SphereGeometry(0.16, 14, 10);
    spoonBowlGeometry.scale(1, 0.45, 1);
    const spoonBowl = new THREE.Mesh(spoonBowlGeometry, goldMat);
    spoonBowl.position.set(0.04, -1.2, 0);
    spoonGroup.add(spoonBowl);
    spoonGroup.position.set(-1.75, -0.62, 1.2);
    spoonGroup.rotation.y = 0.5;
    spoonGroup.rotation.z = 0.12;
    group.add(spoonGroup);

    const haloMat = new THREE.MeshBasicMaterial({ color: 0xc8aa64, transparent: true, opacity: 0.16 });
    const halo = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.007, 6, 100), haloMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.y = -0.2;
    group.add(halo);

    const haloOuter = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.005, 6, 100),
      new THREE.MeshBasicMaterial({ color: 0xc8aa64, transparent: true, opacity: 0.07 }),
    );
    haloOuter.rotation.x = Math.PI / 2;
    haloOuter.position.y = -0.3;
    group.add(haloOuter);

    const steamGeometry = new THREE.SphereGeometry(0.04, 5, 5);
    const steamPts: THREE.Mesh[] = [];
    for (let index = 0; index < 18; index += 1) {
      const particleMaterial = new THREE.MeshBasicMaterial({ color: 0xf0e8d8, transparent: true, opacity: 0 });
      const particle = new THREE.Mesh(steamGeometry, particleMaterial);
      const lane = (index % 3) - 1;
      particle.userData = {
        lane,
        speed: 0.4 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        xAmp: 0.08 + Math.random() * 0.1,
        t: Math.random(),
      };
      particle.scale.setScalar(0.5 + Math.random() * 0.8);
      group.add(particle);
      steamPts.push(particle);
    }

    scene.add(group);

    scene.add(new THREE.AmbientLight(0xf0ead0, 0.4));

    const keyLight = new THREE.DirectionalLight(0xfff6e0, 2.8);
    keyLight.position.set(5, 8, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7090cc, 0.7);
    fillLight.position.set(-5, 3, -3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xc8aa64, 1);
    rimLight.position.set(-3, 5, -6);
    scene.add(rimLight);

    const underLight = new THREE.PointLight(0xc8aa64, 0.5, 10);
    underLight.position.set(0, -1.5, 2);
    scene.add(underLight);

    let animationFrame = 0;
    let time = 0;
    let targetRY = -0.3;
    let targetRX = 0.08;
    let currentRY = -0.3;
    let currentRX = 0.08;

    const handlePointerMove = (clientX: number, clientY: number) => {
      if (isMobileViewport()) return;

      const bounds = canvas.getBoundingClientRect();
      const normalizedX = ((clientX - bounds.left) / bounds.width) * 2 - 1;
      const normalizedY = ((clientY - bounds.top) / bounds.height) * 2 - 1;
      targetRY = -0.3 + normalizedX * 0.4;
      targetRX = THREE.MathUtils.clamp(0.08 - normalizedY * 0.18, -0.3, 0.26);
    };

    const onMouseMove = (event: MouseEvent) => handlePointerMove(event.clientX, event.clientY);
    const onTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      handlePointerMove(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      const width = getWidth();
      const height = getHeight();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    resizeObserver.observe(canvas);

    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      time += 0.016;

      const mobile = isMobileViewport();
      if (mobile) {
        targetRY = -0.24 + Math.sin(time * 0.22) * 0.08;
        targetRX = 0.05 + Math.cos(time * 0.2) * 0.03;
      } else {
        targetRY += 0.0008;
      }

      currentRY += (targetRY - currentRY) * 0.045;
      currentRX += (targetRX - currentRX) * 0.045;

      group.rotation.y = currentRY;
      group.rotation.x = currentRX;
      group.position.y = Math.sin(time * 0.65) * 0.07;

      haloMat.opacity = 0.12 + Math.sin(time * 1.2) * 0.06;
      drawMilk(time);

      steamPts.forEach((particle) => {
        const material = particle.material as THREE.MeshBasicMaterial;
        const data = particle.userData as {
          lane: number;
          speed: number;
          phase: number;
          xAmp: number;
          t: number;
        };

        data.t += data.speed * 0.008;
        if (data.t > 1) data.t = 0;

        const progress = data.t;
        particle.position.x = data.lane * 0.22 + Math.sin(progress * Math.PI * 3 + data.phase) * data.xAmp;
        particle.position.y = 0.95 + progress * 2;
        particle.position.z = Math.cos(progress * Math.PI * 2) * 0.06;
        const fade = progress < 0.3 ? progress / 0.3 : progress > 0.7 ? (1 - progress) / 0.3 : 1;
        material.opacity = fade * 0.28;
        particle.scale.setScalar(0.4 + progress * 0.9);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchmove", onTouchMove);
      resizeObserver.disconnect();

      scene.traverse((object) => {
        const mesh = object as THREE.Mesh;
        if (mesh.geometry) {
          mesh.geometry.dispose();
        }

        const material = mesh.material;
        if (Array.isArray(material)) {
          material.forEach((entry) => entry.dispose());
        } else {
          material?.dispose?.();
        }
      });

      foamTex.dispose();
      milkTex.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={cn("relative aspect-square w-full", className)}>
      <div className="pointer-events-none absolute inset-[16%] rounded-full bg-[radial-gradient(circle,rgba(200,170,100,0.22),rgba(200,170,100,0.06)_46%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-[22%] bottom-[12%] h-20 rounded-full bg-black/25 blur-3xl" />
      <canvas ref={canvasRef} className="relative z-10 block h-full w-full cursor-none" />
    </div>
  );
};

export default CoffeeCanvas;
