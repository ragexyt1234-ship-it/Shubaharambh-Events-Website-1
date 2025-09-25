import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Briefcase, Users, Camera, Music, Utensils, Calendar, Clock, Star } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { ScrollReactive3D } from "./ScrollReactive3D";

export function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (serviceName: string) => {
    toast.success(`🎉 Booking inquiry sent for ${serviceName}! Our team will contact you within 2 hours to discuss your magical event! ✨`);
    // Scroll to contact section
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetQuote = (serviceName: string) => {
    toast.success(`💫 Quote request for ${serviceName} received! Check your email in 30 minutes for our detailed proposal! 📧`);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Indian Wedding Planning",
      description: "Complete traditional Indian wedding planning from mehendi to reception, creating your dream celebration.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1589463349208-95817c91f971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTUwOTk1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mandap Design", "Traditional Decorations", "Catering Services", "Photography & Videography", "Guest Management"],
      gradient: "from-pink-500 to-rose-500",
      price: "₹2-25 Lakhs",
      duration: "3-7 Days",
      rating: 4.9
    },
    {
      title: "Corporate Events",
      description: "Professional corporate event management for conferences, product launches, and team building.",
      icon: Briefcase,
      image: "https://images.unsplash.com/photo-1754373695753-1069438691f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc1NTA5MDAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Conference Planning", "Product Launches", "Team Building Events", "Awards Ceremonies", "Corporate Parties"],
      gradient: "from-purple-500 to-indigo-500",
      price: "₹50K-5 Lakhs",
      duration: "1-3 Days",
      rating: 4.8
    },
    {
      title: "Celebration Events",
      description: "Mehendi, Haldi, birthday parties, and family celebrations made memorable and special.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1619734089700-842e56497353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVobmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU1MDk5NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mehendi Ceremonies", "Haldi Functions", "Birthday Parties", "Anniversary Celebrations", "Family Reunions"],
      gradient: "from-orange-500 to-yellow-500",
      price: "₹25K-2 Lakhs",
      duration: "1-2 Days",
      rating: 4.9
    }
  ];

  const additionalServices = [
    { name: "Professional Photography", icon: Camera, gradient: "from-emerald-500 to-green-600", emoji: "📸", price: "₹25K-1.5L" },
    { name: "Live Music & DJ", icon: Music, gradient: "from-purple-500 to-indigo-600", emoji: "🎵", price: "₹15K-75K" },
    { name: "Authentic Indian Catering", icon: Utensils, gradient: "from-orange-500 to-red-500", emoji: "🍛", price: "₹300-1200/plate" }
  ];

  return (
    <section id="services" className="py-20 bg-premium-dark particles-premium relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReactive3D intensity={0.8} className="text-center mb-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4 text-premium-blue text-glow-premium text-luxury-heading animate-text-breathe text-hover-glow"
              whileHover={{ scale: 1.05 }}
            >
              ✨ Our Magical Services
            </motion.h2>
            <p className="text-xl text-crystal-clear max-w-3xl mx-auto animate-smooth-bounce">
              We offer comprehensive Indian event management services to make your special occasions absolutely unforgettable 🎊
            </p>
            
            {/* Service Stats */}
            <motion.div 
              className="flex justify-center items-center space-x-8 mt-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "🎯", label: "500+ Events", value: "Completed" },
                { icon: "⭐", label: "4.9/5", value: "Rating" },
                { icon: "🚀", label: "24/7", value: "Support" }
              ].map((stat, index) => (
                <ScrollReactive3D key={index} intensity={0.3}>
                  <motion.div 
                    className="text-center hover-glow-premium p-3 rounded-lg glass-premium border-2 border-white/10"
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="font-bold text-primary">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.value}</div>
                  </motion.div>
                </ScrollReactive3D>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReactive3D>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReactive3D key={index} intensity={0.6} rotateIntensity={0.3}>
                <motion.div
                  initial={{ y: 80, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="hover-lift-premium h-full"
                >
                  <Card className="apple-card overflow-hidden h-full flex flex-col hover-tilt hover-rainbow animate-card-entrance">
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <motion.div 
                          className={`bg-gradient-to-r ${service.gradient} p-3 rounded-full shadow-lg animate-glow-premium`}
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6 text-white relative z-10" />
                        </motion.div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <motion.div 
                          className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-bold text-gray-900">{service.rating}</span>
                        </motion.div>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`} />
                      
                      {/* Hover overlay with quick stats */}
                      <motion.div 
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="text-white text-center space-y-2">
                          <div className="flex items-center justify-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">Starting {service.price}</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-bold text-premium-blue text-luxury text-hover-glow">{service.title}</CardTitle>
                      <CardDescription className="text-crystal-clear">{service.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            viewport={{ once: true }}
                          >
                            <Badge 
                              variant="secondary" 
                              className={`mr-2 mb-2 bg-gradient-to-r ${service.gradient} text-white hover:scale-105 transition-transform cursor-default border-0`}
                            >
                              {feature}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>

                      {/* Service Actions */}
                      <div className="space-y-3 mt-auto">
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </span>
                          <span className="font-bold text-primary">{service.price}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="hover-glow-premium border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 w-full"
                              onClick={() => handleGetQuote(service.title)}
                            >
                              💫 Get Quote
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              size="sm"
                              className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 w-full btn-premium`}
                              onClick={() => handleBookNow(service.title)}
                            >
                              🎊 Book Now
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReactive3D>
            );
          })}
        </div>

        {/* Additional Services */}
        <ScrollReactive3D intensity={0.4} className="mb-16">
          <motion.div 
            className="glass-premium rounded-2xl p-8 shadow-xl border-2 border-white/10 hover-glow-premium"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-center text-premium-blue text-glow-premium">
              🌟 Additional Services & Add-Ons
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReactive3D key={index} intensity={0.3}>
                    <motion.div 
                      className="flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group hover-lift-premium"
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className={`bg-gradient-to-r ${service.gradient} p-6 rounded-full shadow-lg group-hover:shadow-xl animate-glow-premium`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-center">
                        <h4 className="font-semibold text-lg text-gray-200 mb-2">
                          {service.emoji} {service.name}
                        </h4>
                        <p className="text-sm text-primary font-medium mb-3">{service.price}</p>
                        <div className="grid grid-cols-2 gap-2">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                          >
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-xs hover-glow-premium w-full text-gray-300 hover:text-white border border-white/20"
                              onClick={() => handleGetQuote(service.name)}
                            >
                              Quote
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                          >
                            <Button 
                              size="sm"
                              className={`text-xs bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 w-full`}
                              onClick={() => handleBookNow(service.name)}
                            >
                              Add
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </ScrollReactive3D>
                );
              })}
            </div>
          </motion.div>
        </ScrollReactive3D>

        {/* Call to Action - Enhanced Visibility */}
        <ScrollReactive3D intensity={0.5}>
          <motion.div 
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="apple-card p-8 relative overflow-hidden">
              {/* Enhanced background for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white text-glow-premium text-shadow-premium">
                  🎯 Ready to Plan Your Dream Event?
                </h3>
                <p className="mb-6 text-gray-100 text-lg font-medium text-shadow-premium">
                  Get a personalized consultation and detailed quote within 2 hours!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="btn-premium text-white font-semibold"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      📞 Free Consultation Call
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="border-2 border-green-400 text-white bg-green-600 hover:bg-green-500 hover-glow-premium font-semibold"
                      onClick={() => window.open('https://wa.me/918005608699?text=Hi! I want to book an event with Shubhaarambh Events 🎊', '_blank')}
                    >
                      💬 WhatsApp Us Now
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReactive3D>
      </div>
    </section>
  );
}