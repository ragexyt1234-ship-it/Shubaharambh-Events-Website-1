import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface ScrollReactive3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  rotateIntensity?: number;
  scaleIntensity?: number;
  parallaxOffset?: number;
}

export function ScrollReactive3D({ 
  children, 
  className = "", 
  intensity = 1,
  rotateIntensity = 0.5,
  scaleIntensity = 0.05,
  parallaxOffset = 50
}: ScrollReactive3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Scroll-based transforms
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset * intensity, -parallaxOffset * intensity]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15 * rotateIntensity, 0, -15 * rotateIntensity]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10 * rotateIntensity, 10 * rotateIntensity]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scaleIntensity, 1 + scaleIntensity, 1 - scaleIntensity]);
  
  // Mouse-based transforms
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);
  
  const mouseRotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const mouseRotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (event.clientX - centerX) / (rect.width / 2);
    const y = (event.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        style={{
          y,
          rotateX: isHovered ? mouseRotateX : rotateX,
          rotateY: isHovered ? mouseRotateY : rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
        transition={{ type: "spring", ...springConfig }}
        className="floating-element"
      >
        {children}
        
        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(0, 122, 255, 0.1), transparent 70%)`,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}