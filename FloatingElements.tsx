import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export function FloatingElements({ count = 15, className = "" }: FloatingElementsProps) {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  const emojis = ['✨', '🌸', '💫', '🌟', '💐', '🎊', '🎭', '🎪', '💎', '🔹', '⭐', '🌺', '🌼', '🎨', '🎵'];

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 0.8 + Math.random() * 1.2, // 0.8x to 2x size
      duration: 12 + Math.random() * 16, // 12-28 seconds
      delay: Math.random() * 10 // 0-10 second delay
    }));
    setElements(newElements);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-white/20 filter drop-shadow-lg"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size * 2}rem`,
            textShadow: `0 0 ${element.size * 20}px rgba(255, 255, 255, 0.3)`
          }}
          animate={{
            y: [0, -30 * element.size, 0],
            x: [0, (Math.random() - 0.5) * 40 * element.size, 0],
            rotate: [0, (Math.random() - 0.5) * 20, 0],
            scale: [1, 1 + element.size * 0.1, 1],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: [0.4, 0, 0.6, 1],
            delay: element.delay,
            repeatType: "mirror"
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
}