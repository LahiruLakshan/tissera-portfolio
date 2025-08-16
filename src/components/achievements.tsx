// src/components/achievements.tsx
"use client";

import { useRef } from 'react';
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
  Briefcase
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
    type: "Academic",
    level: "Major",
    link: "#",
    stats: { duration: "3 Years", grade: "Honors", focus: "Software Engineering" },
    skills: ["Software Architecture", "Project Management", "Team Leadership", "Technical Documentation"]
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
    type: "Competition",
    level: "International",
    link: "https://codingcompetitions.withgoogle.com/hashcode",
    stats: { participants: "10K+ Teams", duration: "4 Hours", ranking: "Top 30%" },
    skills: ["Algorithm Design", "Problem Solving", "Team Collaboration", "Time Management"]
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
    type: "Hackathon",
    level: "National",
    link: "#",
    stats: { duration: "24 Hours", team: "3 Members", projects: "50+ Teams" },
    skills: ["Python Development", "Rapid Prototyping", "Innovation", "Presentation Skills"]
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
    type: "Academic Excellence",
    level: "Institutional",
    link: "#",
    stats: { selected: "Top 50 Students", criteria: "Academic + Technical", recognition: "Merit Based" },
    skills: ["Academic Excellence", "Technical Presentation", "Research Skills", "Innovation"]
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
    type: "Professional Achievement",
    level: "Industry",
    link: "#",
    stats: { projects: "20+ Completed", technologies: "15+ Mastered", clients: "100% Satisfied" },
    skills: ["Full-Stack Development", "Web3 Integration", "AI/ML Implementation", "Mobile Development"]
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
    type: "Community Contribution",
    level: "Global",
    link: "https://github.com/lahiru-lakshan-tissera",
    stats: { contributions: "500+ Commits", repos: "15+ Projects", stars: "100+ Received" },
    skills: ["Open Source Development", "Community Engagement", "Code Review", "Technical Writing"]
  }
];

const categoryStats = [
  { category: "Education", count: achievements.filter(a => a.category === "Education").length, icon: BookOpen },
  { category: "Competition", count: achievements.filter(a => a.category === "Competition").length, icon: Target },
  { category: "Professional", count: achievements.filter(a => a.category === "Professional").length, icon: Briefcase },
  { category: "Community", count: achievements.filter(a => a.category === "Community").length, icon: Users }
];

const milestones = [
  { year: "2020", event: "Started University", icon: GraduationCap },
  { year: "2021", event: "First Competitions", icon: Trophy },
  { year: "2022", event: "Industry Internship", icon: Building },
  { year: "2023", event: "Graduated & Professional Career", icon: Rocket },
  { year: "2024", event: "Senior Developer Role", icon: Star }
];

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

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-muted/20 via-background to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Achievement Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[Trophy, Star, Medal, Award, Crown].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${10 + (i * 20)}%`,
              top: `${20 + (i * 15)}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Icon size={40} />
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
          {/* Section Header */}
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
                className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Achievements & Recognition
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A journey of <span className="text-primary font-semibold">continuous learning</span>, 
              <span className="text-accent font-semibold"> professional growth</span>, and 
              <span className="text-primary font-semibold"> recognition</span> for dedication and innovation.
            </motion.p>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Achievement Categories Overview */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {categoryStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.category}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="text-center border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div
                        className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.count}</div>
                      <div className="text-sm text-muted-foreground">{stat.category}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Timeline Milestones */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-2xl font-headline font-bold text-center mb-10 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Journey Milestones
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <motion.div
                className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
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
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg mb-3 z-10"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <div className="text-center">
                        <div className="font-bold text-primary text-sm">{milestone.year}</div>
                        <div className="text-xs text-muted-foreground max-w-20 leading-tight">
                          {milestone.event}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
                  <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    {/* Header with Gradient */}
                    <motion.div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`}
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    />

                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          {/* Icon */}
                          <motion.div
                            className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} shadow-lg`}
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </motion.div>

                          {/* Title and Info */}
                          <div className="flex-1">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2 line-clamp-2">
                              {achievement.title}
                            </CardTitle>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                                <Building className="w-4 h-4" />
                                {achievement.source}
                              </div>
                              <div className="flex items-center gap-3">
                                <Badge variant="outline" className="text-xs">
                                  {achievement.category}
                                </Badge>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3" />
                                  {achievement.year}
                                </div>
                                <Badge 
                                  variant={achievement.level === 'Major' ? 'default' : 'secondary'}
                                  className="text-xs"
                                >
                                  {achievement.level}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Statistics */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                          <Sparkles className="w-4 h-4 text-accent" />
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(achievement.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between text-sm bg-muted/30 rounded-lg p-2">
                              <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <span className="font-medium text-primary">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Gained */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          Skills Gained
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors">
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
                            className="w-full group border-primary/30 hover:border-primary hover:bg-primary/5"
                            asChild
                          >
                            <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                              <span className="group-hover:text-primary transition-colors">
                                View Details
                              </span>
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>

                    {/* Background Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                      whileHover={{ opacity: 1 }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Card className="border-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm p-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <PartyPopper className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-headline font-bold">
                    Ready to Achieve More Together?
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  My journey of achievements continues, and I'm excited to contribute to your team's success. 
                  Let's create something remarkable together!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Let's Collaborate
                    <Rocket className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
