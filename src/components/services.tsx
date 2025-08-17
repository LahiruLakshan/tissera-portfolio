// src/components/services.tsx
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  Globe,
  Cpu,
  Shield,
  Rocket,
  Eye,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Terminal,
  Activity,
  Monitor,
  Server,
  FileCode,
  Play
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web application development using React, Next.js, Node.js, and modern databases",
    features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
    command: "npm run full-stack",
    price: "$2000+",
    deliveryTime: "4-8 weeks",
    status: "ACTIVE",
    delay: 0.1,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with modern design principles",
    features: ["Figma/Adobe XD", "Responsive Design", "User Research", "Prototyping"],
    command: "design --responsive --modern",
    price: "$800+",
    deliveryTime: "2-4 weeks",
    status: "POPULAR",
    delay: 0.2,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and Flutter frameworks",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"],
    command: "mobile-dev --cross-platform",
    price: "$3000+",
    deliveryTime: "6-12 weeks",
    status: "ACTIVE",
    delay: 0.3,
  },
  {
    icon: Zap,
    title: "Web3 Development",
    description: "Blockchain integration, smart contracts, and decentralized application development",
    features: ["Smart Contracts", "DeFi/NFT", "Ethers.js", "Web3 Integration"],
    command: "web3 deploy --mainnet",
    price: "$5000+",
    deliveryTime: "8-16 weeks",
    status: "BETA",
    delay: 0.4,
  },
  {
    icon: Cpu,
    title: "AI/ML Integration",
    description: "Machine learning solutions and AI-powered features for intelligent applications",
    features: ["PyTorch/TensorFlow", "Computer Vision", "NLP", "Data Analysis"],
    command: "python train_model.py",
    price: "$4000+",
    deliveryTime: "6-10 weeks",
    status: "ACTIVE",
    delay: 0.5,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture, deployment automation, and infrastructure management",
    features: ["AWS/Firebase", "Docker", "CI/CD", "Performance Opt"],
    command: "aws deploy --auto-scale",
    price: "$1500+",
    deliveryTime: "3-6 weeks",
    status: "ACTIVE",
    delay: 0.6,
  }
];

const processSteps = [
  { 
    step: "01", 
    title: "$ git init", 
    subtitle: "Discovery", 
    description: "Understanding your vision and requirements",
    command: "git init project && git add requirements"
  },
  { 
    step: "02", 
    title: "$ npm plan", 
    subtitle: "Planning", 
    description: "Creating detailed roadmap and architecture",
    command: "npm run plan --architecture --roadmap"
  },
  { 
    step: "03", 
    title: "$ npm build", 
    subtitle: "Development", 
    description: "Building with latest technologies and best practices",
    command: "npm run build --production --optimize"
  },
  { 
    step: "04", 
    title: "$ git deploy", 
    subtitle: "Delivery", 
    description: "Testing, deployment, and ongoing support",
    command: "git push origin production && npm test"
  }
];

const terminalServices = [
  { command: "ls -la services/", output: "📁 6 service packages available", delay: 0 },
  { command: "systemctl status developer", output: "● Active: coding (since 2020)", delay: 0.8 },
  { command: "cat portfolio_stats.json", output: "✅ 20+ projects delivered successfully", delay: 1.6 },
  { command: "npm list --global", output: "🚀 Full-stack → Mobile → AI/ML → Web3", delay: 2.4 },
];

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

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
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
      id='services'
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['npm', 'git', 'docker', 'api', 'deploy', 'build', 'test', 'push'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-lg select-none"
            style={{
              left: `${15 + (i * 10) % 70}%`,
              top: `${10 + (i * 12) % 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.4,
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
          className="max-w-7xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30">
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ cat services.json
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-gray-400 dark:text-gray-500">// </span>
              End-to-end solutions with <span className="text-green-600 dark:text-green-400">quality</span>, 
              <span className="text-blue-600 dark:text-blue-400"> precision</span>, and 
              <span className="text-purple-600 dark:text-purple-400"> innovation</span>
            </motion.p>
          </motion.div>

          {/* Terminal Info Panel */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">services@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[180px]">
                {terminalServices.map((cmd, index) => (
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  <Card className="relative h-full border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gray-50/95 dark:hover:bg-gray-800/90 transition-all duration-500 overflow-hidden">
                    {/* Terminal Command Header */}
                    <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 dark:text-green-400">$</span>
                        <span className="text-gray-800 dark:text-white">{service.command}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={service.status === 'POPULAR' ? 'default' : service.status === 'BETA' ? 'secondary' : 'outline'}
                          className={`text-xs font-mono ${
                            service.status === 'POPULAR' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30' :
                            service.status === 'BETA' ? 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/50 dark:border-yellow-500/30' :
                            'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/50 dark:border-blue-500/30'
                          }`}
                        >
                          {service.status}
                        </Badge>
                        <span className="text-gray-600 dark:text-gray-400">{service.deliveryTime}</span>
                      </div>
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      {/* Icon */}
                      <motion.div 
                        className="inline-flex p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 mb-4 border border-green-500/30"
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold font-mono mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono">{service.price}</span>
                        <Badge variant="outline" className="font-mono text-xs bg-gray-100 dark:bg-gray-800/50 border-gray-400 dark:border-gray-600">
                          Starting from
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-6">
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        <span className="text-gray-400 dark:text-gray-500 font-mono">// </span>
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center gap-2 font-mono">
                          <FileCode className="w-4 h-4" />
                          include/
                        </h4>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              className="flex items-center gap-2 text-sm font-mono"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: service.delay + idx * 0.1 }}
                            >
                              <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="outline" 
                          className="w-full bg-gray-100 dark:bg-black/50 border-green-500/50 dark:border-green-500/30 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-500/10 font-mono transition-all duration-300"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          <span>./start_project.sh</span>
                        </Button>
                      </motion.div>
                    </CardContent>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
                      }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section - Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-mono font-bold mb-4 text-green-600 dark:text-green-400 flex items-center justify-center gap-3">
              <Terminal className="w-8 h-8" />
              $ cat workflow.md
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-mono">
              <span className="text-gray-400 dark:text-gray-500">// </span>
              Proven development pipeline for successful project delivery
            </p>
          </motion.div>

          {/* Process Steps - Terminal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={cardVariants}
                custom={index + 6}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center group relative"
              >
                <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gray-50/95 dark:hover:bg-gray-800/90 transition-all duration-300 p-6 overflow-hidden">
                  {/* Terminal Header */}
                  <div className="mb-4 p-2 bg-gray-100 dark:bg-black/20 rounded border border-gray-300 dark:border-gray-700 font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">$ {step.title}</div>
                    <div className="text-gray-500 dark:text-gray-500 mt-1"># {step.subtitle}</div>
                  </div>

                  {/* Step Number */}
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Step Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-mono">
                    <span className="text-gray-400 dark:text-gray-500">// </span>
                    {step.description}
                  </p>

                  {/* Command */}
                  <div className="mt-4 p-2 bg-gray-100 dark:bg-black/30 rounded font-mono text-xs">
                    <span className="text-green-600 dark:text-green-400">$ </span>
                    <span className="text-gray-600 dark:text-gray-300">{step.command}</span>
                  </div>
                </Card>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500/50 to-blue-500/50 transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Terminal Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Services loaded successfully. Ready to execute your project!</span>
                  <motion.div
                    className="w-2 h-4 bg-green-600 dark:bg-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                <div className="mt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 hover:from-green-200 hover:to-blue-200 dark:hover:from-green-500/30 dark:hover:to-blue-500/30 text-green-600 dark:text-green-400 border border-green-500/50 dark:border-green-500/30 font-mono px-8 py-4 transition-all duration-300"
                  >
                    <span className="text-green-600 dark:text-green-400">$ </span>
                    ./contact_me.sh --start-project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
