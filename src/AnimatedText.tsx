import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "luxury" | "glow" | "gradient" | "breathe";
  delay?: number;
  duration?: number;
}

export function AnimatedText({ 
  children, 
  className = "", 
  variant = "default",
  delay = 0,
  duration = 0.8
}: AnimatedTextProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "luxury":
        return "text-luxury-heading text-floating-glow";
      case "glow":
        return "text-crystal-clear text-hover-glow";
      case "gradient":
        return "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-shift";
      case "breathe":
        return "text-crystal-clear animate-text-breathe";
      default:
        return "text-crystal-clear";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const childVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
      rotateX: 45 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: duration,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  // Convert text to words for stagger animation
  const words = typeof children === 'string' 
    ? children.split(' ') 
    : [children];

  return (
    <motion.div
      className={`${getVariantClasses()} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block mr-2"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(0, 122, 255, 0.6)"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}