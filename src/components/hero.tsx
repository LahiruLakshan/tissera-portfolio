// src/components/hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  faAppStore,
  faCodepen,
  faGithub,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCommit,
  faCodeCompare,
  faCodeFork,
  faCodeMerge,
  faCodePullRequest,
  faDiagramNext,
  faGear,
  faMicrochip,
  faRobot,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { RiRobot3Line } from "react-icons/ri";
import { SiHiveBlockchain } from "react-icons/si";

const roles = [
  {
    text: "Full-Stack Developer",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
  },
  { text: "Web3 Engineer", icon: SiHiveBlockchain, color: "from-purple-500 to-pink-500" },
  {
    text: "UI/UX Designer",
    icon: Palette,
    color: "from-emerald-500 to-teal-500",
  },
  {
    text: "AI/ML researcher",
    icon: RiRobot3Line,
    color: "from-orange-500 to-red-500",
  },
];

const floatingElements = [
  { key:1, icon: faCodeBranch, x: "10%", y: "20%", delay: 0 },
  { key:2, icon: faCodeMerge, x: "80%", y: "10%", delay: 1 },
  { key:3, icon: faCodeCommit, x: "85%", y: "70%", delay: 2 },
  { key:4, icon: faCodePullRequest, x: "15%", y: "80%", delay: 3 },
  { key:5, icon: faCodeCompare, x: "50%", y: "50%", delay: 4 },
  { key:6, icon: faTerminal, x: "90%", y: "30%", delay: 4 },
  { key:7, icon: faCodeFork, x: "60%", y: "20%", delay: 4 },
];

const skillElements = [
  { key:1, icon: faReact, x: "10%", y: "20%", delay: 0 },
  { key:2, icon: faMicrochip, x: "80%", y: "10%", delay: 1 },
  { key:3, icon: faNodeJs, x: "85%", y: "70%", delay: 2 },
  { key:4, icon: faPython, x: "15%", y: "80%", delay: 3 },
 
];

const scrollToNext = () => {
  const nextSection = document.getElementById("about");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const CurrentRoleIcon = roles[currentRole].icon;

  return (
    <motion.section
      
      // style={{ y, opacity }}
      className="relative lg:min-h-screen  min-h-[1400px]  flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/80"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Floating Background Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-10 pointer-events-none select-none"
          style={{
            left: element.x,
            top: element.y,
            x: mousePosition.x * (index % 2 === 0 ? 1 : -1) * 0.5,
            y: mousePosition.y * (index % 2 === 0 ? 1 : -1) * 0.5,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: element.delay,
          }}
        >
          <FontAwesomeIcon icon={element.icon} className="text-3xl" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8 text-center lg:text-left items-center lg:items-start"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <Badge
                variant="outline"
                className="w-fit bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20 transition-colors duration-300 backdrop-blur-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-emerald-500 rounded-full mr-2"
                />
                Available for new opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  Kadawatha, Sri Lanka
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-headline tracking-tighter">
                Hi, I'm{" "}
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x bg-300%">
                    Lahiru
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg -z-10"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.span>
              </h1>

              {/* Dynamic Role Display */}
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 "
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r from-muted/50 to-muted/30 backdrop-blur-sm border border-primary/50 transition-all duration-300`}
                  >
                    <CurrentRoleIcon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-medium text-muted-foreground">
                    {roles[currentRole].text}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Creative Full-Stack Developer with expertise in{" "}
              <span className="text-primary font-semibold">Web3</span>,{" "}
              <span className="text-accent font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">
                Machine Learning
              </span>
              . I build elegant, efficient, and user-centric digital experiences
              that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-[linear-gradient(45deg,rgba(168,85,247,0.3),rgba(6,182,212,0.3))]  text-primary-foreground px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="#projects" className="flex items-center">
                  <span className="relative z-10">View Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(90deg,rgba(168,85,247,0.3),rgba(6,182,212,0.3))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className=" border-2 border-primary/30 hover:bg-[linear-gradient(45deg,rgba(168,85,247,0.3),rgba(6,182,212,0.3))] bg-[linear-gradient(45deg,rgba(168,85,247,0.3),rgba(6,182,212,0.3))] px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <a
                  href="/docs/Lakshan Tissera - SE.pdf"
                  download
                  className="flex items-center"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/lahiru-lakshan-tissera",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/lahiru-lakshan-tissera",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:balahirulakshan@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group relative p-3 rounded-full bg-muted/50 hover:bg-primary/10 backdrop-blur-sm transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar & Visual Elements */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center items-center"
          >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating Rings */}
              <motion.div
                className="absolute w-96 h-96 border border-primary/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-80 h-80 border border-accent/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Pulsing Gradient Background */}
              <motion.div
                className="absolute w-72 h-72 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            {/* Main Avatar */}
            <motion.div
              className="relative z-10"
              style={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-primary/30 shadow-2xl hover:shadow-primary/25 transition-all duration-500">
                  <Image
                    // src="https://media.licdn.com/dms/image/v2/D5603AQFIxldwSUganw/profile-displayphoto-shrink_800_800/B56ZTbJ6yyHEAc-/0/1738843599819?e=1758153600&v=beta&t=9BpUbCLBKPItzXiRt9Ax_WXb87nswTR3KNbDjUQWNcU"
                    src="/images/graduation-img.JPG"
                    alt="Lahiru Tissera"
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    width={1000}
                    height={1000}
                  />
                  {/* <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    LT
                  </AvatarFallback> */}
                </Avatar>

                {/* Status Indicators */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full shadow-lg backdrop-blur-sm"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Available
                </motion.div>

                {/* Skill Badges Around Avatar */}
                <div className="absolute inset-0 pointer-events-none">
                  {skillElements.map(
                    (skill, index) => (
                      <motion.div
                        key={skill.key}
                        className="absolute"
                        style={{
                          top: `${20 + Math.sin((index * Math.PI) / 2) * 40}%`,
                          left: `${20 + Math.cos((index * Math.PI) / 2) * 40}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 3 + index * 0.5,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-background/80 backdrop-blur-sm shadow-lg border border-primary/20"
                        >
                           <FontAwesomeIcon icon={skill.icon} className="text-sm" />
                          {/* {skill} */}
                        </Badge>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <div className="absolute bottom-[-120px] left-0 right-0 flex justify-center gap-4 pointer-events-none">
              {[
                { label: "Years Exp", value: "3+" },
                { label: "Projects", value: "20+" },
                { label: "Technologies", value: "15+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.2 }}
                >
                  <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-lg">
                    <CardContent className="p-3 text-center">
                      <div className="text-lg font-bold text-primary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <motion.div
            variants={itemVariants}
            className="absolute lg:bottom-[150px] md:bottom-[10px] bottom-[0px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted-foreground">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full  backdrop-blur-sm items-center flex flex-col"
            >
              <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center items-start p-1 group-hover:border-white transition-colors duration-300">
                <div className="w-1 h-3 bg-white/80 rounded-full animate-scroll-bounce group-hover:bg-white transition-colors duration-300"></div>
              </div>
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </button>
      </div>
    </motion.section>
  );
}
