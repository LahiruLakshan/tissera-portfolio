// src/components/loading.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Zap, 
  Heart, 
  Coffee, 
  Sparkles,
  Star,
  Rocket,
  Terminal,
  Cpu,
  Database,
  Globe,
  Palette,
  CheckCircle,
  Monitor,
  Braces,
  Loader2
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

const loadingSteps = [
  { step: 1, text: "Initializing portfolio...", duration: 800 },
  { step: 2, text: "Loading components...", duration: 600 },
  { step: 3, text: "Setting up animations...", duration: 700 },
  { step: 4, text: "Preparing experience...", duration: 500 },
  { step: 5, text: "Almost ready...", duration: 400 }
];

const techIcons = [
  { icon: Code2, name: "React", delay: 0 },
  { icon: Zap, name: "Next.js", delay: 0.2 },
  { icon: Database, name: "Node.js", delay: 0.4 },
  { icon: Globe, name: "Web3", delay: 0.6 },
  { icon: Cpu, name: "AI/ML", delay: 0.8 },
  { icon: Palette, name: "UI/UX", delay: 1.0 }
];

const floatingElements = [
  { icon: "</>", x: "10%", y: "20%", delay: 0 },
  { icon: "{ }", x: "80%", y: "15%", delay: 0.5 },
  { icon: "=>", x: "85%", y: "70%", delay: 1 },
  { icon: "()", x: "15%", y: "80%", delay: 1.5 },
  { icon: "[]", x: "70%", y: "40%", delay: 2 },
  { icon: "const", x: "20%", y: "60%", delay: 2.5 },
  { icon: "function", x: "90%", y: "50%", delay: 3 },
  { icon: "async", x: "5%", y: "40%", delay: 3.5 }
];

export function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let stepIndex = 0;
    let progressValue = 0;

    const runLoadingSequence = async () => {
      for (const step of loadingSteps) {
        setCurrentStep(stepIndex);
        
        // Animate progress for this step
        const stepProgress = (stepIndex + 1) * 20;
        const progressIncrement = (stepProgress - progressValue) / (step.duration / 50);
        
        const progressInterval = setInterval(() => {
          progressValue += progressIncrement;
          setProgress(Math.min(progressValue, stepProgress));
          
          if (progressValue >= stepProgress) {
            clearInterval(progressInterval);
          }
        }, 50);

        await new Promise(resolve => setTimeout(resolve, step.duration));
        stepIndex++;
      }

      // Complete loading
      setProgress(100);
      setIsComplete(true);
      
      // Wait for completion animation then callback
      setTimeout(() => {
        onLoadingComplete?.();
      }, 2000);
    };

    runLoadingSequence();
  }, [onLoadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/80 overflow-hidden"
      >
        {/* Animated Background Grid - Light/Dark Theme Adaptive */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 dark:opacity-20" />
        
        {/* Light Theme Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
        
        {/* Floating Background Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl opacity-8 dark:opacity-10 pointer-events-none select-none text-primary/20 dark:text-primary/10 font-mono"
            style={{
              left: element.x,
              top: element.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.08, // Lighter for light theme
              scale: 1, 
              rotate: 0,
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            {element.icon}
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-md mx-auto px-6 text-center">
          
          {/* Logo Animation */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.div
              className="relative mx-auto w-20 h-20 mb-6"
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-primary/40 dark:border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-accent/60 dark:border-accent/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 rounded-full backdrop-blur-sm border border-primary/20 dark:border-primary/10"
                whileHover={{ scale: 1.1 }}
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Brand Name */}
            <motion.h1 
              className="text-3xl font-headline font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-300%">
                Lahiru Tissera
              </span>
            </motion.h1>

            <motion.p
              className="text-muted-foreground font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>

          {/* Technology Icons */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="flex justify-center items-center gap-4 mb-4">
              {techIcons.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      delay: 1 + tech.delay,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2, y: -5 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-card to-card/80 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300 shadow-sm dark:shadow-none">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                    >
                      {tech.name}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Loading Progress */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            {/* Progress Bar */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Loading Portfolio</span>
                <motion.span 
                  className="text-primary font-medium"
                  key={progress}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={progress} 
                  className="h-2 bg-muted/70 border border-border/30"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 dark:from-primary/20 dark:to-accent/20 rounded-full blur-sm"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Loading Status */}
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center justify-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Loader2 className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm text-muted-foreground">
                    {loadingSteps[currentStep]?.text || "Loading..."}
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-500">
                    Ready to explore!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Loading Dots Animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2 mt-8"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary/70 dark:bg-primary/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Professional Success Animation */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            >
              <motion.div
                className="relative"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.2
                }}
              >
                {/* Terminal Window - Light Theme Adaptive */}
                <div className="bg-card border-2 border-border rounded-lg p-4 shadow-2xl min-w-[300px] backdrop-blur-sm">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">Terminal</span>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="font-mono text-sm">
                    <motion.div 
                      className="text-emerald-600 dark:text-emerald-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      $ npm run portfolio
                    </motion.div>
                    
                    <motion.div 
                      className="text-blue-600 dark:text-blue-400 mt-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      ✓ Portfolio compiled successfully
                    </motion.div>
                    
                    <motion.div 
                      className="text-amber-600 dark:text-amber-400 mt-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      ✓ Ready on lahirulakshan.web.app
                    </motion.div>
                    
                    <motion.div 
                      className="text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      Welcome to Lahiru's Portfolio!
                    </motion.div>
                    
                    {/* Blinking Cursor */}
                    <motion.div 
                      className="inline-block w-2 h-4 bg-primary mt-1 rounded-sm"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 1.3 }}
                    />
                  </div>
                </div>

                {/* Floating Code Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/40 dark:text-primary/30 font-mono text-lg"
                    style={{
                      left: `${-50 + Math.random() * 400}px`,
                      top: `${-30 + Math.random() * 60}px`,
                    }}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ 
                      opacity: [0, 0.7, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 360],
                      y: [-20, -40, -60]
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.2 + i * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {i % 6 === 0 ? '<>' : 
                     i % 6 === 1 ? '{}' : 
                     i % 6 === 2 ? '()' : 
                     i % 6 === 3 ? '[]' : 
                     i % 6 === 4 ? '</>' : '{}'}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
