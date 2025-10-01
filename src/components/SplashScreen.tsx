import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logoImage from "../assets/logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        const newProgress = prev + 1.5;
        
        // Phase transitions for dynamic content
        if (newProgress > 25 && currentPhase === 0) setCurrentPhase(1);
        if (newProgress > 50 && currentPhase === 1) setCurrentPhase(2);
        if (newProgress > 75 && currentPhase === 2) setCurrentPhase(3);
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete, currentPhase]);

  const phases = [
    { text: "Initializing Magic", emoji: "✨", color: "from-blue-400 to-purple-500" },
    { text: "Loading Dreams", emoji: "💫", color: "from-purple-500 to-pink-500" },
    { text: "Preparing Excellence", emoji: "🌟", color: "from-pink-500 to-orange-500" },
    { text: "Almost Ready", emoji: "🎊", color: "from-orange-500 to-yellow-500" }
  ];

  const currentPhaseData = phases[currentPhase] || phases[0];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(10px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Dark gradient background for logo visibility */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)",
            "linear-gradient(135deg, #16213e 0%, #0f3460 50%, #533483 100%)",
            "linear-gradient(135deg, #533483 0%, #16213e 50%, #000000 100%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated mesh gradient overlay */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 122, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(94, 92, 230, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(175, 82, 222, 0.2) 0%, transparent 50%)
          `
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Spectacular floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 40 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 0.8, 1.2, 0],
              rotate: [0, 180, 360, 540, 720],
              opacity: [0, 0.8, 1, 0.6, 0],
              y: [0, -100, -200, -300, -400],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeOut"
            }}
          >
            <div className={`text-3xl bg-gradient-to-r ${currentPhaseData.color} bg-clip-text text-transparent`}>
              {['💎', '✨', '🌟', '💫', '⭐', '🔹', '💠', '🌠'][Math.floor(Math.random() * 8)]}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main content container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
        
        {/* Enhanced logo container with better contrast */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -360, y: 100 }}
          animate={{ scale: 1, rotate: 0, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
        >
          {/* Multiple glow layers for depth */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `conic-gradient(from 0deg, 
                rgba(0, 122, 255, 0.6), 
                rgba(94, 92, 230, 0.6), 
                rgba(175, 82, 222, 0.6), 
                rgba(0, 122, 255, 0.6)
              )`,
              filter: "blur(40px)"
            }}
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.8, 1.4, 1.6, 1]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Secondary rotating glow */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: `conic-gradient(from 180deg, 
                rgba(255, 0, 150, 0.4), 
                rgba(0, 255, 255, 0.4), 
                rgba(255, 255, 0, 0.4), 
                rgba(255, 0, 150, 0.4)
              )`,
              filter: "blur(60px)"
            }}
            animate={{ 
              rotate: [360, 0],
              scale: [1.2, 2, 1.8, 1.5, 1.2]
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          
          {/* Dark logo container with high contrast for visibility */}
          <motion.div
            className="relative z-10 w-48 h-48 rounded-full flex items-center justify-center shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(15, 52, 96, 0.95) 100%)",
              border: "4px solid rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(10px)"
            }}
            animate={{ 
              boxShadow: [
                "0 0 40px rgba(0, 122, 255, 0.5)",
                "0 0 80px rgba(94, 92, 230, 0.8)",
                "0 0 120px rgba(175, 82, 222, 0.6)",
                "0 0 40px rgba(0, 122, 255, 0.5)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <motion.img
              src={logoImage}
              alt="Shubhaarambh Events"
              className="w-36 h-36 object-contain"
              style={{
                filter: "brightness(1.3) contrast(1.4) saturate(1.2) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
              }}
              animate={{ 
                scale: [1, 1.05, 1],
                filter: [
                  "brightness(1.3) contrast(1.4) saturate(1.2) drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
                  "brightness(1.4) contrast(1.5) saturate(1.3) drop-shadow(0 6px 20px rgba(0,122,255,0.4))",
                  "brightness(1.3) contrast(1.4) saturate(1.2) drop-shadow(0 4px 12px rgba(0,0,0,0.5))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Orbiting elements with trails */}
          {Array.from({ length: 6 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                background: `linear-gradient(45deg, 
                  rgba(0, 122, 255, 0.8), 
                  rgba(94, 92, 230, 0.8)
                )`,
                transformOrigin: `${80 + i * 15}px center`,
                boxShadow: "0 0 20px rgba(0, 122, 255, 0.6)"
              }}
              animate={{
                rotate: [0, 360],
                scale: [0.5, 1.2, 0.8, 1],
                opacity: [0.6, 1, 0.8, 1]
              }}
              transition={{
                rotate: { duration: 4 + i * 0.5, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
              }}
            />
          ))}
        </motion.div>

        {/* Enhanced company name with better visibility */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 text-white"
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 122, 255, 0.3)"
            }}
            animate={{
              textShadow: [
                "0 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 122, 255, 0.3)",
                "0 4px 8px rgba(0, 0, 0, 0.8), 0 0 40px rgba(94, 92, 230, 0.5)",
                "0 4px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 122, 255, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Shubhaarambh Events
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-white/90 font-semibold"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
            }}
            animate={{
              opacity: [0.7, 1, 0.7],
              y: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨ Creating Premium Experiences ✨
          </motion.p>
        </motion.div>

        {/* Dynamic tagline with phase-based content */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-4 text-white/90">
            <motion.span
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl"
            >
              {currentPhaseData.emoji}
            </motion.span>
            <motion.span 
              className="text-xl md:text-2xl font-semibold"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
              }}
              key={currentPhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentPhaseData.text}
            </motion.span>
            <motion.span
              animate={{ 
                rotate: [0, -360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-4xl"
            >
              💎
            </motion.span>
          </div>
        </motion.div>

        {/* Spectacular progress bar */}
        <motion.div
          className="relative w-96 h-4 rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
            border: "2px solid rgba(255,255,255,0.3)"
          }}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 384 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              background: `linear-gradient(90deg, ${currentPhaseData.color.replace('from-', '').replace('to-', ', ')})`,
              boxShadow: `0 0 20px ${currentPhaseData.color.includes('blue') ? 'rgba(0, 122, 255, 0.6)' : 'rgba(255, 255, 255, 0.4)'}`
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced loading text with percentage */}
        <motion.div
          className="mt-8 text-white/90 font-semibold flex flex-col items-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
        >
          <motion.span
            className="text-2xl"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)"
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {Math.round(progress)}%
          </motion.span>
          <motion.span
            className="text-lg text-white/80"
            style={{
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)"
            }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Preparing your magical experience...
          </motion.span>
        </motion.div>
      </div>

      {/* Enhanced corner decorations */}
      {[
        { pos: "top-10 left-10", delay: 0.5, emoji: "🌟" },
        { pos: "top-10 right-10", delay: 0.7, emoji: "💎" },
        { pos: "bottom-10 left-10", delay: 0.9, emoji: "✨" },
        { pos: "bottom-10 right-10", delay: 1.1, emoji: "💫" }
      ].map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.pos} text-6xl`}
          initial={{ scale: 0, rotate: -360, opacity: 0 }}
          animate={{ 
            scale: 1, 
            rotate: 0, 
            opacity: 1,
            y: [0, -10, 0],
            rotateZ: [0, 360]
          }}
          transition={{ 
            scale: { delay: item.delay, type: "spring", stiffness: 200 },
            rotate: { delay: item.delay, type: "spring", stiffness: 200 },
            opacity: { delay: item.delay, duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotateZ: { duration: 8, repeat: Infinity, ease: "linear", delay: item.delay }
          }}
          style={{
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
            textShadow: "0 0 20px rgba(255,255,255,0.3)"
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </motion.div>
  );
}