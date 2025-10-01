import { Button } from "./ui/button";
import { ImageWithFallback } from "./ImageWithFallback";
import { Award, ArrowRight, Play } from "lucide-react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { ScrollReactive3D } from "./ScrollReactive3D";

export function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const constraintsRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Smoothly return to original position
    mouseX.set(0);
    mouseY.set(0);
    setMousePosition({ x: 0, y: 0 });
  };

  const timeline = [
    { year: "2015", event: "Founded Shubhaarambh Events", icon: "🌱" },
    { year: "2017", event: "First Grand Wedding (700+ guests)", icon: "💒" },
    { year: "2019", event: "Expanded to Corporate Events", icon: "🏢" },
    { year: "2021", event: "Digital Wedding Solutions", icon: "💻" },
    { year: "2023", event: "Award-Winning Team", icon: "🏆" },
    { year: "2024", event: "Leading Event Planners in Rajasthan", icon: "👑" }
  ];

  return (
    <section id="about" className="py-20 bg-premium-dark particles-premium relative overflow-hidden">
      {/* Interactive floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            {['✨', '💫', '🌟', '⭐', '💎', '🔹'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <ScrollReactive3D intensity={0.8} rotateIntensity={0.3}>
            <motion.div
              className="no-dark-overlay"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-6 text-clear text-premium-blue"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                ✨ About Shubhaarambh Events
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed text-clear"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Founded in 2015, Shubhaarambh Events has been creating unforgettable Indian wedding 
                experiences across the country. We believe every celebration deserves to be extraordinary, 
                and our dedicated team works tirelessly to bring your dreams to life with traditional 
                Indian elegance and modern flair. 🌸
              </motion.p>
              
              <motion.p 
                className="text-gray-400 mb-8 leading-relaxed text-clear"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                From intimate family gatherings to grand Indian wedding celebrations, we handle every aspect 
                of event planning with precision, creativity, and deep respect for Indian traditions. Our 
                comprehensive services ensure a seamless experience from conception to execution.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="btn-premium"
                      onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      🌟 View Our Work
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-white hover-glow-premium transition-all duration-300"
                      onClick={() => window.open('tel:+918005608699', '_self')}
                    >
                      <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      📞 Call Us Now
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReactive3D>

          {/* Interactive 3D Image Section - Fixed hover behavior */}
          <ScrollReactive3D intensity={1.2} rotateIntensity={0.4}>
            <motion.div 
              ref={constraintsRef}
              className="relative no-dark-overlay"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                perspective: 1000,
              }}
            >
              <motion.div
                className="relative no-dark-overlay"
                style={{
                  rotateX: isHovering ? rotateX : 0,
                  rotateY: isHovering ? rotateY : 0,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                animate={{
                  rotateX: isHovering ? undefined : 0,
                  rotateY: isHovering ? undefined : 0,
                  scale: isHovering ? undefined : 1
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut"
                }}
              >
                <div className="apple-card overflow-hidden no-dark-overlay">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1645856051472-1046636f6c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwc2FuZ2FtJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU1MDk5NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Indian wedding celebration team"
                    className="w-full h-96 object-cover"
                  />
                </div>
                
                {/* Floating award card */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 glass-premium p-6 rounded-xl shadow-2xl max-w-xs border-2 border-white/10"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.0, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  drag
                  dragConstraints={constraintsRef}
                  dragElastic={0.1}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-accent p-3 rounded-full"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Award className="h-6 w-6 text-white animate-glow-premium" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-white text-clear">🏆 Award Winning</p>
                      <p className="text-sm text-gray-300 text-clear">Indian Event Planning Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </ScrollReactive3D>
        </div>

        {/* Interactive Timeline - Clear text */}
        <ScrollReactive3D intensity={0.6} className="mb-20">
          <motion.div
            className="no-dark-overlay"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 text-clear text-premium-blue">
              🚀 Our Crazy Journey
            </h3>
            <div className="relative">
              {/* Enhanced animated timeline line */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 122, 255, 0.5)",
                    "0 0 40px rgba(94, 92, 230, 0.8)", 
                    "0 0 60px rgba(175, 82, 222, 0.6)",
                    "0 0 20px rgba(0, 122, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {timeline.map((item, index) => (
                <ScrollReactive3D key={index} intensity={0.4} className="mb-12">
                  <motion.div
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotate: index % 2 === 0 ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div 
                        className="apple-card p-6 hover-lift-premium relative overflow-hidden no-dark-overlay"
                        whileHover={{ 
                          scale: 1.05, 
                          y: -10,
                          rotateZ: index % 2 === 0 ? 2 : -2,
                        }}
                      >
                        {/* Subtle light gradient instead of dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-primary/5 to-accent/5 opacity-50" />
                        
                        <motion.div 
                          className="text-4xl mb-3 relative z-10"
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h4 
                          className="font-bold text-primary text-xl mb-2 relative z-10 text-clear"
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.year}
                        </motion.h4>
                        <p className="text-gray-200 relative z-10 font-medium text-clear">
                          {item.event}
                        </p>
                        
                        {/* Enhanced floating particles */}
                        {Array.from({ length: 3 }, (_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/60 rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              opacity: [0.3, 1, 0.3],
                              scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 2 + Math.random(),
                              delay: Math.random() * 2,
                              repeat: Infinity
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    
                    {/* Enhanced animated center dot */}
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-primary via-accent to-primary rounded-full border-4 border-white/20 shadow-2xl z-20 relative"
                      whileHover={{ scale: 2 }}
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          "0 0 20px rgba(0, 122, 255, 0.5)",
                          "0 0 40px rgba(94, 92, 230, 0.8)",
                          "0 0 60px rgba(175, 82, 222, 0.6)",
                          "0 0 20px rgba(0, 122, 255, 0.5)"
                        ]
                      }}
                      transition={{ 
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Enhanced orbiting elements */}
                      {Array.from({ length: 2 }, (_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-white rounded-full"
                          style={{
                            left: "50%",
                            top: "50%",
                            transformOrigin: "0 0"
                          }}
                          animate={{
                            rotate: [0, 360],
                            x: [0, 20, 0, -20, 0],
                            y: [0, -20, 0, 20, 0]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.div>
                    <div className="w-1/2"></div>
                  </motion.div>
                </ScrollReactive3D>
              ))}
            </div>
          </motion.div>
        </ScrollReactive3D>
      </div>
    </section>
  );
}