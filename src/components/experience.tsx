// src/components/experience.tsx
"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  Award
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer",
    company: "PT. Crypto Canary Network",
    location: "Remote",
    period: "Nov 2023 - Nov 2024",
    duration: "1 year",
    type: "Full-time",
    status: "Recent",
    description: "Led development of Vesta Web & Mobile Application, a comprehensive Web3 NFT marketplace with advanced trading features and analytics dashboard.",
    achievements: [
      "Built complete Web3 NFT marketplace from scratch",
      "Implemented advanced trading algorithms and analytics",
      "Managed React Native mobile app development",
      "Integrated multiple blockchain networks and wallets"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Ethers.js", "React Native", "Web3", "AWS"],
    projects: ["Vesta NFT Marketplace"],
    highlights: {
      impact: "Led core product development",
      growth: "Handled $500K+ in transactions",
      team: "Mentored 2 junior developers"
    },
    color: "from-purple-500 to-indigo-600",
    icon: Zap
  },
  {
    id: 2,
    role: "Full-Stack Developer", 
    company: "Beebee Digital Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "Jan 2023 - Oct 2023",
    duration: "10 months",
    type: "Full-time",
    status: "Completed",
    description: "Developed and enhanced multiple client projects including NFT platforms and digital marketplaces with modern web technologies.",
    achievements: [
      "Enhanced ohhNFT platform UI components",
      "Resolved critical mobile wallet integration issues",
      "Implemented GraphQL endpoints for seamless functionality",
      "Delivered 5+ client projects successfully"
    ],
    technologies: ["Next.js", "Node.js", "MySQL", "GraphQL", "Heroku", "Web3"],
    projects: ["ohhNFT Platform"],
    highlights: {
      impact: "Improved platform performance by 40%",
      growth: "Delivered 5+ successful projects",
      team: "Collaborated with 3-person dev team"
    },
    color: "from-emerald-500 to-teal-600",
    icon: Code2
  },
  {
    id: 3,
    role: "Software Engineer (Intern)",
    company: "Zynergyx Technologies Pvt Ltd",
    location: "Colombo, Sri Lanka", 
    period: "Sep 2021 - Sep 2022",
    duration: "1 year",
    type: "Internship",
    status: "Foundation",
    description: "Started my professional journey developing enterprise solutions, admin dashboards, and blockchain-based platforms while learning industry best practices.",
    achievements: [
      "Built enterprise admin dashboard from scratch",
      "Developed VIP blockchain verification platform",
      "Created Emirates Offroaders mobile app and admin panel",
      "Learned modern development practices and team collaboration"
    ],
    technologies: ["React.js", "Scala", "Flutter", "Firebase", "Azure", "MySQL"],
    projects: ["VIP Platform", "Emirates Offroaders", "Enterprise Dashboard"],
    highlights: {
      impact: "Built 3 major applications",
      growth: "Transitioned from intern to full-time offer",
      team: "Worked closely with senior architects"
    },
    color: "from-orange-500 to-red-500",
    icon: Building
  }
];

const stats = [
  { label: "Years Experience", value: "3+", icon: Clock },
  { label: "Companies Worked", value: "3", icon: Building },
  { label: "Projects Delivered", value: "15+", icon: Trophy },
  { label: "Technologies Mastered", value: "20+", icon: Star }
];

const skills = [
  { name: "Leadership", level: 85, category: "Soft Skills" },
  { name: "Problem Solving", level: 95, category: "Soft Skills" },
  { label: "Full-Stack Development", level: 90, category: "Technical" },
  { name: "Team Collaboration", level: 88, category: "Soft Skills" }
];

export function Experience() {
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
        staggerChildren: 0.2,
        duration: 0.8
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

  const timelineVariants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { 
      opacity: 1, 
      scaleY: 1,
      transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 }
    }
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${15 + (i * 10)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
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
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Briefcase className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Professional Journey
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              My evolution as a developer, from intern to full-stack engineer, 
              building <span className="text-primary font-semibold">innovative solutions</span> and 
              gaining <span className="text-accent font-semibold">valuable experience</span> along the way.
            </motion.p>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
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
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              variants={timelineVariants}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-px md:-translate-x-1/2 origin-top"
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
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } group`}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg transform -translate-x-1/2 z-10"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group/card">
                        {/* Card Header Background */}
                        <motion.div
                          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color}`}
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                          transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                        />

                        <CardHeader className="pb-4 relative">
                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge 
                              variant={exp.status === 'Recent' ? 'default' : 'secondary'}
                              className={
                                exp.status === 'Recent' 
                                  ? 'bg-green-500 text-white' 
                                  : exp.status === 'Foundation'
                                  ? 'bg-blue-500 text-white'
                                  : ''
                              }
                            >
                              {exp.status}
                            </Badge>
                          </div>

                          {/* Role & Company */}
                          <div className="space-y-2">
                            <CardTitle className="text-xl group-hover/card:text-primary transition-colors flex items-center gap-3">
                              <motion.div
                                className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} bg-opacity-10`}
                                whileHover={{ rotate: 15, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <IconComponent className="w-5 h-5 text-primary" />
                              </motion.div>
                              {exp.role}
                            </CardTitle>
                            
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 text-accent font-semibold">
                                <Building className="w-4 h-4" />
                                {exp.company}
                              </div>
                              
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {exp.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {exp.period}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {exp.duration}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Key Achievements */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-accent" />
                              Key Achievements
                            </h4>
                            <div className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                  transition={{ delay: 1.2 + index * 0.3 + idx * 0.1 }}
                                >
                                  <ChevronRight className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Code2 className="w-4 h-4 text-primary" />
                              Technologies Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/20 transition-colors cursor-default">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Impact Highlights */}
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-accent" />
                              Impact & Growth
                            </h4>
                            <div className="grid grid-cols-1 gap-2">
                              {Object.entries(exp.highlights).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between text-sm bg-muted/30 rounded-lg p-2">
                                  <span className="text-muted-foreground capitalize">{key}:</span>
                                  <span className="font-medium text-primary">{value}</span>
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
                              <Button variant="outline" size="sm" className="w-full group border-primary/30 hover:border-primary hover:bg-primary/5">
                                <span className="group-hover:text-primary transition-colors">
                                  View Projects ({exp.projects.length})
                                </span>
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <Card className="border-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 backdrop-blur-sm p-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-headline font-bold flex items-center justify-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Ready for New Opportunities
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and contribute to innovative projects. 
                  Let's discuss how my experience can help your team succeed.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Let's Connect
                    <ChevronRight className="w-5 h-5 ml-2" />
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
