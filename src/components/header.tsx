// src/components/header.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Menu, 
  X, 
  Home,
  User,
  Briefcase,
  FolderOpen,
  Award,
  MessageSquare,
  Download,
  Zap,
  Code2,
  ChevronRight,
  Activity
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const navigationItems = [
  { name: "Home", href: "#", icon: Home, command: "cd ~/" },
  { name: "About", href: "#about", icon: User, command: "cat about.md" },
  { name: "Skills", href: "#skills", icon: Code2, command: "ls skills/" },
  { name: "Services", href: "#services", icon: Zap, command: "ls services/" },
  { name: "Projects", href: "#projects", icon: FolderOpen, command: "git log --projects" },
  { name: "Experience", href: "#experience", icon: Briefcase, command: "cat experience.json" },
  { name: "Achievements", href: "#achievements", icon: Award, command: "grep -r 'success'" },
  { name: "Contact", href: "#contact", icon: MessageSquare, command: "ping contact" }
];

// Terminal typewriter effect for logo
const TypewriterLogo = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="font-mono">
      {displayText}
      {showCursor && (
        <motion.span
          className="inline-block w-2 h-5 bg-green-500 dark:bg-green-400 align-middle ml-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      )}
    </span>
  );
};

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        id="home"
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'border-b border-green-500/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg shadow-green-500/10' 
            : 'bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm'
        }`}
      >
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          
          {/* Terminal Logo Section */}
          <motion.div 
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Terminal Window */}
            <motion.div
              className="flex items-center gap-2 bg-gray-50 dark:bg-black/80 border border-green-500/60 dark:border-green-500/30 rounded-lg px-3 py-2 shadow-lg"
              whileHover={{ 
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
                borderColor: "rgba(34, 197, 94, 0.6)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Terminal Dots */}
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Terminal Content */}
              <div className="flex items-center gap-2 font-mono text-sm">
                <Terminal className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-green-700 dark:text-green-300">$</span>
                <TypewriterLogo text="lahiru-dev" />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-green-500/20 dark:bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Badge 
                variant="outline"
                className="hidden sm:flex items-center gap-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/50 dark:border-emerald-500/30 font-mono text-xs"
              >
                <motion.div
                  className="w-2 h-2 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                ONLINE
              </Badge>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation - Terminal Style */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const sectionName = item.href.replace('#', '') || 'home';
              const isActive = activeSection === sectionName;
              
              return (
                <motion.div
                  key={item.name}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-300 ${
                      isActive 
                        ? 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-500/10 shadow-lg border border-green-500/50 dark:border-green-500/30' 
                        : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Terminal Command Tooltip */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-black/90 border border-green-500/50 dark:border-green-500/30 rounded px-2 py-1 font-mono text-xs text-green-700 dark:text-green-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[60] shadow-lg"
                    initial={{ y: -10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    <span className="text-green-600 dark:text-green-400">$ </span>
                    {item.command}
                  </motion.div>
                </motion.div>
              );
            })}
          </nav>

          {/* Right Section - Terminal Style */}
          <div className="flex items-center gap-3">
            
            {/* Download CV Button - Terminal Style */}
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
                className="group bg-gray-50 dark:bg-black/50 border-green-500/50 dark:border-green-500/30 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 hover:border-green-500/70 dark:hover:border-green-500/50 font-mono text-xs transition-all duration-300"
              >
                <a href="/docs/Lakshan Tissera - SE.pdf" download className="flex items-center gap-2">
                  <span className="text-green-600 dark:text-green-400">$</span>
                  <Download className="w-3 h-3 group-hover:animate-bounce" />
                  <span className="hidden lg:inline">download cv</span>
                  <span className="lg:hidden">cv</span>
                </a>
              </Button>
            </motion.div>

            {/* Terminal Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-2 rounded-lg bg-gray-50 dark:bg-black/50 border border-green-500/50 dark:border-green-500/30 hover:border-green-500/70 dark:hover:border-green-500/50 transition-all duration-300"
            >
              <ThemeToggle />
            </motion.div>

            {/* Mobile Menu Button - Terminal Style */}
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
                className="relative bg-gray-50 dark:bg-black/50 border border-green-500/50 dark:border-green-500/30 hover:bg-green-100 dark:hover:bg-green-500/10 hover:border-green-500/70 dark:hover:border-green-500/50 text-green-700 dark:text-green-300"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Menu className="h-4 w-4" />
                  )}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Terminal Command Line at bottom */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-600/70 dark:via-green-400/50 to-transparent"
          />
        )}
      </motion.header>

      {/* Mobile Menu Overlay - Terminal Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-gray-900/60 dark:bg-black/80 backdrop-blur-sm md:hidden"
            />

            {/* Mobile Terminal Menu */}
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/98 dark:bg-black/95 backdrop-blur-md border border-green-500/50 dark:border-green-500/30 rounded-2xl shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 dark:bg-gray-900/50 border-b border-green-500/40 dark:border-green-500/20">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-green-700 dark:text-green-400 font-mono">mobile-menu</span>
                </div>

                {/* Navigation Items */}
                <div className="p-4 space-y-2">
                  {navigationItems.map((item, index) => {
                    const IconComponent = item.icon;
                    const sectionName = item.href.replace('#', '') || 'home';
                    const isActive = activeSection === sectionName;
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg text-left font-mono transition-all duration-300 ${
                            isActive 
                              ? 'text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-500/10 border border-green-500/50 dark:border-green-500/30' 
                              : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 border border-transparent'
                          }`}
                        >
                          {/* Terminal Prompt */}
                          <span className="text-green-600 dark:text-green-400">$</span>
                          
                          {/* Icon */}
                          <motion.div
                            className="p-1 rounded bg-gray-100 dark:bg-gray-800/50"
                            whileHover={{ rotate: 15 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="w-4 h-4" />
                          </motion.div>
                          
                          {/* Command */}
                          <div className="flex-1">
                            <div className="font-medium">{item.command}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500"># {item.name}</div>
                          </div>
                          
                          {/* Active indicator */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <ChevronRight className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </motion.div>
                          )}
                        </button>
                      </motion.div>
                    );
                  })}

                  {/* Mobile CV Download */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 border-t border-green-500/40 dark:border-green-500/20"
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="w-full bg-gray-50 dark:bg-black/50 border-green-500/50 dark:border-green-500/30 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-500/10 hover:text-green-600 dark:hover:text-green-400 font-mono transition-all duration-300"
                    >
                      <a href="/docs/Lakshan Tissera - SE.pdf" download className="flex items-center gap-2">
                        <span className="text-green-600 dark:text-green-400">$</span>
                        <Download className="w-4 h-4" />
                        <span>download --file=cv.pdf</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Terminal Footer */}
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border-t border-green-500/40 dark:border-green-500/20 font-mono text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Activity className="w-3 h-3 text-green-600 dark:text-green-400" />
                    <span>System ready</span>
                    <motion.div
                      className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full ml-auto"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
