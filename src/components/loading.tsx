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
  Palette
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

const loadingSteps = [
  { step: 1, text: "Initializing portfolio...", duration: 800 },
  { step: 2, text: "Loading components...", duration: 600 },
  { step: 3, text: "Setting up animations...", duration: 700 },
  { step: 4, text: "Preparing experience...", duration: 500 },
  { step: 5, text: "Ready for launch...", duration: 400 }
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
  { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
  { icon: "🚀", x: "80%", y: "15%", delay: 0.5 },
  { icon: "💡", x: "85%", y: "70%", delay: 1 },
  { icon: "🎨", x: "15%", y: "80%", delay: 1.5 },
  { icon: "⚡", x: "70%", y: "40%", delay: 2 },
  { icon: "💻", x: "20%", y: "60%", delay: 2.5 },
  { icon: "🔗", x: "90%", y: "50%", delay: 3 },
  { icon: "🤖", x: "5%", y: "40%", delay: 3.5 }
];

export function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showRocketLaunch, setShowRocketLaunch] = useState(false);

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
      
      // Show rocket launch after a brief delay
      setTimeout(() => {
        setShowRocketLaunch(true);
      }, 500);
      
      // Complete the loading after rocket animation
      setTimeout(() => {
        onLoadingComplete?.();
      }, 3000); // Extended time for rocket animation
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

  // Rocket launch animation variants
  const rocketVariants = {
    initial: { 
      scale: 0, 
      rotate: -180,
      x: 0,
      y: 0
    },
    appear: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 10 
      }
    },
    launch: {
      scale: [1, 1.5, 0.8],
      rotate: [0, -15, 0, 15, 0],
      y: [-50, -100, -200],
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    },
    blastOff: {
      scale: [0.8, 2, 0],
      rotate: [0, 360, 720],
      x: [0, 200, 800],
      y: [-200, -400, -800],
      opacity: [1, 1, 0],
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        times: [0, 0.3, 1]
      }
    }
  };

  // Explosion/trail effects
  const trailVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0],
      scale: [0, 1.5, 3],
      transition: {
        duration: 2,
        ease: "easeOut",
        times: [0, 0.2, 1]
      }
    }
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, (i % 2 === 0 ? 100 : -100) * Math.random()],
      y: [0, -100 * Math.random()],
      rotate: [0, 360],
      transition: {
        duration: 1.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
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
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Background Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-6xl opacity-10 pointer-events-none select-none"
            style={{
              left: element.x,
              top: element.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 0.1, 
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
                className="absolute inset-0 rounded-full border-4 border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Inner Ring */}
              <motion.div
                className="absolute inset-2 rounded-full border-2 border-accent/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center Icon */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                <Code2 className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Pulsing Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
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
                    <div className="p-3 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
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
                  className="h-2 bg-muted/50 border border-border/30"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-sm"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
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
                    <Terminal className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-sm text-muted-foreground">
                    {loadingSteps[currentStep]?.text || "Loading..."}
                  </span>
                </motion.div>
              ) : !showRocketLaunch ? (
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
                    <Sparkles className="w-5 h-5 text-green-500" />
                  </motion.div>
                  <span className="text-sm font-medium text-green-500">
                    Launching in 3... 2... 1...
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-2"
                >
                  <span className="text-sm font-medium text-primary">
                    Welcome to my portfolio!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Fun Loading Messages */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex justify-center"
            >
              <Badge 
                variant="secondary" 
                className="bg-muted/50 text-muted-foreground border-border/50"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  <Coffee className="w-3 h-3" />
                </motion.div>
                Made with ❤️ and lots of ☕
              </Badge>
            </motion.div> */}
          </motion.div>

          {/* Loading Dots Animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-2 mt-8"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary/60 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
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

        {/* Epic Rocket Launch Animation */}
        <AnimatePresence>
          {showRocketLaunch && (
            <>
              {/* Rocket */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                variants={rocketVariants}
                initial="initial"
                animate="appear"
                exit="blastOff"
              >
                <motion.div
                  className="text-8xl filter drop-shadow-2xl"
                  style={{
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
                  }}
                >
                  {/* 🚀 */}
                  {/* <FontAwesomeIcon icon={faRocket} className="text-[150px]" /> */}
                  <Rocket className="w-[100px] h-[100px] text-primary"/>
                </motion.div>
              </motion.div>

              {/* Rocket Trail/Exhaust */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
                variants={trailVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-orange-500/30 via-red-500/30 to-yellow-500/30 rounded-full blur-2xl" />
              </motion.div>

              {/* Sparkle/Star Effects */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  custom={i}
                  variants={sparkleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="text-2xl"
                    style={{
                      position: 'absolute',
                      left: `${50 + (Math.random() - 0.5) * 20}%`,
                      top: `${50 + (Math.random() - 0.5) * 20}%`,
                    }}
                  >
                    {i % 4 === 0 ? '🔥' : i % 4 === 1 ? '🔥' : i % 4 === 2 ? '🔥' : '🔥'}
                  </motion.div>
                </motion.div>
              ))}

              {/* Screen Shake Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  x: [0, -2, 2, -2, 2, 0],
                  y: [0, -1, 1, -1, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  repeat: 2
                }}
              />

              
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
