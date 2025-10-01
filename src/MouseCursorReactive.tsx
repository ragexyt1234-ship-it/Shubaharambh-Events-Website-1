import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function MouseCursorReactive() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterHover = () => setCursorVariant("hover");
    const mouseLeaveHover = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);

    // Add hover listeners to interactive elements
    const hoverElements = document.querySelectorAll('.apple-card, .hover-lift-premium, .btn-premium, .glass-premium');
    hoverElements.forEach(el => {
      el.addEventListener("mouseenter", mouseEnterHover);
      el.addEventListener("mouseleave", mouseLeaveHover);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      hoverElements.forEach(el => {
        el.removeEventListener("mouseenter", mouseEnterHover);
        el.removeEventListener("mouseleave", mouseLeaveHover);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 2
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="cursor-premium fixed pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      
      {/* Cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full border-2 border-primary/50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      
      {/* Reactive field effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997]"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 122, 255, 0.03), transparent 70%)`,
          width: '100vw',
          height: '100vh',
          top: 0,
          left: 0
        }}
      />
    </>
  );
}