// src/components/experience.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Users,
  Trophy,
  TrendingUp,
  ExternalLink,
  Building,
  Clock,
  Star,
  ChevronRight,
  Code2,
  Palette,
  Smartphone,
  Zap,
  Award,
  Terminal,
  Activity,
  GitBranch,
  FileCode,
  CheckCircle,
  Monitor,
  Server,
  Database
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Beebee Digital Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "Dec 2024 - Jul 2025",
    duration: "8 months",
    type: "Full-time",
    status: "CURRENT",
    description: "Built and maintained NFT marketplace platforms including ohhNFT and Owlies NFT Store with strong focus on Web3 integration, analytics, and user experience.",
    achievements: [
      "Developed and maintained ohhNFT web and Owlies NFT Store",
      "Implemented NFT creation, listing, and trading features",
      "Designed and built an analytics dashboard for marketplace insights",
      "Integrated blockchain functionalities and wallet connectivity",
      "Conducted code reviews and optimized application performance",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Ethers.js",
      "React Query",
      "Web3",
      "Wagmi",
      "AWS",
      "React Native",
    ],
    projects: ["ohhNFT", "Owlies NFT Store"],
    highlights: {
      impact: "Built high-performing NFT marketplaces",
      growth: "Enhanced insights with analytics dashboards",
      team: "Collaborated with teams for timely delivery",
    },
    command: "git checkout feature/web3-marketplace",
    deployments: ["AWS", "Vercel"],
    metrics: { users: "5K+", volume: "$1M+", uptime: "99.9%" },
    icon: Code2,
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "PT. Crypto Canary Network",
    location: "Remote",
    period: "Nov 2023 - Nov 2024",
    duration: "1 year",
    type: "Full-time",
    status: "COMPLETED",
    description: "Led development of Vesta Web & Mobile Application, a comprehensive Web3 NFT marketplace with advanced trading features and analytics dashboard.",
    achievements: [
      "Built complete Web3 NFT marketplace from scratch",
      "Implemented advanced trading algorithms and analytics",
      "Managed React Native mobile app development",
      "Integrated multiple blockchain networks and wallets",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Ethers.js",
      "React Native",
      "Web3",
      "AWS",
    ],
    projects: ["Vesta NFT Marketplace"],
    highlights: {
      impact: "Led core product development",
      growth: "Handled $500K+ in transactions",
      team: "Mentored 2 junior developers",
    },
    command: "npm run vesta --production",
    deployments: ["AWS", "Mobile Stores"],
    metrics: { transactions: "10K+", volume: "$500K+", rating: "4.8★" },
    icon: Zap,
  },
  {
    id: 3,
    role: "Full-Stack Developer",
    company: "Beebee Digital Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Oct 2023",
    duration: "10 months",
    type: "Full-time",
    status: "COMPLETED",
    description: "Developed and enhanced multiple client projects including NFT platforms and digital marketplaces with modern web technologies.",
    achievements: [
      "Enhanced ohhNFT platform UI components",
      "Resolved critical mobile wallet integration issues",
      "Implemented GraphQL endpoints for seamless functionality",
      "Delivered 5+ client projects successfully",
    ],
    technologies: ["Next.js", "Node.js", "MySQL", "GraphQL", "Heroku", "Web3"],
    projects: ["ohhNFT Platform"],
    highlights: {
      impact: "Improved platform performance by 40%",
      growth: "Delivered 5+ successful projects",
      team: "Collaborated with 3-person dev team",
    },
    command: "docker-compose up --scale backend=3",
    deployments: ["Heroku", "Firebase"],
    metrics: { performance: "+40%", projects: "5+", team: "3 devs" },
    icon: Code2,
  },
  {
    id: 4,
    role: "Software Engineer (Intern)",
    company: "Zynergyx Technologies Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "Sep 2021 - Sep 2022",
    duration: "1 year",
    type: "Internship",
    status: "FOUNDATION",
    description: "Started my professional journey developing enterprise solutions, admin dashboards, and blockchain-based platforms while learning industry best practices.",
    achievements: [
      "Built enterprise admin dashboard from scratch",
      "Developed VIP blockchain verification platform",
      "Created Emirates Offroaders mobile app and admin panel",
      "Learned modern development practices and team collaboration",
    ],
    technologies: [
      "React.js",
      "Scala",
      "Flutter",
      "Firebase",
      "Azure",
      "MySQL",
    ],
    projects: ["VIP Platform", "Emirates Offroaders", "Enterprise Dashboard"],
    highlights: {
      impact: "Built 3 major applications",
      growth: "Transitioned from intern to full-time offer",
      team: "Worked closely with senior architects",
    },
    command: "flutter build apk --release",
    deployments: ["Azure", "Firebase", "Play Store"],
    metrics: { apps: "3", transition: "Intern→FTE", rating: "A+" },
    icon: Building,
  },
];

const stats = [
  { label: "Years Experience", value: "3+", icon: Clock, command: "uptime" },
  { label: "Companies Worked", value: "3", icon: Building, command: "ls companies/" },
  { label: "Projects Delivered", value: "15+", icon: Trophy, command: "git log --count" },
  { label: "Technologies Mastered", value: "20+", icon: Star, command: "npm list -g" },
];

const terminalExperience = [
  { command: "whoami", output: "senior-developer with 3+ years experience", delay: 0 },
  { command: "ls -la experience/", output: "📁 4 positions across 3 companies", delay: 0.8 },
  { command: "grep -r 'success' projects/", output: "✅ 15+ projects delivered successfully", delay: 1.6 },
  { command: "git log --since='2021' --oneline", output: "🚀 From intern to senior in 3 years", delay: 2.4 },
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

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
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
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const timelineVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.8 + index * 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
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
      id="experience"
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['git', 'npm', 'docker', 'deploy', 'build', 'commit', 'push', 'merge', 'test', 'prod'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-lg select-none"
            style={{
              left: `${15 + (i * 8) % 70}%`,
              top: `${10 + (i * 9) % 80}%`,
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
          className="max-w-6xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ cat career_journey.md
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
              Evolution from <span className="text-green-600 dark:text-green-400">intern</span> to 
              <span className="text-blue-600 dark:text-blue-400"> senior engineer</span>, building 
              <span className="text-purple-600 dark:text-purple-400"> innovative solutions</span>
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
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">experience@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[180px]">
                {terminalExperience.map((cmd, index) => (
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

          {/* Experience Stats - Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-mono text-green-600 dark:text-green-400 mb-4">$ system --stats</h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gray-50/95 dark:hover:bg-gray-800/90 transition-all duration-300">
                      {/* Terminal Command Header */}
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 dark:text-green-400">$</span>
                          <span className="text-gray-800 dark:text-white">{stat.command}</span>
                        </div>
                      </div>

                      <CardContent className="p-6 text-center">
                        <motion.div
                          className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                          {stat.label.toLowerCase().replace(/\s/g, '_')}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-mono text-green-600 dark:text-green-400 mb-4">$ git log --graph --oneline</h3>
            </div>

            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 top-10 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-green-500 transform -translate-x-px md:-translate-x-1/2 origin-top"
            />

            {/* Experience Cards */}
            <div className="space-y-16">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={exp.id}
                    variants={cardVariants}
                    custom={index}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } group`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg transform -translate-x-1/2 z-10 border-4 border-white dark:border-gray-900"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      />
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-gray-50/98 dark:hover:bg-gray-800/95 hover:shadow-2xl transition-all duration-500 overflow-hidden group/card">
                        {/* Terminal Command Header */}
                        <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-green-600 dark:text-green-400">$</span>
                              <span className="text-gray-800 dark:text-white">{exp.command}</span>
                            </div>
                            <Badge
                              variant={exp.status === "CURRENT" ? "default" : "secondary"}
                              className={`text-xs font-mono ${
                                exp.status === "CURRENT" ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30' :
                                exp.status === "FOUNDATION" ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/50 dark:border-blue-500/30' :
                                'bg-gray-100 dark:bg-gray-500/20 text-gray-700 dark:text-gray-400 border-gray-500/50 dark:border-gray-500/30'
                              }`}
                            >
                              {exp.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-gray-600 dark:text-gray-400">Deployments:</span>
                            <div className="flex gap-2">
                              {exp.deployments.map((deploy) => (
                                <Badge key={deploy} variant="outline" className="text-xs font-mono bg-gray-200 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 border-gray-400 dark:border-gray-600">
                                  {deploy}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <CardHeader className="pb-4 relative">
                          {/* Role & Company */}
                          <div className="space-y-3">
                            <CardTitle className="text-xl font-mono text-gray-900 dark:text-white group-hover/card:text-green-600 dark:group-hover/card:text-green-400 transition-colors flex items-center gap-3">
                              <motion.div
                                className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30"
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <IconComponent className="w-5 h-5 text-green-600 dark:text-green-400" />
                              </motion.div>
                              {exp.role}
                            </CardTitle>

                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold font-mono">
                                <Building className="w-4 h-4" />
                                {exp.company}
                              </div>

                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {exp.period}
                                </div>
                                <Badge variant="outline" className="text-xs font-mono bg-gray-100 dark:bg-gray-800/50 border-gray-400 dark:border-gray-600">
                                  {exp.duration}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                            <span className="text-gray-400 dark:text-gray-500 font-mono">// </span>
                            {exp.description}
                          </p>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-600 dark:text-green-400 font-mono">
                              <FileCode className="w-4 h-4" />
                              achievements/
                            </h4>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-2 text-sm font-mono"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={
                                    isInView
                                      ? { opacity: 1, x: 0 }
                                      : { opacity: 0, x: -10 }
                                  }
                                  transition={{
                                    delay: 1.2 + index * 0.3 + idx * 0.1,
                                  }}
                                >
                                  <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                                  <span className="text-gray-600 dark:text-gray-300">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono">
                              <Code2 className="w-4 h-4" />
                              dependencies/
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs font-mono bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors cursor-default"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Metrics */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono">
                              <TrendingUp className="w-4 h-4" />
                              metrics.json
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                              {Object.entries(exp.metrics).map(([key, value]) => (
                                <div
                                  key={key}
                                  className="text-center p-2 bg-gray-100 dark:bg-gray-800/30 rounded border border-gray-300 dark:border-gray-700"
                                >
                                  <div className="text-sm font-bold text-green-600 dark:text-green-400 font-mono">{value}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize font-mono">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Projects Link */}
                          {exp.projects && exp.projects.length > 0 && (
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full font-mono bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/50 dark:border-green-500/30 hover:bg-green-200 dark:hover:bg-green-500/20"
                              >
                                <span className="text-green-600 dark:text-green-400">$ </span>
                                ./view_projects.sh ({exp.projects.length})
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </Button>
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Terminal Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4" />
                  <span>Career journey loaded. Ready for new opportunities!</span>
                  <motion.div
                    className="w-2 h-4 bg-green-600 dark:bg-green-400"
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
                    className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 hover:from-green-200 hover:to-blue-200 dark:hover:from-green-500/30 dark:hover:to-blue-500/30 text-green-600 dark:text-green-400 border border-green-500/50 dark:border-green-500/30 font-mono px-8 py-4 transition-all duration-300"
                  >
                    <span className="text-green-600 dark:text-green-400">$ </span>
                    ./connect.sh --new-opportunities
                    <ChevronRight className="w-5 h-5 ml-2" />
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
