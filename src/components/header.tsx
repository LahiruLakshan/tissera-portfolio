// src/components/header.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Menu, 
  X, 
  Home,
  User,
  Briefcase,
  FolderOpen,
  Award,
  MessageSquare,
  ExternalLink,
  Download,
  Zap,
  Star
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const navigationItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Zap },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Achievements", href: "#achievements", icon: Award },
  { name: "Contact", href: "#contact", icon: MessageSquare }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.href.replace('#', '') || 'home');
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = section === 'home' 
          ? document.body 
          : document.getElementById(section);
        
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.6 }
    }
  };

  const navItemVariants = {
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'border-b border-border/50 bg-background/80 backdrop-blur-md shadow-lg' 
            : 'border-b border-border/20 bg-background/60 backdrop-blur-sm'
        }`}
      >
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
          >
            <motion.div
              className="relative p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                background: "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3))"
              }}
              transition={{ duration: 0.3 }}
            >
              <Code2 className="h-6 w-6 text-primary" />
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            
            <div className="flex flex-col">
              <motion.span 
                className="font-bold font-headline text-lg leading-none"
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                Lahiru Tissera
              </motion.span>
              <motion.span 
                className="text-xs text-muted-foreground leading-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                Software Engineer
              </motion.span>
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Badge 
                variant="outline"
                className="hidden sm:flex items-center gap-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
              >
                <motion.div
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Available
              </Badge>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const sectionName = item.href.replace('#', '') || 'home';
              const isActive = activeSection === sectionName;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  variants={navItemVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.name}</span>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            
            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden sm:block"
            >
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="group hover:bg-primary hover:text-primary-foreground border-primary/30 hover:border-primary transition-all duration-300"
              >
                <a href="/Lakshan-Tissera-SE.pdf" download>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  <span className="hidden lg:inline">Download CV</span>
                  <span className="lg:hidden">CV</span>
                </a>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6 space-y-1">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const sectionName = item.href.replace('#', '') || 'home';
                  const isActive = activeSection === sectionName;
                  
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        isActive 
                          ? 'text-primary bg-primary/10 shadow-lg' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        className={`p-2 rounded-lg ${
                          isActive 
                            ? 'bg-primary/20' 
                            : 'bg-muted/50'
                        }`}
                        whileHover={{ rotate: 15 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </motion.div>
                      <span className="font-medium">{item.name}</span>
                      {isActive && (
                        <motion.div
                          className="ml-auto"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <Star className="w-4 h-4 text-primary fill-primary" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}

                {/* Mobile CV Download */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4 border-t border-border/50"
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="w-full group hover:bg-primary hover:text-primary-foreground border-primary/30 hover:border-primary transition-all duration-300"
                  >
                    <a href="/Lakshan-Tissera-SE.pdf" download className="flex items-center gap-2">
                      <Download className="w-4 h-4 group-hover:animate-bounce" />
                      Download CV
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
