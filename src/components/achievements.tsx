// src/components/achievements.tsx
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Award, 
  Trophy, 
  Star, 
  Medal, 
  Crown, 
  Zap,
  Calendar,
  Users,
  ExternalLink,
  CheckCircle,
  Target,
  BookOpen,
  Code2,
  Lightbulb,
  Rocket,
  Building,
  GraduationCap,
  PartyPopper,
  Sparkles,
  TrendingUp,
  Briefcase,
  Terminal,
  Activity,
  GitBranch,
  FileCode,
  Monitor,
  Server,
  Database
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    id: 1,
    title: "Bachelor's Degree in Software Engineering",
    category: "Education",
    source: "University of Westminster, UK (IIT Affiliated)",
    year: "2023",
    description: "Successfully completed BEng (Hons) Software Engineering with focus on modern development practices and emerging technologies.",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    type: "ACADEMIC",
    level: "Major",
    link: "#",
    stats: { duration: "3 Years", grade: "Honors", focus: "Software Engineering" },
    skills: ["Software Architecture", "Project Management", "Team Leadership", "Technical Documentation"],
    command: "graduate --degree=BEng --honors",
    achievement_date: "2023-07-15",
    verification: "VERIFIED"
  },
  {
    id: 2,
    title: "Google HashCode 2021 Participant",
    category: "Competition",
    source: "Google",
    year: "2021",
    description: "Participated in Google's annual team programming competition, solving complex algorithmic challenges under time pressure.",
    icon: Code2,
    color: "from-red-500 to-orange-500",
    bgColor: "from-red-500/10 to-orange-500/10",
    type: "COMPETITION",
    level: "International",
    link: "https://codingcompetitions.withgoogle.com/hashcode",
    stats: { participants: "10K+ Teams", duration: "4 Hours", ranking: "Top 30%" },
    skills: ["Algorithm Design", "Problem Solving", "Team Collaboration", "Time Management"],
    command: "compete --event=hashcode --team=3",
    achievement_date: "2021-02-25",
    verification: "GOOGLE_CERTIFIED"
  },
  {
    id: 3,
    title: "Py-Hack 2021 Competition",
    category: "Hackathon",
    source: "IIT IEEE Student Branch",
    year: "2021",
    description: "Selected participant in Python programming hackathon organized by IEEE, showcasing innovative solutions and coding expertise.",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    type: "HACKATHON",
    level: "National",
    link: "#",
    stats: { duration: "24 Hours", team: "3 Members", projects: "50+ Teams" },
    skills: ["Python Development", "Rapid Prototyping", "Innovation", "Presentation Skills"],
    command: "hack --language=python --duration=24h",
    achievement_date: "2021-11-12",
    verification: "IEEE_CERTIFIED"
  },
  {
    id: 4,
    title: "IIT Cutting Edge 2021 Selection",
    category: "Recognition",
    source: "Informatics Institute of Technology",
    year: "2021",
    description: "Selected for IIT's premier technology showcase event, demonstrating exceptional academic performance and technical skills.",
    icon: Star,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10",
    type: "RECOGNITION",
    level: "Institutional",
    link: "#",
    stats: { selected: "Top 50 Students", criteria: "Academic + Technical", recognition: "Merit Based" },
    skills: ["Academic Excellence", "Technical Presentation", "Research Skills", "Innovation"],
    command: "select --criteria=merit --top=50",
    achievement_date: "2021-08-20",
    verification: "IIT_CERTIFIED"
  },
  {
    id: 5,
    title: "Full-Stack Development Expertise",
    category: "Professional",
    source: "Industry Recognition",
    year: "2024",
    description: "Achieved recognition for delivering high-quality full-stack solutions across multiple domains including Web3, AI/ML, and mobile development.",
    icon: Trophy,
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-500/10 to-purple-500/10",
    type: "PROFESSIONAL",
    level: "Industry",
    link: "#",
    stats: { projects: "20+ Completed", technologies: "15+ Mastered", clients: "100% Satisfied" },
    skills: ["Full-Stack Development", "Web3 Integration", "AI/ML Implementation", "Mobile Development"],
    command: "achieve --level=senior --stack=full",
    achievement_date: "2024-01-15",
    verification: "INDUSTRY_VERIFIED"
  },
  {
    id: 6,
    title: "Open Source Contributions",
    category: "Community",
    source: "GitHub Community",
    year: "2023-2024",
    description: "Active contributor to open source projects, sharing knowledge and collaborating with the global developer community.",
    icon: Building,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/10 to-blue-500/10",
    type: "COMMUNITY",
    level: "Global",
    link: "https://github.com/lahiru-lakshan-tissera",
    stats: { contributions: "500+ Commits", repos: "15+ Projects", stars: "100+ Received" },
    skills: ["Open Source Development", "Community Engagement", "Code Review", "Technical Writing"],
    command: "git contribute --open-source --global",
    achievement_date: "2023-12-31",
    verification: "GITHUB_VERIFIED"
  }
];

const categoryStats = [
  { category: "Education", count: achievements.filter(a => a.category === "Education").length, icon: BookOpen, command: "ls education/" },
  { category: "Competition", count: achievements.filter(a => a.category === "Competition").length, icon: Target, command: "grep -r 'competition'" },
  { category: "Professional", count: achievements.filter(a => a.category === "Professional").length, icon: Briefcase, command: "ps aux | grep work" },
  { category: "Community", count: achievements.filter(a => a.category === "Community").length, icon: Users, command: "git log --author=community" }
];

const milestones = [
  { year: "2020", event: "Started University", icon: GraduationCap, command: "git init university" },
  { year: "2021", event: "First Competitions", icon: Trophy, command: "compete --start" },
  { year: "2022", event: "Industry Internship", icon: Building, command: "join --company=industry" },
  { year: "2023", event: "Graduated & Career", icon: Rocket, command: "graduate && career" },
  { year: "2024", event: "Senior Developer", icon: Star, command: "promote --level=senior" }
];

const terminalAchievements = [
  { command: "ls -la achievements/", output: "📜 6 major achievements unlocked", delay: 0 },
  { command: "grep -r 'recognition' awards/", output: "🏆 Academic + Industry recognition", delay: 0.8 },
  { command: "git log --since='2020' --achievements", output: "⭐ 5-year journey of continuous growth", delay: 1.6 },
  { command: "systemctl status developer", output: "● Active: achieving excellence since 2020", delay: 2.4 },
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

export function Achievements() {
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
        delay: index * 0.15,
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
      id='achievements'
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['award', 'git', 'achieve', 'unlock', 'trophy', 'star', 'medal', 'crown'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-lg select-none"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${10 + (i * 12) % 80}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
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
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ cat achievements.log
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
              Journey of <span className="text-green-600 dark:text-green-400">continuous learning</span>, 
              <span className="text-blue-600 dark:text-blue-400"> professional growth</span>, and 
              <span className="text-purple-600 dark:text-purple-400"> recognition</span>
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
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">achievements@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[180px]">
                {terminalAchievements.map((cmd, index) => (
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

          {/* Achievement Categories - Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-mono text-green-600 dark:text-green-400 mb-4">$ ls -la categories/</h3>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.category}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gray-50/95 dark:hover:bg-gray-800/90 transition-all duration-300">
                      {/* Terminal Command Header */}
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600 dark:text-green-400">$</span>
                          <span className="text-gray-800 dark:text-white truncate">{stat.command}</span>
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
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono mb-1">{stat.count}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                          {stat.category.toLowerCase()}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline Milestones - Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-mono text-green-600 dark:text-green-400 mb-4">$ git log --graph --milestones</h3>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.8, duration: 1.2 }}
              />
              
              <div className="flex justify-between items-center relative">
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <motion.div
                      key={milestone.year}
                      className="flex flex-col items-center group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white shadow-lg mb-3 z-10 border-4 border-white dark:border-gray-900"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="text-center">
                        <div className="font-bold text-green-600 dark:text-green-400 font-mono text-sm">{milestone.year}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 max-w-20 leading-tight font-mono">
                          {milestone.event}
                        </div>
                      </div>
                      
                      {/* Command Tooltip */}
                      <motion.div
                        className="absolute top-full mt-2 bg-white/95 dark:bg-black/90 border border-green-500/30 rounded px-2 py-1 font-mono text-xs text-green-600 dark:text-green-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        initial={{ y: -10, opacity: 0 }}
                      >
                        <span className="text-green-600 dark:text-green-400">$ </span>
                        {milestone.command}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid - Terminal Style */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-mono text-green-600 dark:text-green-400">$ cat achievements/*.json</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={achievement.id}
                    variants={cardVariants}
                    custom={index}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group"
                  >
                    <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm hover:bg-gray-50/98 dark:hover:bg-gray-800/95 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                      {/* Terminal Command Header */}
                      <div className="px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-400">$</span>
                            <span className="text-gray-800 dark:text-white">{achievement.command}</span>
                          </div>
                          <Badge
                            variant={achievement.type === "ACADEMIC" ? "default" : "secondary"}
                            className={`text-xs font-mono ${
                              achievement.type === "ACADEMIC" ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30' :
                              achievement.type === "COMPETITION" ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/50 dark:border-blue-500/30' :
                              achievement.type === "PROFESSIONAL" ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/50 dark:border-purple-500/30' :
                              'bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 border-orange-500/50 dark:border-orange-500/30'
                            }`}
                          >
                            {achievement.type}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Status: {achievement.verification}</span>
                          <span className="text-gray-600 dark:text-gray-400">{achievement.achievement_date}</span>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <motion.div
                            className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 shadow-lg"
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                          </motion.div>

                          {/* Title and Info */}
                          <div className="flex-1">
                            <CardTitle className="text-lg font-mono text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2 line-clamp-2">
                              {achievement.title}
                            </CardTitle>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm font-mono">
                                <Building className="w-4 h-4" />
                                {achievement.source}
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs font-mono bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 border-gray-400 dark:border-gray-600">
                                  {achievement.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 font-mono">
                                  <Calendar className="w-3 h-3" />
                                  {achievement.year}
                                </div>
                                <Badge 
                                  variant={achievement.level === 'Major' ? 'default' : 'secondary'}
                                  className="text-xs font-mono"
                                >
                                  {achievement.level}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          <span className="text-gray-400 dark:text-gray-500 font-mono">// </span>
                          {achievement.description}
                        </p>

                        {/* Statistics */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-600 dark:text-green-400 font-mono text-sm">
                            <FileCode className="w-4 h-4" />
                            stats.json
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {Object.entries(achievement.stats).map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between text-sm bg-gray-100 dark:bg-gray-800/30 rounded-lg p-2 border border-gray-300 dark:border-gray-700">
                                <span className="text-gray-500 dark:text-gray-400 capitalize font-mono">{key.replace(/([A-Z])/g, '_$1').toLowerCase()}:</span>
                                <span className="font-medium text-green-600 dark:text-green-400 font-mono">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Skills Gained */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-mono text-sm">
                            <Lightbulb className="w-4 h-4" />
                            skills/
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {achievement.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs font-mono bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Button */}
                        {achievement.link && achievement.link !== "#" && (
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full font-mono bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/50 dark:border-green-500/30 hover:bg-green-200 dark:hover:bg-green-500/20"
                              asChild
                            >
                              <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                                <span className="text-green-600 dark:text-green-400">$ </span>
                                ./verify_certificate.sh
                                <ExternalLink className="w-4 h-4 ml-2" />
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Terminal Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4" />
                  <span>Achievement system loaded. Ready for new challenges!</span>
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
                    ./collaborate.sh --unlock-potential
                    <Rocket className="w-5 h-5 ml-2" />
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
