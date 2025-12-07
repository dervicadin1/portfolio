import { motion } from "motion/react";

export function FloatingObjects() {
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -40, 0],
      x: [0, 20, 0],
      rotate: [0, 360],
      transition: {
        duration: 20 + custom * 5,
        repeat: Infinity,
        ease: "linear",
      },
    }),
  };

  return (
    <div className="fixed inset-0 z-[5] pointer-events-none overflow-hidden">
      {/* Gradient Sphere 1 */}
      <motion.div
        custom={0}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/4 right-[10%] w-32 h-32 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle at 30% 30%, #a78bfa, #6366f1, #4c1d95)",
          filter: "blur(2px)",
        }}
      />

      {/* Gradient Sphere 2 */}
      <motion.div
        custom={1}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 left-[8%] w-40 h-40 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle at 30% 30%, #818cf8, #4f46e5, #312e81)",
          filter: "blur(3px)",
        }}
      />

      {/* Gradient Cube */}
      <motion.div
        custom={1.5}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/4 left-[15%] w-24 h-24 opacity-10"
        style={{
          background: "linear-gradient(135deg, #a78bfa 0%, #6366f1 50%, #4c1d95 100%)",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          filter: "blur(1px)",
        }}
      />

      {/* Gradient Ring */}
      <motion.div
        custom={0.8}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[15%] left-[45%] w-28 h-28 rounded-full opacity-15"
        style={{
          background: "conic-gradient(from 0deg, #a78bfa, #6366f1, #818cf8, #a78bfa)",
          filter: "blur(2px)",
        }}
      />

      {/* Torus */}
      <motion.div
        custom={1.2}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-1/3 right-[20%] w-36 h-36 opacity-10"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 30%, #6366f1 30%, #6366f1 50%, transparent 50%)",
          filter: "blur(2px)",
        }}
      />

      {/* Mesh Gradient 1 */}
      <motion.div
        custom={0.5}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[60%] right-[12%] w-32 h-32 rounded-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at top left, #a78bfa, transparent 50%), radial-gradient(ellipse at bottom right, #6366f1, transparent 50%)",
          filter: "blur(3px)",
        }}
      />

      {/* Diamond Shape */}
      <motion.div
        custom={2}
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-[15%] right-[35%] w-20 h-20 opacity-10"
        style={{
          background: "linear-gradient(45deg, #818cf8, #6366f1)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          filter: "blur(1px)",
        }}
      />

      {/* Gradient Orb */}
      <motion.div
        custom={1.8}
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[40%] left-[25%] w-28 h-28 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle at 40% 40%, #c4b5fd, #8b5cf6, #5b21b6)",
          filter: "blur(2px)",
        }}
      />
    </div>
  );
}
