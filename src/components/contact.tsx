// src/components/contact.tsx
"use client";

import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  User,
  Calendar,
  Clock,
  CheckCircle,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Coffee,
  Zap,
  Heart,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "balahirulakshan@gmail.com",
    href: "mailto:balahirulakshan@gmail.com",
    color: "from-blue-500 to-cyan-500",
    description: "Drop me a message anytime"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 71 183 7836",
    href: "tel:+94711837836",
    color: "from-green-500 to-emerald-500",
    description: "Available for calls"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kelaniya, Sri Lanka",
    href: "#",
    color: "from-purple-500 to-pink-500",
    description: "Based in Sri Lanka, Open to remote work"
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "lahirulakshan.web.app",
    href: "https://lahirulakshan.web.app",
    color: "from-orange-500 to-red-500",
    description: "Explore my latest work"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/lahiru-lakshan-tissera",
    color: "from-gray-700 to-black",
    followers: "50+ Followers"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/lahiru-lakshan-tissera",
    color: "from-blue-600 to-blue-800",
    followers: "500+ Connections"
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/LahiruLakshan",
    color: "from-sky-400 to-blue-500",
    followers: "100+ Followers"
  }
];

const availabilityStatus = {
  status: "Available",
  message: "Open for new opportunities",
  responseTime: "Within 24 hours",
  timezone: "IST (GMT+5:30)"
};

const workPreferences = [
  { type: "Full-time", available: true },
  { type: "Contract", available: true },
  { type: "Remote", available: true },
  { type: "Freelance", available: true }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Floating Communication Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Mail, MessageSquare, Phone, Send, Heart].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${15 + (i * 18)}%`,
              top: `${10 + (i * 20)}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon size={30} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 40px rgba(168, 85, 247, 0.5)",
                    "0 0 20px rgba(168, 85, 247, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <MessageSquare className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Let's Connect
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Ready to bring your <span className="text-primary font-semibold">ideas to life</span>? 
              I'm excited to discuss your project and explore how we can 
              <span className="text-accent font-semibold"> create something amazing</span> together.
            </motion.p>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <Badge className="bg-green-500 text-white">
                      {availabilityStatus.status}
                    </Badge>
                  </motion.div>
                  <div className="text-sm text-muted-foreground">
                    {availabilityStatus.message} • Response time: {availabilityStatus.responseTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-headline flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Send className="w-6 h-6 text-primary" />
                    </motion.div>
                    Send me a message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="text-sm font-medium mb-2 block">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-2 border-border/50 focus:border-primary transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="text-sm font-medium mb-2 block">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-2 border-border/50 focus:border-primary transition-colors"
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-sm font-medium mb-2 block">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="border-2 border-border/50 focus:border-primary transition-colors"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-sm font-medium mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, ideas, or just say hello!"
                        required
                        rows={6}
                        className="border-2 border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        size="lg"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                          </motion.div>
                        ) : isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="flex items-center gap-2"
                          >
                            <Zap className="w-5 h-5" />
                            Sending...
                          </motion.div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              {/* Work Preferences */}
              <Card className="border-0 bg-card/40 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-accent" />
                    Work Preferences
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {workPreferences.map((pref) => (
                      <motion.div
                        key={pref.type}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-2 p-3 rounded-lg ${
                          pref.available 
                            ? 'bg-green-500/10 border border-green-500/30' 
                            : 'bg-muted/30 border border-border/30'
                        }`}
                      >
                        <CheckCircle className={`w-4 h-4 ${
                          pref.available ? 'text-green-500' : 'text-muted-foreground'
                        }`} />
                        <span className="text-sm font-medium">{pref.type}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      variants={cardVariants}
                      custom={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <IconComponent className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-semibold group-hover:text-primary transition-colors">
                                {info.label}
                              </h3>
                              <motion.a
                                href={info.href}
                                className="text-primary font-medium hover:text-accent transition-colors block mt-1"
                                whileHover={{ x: 5 }}
                              >
                                {info.value}
                              </motion.a>
                              <p className="text-sm text-muted-foreground mt-2">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-headline flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Connect on Social
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div
                          className={`p-2 rounded-lg bg-gradient-to-r ${social.color}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {social.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {social.followers}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </motion.a>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <Card className="border-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                  >
                    <Clock className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold mb-2">Quick Response Guaranteed</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    I typically respond to messages within 24 hours. For urgent projects, 
                    feel free to call me directly.
                  </p>
                  <Badge variant="outline" className="bg-white/20">
                    {availabilityStatus.timezone}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
