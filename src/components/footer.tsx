// src/components/footer.tsx
"use client";

import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin,
  Heart,
  Code2,
  Coffee,
  ArrowUp,
  ExternalLink,
  Calendar,
  Clock,
  Star,
  Zap,
  Send
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/lahiru-lakshan-tissera",
    color: "hover:bg-gray-900 hover:text-white",
    followers: "50+ repos"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/lahiru-lakshan-tissera",
    color: "hover:bg-blue-600 hover:text-white",
    followers: "500+ connections"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:balahirulakshan@gmail.com",
    color: "hover:bg-red-500 hover:text-white",
    followers: "Quick response"
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+94711837836",
    color: "hover:bg-green-500 hover:text-white",
    followers: "Available for calls"
  }
];

const quickLinks = [
  { name: "About", href: "#about", icon: Code2 },
  { name: "Services", href: "#services", icon: Zap },
  { name: "Projects", href: "#projects", icon: Star },
  { name: "Experience", href: "#experience", icon: Coffee },
  { name: "Contact", href: "#contact", icon: Send }
];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", 
  "Web3", "AI/ML", "Mobile Dev", "UI/UX", "Cloud"
];

const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export function Footer() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-muted/30 via-background to-muted/40 border-t border-border/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code2, Heart, Coffee, Star, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/5"
            style={{
              left: `${10 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon size={60} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* About Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <Code2 className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl font-headline font-bold">Lahiru Tissera</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Full-Stack Developer passionate about creating innovative solutions with 
                  <span className="text-primary font-semibold"> modern technologies</span>. 
                  Always excited to work on challenging projects and collaborate with amazing teams.
                </p>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30">
                    Available for opportunities
                  </Badge>
                </div>
              </motion.div>

              {/* Location & Contact */}
              <Card className="border-0 bg-card/30 backdrop-blur-sm p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Kelaniya, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-muted-foreground">IST (GMT+5:30)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Response within 24h</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-headline font-bold flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 text-accent" />
                </motion.div>
                Quick Navigation
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <IconComponent className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              {/* Skills Cloud */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-headline font-bold flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-red-500" />
                </motion.div>
                Let's Connect
              </h3>
              
              <p className="text-muted-foreground text-sm">
                Ready to bring your ideas to life? I'm excited to discuss your project 
                and explore how we can create something amazing together.
              </p>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name !== "Email" && social.name !== "Phone" ? "_blank" : undefined}
                      rel={social.name !== "Email" && social.name !== "Phone" ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-4 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group ${social.color}`}
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <motion.div
                        className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-medium group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {social.followers}
                        </div>
                      </div>
                      {social.name !== "Email" && social.name !== "Phone" && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </motion.a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Start a Project
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 flex items-center">
              <motion.div 
                className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="relative flex justify-center">
              <motion.div
                className="bg-background px-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <Code2 className="w-4 h-4" />
                  </motion.div>
                  <span className="text-xs">Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500" />
                  </motion.div>
                  <span className="text-xs">and lots of</span>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Coffee className="w-4 h-4 text-amber-500" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>&copy; {currentYear} Lahiru Tissera. All rights reserved.</span>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-muted/30"
              >
                <span className="text-xs">Built with Next.js</span>
                <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              </motion.div>
            </div>

            {/* Back to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Back to Top
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
