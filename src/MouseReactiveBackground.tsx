import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'motion/react';

export function MouseReactiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particles = useRef<Array<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number; size: number; color: string }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlePool = useRef<Array<any>>([]);

  const colors = [
    'rgba(212, 175, 55, 0.8)',
    'rgba(240, 217, 133, 0.6)', 
    'rgba(218, 165, 32, 0.4)',
    'rgba(184, 134, 11, 0.7)',
    'rgba(255, 215, 0, 0.5)'
  ];

  const createParticle = useCallback((x: number, y: number) => {
    let particle = particlePool.current.pop();
    if (!particle) {
      particle = {};
    }
    
    particle.x = x + (Math.random() - 0.5) * 30;
    particle.y = y + (Math.random() - 0.5) * 30;
    particle.vx = (Math.random() - 0.5) * 2;
    particle.vy = (Math.random() - 0.5) * 2;
    particle.life = 0;
    particle.maxLife = 40 + Math.random() * 40;
    particle.size = 1 + Math.random() * 3;
    particle.color = colors[Math.floor(Math.random() * colors.length)];
    
    return particle;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Optimize canvas settings
    ctx.imageSmoothingEnabled = false;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    let lastTime = 0;
    const targetFPS = 60;
    const frameTime = 1000 / targetFPS;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };

      // Throttle particle creation
      if (particles.current.length < 50 && Math.random() < 0.3) {
        particles.current.push(createParticle(e.clientX, e.clientY));
      }
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameTime) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;

      // Clear canvas with background color for better performance
      ctx.fillStyle = '#fffdf7';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Update and draw particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const particle = particles.current[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const alpha = 1 - (particle.life / particle.maxLife);

        if (alpha > 0) {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Recycle particle
          particlePool.current.push(particles.current.splice(i, 1)[0]);
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createParticle]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ zIndex: 0 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'multiply' }}
      />
      
      {/* Floating decorative elements - reduced count for performance */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-300/20 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        >
          {['🌸', '✨', '💫', '🌟', '💖', '🎊'][Math.floor(Math.random() * 6)]}
        </motion.div>
      ))}

      {/* Simplified ripple effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-24 h-24 rounded-full border border-amber-400/10"
            style={{
              left: '50%',
              top: '50%',
              marginLeft: '-48px',
              marginTop: '-48px',
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.6, 0.1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}