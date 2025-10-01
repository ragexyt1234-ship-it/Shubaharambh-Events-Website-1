import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ScrollReactive3D } from "./ScrollReactive3D";
import { ImageWithFallback } from "./ImageWithFallback";
import { supabase, type Testimonial } from "../lib/supabase";
import { useEffect, useState } from "react";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Array<{
    name: string;
    location: string;
    event: string;
    rating: number;
    review: string;
    image: string;
    emoji: string;
  }>>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        const formattedTestimonials = data.map((t: Testimonial) => ({
          name: t.client_name,
          location: t.client_title,
          event: t.event_type,
          rating: t.rating,
          review: t.testimonial_text,
          image: t.avatar_url || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
          emoji: getEmojiForEventType(t.event_type)
        }));
        setTestimonials(formattedTestimonials);
      } else {
        setTestimonials(getDefaultTestimonials());
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setTestimonials(getDefaultTestimonials());
    } finally {
      setIsLoading(false);
    }
  };

  const getEmojiForEventType = (eventType: string): string => {
    const lower = eventType.toLowerCase();
    if (lower.includes('wedding')) return '💒';
    if (lower.includes('birthday')) return '🎂';
    if (lower.includes('anniversary')) return '💕';
    if (lower.includes('corporate')) return '🏢';
    if (lower.includes('mehendi') || lower.includes('haldi')) return '🎨';
    return '🎉';
  };

  const getDefaultTestimonials = () => [
    {
      name: "Priya & Rajesh Sharma",
      location: "Mumbai, Maharashtra",
      event: "Traditional Wedding Ceremony",
      rating: 5,
      review: "Shubhaarambh Events made our dream wedding come true! From the beautiful mandap decoration to the seamless coordination, everything was perfect. Our guests are still talking about how magical our wedding was. The team's attention to Indian traditions was exceptional.",
      image: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjB3ZWRkaW5nfGVufDF8fHx8MTc1NTA5OTUzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "💒"
    },
    {
      name: "Anita & Vikram Gupta",
      location: "Delhi",
      event: "Grand Reception & Sangam",
      rating: 5,
      review: "Outstanding service! The team handled our 800-guest reception flawlessly. The decorations were breathtaking, and the coordination was perfect. Every detail was managed with such care. Highly recommend for anyone planning a grand Indian celebration!",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb3VwbGUlMjBoYXBweXxlbnwxfHx8fDE3NTUwOTk1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🎉"
    },
    {
      name: "Surbhi & Arjun Patel",
      location: "Jaipur, Rajasthan",
      event: "Mehendi & Haldi Ceremony",
      rating: 5,
      review: "The mehendi and haldi functions were absolutely beautiful! The team created such a vibrant and joyful atmosphere. The traditional decorations and arrangements were exactly what we dreamed of. Professional, creative, and so much fun to work with!",
      image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBoYXBweXxlbnwxfHx8fDE3NTUwOTk1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🎨"
    },
    {
      name: "Kavita Agarwal",
      location: "Pune, Maharashtra",
      event: "60th Birthday Celebration",
      rating: 5,
      review: "What a wonderful experience! They organized my mother's 60th birthday celebration beautifully. The traditional theme, delicious food, and perfect arrangements made it a memorable day for our entire family. Thank you for making it so special!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMGhhcHB5fGVufDF8fHx8MTc1NTA5OTUzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🎂"
    },
    {
      name: "Rohit & Deepika Singh",
      location: "Lucknow, Uttar Pradesh",
      event: "Anniversary Celebration",
      rating: 5,
      review: "Absolutely fantastic! They planned our 25th anniversary celebration with such elegance and grace. Every guest was impressed with the arrangements. The team's creativity and professionalism exceeded our expectations. Truly the best event planners!",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmYW1pbHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTUwOTk1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "💕"
    },
    {
      name: "TechCorp India Ltd.",
      location: "Bangalore, Karnataka",
      event: "Corporate Annual Event",
      rating: 5,
      review: "Professional excellence at its best! Shubhaarambh Events managed our annual corporate event for 500+ employees perfectly. The coordination, entertainment, and overall experience was outstanding. Will definitely work with them again!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBoYXBweXxlbnwxfHx8fDE3NTUwOTk1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      emoji: "🏢"
    }
  ];

  if (isLoading) {
    return (
      <section className="py-20 bg-premium-dark particles-premium relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-premium-dark particles-premium relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
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
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            {['⭐', '✨', '💫', '🌟', '💖', '🎊', '💎', '🔹'][Math.floor(Math.random() * 8)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollReactive3D intensity={0.8} className="text-center mb-16">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4 text-premium-blue text-glow-premium"
              whileHover={{ scale: 1.05 }}
            >
              ⭐ What Our Clients Say
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear the joyful stories from families we've helped create magical moments across India 🇮🇳
            </p>
            
            {/* Enhanced happy stats */}
            <motion.div 
              className="flex justify-center items-center space-x-8 mt-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "😊", label: "Happy Families", value: "1200+" },
                { icon: "⭐", label: "5-Star Reviews", value: "987" },
                { icon: "🏆", label: "Awards Won", value: "47" }
              ].map((stat, index) => (
                <ScrollReactive3D key={index} intensity={0.3}>
                  <motion.div 
                    className="text-center apple-card p-4 hover-lift-premium"
                    whileHover={{ scale: 1.1, y: -5 }}
                    animate={{
                      boxShadow: [
                        "0 8px 32px rgba(0, 0, 0, 0.3)",
                        "0 12px 40px rgba(0, 122, 255, 0.2)",
                        "0 8px 32px rgba(0, 0, 0, 0.3)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity },
                      hover: { duration: 0.2 }
                    }}
                  >
                    <motion.div 
                      className="text-3xl mb-2"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="font-bold text-primary text-xl">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                </ScrollReactive3D>
              ))}
            </motion.div>
          </motion.div>
        </ScrollReactive3D>

        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReactive3D key={index} intensity={0.4} rotateIntensity={0.2}>
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.8, rotateY: -45 }}
                whileInView={{ y: 0, opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="hover-lift-premium h-full"
              >
                <Card className="apple-card overflow-hidden h-full flex flex-col mouse-reactive">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Enhanced quote section */}
                    <motion.div 
                      className="flex justify-between items-start mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Quote className="h-10 w-10 text-primary/60" />
                      </motion.div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: index * 0.1 + i * 0.1,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{ 
                              scale: 1.3,
                              rotate: 360,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Enhanced review text */}
                    <motion.p 
                      className="text-gray-300 mb-6 leading-relaxed flex-1"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      "{testimonial.review}"
                    </motion.p>

                    {/* Enhanced client info */}
                    <motion.div 
                      className="flex items-center space-x-4 mt-auto"
                      whileHover={{ scale: 1.02 }}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                        />
                        <motion.div 
                          className="absolute -top-2 -right-2 text-xl bg-primary/20 rounded-full p-1"
                          animate={{ 
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {testimonial.emoji}
                        </motion.div>
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4 
                          className="font-semibold text-white"
                          whileHover={{ scale: 1.05 }}
                        >
                          {testimonial.name}
                        </motion.h4>
                        <p className="text-sm text-primary">{testimonial.event}</p>
                        <p className="text-xs text-gray-500 flex items-center">
                          📍 {testimonial.location}
                        </p>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReactive3D>
          ))}
        </div>

        {/* Enhanced call to action */}
        <ScrollReactive3D intensity={0.5} className="text-center mt-16">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="apple-card p-8 hover-lift-premium relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              animate={{
                backgroundImage: [
                  "linear-gradient(45deg, rgba(0, 122, 255, 0.05), rgba(94, 92, 230, 0.05))",
                  "linear-gradient(45deg, rgba(94, 92, 230, 0.05), rgba(175, 82, 222, 0.05))",
                  "linear-gradient(45deg, rgba(175, 82, 222, 0.05), rgba(0, 122, 255, 0.05))"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              {/* Floating particles in CTA */}
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1.2, 0.5]
                  }}
                  transition={{
                    duration: 3 + Math.random(),
                    delay: Math.random() * 2,
                    repeat: Infinity
                  }}
                />
              ))}
              
              <motion.h3 
                className="text-3xl font-bold mb-4 text-premium-blue text-glow-premium relative z-10"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(0, 122, 255, 0.5)",
                    "0 0 20px rgba(94, 92, 230, 0.6)",
                    "0 0 10px rgba(0, 122, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🌟 Ready to Create Your Magical Moment?
              </motion.h3>
              <p className="text-gray-300 mb-6 relative z-10">Join hundreds of happy families who trusted us with their special celebrations!</p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.button
                  className="btn-premium px-8 py-3 rounded-full font-semibold relative z-10"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  animate={{
                    boxShadow: [
                      "0 4px 16px rgba(0, 122, 255, 0.3)",
                      "0 8px 32px rgba(0, 122, 255, 0.5)",
                      "0 4px 16px rgba(0, 122, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎊 Start Planning Today
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </ScrollReactive3D>
      </div>
    </section>
  );
}