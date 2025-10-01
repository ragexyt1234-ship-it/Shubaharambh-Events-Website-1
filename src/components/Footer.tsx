import { Button } from "./ui/button";
import { Heart, Phone, Mail, MapPin, Clock, ArrowUp, Instagram, Facebook, Twitter, Youtube, Award, Users, Star, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { ScrollReactive3D } from "./ScrollReactive3D";
import { ImageWithFallback } from "./ImageWithFallback";

export function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSocialClick = (platform: string) => {
    toast.success(`🌟 Redirecting to our ${platform} page! Follow us for daily wedding inspiration! ✨`);
    // In a real app, these would be actual social media links
  };

  const handleQuickLink = (section: string) => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Indian Weddings", emoji: "💒" },
    { name: "Corporate Events", emoji: "🏢" },
    { name: "Mehendi & Haldi", emoji: "🎨" },
    { name: "Photography", emoji: "📸" },
    { name: "Catering", emoji: "🍛" }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@shubhaarambhevents", color: "from-pink-500 to-purple-600" },
    { icon: Facebook, name: "Facebook", handle: "ShubhaarambhEvents", color: "from-blue-600 to-blue-800" },
    { icon: Twitter, name: "Twitter", handle: "@shubhaaramb_events", color: "from-sky-400 to-blue-600" },
    { icon: Youtube, name: "YouTube", handle: "Shubhaarambh Events", color: "from-red-500 to-red-700" }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Grand Indian Wedding",
      text: "Perfect planning! Every detail was magical ✨",
      rating: 5,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc1NTA5OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Rajesh Industries",
      event: "Corporate Event",
      text: "Professional service that exceeded expectations! 🏆",
      rating: 5,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudHxlbnwxfHx8fDE3NTUwOTAwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Kavya & Family",
      event: "Mehendi Celebration",
      text: "Beautiful decorations and flawless execution! 🎨",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVobmRpfGVufDF8fHx8MTc1NTA5OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const awards = [
    { title: "Best Wedding Planner 2024", organization: "Indian Wedding Awards", icon: "🏆" },
    { title: "Excellence in Event Management", organization: "Rajasthan Business Excellence", icon: "⭐" },
    { title: "Customer Choice Award", organization: "WeddingWire India", icon: "💎" }
  ];

  return (
    <footer className="bg-premium-dark particles-premium relative overflow-hidden">
      {/* Floating 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <div className="text-primary/20 text-2xl">
              {['💫', '🌟', '✨', '💎', '🔹', '⭐'][Math.floor(Math.random() * 6)]}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll to top button */}
      <ScrollReactive3D intensity={0.8} className="absolute top-4 right-4 z-20">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              size="icon"
              onClick={handleScrollToTop}
              className="apple-card bg-primary/20 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-primary/40 animate-glow-premium"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </ScrollReactive3D>

      <div className="relative z-10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Hero Section with 3D Elements */}
          <ScrollReactive3D intensity={1.0} className="text-center mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-premium-blue text-glow-premium">
                🌸 Thank You for Choosing Us
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're honored to be part of your special moments. Let's create magical memories together! ✨
              </p>
            </motion.div>
          </ScrollReactive3D>

          {/* Client Testimonials with 3D Cards */}
          <ScrollReactive3D intensity={0.6} className="mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-10 text-premium-blue text-glow-premium">
                💕 What Our Clients Say
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <ScrollReactive3D key={index} intensity={0.4} rotateIntensity={0.2}>
                    <motion.div
                      className="apple-card p-6 hover-lift-premium"
                      initial={{ y: 80, opacity: 0, scale: 0.9 }}
                      whileInView={{ y: 0, opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                            <Star className="h-3 w-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.event}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">"{testimonial.text}"</p>
                      <div className="flex space-x-1">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReactive3D>
                ))}
              </div>
            </motion.div>
          </ScrollReactive3D>

          {/* Awards & Recognition with 3D Elements */}
          <ScrollReactive3D intensity={0.5} className="mb-16">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-center mb-10 text-premium-blue text-glow-premium">
                🏆 Awards & Recognition
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <ScrollReactive3D key={index} intensity={0.3} rotateIntensity={0.1}>
                    <motion.div
                      className="apple-card p-6 text-center hover-lift-premium"
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="text-4xl mb-4"
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
                        {award.icon}
                      </motion.div>
                      <h4 className="font-semibold text-white mb-2">{award.title}</h4>
                      <p className="text-sm text-gray-400">{award.organization}</p>
                    </motion.div>
                  </ScrollReactive3D>
                ))}
              </div>
            </motion.div>
          </ScrollReactive3D>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Company Info */}
            <ScrollReactive3D intensity={0.4}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-premium-blue text-glow-premium"
                  whileHover={{ scale: 1.05 }}
                >
                  🌸 Shubhaarambh Events
                </motion.h3>
                <p className="mb-6 text-gray-300 leading-relaxed">
                  Creating magical Indian wedding moments since 2015. We bring your dreams to life with 
                  traditional elegance and modern flair. ✨
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  {[
                    { icon: Phone, text: "+91 80056 08699", action: () => window.open('tel:+918005608699', '_self') },
                    { icon: Mail, text: "hello@shubhaarambhevents.com", action: () => window.open('mailto:hello@shubhaarambhevents.com', '_self') },
                    { icon: MapPin, text: "123 Events Plaza, Bhawani Singh Road, Jaipur, Rajasthan - 302015", action: () => window.open('https://maps.google.com/?q=123+Events+Plaza+Bhawani+Singh+Road+Jaipur+Rajasthan+302015', '_blank') },
                    { icon: Clock, text: "24/7 Event Support", action: () => handleQuickLink('#contact') }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 cursor-pointer glass-premium p-3 rounded-lg transition-all duration-300 border border-white/10"
                        onClick={item.action}
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="h-4 w-4 text-primary animate-glow-premium" />
                        <span className="text-sm text-gray-300">{item.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </ScrollReactive3D>

            {/* Quick Links */}
            <ScrollReactive3D intensity={0.3}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-premium-blue text-glow-premium">🔗 Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li 
                      key={index}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <button
                        onClick={() => handleQuickLink(link.href)}
                        className="text-gray-300 hover:text-white transition-colors duration-300 hover-glow-premium p-2 rounded border border-transparent hover:border-white/20"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReactive3D>

            {/* Services */}
            <ScrollReactive3D intensity={0.3}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-premium-blue text-glow-premium">🎊 Our Services</h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2 cursor-pointer glass-premium p-2 rounded transition-all duration-300 border border-white/10"
                      whileHover={{ scale: 1.05, x: 5 }}
                      onClick={() => handleQuickLink('#services')}
                    >
                      <span className="text-lg">{service.emoji}</span>
                      <span className="text-gray-300 hover:text-white transition-colors">
                        {service.name}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReactive3D>

            {/* Social Media & Newsletter */}
            <ScrollReactive3D intensity={0.4}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6 text-premium-blue text-glow-premium">💕 Connect With Us</h4>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <ScrollReactive3D key={index} intensity={0.2}>
                        <motion.button
                          onClick={() => handleSocialClick(social.name)}
                          className={`bg-gradient-to-r ${social.color} p-3 rounded-lg flex items-center justify-center hover-glow-premium transition-all duration-300 apple-card`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.button>
                      </ScrollReactive3D>
                    );
                  })}
                </div>

                <p className="text-sm text-gray-400 mb-4">Follow us for daily wedding inspiration! 📸✨</p>
                
                {/* Quick Actions */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      size="sm"
                      className="w-full btn-premium"
                      onClick={() => window.open('https://wa.me/918005608699?text=Hi! I want to know about your wedding packages 💒', '_blank')}
                    >
                      💬 WhatsApp Us
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-primary"
                      onClick={() => handleQuickLink('#contact')}
                    >
                      📞 Book Free Call
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReactive3D>
          </div>

          {/* Achievement Stats */}
          <ScrollReactive3D intensity={0.6}>
            <motion.div
              className="border-t border-white/20 pt-8 mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: "💒", value: "700+", label: "Weddings Planned" },
                  { icon: "⭐", value: "4.9", label: "Average Rating" },
                  { icon: "🏆", value: "47+", label: "Awards Won" },
                  { icon: "❤️", value: "97%", label: "Happy Clients" }
                ].map((stat, index) => (
                  <ScrollReactive3D key={index} intensity={0.3} rotateIntensity={0.1}>
                    <motion.div
                      className="apple-card p-4 hover-glow-premium"
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div 
                        className="text-3xl mb-2"
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 3 + index,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div className="text-2xl font-bold text-premium-blue text-glow-premium">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  </ScrollReactive3D>
                ))}
              </div>
            </motion.div>
          </ScrollReactive3D>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/20 pt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-pink-400 animate-glow-premium" />
                <span className="text-sm text-gray-400">
                  Made with love in India © {currentYear} Shubhaarambh Events. All rights reserved.
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button 
                  className="text-gray-400 hover:text-white transition-opacity"
                  onClick={() => toast.success('Privacy Policy would open here! 📋')}
                >
                  Privacy Policy
                </button>
                <button 
                  className="text-gray-400 hover:text-white transition-opacity"
                  onClick={() => toast.success('Terms of Service would open here! 📜')}
                >
                  Terms of Service
                </button>
                <button 
                  className="text-gray-400 hover:text-white transition-opacity"
                  onClick={() => handleQuickLink('#contact')}
                >
                  Support
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}