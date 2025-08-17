// src/components/loading.tsx
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  CheckCircle,
  Terminal,
  Loader2,
  Activity,
  Zap,
  Globe,
  Database,
  Cpu,
  Monitor
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

interface LoadingPageProps {
  onLoadingComplete?: () => void;
}

const loadingSteps = [
  { 
    id: 1, 
    text: "Initializing application...", 
    duration: 1000,
    command: "npm start"
  },
  { 
    id: 2, 
    text: "Loading core modules...", 
    duration: 800,
    command: "import modules"
  },
  { 
    id: 3, 
    text: "Establishing connections...", 
    duration: 700,
    command: "connect services"
  },
  { 
    id: 4, 
    text: "Finalizing setup...", 
    duration: 600,
    command: "build complete"
  }
];

const techStack = [
  { icon: Code2, name: "React", color: "text-blue-400" },
  { icon: Zap, name: "Next.js", color: "text-gray-300" },
  { icon: Database, name: "Node.js", color: "text-green-400" },
  { icon: Globe, name: "TypeScript", color: "text-blue-500" },
  { icon: Cpu, name: "Tailwind", color: "text-cyan-400" },
  { icon: Monitor, name: "Framer", color: "text-pink-400" }
];

export function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);

  useEffect(() => {
    const runSequence = async () => {
      // Show tech stack after initial delay
      setTimeout(() => setShowTechStack(true), 500);

      let totalProgress = 0;
      
      for (let i = 0; i < loadingSteps.length; i++) {
        setCurrentStep(i);
        
        const step = loadingSteps[i];
        const stepProgress = 25; // Each step is 25%
        const startProgress = totalProgress;
        const endProgress = totalProgress + stepProgress;
        
        // Animate progress smoothly
        const duration = step.duration;
        const interval = 16; // ~60fps
        const steps = duration / interval;
        const progressPerStep = stepProgress / steps;
        
        for (let j = 0; j < steps; j++) {
          await new Promise(resolve => setTimeout(resolve, interval));
          totalProgress = Math.min(startProgress + (progressPerStep * (j + 1)), endProgress);
          setProgress(totalProgress);
        }
      }

      // Ensure we reach 100%
      setProgress(100);
      setIsComplete(true);

      // Complete after showing success state
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1500);
    };

    runSequence();
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
        <div className="relative z-10 w-full max-w-md mx-auto px-6">
          {/* Main Loading Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-300 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Terminal className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </motion.div>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-900 dark:text-white font-mono">
                      Lahiru Tissera
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 space-y-6">
                {/* Tech Stack Icons */}
                <AnimatePresence>
                  {showTechStack && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-6 gap-4 mb-6">
                        {techStack.map((tech, index) => {
                          const IconComponent = tech.icon;
                          return (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: index * 0.1,
                                duration: 0.4,
                                type: "spring",
                                stiffness: 200 
                              }}
                              className="flex flex-col items-center gap-2 group"
                            >
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 group-hover:border-green-400 transition-colors"
                              >
                                <IconComponent className={`w-4 h-4 ${tech.color}`} />
                              </motion.div>
                              <span className="text-xs text-gray-600 dark:text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech.name}
                              </span>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Progress Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-mono">
                      Loading Portfolio
                    </span>
                    <motion.span 
                      key={Math.floor(progress)}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-sm font-bold text-green-600 font-mono"
                    >
                      {Math.floor(progress)}%
                    </motion.span>
                  </div>
                  {/* Progress Bar */}
                  <div className="relative">
                    <Progress 
                      value={progress} 
                      className="h-2 bg-gray-200 dark:bg-gray-800/50"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-400/20 dark:to-blue-400/20 rounded-full blur-sm pointer-events-none"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  {/* Status Text */}
                  <AnimatePresence mode="wait">
                    {!isComplete ? (
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-gray-800 dark:text-gray-300 font-mono">
                            {loadingSteps[currentStep]?.text}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-mono mt-1">
                            $ {loadingSteps[currentStep]?.command}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <div>
                          <p className="text-sm font-semibold text-green-700 dark:text-green-400 font-mono">
                            Portfolio Ready
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                            Welcome to my digital space
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {/* Loading Dots */}
                {!isComplete && (
                  <div className="flex justify-center gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-1.5 h-1.5 bg-green-400/60 rounded-full"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 1, 0.4]
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-center mt-6"
          >
            <p className="text-xs text-gray-600 dark:text-gray-500 font-mono">
              Building exceptional digital experiences
            </p>
          </motion.div>
        </div>
        {/* Success Overlay */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-green-600 dark:text-green-400"
              >
                <CheckCircle className="w-16 h-16" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
