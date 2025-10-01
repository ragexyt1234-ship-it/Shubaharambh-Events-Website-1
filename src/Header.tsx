import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { motion } from "motion/react";
import logoImage from "figma:asset/652587b696db557211a651ffd542fa3b1ea306a9.png";

export function Header() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main navigation */}
      <div className="flex h-28 items-center px-4">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer apple-card px-4 py-2 hover-lift-premium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            onClick={() => handleNavClick("#home")}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 122, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={logoImage}
              alt="Shubhaarambh Events Logo"
              className="h-20 w-auto animate-float-3d"
              style={{
                filter: "brightness(1.1) contrast(1.2) saturate(1.3) drop-shadow(0 4px 12px rgba(0, 122, 255, 0.3))",
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) contrast(1.3) saturate(1.4) drop-shadow(0 6px 20px rgba(0, 122, 255, 0.5))",
                rotateY: 10
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              className="text-xl font-semibold animate-float-3d hidden sm:block text-premium-blue"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Events & Celebrations
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group text-lg glass-premium px-4 py-2 rounded-lg border border-transparent hover:border-white/20"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 8px 25px rgba(0, 122, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="btn-premium text-lg px-6 py-3 apple-card"
                onClick={() => handleNavClick("#contact")}
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  💍
                </motion.span>
                Get Instant Quote
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="hover-glow-premium apple-card">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="bg-premium-dark particles-premium border-white/10">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-primary hover:text-accent transition-colors py-3 text-left font-medium apple-card p-3"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="mt-6 w-full btn-premium"
                    onClick={() => handleNavClick("#contact")}
                  >
                    💍 Get Quote Now
                  </Button>
                </motion.div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}