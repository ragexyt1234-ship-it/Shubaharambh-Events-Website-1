import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { MouseReactiveBackground } from "./components/MouseReactiveBackground";
import { SplashScreen } from "./components/SplashScreen";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll progress for Apple-style indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Add scroll-based 3D effects to body
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.1;
      
      // Update CSS custom properties for 3D effects
      document.documentElement.style.setProperty('--scroll-offset', `${rate}px`);
      document.documentElement.style.setProperty('--scroll-progress', `${scrollYProgress.get()}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollYProgress]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen relative bg-premium-dark">
      <AnimatePresence mode="wait">
        {showSplash && isLoaded && (
          <SplashScreen key="splash" onComplete={handleSplashComplete} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <>
          {/* Apple-style scroll progress indicator */}
          <motion.div
            className="scroll-progress"
            style={{ scaleX }}
          />
          
          {/* Background effects only - no custom cursor */}
          <MouseReactiveBackground />
          
          <div className="relative z-10">
            <Header />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
          <Toaster />
        </>
      )}
    </div>
  );
}