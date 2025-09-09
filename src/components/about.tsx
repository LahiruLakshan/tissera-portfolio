// src/components/about.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { User, Target, Heart, Lightbulb, Coffee, Terminal, Code2, CheckCircle, FileText, Database, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Target,
    title: "Problem Solver",
    description: "I love tackling complex challenges and finding elegant solutions",
    command: "solve --complexity=high --approach=elegant",
    status: "SUCCESS",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description: "Every line of code is written with the end user experience in mind",
    command: "design --user-centric --priority=ux",
    status: "SUCCESS",
  },
  {
    icon: Lightbulb,
    title: "Innovation Drive",
    description: "Constantly exploring new technologies and development approaches",
    command: "explore --tech=cutting-edge --mindset=growth",
    status: "SUCCESS",
  },
  {
    icon: Coffee,
    title: "Team Player",
    description: "Thriving in collaborative environments and mentoring fellow developers",
    command: "collaborate --team=awesome --mentor=true",
    status: "SUCCESS",
  },
];

const terminalCommands = [
  { command: "whoami", output: "lahiru-tissera", delay: 0 },
  { command: "cat experience.txt", output: "Full-Stack Engineer | Web3 | AI/ML | Mobile", delay: 0 },
  { command: "ls education/", output: "BEng_Software_Engineering_UK.pdf", delay: 0 },
  { command: "git log --oneline", output: "* Building innovative solutions since 2020", delay: 0 },
];

const codeSnippet = `interface Developer {
  name: "Lahiru Tissera";
  role: "Full-Stack Engineer";
  education: "BEng Software Engineering (UK)";
  passion: ["Web3", "AI/ML", "Mobile"];
  mission: "Building innovative solutions";
  location: "Kadawatha, Sri Lanka";
  status: "Available for opportunities";
}

// Constantly learning and evolving
const developer = new Developer();
console.log("Ready to collaborate!");`;

const TypewriterText = ({ text, delay = 0, speed = 50 }: { text: string; delay?: number; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  return <span>{displayText}</span>;
};

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['<>', '{}', '[]', '()', '/>', '</', 'const', 'function', 'return', '&&', '||', '=>'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500/10 dark:text-green-400/10 font-mono text-2xl select-none"
            style={{
              left: `${10 + (i * 8) % 80}%`,
              top: `${20 + (i * 12) % 60}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30">
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ cat about_me.md
              </h2>
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Column - Terminal Window */}
            <motion.div variants={itemVariants}>
              <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">lahiru@portfolio:~$</span>
                </div>

                <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[300px]">
                  {terminalCommands.map((cmd, index) => (
                    <motion.div
                      key={index}
                      variants={codeVariants}
                      transition={{ delay: cmd.delay }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 dark:text-green-400">$</span>
                        <span className="text-gray-800 dark:text-white">
                          {isInView && <TypewriterText text={cmd.command} delay={cmd.delay * 1000} />}
                        </span>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: cmd.delay + 1 }}
                        className="text-blue-600 dark:text-blue-300 ml-4"
                      >
                        {cmd.output}
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Blinking Cursor */}
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 4 }}
                  >
                    <span className="text-green-600 dark:text-green-400">$</span>
                    <motion.div
                      className="w-2 h-5 bg-green-600 dark:bg-green-400"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Code Editor */}
            <motion.div variants={itemVariants}>
              <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">Developer.ts</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <CardContent className="p-6 font-mono text-sm bg-gray-50 dark:bg-gray-900 space-y-2 overflow-x-auto">
                  {codeSnippet.split('\n').map((line, index) => (
                    <motion.div
                      key={index}
                      variants={codeVariants}
                      transition={{ delay: index * 0.1 }}
                      className="whitespace-nowrap"
                    >
                      <span className="text-gray-400 dark:text-gray-500 mr-4 select-none">{String(index + 1).padStart(2, '0')}</span>
                      <span 
                        className={
                          line.includes('interface') ? 'text-purple-600 dark:text-purple-400' :
                          line.includes('//') ? 'text-gray-500' :
                          line.includes('"') ? 'text-green-600 dark:text-green-300' :
                          line.includes('[') || line.includes(']') ? 'text-orange-600 dark:text-orange-300' :
                          line.includes('const') || line.includes('new') ? 'text-blue-600 dark:text-blue-400' :
                          line.includes('console.log') ? 'text-yellow-600 dark:text-yellow-300' :
                          'text-blue-600 dark:text-blue-300'
                        }
                      >
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Enhanced Highlights with Terminal Commands */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-mono text-green-600 dark:text-green-400 mb-4">$ ls capabilities/</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition-all duration-300 group overflow-hidden">
                    <CardContent className="p-6">
                      {/* Terminal Command */}
                      <div className="mb-4 p-3 bg-gray-100 dark:bg-black/30 rounded border border-gray-300 dark:border-gray-700 font-mono text-xs">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-green-600 dark:text-green-400">$</span>
                          <span className="text-gray-800 dark:text-white">{highlight.command}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-300">
                          <CheckCircle className="w-3 h-3" />
                          <span>{highlight.status}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-green-500/30"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <highlight.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2 font-mono">
                            {highlight.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{
                          background: "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text as Comment Block */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">README.md</span>
              </div>
              
              <CardContent className="p-8 font-mono text-sm bg-gray-50 dark:bg-gray-900">
                <div className="space-y-4">
                  <div className="text-green-600 dark:text-green-400"># About Lahiru Tissera</div>
                  
                  <motion.div
                    variants={codeVariants}
                    className="text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-gray-500">/**</span><br/>
                    <span className="text-gray-500"> * Full-Stack Engineer with expertise in building modern web applications</span><br/>
                    <span className="text-gray-500"> * and integrating cutting-edge technologies. Experience spanning Web3,</span><br/>
                    <span className="text-gray-500"> * AI/ML, and mobile development.</span><br/>
                    <span className="text-gray-500"> */</span>
                  </motion.div>

                  <motion.div variants={codeVariants} className="text-blue-600 dark:text-blue-300">
                    <span className="text-purple-600 dark:text-purple-400">const</span> journey = {'{'}
                  </motion.div>
                  
                  <motion.div variants={codeVariants} className="ml-4 space-y-1">
                    <div className="text-gray-700 dark:text-gray-300">
                      education: <span className="text-green-600 dark:text-green-300">"BEng Software Engineering (UK)"</span>,
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      mission: <span className="text-green-600 dark:text-green-300">"Bridge complex technologies with intuitive UX"</span>,
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      specialties: <span className="text-orange-600 dark:text-orange-300">["NFT Marketplaces", "AI Music Classification", "Web3 Integration"]</span>,
                    </div>
                    <div className="text-gray-700 dark:text-gray-300">
                      approach: <span className="text-green-600 dark:text-green-300">"Elegant solutions for real-world problems"</span>
                    </div>
                  </motion.div>

                  <motion.div variants={codeVariants} className="text-purple-600 dark:text-purple-400">
                    {'};'}
                  </motion.div>

                  <motion.div variants={codeVariants} className="pt-4 text-gray-500">
                    <span>// Always exploring new technologies and frameworks</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Footer Terminal Prompt */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-4">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  <span>Ready to collaborate? Let's build something amazing together!</span>
                  <motion.div
                    className="w-2 h-4 bg-green-600 dark:bg-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-9 dark:opacity-5">
          {/* Animated Glow Background */}
<motion.div
  aria-hidden
  className="absolute inset-0 pointer-events-none z-0"
>
  {/* Animated radial glow at center */}
  <motion.div
    className="absolute left-1/2 top-1/2 w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] rounded-full"
    style={{
      translateX: "-50%",
      translateY: "-50%",
      background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,197,94,0.11), rgba(59,130,246,0.07), transparent 95%)",
      filter: "blur(0.5rem)"
    }}
    animate={{
      scale: [1, 1.06, 1],
      opacity: [0.60, 0.75, 0.60]
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
  {/* Subtle floating code tokens */}
  {['<div>', 'const', '//', '{}', 'function', 'return', '...', '<About />'].map((token, i) => (
    <motion.div
      key={i}
      className="absolute text-green-500/10 font-mono text-xl md:text-2xl select-none"
      style={{
        left: `${12 + (i * 10) % 76}%`,
        top: `${25 + (i * 7) % 60}%`,
      }}
      animate={{
        y: [-8, 8, -8],
        opacity: [0.12, 0.23, 0.12],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 9 + i,
        repeat: Infinity,
        delay: i * 0.4,
      }}
    >
      {token}
    </motion.div>
  ))}
</motion.div>

      </div>
    </motion.section>
  );
}
