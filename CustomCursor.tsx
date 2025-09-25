import { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.matches('button, a, [role="button"], .hover-glow, .hover-lift, input, textarea')) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [updateMousePosition, handleMouseOver, handleMouseDown, handleMouseUp]);

  return (
    <>
      {/* Main cursor with golden theme */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-mode-multiply"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28,
          mass: 0.5
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 opacity-80 shadow-lg">
          <div className="w-full h-full rounded-full animate-ping bg-gradient-to-br from-yellow-300 to-amber-400 opacity-60" />
        </div>
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-amber-400 border-opacity-50" />
      </motion.div>

      {/* Sparkle effects when hovering */}
      {isHovering && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed pointer-events-none z-[9997] text-amber-400"
              style={{
                left: mousePosition.x + Math.cos(i * 60 * Math.PI / 180) * 30,
                top: mousePosition.y + Math.sin(i * 60 * Math.PI / 180) * 30,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed pointer-events-none z-[9996] rounded-full border-2 border-amber-500"
          style={{
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-12 h-12" />
        </motion.div>
      )}
    </>
  );
}