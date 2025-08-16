// src/components/projects.tsx
"use client";

import { useState, useRef } from 'react';
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
  Globe
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
    status: "Completed",
    year: "2024",
    team: "Solo Project",
    duration: "4 months",
    featured: true,
    stats: { users: "2.5K+", transactions: "10K+", volume: "$500K+" }
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
    status: "Completed",
    year: "2023",
    team: "Individual Project",
    duration: "6 months",
    featured: true,
    stats: { accuracy: "94%", songs: "5K+", users: "1.2K+" }
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
    status: "Live",
    year: "2023",
    team: "Full-Stack Developer",
    duration: "3 months",
    featured: false,
    stats: { downloads: "1K+", rating: "4.8★", events: "100+" }
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
    status: "Completed",
    year: "2023",
    team: "Team Lead",
    duration: "5 months",
    featured: false,
    stats: { accuracy: "89%", styles: "500+", users: "800+" }
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
    status: "Completed",
    year: "2024",
    team: "Full-Stack Developer",
    duration: "2 months",
    featured: false,
    stats: { screens: "200+", clients: "50+", uptime: "99.9%" }
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
    status: "Live",
    year: "2023",
    team: "Frontend Developer",
    duration: "4 months",
    featured: false,
    stats: { collections: "10K+", volume: "$2M+", users: "5K+" }
  }
];

const categories = [
  { name: "All", icon: Globe, count: projects.length },
  { name: "Web3", icon: Zap, count: projects.filter(p => p.category === "Web3").length },
  { name: "AI/ML", icon: Brain, count: projects.filter(p => p.category === "AI/ML").length },
  { name: "Mobile", icon: Smartphone, count: projects.filter(p => p.category === "Mobile").length },
  { name: "Web", icon: Code2, count: projects.filter(p => p.category === "Web").length }
];

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

  return (
    <motion.section
    id='projects'
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-muted/20 via-background to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${10 + (i * 7)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
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
            className="text-center mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Featured Projects
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              A collection of work that showcases my expertise in modern web development, 
              <span className="text-primary font-semibold"> AI/ML integration</span>, and 
              <span className="text-accent font-semibold"> cutting-edge technologies</span>.
            </motion.p>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-lg p-2">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  const isActive = activeCategory === category.name;
                  
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md' 
                          : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {category.name}
                      <Badge 
                        variant={isActive ? "secondary" : "outline"} 
                        className={`ml-1 ${isActive ? 'bg-white/20 text-white border-white/30' : ''}`}
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
                className="text-2xl font-headline font-bold mb-8 flex items-center gap-2"
              >
                <Star className="w-6 h-6 text-accent fill-accent" />
                Highlighted Work
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
                      <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 h-full">
                        {/* Project Image */}
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-contain p-20 group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Overlay */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                          >
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex gap-3">
                                <Button size="sm" className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  Live Demo
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code
                                </Button>
                              </div>
                            </div>
                          </motion.div>

                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge 
                              variant={project.status === 'Live' ? 'default' : 'secondary'}
                              className={project.status === 'Live' ? 'bg-green-500 text-white' : ''}
                            >
                              {project.status}
                            </Badge>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">
                              {project.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                              <Calendar className="w-4 h-4" />
                              {project.year}
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-6">
                          {/* Tech Stack */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                              <Code2 className="w-4 h-4 text-primary" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.slice(0, 5).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.tech.length > 5 && (
                                <Badge variant="outline" className="text-xs">
                                  +{project.tech.length - 5}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                              <Eye className="w-4 h-4 text-accent" />
                              Key Features
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-xs">
                                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Project Stats */}
                          <div>
                            <h4 className="text-sm font-semibold mb-3">Project Impact</h4>
                            <div className="grid grid-cols-3 gap-3">
                              {Object.entries(project.stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-sm font-bold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
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
                className="text-2xl font-headline font-bold mb-8"
              >
                More Projects
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
                      <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/40 backdrop-blur-sm h-full">
                        {/* Compact Image */}
                        <div className="relative overflow-hidden aspect-video">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 right-3">
                            <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <CardHeader className="pb-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                              {project.title}
                            </CardTitle>
                            <div className="text-xs text-muted-foreground">{project.year}</div>
                          </div>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {project.description}
                          </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Compact Tech Stack */}
                          <div className="flex flex-wrap gap-1">
                            {project.tech.slice(0, 3).map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.tech.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 text-xs">
                              <Github className="w-3 h-3 mr-1" />
                              Code
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
                <h3 className="text-2xl font-headline font-bold">
                  Interested in Working Together?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm always excited to take on new challenges and create amazing digital experiences. 
                  Let's discuss your next project!
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
                    <ArrowRight className="w-5 h-5 ml-2" />
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
