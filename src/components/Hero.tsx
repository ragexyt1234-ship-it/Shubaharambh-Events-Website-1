import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Star, Users, Calendar, Award } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1601121868898-4581104b29de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMGNlcmVtb255JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU1MDk5NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Beautiful Indian wedding ceremony"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/40 to-pink-900/60" />
      </motion.div>

      {/* Natural Floating Decorative Elements */}
      <div className="absolute inset-0 z-5">
        <motion.div
          className="absolute top-20 left-10 text-pink-300 text-4xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -8, 0],
            x: [0, 3, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 20px rgba(236, 72, 153, 0.6)"
          }}
        >
          🌸
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 text-yellow-300 text-3xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -12, 0],
            x: [0, -5, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 2,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 25px rgba(253, 224, 71, 0.8)"
          }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute bottom-40 left-20 text-pink-300 text-5xl filter drop-shadow-xl"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 4, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 4,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 30px rgba(236, 72, 153, 0.7)"
          }}
        >
          💐
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-yellow-300 text-4xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -15, 0],
            x: [0, -3, 0],
            rotate: [0, 2, -2, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 1,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 20px rgba(253, 224, 71, 0.6)"
          }}
        >
          🎊
        </motion.div>
        
        {/* Additional floating elements with natural movement */}
        <motion.div
          className="absolute top-60 left-1/4 text-purple-300 text-3xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -6, 0],
            x: [0, 6, 0],
            rotate: [0, 1.5, -1.5, 0]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 6,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 25px rgba(147, 51, 234, 0.7)"
          }}
        >
          💫
        </motion.div>
        <motion.div
          className="absolute top-32 right-1/3 text-orange-300 text-2xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -9, 0],
            x: [0, -4, 0],
            rotate: [0, 2.5, -2.5, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 3,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 20px rgba(251, 146, 60, 0.8)"
          }}
        >
          🌟
        </motion.div>
        
        {/* New magical floating elements */}
        <motion.div
          className="absolute top-1/2 left-1/6 text-cyan-300 text-3xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -11, 0],
            x: [0, 5, 0],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 7,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 25px rgba(34, 211, 238, 0.7)"
          }}
        >
          🎭
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 text-green-300 text-4xl filter drop-shadow-lg"
          animate={{ 
            y: [0, -7, 0],
            x: [0, -6, 0],
            rotate: [0, 1.5, -1.5, 0]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: [0.4, 0, 0.6, 1],
            delay: 5,
            repeatType: "mirror"
          }}
          style={{
            textShadow: "0 0 20px rgba(34, 197, 94, 0.8)"
          }}
        >
          🎪
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-4xl text-white">
          <motion.h1 
            className="text-5xl md:text-8xl font-bold mb-6 text-luxury-heading text-hover-glow"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Creating <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 animate-gradient-shift text-floating-glow"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Magical
            </motion.span> Moments
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-crystal-clear animate-text-breathe"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            From intimate gatherings to grand celebrations, we bring your vision to life with 
            exceptional Indian event planning and flawless execution. ✨
          </motion.p>
          
          <motion.div
            className="text-lg md:text-xl mb-8 text-crystal-clear font-semibold animate-smooth-bounce text-hover-glow"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            🌟 Ready to plan your dream events? Let's make magic together! 🌟
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.div 
              className="hover-magnetic"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-500 hover:to-yellow-400 text-white shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 text-lg px-8 py-4 hover-rainbow animate-magical-pulse"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🎊 Plan Your Dream Event
              </Button>
            </motion.div>
            <motion.div 
              className="hover-magnetic"
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-pink-300 text-crystal-clear hover:bg-pink-300/20 hover:text-white backdrop-blur-sm bg-white/10 text-lg px-8 py-4 hover-glow-premium hover-rainbow"
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                💫 View Our Magic
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { icon: Users, count: "500+", label: "Happy Couples", color: "text-pink-400" },
              { icon: Calendar, count: "800+", label: "Events Planned", color: "text-yellow-400" },
              { icon: Award, count: "8+", label: "Years Experience", color: "text-purple-400" },
              { icon: Star, count: "4.9", label: "Average Rating", color: "text-orange-400" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  className="text-center p-4 backdrop-blur-sm bg-white/10 rounded-xl border border-pink-200/20 hover-tilt hover-glow-premium animate-card-entrance"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ 
                    delay: 1.6 + index * 0.2, 
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                    rotateY: 5,
                    rotateX: 5
                  }}
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`h-8 w-8 ${stat.color} mr-2 animate-glow-premium`} />
                    </motion.div>
                    <span className="text-3xl font-bold text-crystal-clear text-hover-glow">{stat.count}</span>
                  </div>
                  <p className="text-sm text-crystal-clear">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-pink-200">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-pink-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}