import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { ScrollReactive3D } from "./ScrollReactive3D";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            event_type: formData.eventType,
            event_date: formData.eventDate || null,
            message: `Guests: ${formData.guests || 'Not specified'}\nBudget: ${formData.budget || 'Not specified'}\n\n${formData.message}`,
            status: 'new'
          }
        ]);

      if (error) throw error;

      toast.success("🎉 Thank you for your inquiry! We'll get back to you within 24 hours with a magical quote! ✨");
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        budget: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Sorry, there was an error submitting your form. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 80056 08699",
      secondary: "+91 97820 64182",
      action: () => window.open('tel:+918005608699', '_self'),
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "hello@shubhaarambhevents.com",
      secondary: "bookings@shubhaarambhevents.com",
      action: () => window.open('mailto:hello@shubhaarambhevents.com', '_self'),
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Events Plaza, Bhawani Singh Road",
      secondary: "Jaipur, Rajasthan - 302015",
      action: () => window.open('https://maps.google.com/?q=123+Events+Plaza+Bhawani+Singh+Road+Jaipur+Rajasthan+302015', '_blank'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "24/7 Event Support",
      secondary: "Mon-Sun: Always Available",
      action: () => {},
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-premium-dark particles-premium relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/20"
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
            {['💌', '📧', '📞', '✨', '💫', '🌟'][Math.floor(Math.random() * 6)]}
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
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-premium-blue text-glow-premium">
              💫 Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to plan your dream Indian wedding or celebration? Contact us today for a free consultation and magical quote! ✨
            </p>
          </motion.div>
        </ScrollReactive3D>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <ScrollReactive3D intensity={0.6} className="lg:col-span-2">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="apple-card bg-card/90 backdrop-blur-sm border-2 border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-premium-blue text-glow-premium">
                    🌸 Send Us a Magical Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="name" className="text-visible-light font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light placeholder:text-muted-foreground"
                            placeholder="Enter your full name"
                          />
                        </motion.div>
                      </ScrollReactive3D>
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="email" className="text-visible-light font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light placeholder:text-muted-foreground"
                            placeholder="your.email@example.com"
                          />
                        </motion.div>
                      </ScrollReactive3D>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="phone" className="text-visible-light font-medium">Phone Number *</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light placeholder:text-muted-foreground"
                            placeholder="+91 98765 43210"
                          />
                        </motion.div>
                      </ScrollReactive3D>
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="eventType" className="text-visible-light font-medium">Event Type *</Label>
                          <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                            <SelectTrigger className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light">
                              <SelectValue placeholder="Select event type" className="text-muted-foreground" />
                            </SelectTrigger>
                            <SelectContent className="bg-card backdrop-blur-sm border border-border">
                              <SelectItem value="wedding">💒 Indian Wedding</SelectItem>
                              <SelectItem value="mehendi">🎨 Mehendi Ceremony</SelectItem>
                              <SelectItem value="haldi">💛 Haldi Function</SelectItem>
                              <SelectItem value="corporate">🏢 Corporate Event</SelectItem>
                              <SelectItem value="birthday">🎂 Birthday Party</SelectItem>
                              <SelectItem value="anniversary">💕 Anniversary</SelectItem>
                              <SelectItem value="other">🎊 Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </ScrollReactive3D>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="eventDate" className="text-visible-light font-medium">Event Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => handleInputChange("eventDate", e.target.value)}
                            className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light"
                          />
                        </motion.div>
                      </ScrollReactive3D>
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="guests" className="text-visible-light font-medium">Expected Guests</Label>
                          <Input
                            id="guests"
                            placeholder="e.g., 100-150"
                            value={formData.guests}
                            onChange={(e) => handleInputChange("guests", e.target.value)}
                            className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light placeholder:text-muted-foreground"
                          />
                        </motion.div>
                      </ScrollReactive3D>
                      <ScrollReactive3D intensity={0.2}>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          viewport={{ once: true }}
                        >
                          <Label htmlFor="budget" className="text-visible-light font-medium">Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light">
                              <SelectValue placeholder="Select budget" className="text-muted-foreground" />
                            </SelectTrigger>
                            <SelectContent className="bg-card backdrop-blur-sm border border-border">
                              <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                              <SelectItem value="1-5l">₹1-5 Lakhs</SelectItem>
                              <SelectItem value="5-10l">₹5-10 Lakhs</SelectItem>
                              <SelectItem value="10-20l">₹10-20 Lakhs</SelectItem>
                              <SelectItem value="above-20l">Above ₹20 Lakhs</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </ScrollReactive3D>
                    </div>

                    <ScrollReactive3D intensity={0.2}>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="message" className="text-visible-light font-medium">Additional Details</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your dream event requirements... ✨"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="bg-input-background border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all rounded-lg text-visible-light placeholder:text-muted-foreground resize-none"
                        />
                      </motion.div>
                    </ScrollReactive3D>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      viewport={{ once: true }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full btn-premium text-lg py-6"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "✨ Send Magical Message 🎊"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </ScrollReactive3D>

          {/* Contact Information */}
          <ScrollReactive3D intensity={0.4}>
            <motion.div 
              className="space-y-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <ScrollReactive3D key={index} intensity={0.3}>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="apple-card bg-card/90 backdrop-blur-sm border-2 border-white/20 shadow-lg cursor-pointer" onClick={info.action}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div 
                              className={`bg-gradient-to-r ${info.gradient} p-4 rounded-full shadow-lg`}
                            >
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2 text-visible-light">{info.title}</h3>
                              {info.info && (
                                <p className="text-visible-light text-sm leading-relaxed font-medium">
                                  {info.info}
                                </p>
                              )}
                              {info.secondary && (
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {info.secondary}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </ScrollReactive3D>
                );
              })}

              {/* Quick Contact */}
              <ScrollReactive3D intensity={0.3}>
                <motion.div
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <Card className="apple-card bg-gradient-to-r from-primary via-accent to-primary text-white border-2 border-white/20 shadow-2xl">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2 text-visible-light">
                        🚀 Need Immediate Assistance?
                      </h3>
                      <p className="mb-4 text-white/90">Call us now for urgent wedding inquiries!</p>
                      <Button 
                        variant="secondary" 
                        size="lg" 
                        className="w-full bg-white/90 text-primary hover:bg-white font-semibold transition-all duration-300"
                        onClick={() => window.open('tel:+918005608699', '_self')}
                      >
                        📞 Call Now: +91 80056 08699
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReactive3D>
            </motion.div>
          </ScrollReactive3D>
        </div>
      </div>
    </section>
  );
}