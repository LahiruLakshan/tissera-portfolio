// src/components/projects.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Eye,
  Calendar,
  Users,
  Star,
  Filter,
  ArrowRight,
  Code2,
  Palette,
  Smartphone,
  Zap,
  Brain,
  Globe,
  Terminal,
  Activity,
  Monitor,
  Server,
  FileCode,
  Play,
  CheckCircle,
  Folder,
  GitBranch
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Vesta NFT Marketplace",
    category: "Web3",
    description: "A comprehensive Web3 NFT marketplace with creation, listing, trading features, and analytics dashboard. Built with modern React ecosystem and blockchain integration.",
    image: "https://cdn.prod.website-files.com/66fd5165084e58f9a00f3ba4/67039eb62d33780dcec28d38_Group%201.svg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Ethers.js", "React Query", "Wagmi", "AWS"],
    features: ["NFT Minting", "Trading System", "Analytics Dashboard", "Wallet Integration"],
    github: "https://github.com/example/vesta",
    live: "https://vesta-demo.com",
    status: "PRODUCTION",
    year: "2024",
    team: "Solo Project",
    duration: "4 months",
    featured: true,
    stats: { users: "2.5K+", transactions: "10K+", volume: "$500K+" },
    command: "npm run vesta --production",
    deployment: "AWS + Vercel"
  },
  {
    id: 2,
    title: "MoodifyLK",
    category: "AI/ML",
    description: "AI-powered music classification system using deep learning to predict and classify Sinhala songs based on emotional content and mood analysis.",
    image: "/images/moodifyLK.png",
    tech: ["ReactJS", "Flask", "PyTorch", "Python", "CNN", "Deep Learning"],
    features: ["Emotion Detection", "Music Classification", "Real-time Processing", "Cultural Analysis"],
    github: "https://github.com/example/moodify",
    live: "https://moodify-demo.com",
    status: "COMPLETED",
    year: "2023",
    team: "Individual Project",
    duration: "6 months",
    featured: true,
    stats: { accuracy: "94%", songs: "5K+", users: "1.2K+" },
    command: "python train_model.py --accuracy=94%",
    deployment: "Flask + Heroku"
  },
  {
    id: 3,
    title: "Emirates Offroaders",
    category: "Mobile",
    description: "Mobile app and admin dashboard for UAE off-road community with event management, real-time chat, and social features.",
    image: "/images/emirates_offroaders.png",
    tech: ["Flutter", "ReactJS", "NodeJS", "Firebase", "Firestore"],
    features: ["Community Platform", "Event Management", "Real-time Chat", "Social Features"],
    github: "https://github.com/example/emirates",
    live: "https://play.google.com/emirates",
    status: "LIVE",
    year: "2023",
    team: "Full-Stack Developer",
    duration: "3 months",
    featured: false,
    stats: { downloads: "1K+", rating: "4.8★", events: "100+" },
    command: "flutter build apk --release",
    deployment: "Google Play + Firebase"
  },
  {
    id: 4,
    title: "Hairthentic",
    category: "AI/ML",
    description: "Machine learning-powered mobile app for face shape detection and personalized hairstyle recommendations using computer vision.",
    image: "/svg/hairthentic.svg",
    tech: ["OpenCV", "Scikit-learn", "Python", "Flask", "React Native", "AWS"],
    features: ["Face Detection", "AI Recommendations", "Style Matching", "AR Preview"],
    github: "https://github.com/example/hairthentic",
    live: "https://hairthentic-demo.com",
    status: "COMPLETED",
    year: "2023",
    team: "Team Lead",
    duration: "5 months",
    featured: false,
    stats: { accuracy: "89%", styles: "500+", users: "800+" },
    command: "opencv-python --detect-faces",
    deployment: "AWS + Docker"
  },
  {
    id: 5,
    title: "Signage Fox",
    category: "Web",
    description: "Digital signage management system for controlling and scheduling content across multiple displays with real-time updates.",
    image: "/images/signagefox.png",
    tech: ["ReactJS", "Firebase", "PWA", "Real-time DB"],
    features: ["Multi-screen Control", "Content Scheduling", "Real-time Updates", "Analytics"],
    github: "https://github.com/example/signage",
    live: "https://signagefox-demo.com",
    status: "COMPLETED",
    year: "2024",
    team: "Full-Stack Developer",
    duration: "2 months",
    featured: false,
    stats: { screens: "200+", clients: "50+", uptime: "99.9%" },
    command: "npm start --pwa --realtime",
    deployment: "Firebase Hosting"
  },
  {
    id: 6,
    title: "ohhNFT Platform",
    category: "Web3",
    description: "Multi-featured NFT platform combining art collection, gaming, marketplace, and community features in one ecosystem.",
    image: "https://miro.medium.com/v2/resize:fill:160:160/1*GVzBErI4D9vP1oRgmwaufg.png",
    tech: ["NextJS", "NodeJS", "Heroku", "MySQL", "GraphQL", "Web3"],
    features: ["Art Vault", "Gaming Center", "Marketplace", "Community Hub"],
    github: "https://github.com/example/ohhnft",
    live: "https://ohhnft.com",
    status: "LIVE",
    year: "2023",
    team: "Frontend Developer",
    duration: "4 months",
    featured: false,
    stats: { collections: "10K+", volume: "$2M+", users: "5K+" },
    command: "next build && next start",
    deployment: "Heroku + MySQL"
  }
];

const categories = [
  { name: "All", icon: Globe, count: projects.length, command: "ls -la projects/" },
  { name: "Web3", icon: Zap, count: projects.filter(p => p.category === "Web3").length, command: "grep -r 'web3' projects/" },
  { name: "AI/ML", icon: Brain, count: projects.filter(p => p.category === "AI/ML").length, command: "python -m projects.ai" },
  { name: "Mobile", icon: Smartphone, count: projects.filter(p => p.category === "Mobile").length, command: "flutter doctor projects/" },
  { name: "Web", icon: Code2, count: projects.filter(p => p.category === "Web").length, command: "npm list projects/" }
];

const terminalProjects = [
  { command: "git log --oneline --projects", output: "📁 6 repositories found", delay: 0 },
  { command: "docker ps -a", output: "🐳 All projects containerized", delay: 0.8 },
  { command: "grep -r 'success' deployments/", output: "✅ 100% deployment success rate", delay: 1.6 },
  { command: "wc -l src/**/*.{js,ts,py}", output: "📊 50K+ lines of code written", delay: 2.4 },
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

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

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
      id='projects'
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 from-gray-50 via-gray-100 to-gray-50"
    >
      {/* Matrix-style Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['git', 'npm', 'docker', 'deploy', 'build', 'test', 'push', 'merge'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/10 dark:text-green-400/10 text-gray-600/10 font-mono text-lg select-none"
            style={{
              left: `${5 + (i * 12) % 90}%`,
              top: `${10 + (i * 10) % 80}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-2, 2, -2],
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
          className="max-w-7xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Terminal className="w-8 h-8 text-green-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-400 dark:text-green-400 text-gray-900">
                $ git log --projects
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p 
              className="text-lg sm:text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-gray-500 dark:text-gray-500 text-gray-400">// </span>
              Portfolio of <span className="text-green-400">innovative projects</span> showcasing 
              <span className="text-blue-400"> modern tech</span> and 
              <span className="text-purple-400"> cutting-edge solutions</span>
            </motion.p>
          </motion.div>

          {/* Terminal Info Panel */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="border border-gray-700 dark:border-gray-700 border-gray-300 bg-gray-900/90 dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-800 bg-gray-200 border-b border-gray-700 dark:border-gray-700 border-gray-300">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-400 text-gray-600 ml-2 font-mono">projects@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-900 dark:bg-gray-900 bg-white min-h-[180px]">
                {terminalProjects.map((cmd, index) => (
                  <motion.div
                    key={index}
                    variants={codeVariants}
                    transition={{ delay: cmd.delay }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span className="text-white dark:text-white text-gray-900">
                        {isInView && <TypewriterText text={cmd.command} delay={cmd.delay * 1000} />}
                      </span>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: cmd.delay + 1 }}
                      className="text-blue-300 dark:text-blue-300 text-blue-600 ml-4"
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
                  <span className="text-green-400">$</span>
                  <motion.div
                    className="w-2 h-5 bg-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Filter - Terminal Style */}
          <motion.div 
            variants={itemVariants}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-mono text-green-400 dark:text-green-400 text-gray-900 mb-4">$ ls categories/</h3>
            </div>
            
            <Card className="border border-gray-700 dark:border-gray-700 border-gray-300 bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm shadow-lg p-4">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const isActive = activeCategory === category.name;
                  
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-300 border ${
                        isActive 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30 shadow-md' 
                          : 'bg-gray-800/50 dark:bg-gray-800/50 bg-gray-100/50 text-gray-300 dark:text-gray-300 text-gray-600 border-gray-600 dark:border-gray-600 border-gray-400 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 hover:bg-gray-200/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {category.name}
                      <Badge 
                        variant="outline" 
                        className={`ml-1 font-mono text-xs ${
                          isActive 
                            ? 'bg-green-400/20 text-green-300 border-green-400/30' 
                            : 'bg-gray-700/50 dark:bg-gray-700/50 bg-gray-200/50 text-gray-400 dark:text-gray-400 text-gray-500 border-gray-600 dark:border-gray-600 border-gray-400'
                        }`}
                      >
                        {category.count}
                      </Badge>
                    </motion.button>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-mono font-bold mb-8 text-green-400 dark:text-green-400 text-gray-900 flex items-center gap-2"
              >
                <GitBranch className="w-6 h-6" />
                $ cat featured_projects.json
              </motion.h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AnimatePresence mode="wait">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      variants={cardVariants}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      onHoverStart={() => setHoveredProject(project.id)}
                      onHoverEnd={() => setHoveredProject(null)}
                      className="group"
                    >
                      <Card className="overflow-hidden border border-gray-700 dark:border-gray-700 border-gray-300 bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm hover:bg-gray-800/90 dark:hover:bg-gray-800/90 hover:bg-gray-50/90 hover:shadow-2xl transition-all duration-500 h-full">
                        {/* Terminal Command Header */}
                        <div className="px-4 py-2 bg-gray-800 dark:bg-gray-800 bg-gray-200 border-b border-gray-700 dark:border-gray-700 border-gray-300 font-mono text-xs">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-green-400">$</span>
                            <span className="text-white dark:text-white text-gray-900">{project.command}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant={project.status === 'PRODUCTION' ? 'default' : project.status === 'LIVE' ? 'secondary' : 'outline'}
                                className={`text-xs font-mono ${
                                  project.status === 'PRODUCTION' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                                  project.status === 'LIVE' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                  'bg-gray-500/20 text-gray-400 border-gray-500/30'
                                }`}
                              >
                                {project.status}
                              </Badge>
                            </div>
                            <span className="text-gray-400 dark:text-gray-400 text-gray-600">{project.deployment}</span>
                          </div>
                        </div>

                        {/* Project Image */}
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                          >
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex gap-3">
                                <Button size="sm" className="flex-1 bg-green-500/20 dark:bg-green-500/20 bg-green-600/20 backdrop-blur-sm hover:bg-green-500/30 dark:hover:bg-green-500/30 hover:bg-green-600/30 text-green-300 dark:text-green-300 text-green-200 border border-green-500/30 font-mono">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  ./demo.sh
                                </Button>
                                <Button size="sm" className="flex-1 bg-blue-500/20 dark:bg-blue-500/20 bg-blue-600/20 backdrop-blur-sm hover:bg-blue-500/30 dark:hover:bg-blue-500/30 hover:bg-blue-600/30 text-blue-300 dark:text-blue-300 text-blue-200 border border-blue-500/30 font-mono">
                                  <Github className="w-4 h-4 mr-2" />
                                  git clone
                                </Button>
                              </div>
                            </div>
                          </motion.div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline" className="bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm text-green-400 dark:text-green-400 text-green-600 border-green-500/30 font-mono">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl font-mono text-white dark:text-white text-gray-900 group-hover:text-green-400 dark:group-hover:text-green-400 group-hover:text-green-600 transition-colors line-clamp-1">
                              {project.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 text-gray-500 shrink-0 font-mono">
                              <Calendar className="w-4 h-4" />
                              {project.year}
                            </div>
                          </div>
                          <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm leading-relaxed line-clamp-3">
                            <span className="text-gray-500 dark:text-gray-500 text-gray-400 font-mono">// </span>
                            {project.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Tech Stack */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-green-400 font-mono">
                              <FileCode className="w-4 h-4" />
                              dependencies/
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.slice(0, 5).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs font-mono bg-gray-800/50 dark:bg-gray-800/50 bg-gray-100/50 text-gray-300 dark:text-gray-300 text-gray-600">
                                  {tech}
                                </Badge>
                              ))}
                              {project.tech.length > 5 && (
                                <Badge variant="outline" className="text-xs font-mono">
                                  +{project.tech.length - 5}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 text-blue-400 font-mono">
                              <Folder className="w-4 h-4" />
                              features/
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-xs font-mono">
                                  <CheckCircle className="w-3 h-3 text-green-400 shrink-0" />
                                  <span className="text-gray-300 dark:text-gray-300 text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Project Stats */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 text-purple-400 font-mono">metrics.json</h4>
                            <div className="grid grid-cols-3 gap-3">
                              {Object.entries(project.stats).map(([key, value]) => (
                                <div key={key} className="text-center p-2 bg-gray-800/30 dark:bg-gray-800/30 bg-gray-100/30 rounded border border-gray-700 dark:border-gray-700 border-gray-300">
                                  <div className="text-sm font-bold text-green-400 font-mono">{value}</div>
                                  <div className="text-xs text-gray-400 dark:text-gray-400 text-gray-500 capitalize font-mono">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {regularProjects.length > 0 && (
            <div>
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-mono font-bold mb-8 text-green-400 dark:text-green-400 text-gray-900"
              >
                $ ls other_projects/
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                  {regularProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      variants={cardVariants}
                      custom={index + featuredProjects.length}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, scale: 0.9 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="group border border-gray-700 dark:border-gray-700 border-gray-300 bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm hover:bg-gray-800/90 dark:hover:bg-gray-800/90 hover:bg-gray-50/90 hover:shadow-lg transition-all duration-300 h-full">
                        {/* Terminal Header */}
                        <div className="px-3 py-2 bg-gray-800 dark:bg-gray-800 bg-gray-200 border-b border-gray-700 dark:border-gray-700 border-gray-300 font-mono text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">$</span>
                            <span className="text-white dark:text-white text-gray-900 truncate">{project.command}</span>
                          </div>
                        </div>

                        {/* Compact Image */}
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="outline" className="bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm text-green-400 dark:text-green-400 text-green-600 border-green-500/30 text-xs font-mono">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-mono text-white dark:text-white text-gray-900 group-hover:text-green-400 dark:group-hover:text-green-400 group-hover:text-green-600 transition-colors line-clamp-1">
                              {project.title}
                            </CardTitle>
                            <div className="text-xs text-gray-400 dark:text-gray-400 text-gray-500 font-mono">{project.year}</div>
                          </div>
                          <p className="text-gray-300 dark:text-gray-300 text-gray-600 text-sm line-clamp-2">
                            <span className="text-gray-500 dark:text-gray-500 text-gray-400 font-mono">// </span>
                            {project.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Compact Tech Stack */}
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs font-mono bg-gray-800/50 dark:bg-gray-800/50 bg-gray-100/50 text-gray-300 dark:text-gray-300 text-gray-600">
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 3 && (
                              <Badge variant="outline" className="text-xs font-mono">
                                +{project.tech.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1 text-xs font-mono bg-green-500/10 dark:bg-green-500/10 bg-green-600/10 text-green-400 dark:text-green-400 text-green-600 border-green-500/30 hover:bg-green-500/20 dark:hover:bg-green-500/20 hover:bg-green-600/20">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              ./demo
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 text-xs font-mono bg-blue-500/10 dark:bg-blue-500/10 bg-blue-600/10 text-blue-400 dark:text-blue-400 text-blue-600 border-blue-500/30 hover:bg-blue-500/20 dark:hover:bg-blue-500/20 hover:bg-blue-600/20">
                              <Github className="w-3 h-3 mr-1" />
                              git
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Terminal Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <Card className="border border-gray-700 dark:border-gray-700 border-gray-300 bg-gray-900/90 dark:bg-gray-900/90 bg-white/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-green-400 dark:text-green-400 text-green-600 flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4" />
                  <span>All repositories loaded successfully. Ready for collaboration!</span>
                  <motion.div
                    className="w-2 h-4 bg-green-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-500/20 to-blue-500/20 hover:from-green-500/30 hover:to-blue-500/30 text-green-400 dark:text-green-400 text-green-600 border border-green-500/30 font-mono px-8 py-4 transition-all duration-300"
                  >
                    <span className="text-green-400">$ </span>
                    ./collaborate.sh --start-project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
