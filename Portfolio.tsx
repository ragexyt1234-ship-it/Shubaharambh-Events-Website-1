import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner@2.0.3";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Royal Rajasthani Wedding",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1601121868898-4581104b29de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkZSUyMGNlcmVtb255JTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU1MDk5NTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "A grand traditional Rajasthani wedding with 500 guests",
      location: "Mumbai",
      emoji: "👑"
    },
    {
      id: 2,
      title: "Elegant Mandap Ceremony",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1589463349208-95817c91f971?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWFuZGFwJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTUwOTk1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Beautiful mandap with traditional marigold decorations",
      location: "Delhi",
      emoji: "🌼"
    },
    {
      id: 3,
      title: "Corporate Product Launch",
      category: "corporate",
      image: "https://images.unsplash.com/photo-1754373695753-1069438691f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc1NTA5MDAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Tech company product launch for 200 attendees",
      location: "Bangalore",
      emoji: "💼"
    },
    {
      id: 4,
      title: "Vibrant Mehendi Ceremony",
      category: "social",
      image: "https://images.unsplash.com/photo-1619734089700-842e56497353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwbWVobmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzU1MDk5NTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Colorful mehendi celebration with traditional music",
      location: "Pune",
      emoji: "🎨"
    },
    {
      id: 5,
      title: "Golden Haldi Function",
      category: "social",
      image: "https://images.unsplash.com/photo-1670774544351-96d2464fd873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwaGFsZGklMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTUwOTk1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Joyful haldi ceremony with family traditions",
      location: "Jaipur",
      emoji: "💛"
    },
    {
      id: 6,
      title: "Luxurious Reception Decor",
      category: "wedding",
      image: "https://images.unsplash.com/photo-1668432747162-5e7ded79e498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTUwOTk1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Stunning reception with modern Indian aesthetics",
      location: "Goa",
      emoji: "✨"
    }
  ];

  const filters = [
    { key: "all", label: "All Events", gradient: "from-purple-500 to-pink-500", emoji: "🎊" },
    { key: "wedding", label: "Weddings", gradient: "from-pink-500 to-rose-500", emoji: "💒" },
    { key: "corporate", label: "Corporate", gradient: "from-blue-500 to-indigo-500", emoji: "🏢" },
    { key: "social", label: "Celebrations", gradient: "from-orange-500 to-yellow-500", emoji: "🎉" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-pink-500 to-purple-600 bg-clip-text text-transparent">
            ✨ Our Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our magical events and celebrations that showcase our creativity and attention to every beautiful detail 🌟
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <motion.div
              key={filter.key}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                    activeFilter === filter.key 
                      ? `bg-gradient-to-r ${filter.gradient} text-white shadow-lg hover:shadow-xl`
                      : `hover:bg-gradient-to-r ${filter.gradient} hover:text-white hover:border-transparent`
                  }`}
                >
                  {filter.emoji} {filter.label}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: -50 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white group">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${
                          item.category === "wedding" ? "from-pink-500 to-rose-500" :
                          item.category === "corporate" ? "from-blue-500 to-indigo-500" :
                          "from-orange-500 to-yellow-500"
                        } text-white border-0`}
                      >
                        {item.category === "wedding" ? "💒 Wedding" : 
                         item.category === "corporate" ? "🏢 Corporate" : "🎉 Social"}
                      </Badge>
                    </div>
                    <motion.div 
                      className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-4xl">{item.emoji}</span>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center">
                        📍 {item.location}
                      </span>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:bg-primary/10"
                          onClick={() => {
                            toast.success(`✨ Opening details for ${item.title}! This would show a detailed gallery and booking options. 🎊`);
                          }}
                        >
                          View Details ✨
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="bg-gradient-to-r from-primary to-pink-500 text-white border-0 hover:from-pink-500 hover:to-purple-600 transition-all duration-500 px-8 py-3"
            >
              🌟 View All Our Magic
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}