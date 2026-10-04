import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { AARNA_MOTION } from "./aarnaMotion";

export function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const x = useSpring(pointerX, AARNA_MOTION.spring);
  const y = useSpring(pointerY, AARNA_MOTION.spring);

  // Rotate between -5 and 5 degrees based on pointer
  const rotateX = useTransform(y, [0, 1], [5, -5]);
  const rotateY = useTransform(x, [0, 1], [-5, 5]);

  const onPointerMove = (e: React.PointerEvent) => {
    if (reducedMotion || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full w-full"
      >
        <div style={{ transform: "translateZ(30px)" }} className="h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
