// src/components/skills.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Terminal, Code2, CheckCircle, Activity, Monitor, Database, MonitorCheck } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faJs,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faDocker,
  faAws,
  faFigma,
  faAndroid,
  faApple,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCode,
  faCloud,
  faMobile,
  faPalette,
  faRocket,
  faBrain,
  faEye,
  faChain,
  faGem,
  faPlug,
  faChartBar,
  faFire,
  faLightbulb,
  faCubes,
  faServer,
  faLayerGroup,
  faCodeBranch,
  faComputer,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { Card, CardContent } from "@/components/ui/card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

// React Icons imports
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiMysql, SiWeb3Dotjs, SiEthers, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandAdobeXd, TbBrandReactNative, TbApi } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

// Terminal commands for skills
const terminalCommands = [
  { command: "npm list --depth=0", output: "📦 Package inventory complete", delay: 0 },
  { command: "git log --technologies", output: "🔧 35+ technologies mastered", delay: 0 },
  { command: "ls categories/", output: "Frontend/ Backend/ Mobile/ AI-ML/ Blockchain/", delay: 0 },
  { command: "systemctl status developer", output: "● Active: learning (since 2020)", delay: 0 },
];

// Enhanced tech stack with proper icons
const techStack = [
  {
    name: "React",
    icon: faReact,
    category: "Frontend",
    command: "npm install react",
    proficiency: 95,
    type: "brand",
  },
  {
    name: "Next.js",
    iconFile: RiNextjsFill,
    category: "Frontend",
    command: "npx create-next-app",
    proficiency: 90,
    type: "custom",
  },
  {
    name: "TypeScript",
    iconFile: SiTypescript,
    category: "Language",
    command: "tsc --init",
    proficiency: 88,
    type: "custom",
  },
  {
    name: "JavaScript",
    icon: faJs,
    category: "Language",
    command: "node --version",
    proficiency: 95,
    type: "brand",
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    category: "Backend",
    command: "npm start",
    proficiency: 90,
    type: "brand",
  },
  {
    name: "Python",
    icon: faPython,
    category: "Language",
    command: "python --version",
    proficiency: 85,
    type: "brand",
  },
  {
    name: "Java",
    icon: faJava,
    category: "Language",
    command: "javac Main.java",
    proficiency: 80,
    type: "brand",
  },
  {
    name: "MongoDB",
    iconFile: SiMongodb,
    category: "Database",
    command: "mongod --start",
    proficiency: 85,
    type: "custom",
  },
  {
    name: "PostgreSQL",
    iconFile: BiLogoPostgresql,
    category: "Database",
    command: "psql -U postgres",
    proficiency: 80,
    type: "custom",
  },
  {
    name: "MySQL",
    iconFile: SiMysql,
    category: "Database",
    command: "mysql -u root",
    proficiency: 85,
    type: "custom",
  },
  {
    name: "Firebase",
    iconFile: IoLogoFirebase,
    category: "Backend",
    command: "firebase deploy",
    proficiency: 88,
    type: "custom",
  },
  {
    name: "AWS",
    icon: faAws,
    category: "Cloud",
    command: "aws s3 ls",
    proficiency: 75,
    type: "brand",
  },
  {
    name: "Docker",
    icon: faDocker,
    category: "DevOps",
    command: "docker run -it",
    proficiency: 80,
    type: "brand",
  },
  {
    name: "Git",
    icon: faGitAlt,
    category: "Tools",
    command: "git commit -m",
    proficiency: 95,
    type: "brand",
  },
  {
    name: "GitHub",
    icon: faGithub,
    category: "Tools",
    command: "gh repo create",
    proficiency: 90,
    type: "brand",
  },
  {
    name: "Figma",
    icon: faFigma,
    category: "Design",
    command: "figma --export",
    proficiency: 85,
    type: "brand",
  },
  {
    name: "Adobe XD",
    iconFile: TbBrandAdobeXd,
    category: "Design",
    command: "xd --preview",
    proficiency: 80,
    type: "custom",
  },
  {
    name: "Flutter",
    iconFile: FaFlutter,
    category: "Mobile",
    command: "flutter run",
    proficiency: 85,
    type: "custom",
  },
  {
    name: "React Native",
    iconFile: TbBrandReactNative,
    category: "Mobile",
    command: "npx react-native run",
    proficiency: 88,
    type: "custom",
  },
  {
    name: "Web3",
    iconFile: SiWeb3Dotjs,
    category: "Blockchain",
    command: "web3 --connect",
    proficiency: 80,
    type: "custom",
  },
  {
    name: "Ethers.js",
    iconFile: SiEthers,
    category: "Blockchain",
    command: "ethers deploy",
    proficiency: 75,
    type: "custom",
  },
  {
    name: "Solidity",
    icon: faGem,
    category: "Blockchain",
    command: "solc --compile",
    proficiency: 70,
    type: "solid",
  },
  {
    name: "TailwindCSS",
    iconFile: RiTailwindCssFill,
    category: "Styling",
    command: "tailwind build",
    proficiency: 92,
    type: "custom",
  },
  {
    name: "SASS",
    icon: faCss3Alt,
    category: "Styling",
    command: "sass --watch",
    proficiency: 85,
    type: "brand",
  },
  {
    name: "GraphQL",
    iconFile: GrGraphQl,
    category: "API",
    command: "graphql-codegen",
    proficiency: 80,
    type: "custom",
  },
  {
    name: "REST API",
    iconFile: TbApi,
    category: "API",
    command: "curl -X GET",
    proficiency: 90,
    type: "custom",
  },
  {
    name: "PyTorch",
    iconFile: SiPytorch,
    category: "AI/ML",
    command: "torch.cuda.is_available()",
    proficiency: 75,
    type: "custom",
  },
  {
    name: "TensorFlow",
    iconFile: SiTensorflow,
    category: "AI/ML",
    command: "tf.keras.model",
    proficiency: 78,
    type: "custom",
  },
  {
    name: "Scikit-learn",
    iconFile: SiScikitlearn,
    category: "AI/ML",
    command: "sklearn.fit()",
    proficiency: 82,
    type: "custom",
  },
  {
    name: "OpenCV",
    iconFile: SiOpencv,
    category: "AI/ML",
    command: "cv2.imread()",
    proficiency: 80,
    type: "custom",
  },
  {
    name: "HTML5",
    icon: faHtml5,
    category: "Frontend",
    command: "<!DOCTYPE html>",
    proficiency: 95,
    type: "brand",
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
    category: "Frontend",
    command: "@media query",
    proficiency: 90,
    type: "brand",
  },
  {
    name: "Express.js",
    iconFile: SiExpress,
    category: "Backend",
    command: "express --start",
    proficiency: 88,
    type: "custom",
  },
  {
    name: "Android",
    icon: faAndroid,
    category: "Mobile",
    command: "adb devices",
    proficiency: 80,
    type: "brand",
  },
  {
    name: "iOS",
    icon: faApple,
    category: "Mobile",
    command: "xcodebuild",
    proficiency: 75,
    type: "brand",
  },
];

const skillCategories = [
  {
    name: "Frontend",
    icon: faLaptop,
    command: "ls frontend/",
    count: techStack.filter((t) => t.category === "Frontend").length,
    avg: Math.round(techStack.filter((t) => t.category === "Frontend").reduce((acc, curr) => acc + curr.proficiency, 0) / techStack.filter((t) => t.category === "Frontend").length)
  },
  {
    name: "Backend",
    icon: faServer,
    command: "ps aux | grep server",
    count: techStack.filter((t) => t.category === "Backend").length,
    avg: Math.round(techStack.filter((t) => t.category === "Backend").reduce((acc, curr) => acc + curr.proficiency, 0) / techStack.filter((t) => t.category === "Backend").length)
  },
  {
    name: "Mobile",
    icon: faMobile,
    command: "adb devices",
    count: techStack.filter((t) => t.category === "Mobile").length,
    avg: Math.round(techStack.filter((t) => t.category === "Mobile").reduce((acc, curr) => acc + curr.proficiency, 0) / techStack.filter((t) => t.category === "Mobile").length)
  },
  {
    name: "AI/ML",
    icon: faBrain,
    command: "python train_model.py",
    count: techStack.filter((t) => t.category === "AI/ML").length,
    avg: Math.round(techStack.filter((t) => t.category === "AI/ML").reduce((acc, curr) => acc + curr.proficiency, 0) / techStack.filter((t) => t.category === "AI/ML").length)
  },
  {
    name: "Blockchain",
    icon: faChain,
    command: "web3 --network mainnet",
    count: techStack.filter((t) => t.category === "Blockchain").length,
    avg: Math.round(techStack.filter((t) => t.category === "Blockchain").reduce((acc, curr) => acc + curr.proficiency, 0) / techStack.filter((t) => t.category === "Blockchain").length)
  },
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

export function Skills() {
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
      id="skills"
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['npm', 'git', 'docker', 'node', 'python', 'react', 'aws', 'api'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-xl select-none"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${15 + (i * 12) % 70}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 8 + i,
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
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30">
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ ls -la skills/
              </h2>
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
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
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">skills@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[200px]">
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

          {/* Categories Terminal */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-mono text-green-600 dark:text-green-400 mb-4">$ cat categories.json</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
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
                          <span className="text-gray-800 dark:text-white">{category.command}</span>
                        </div>
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-300">
                          <CheckCircle className="w-3 h-3" />
                          <span>{category.count} packages found</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20 group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all duration-300 border border-green-500/30"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <FontAwesomeIcon icon={category.icon} className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white mb-2 font-mono">
                            {category.name}
                          </h4>
                          <div className="space-y-1">
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                              {category.count} technologies
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <motion.div
                                  className="bg-green-500 h-2 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={isInView ? { width: `${category.avg}%` } : { width: 0 }}
                                  transition={{ delay: index * 0.2, duration: 1 }}
                                />
                              </div>
                              <span className="text-xs font-mono text-green-600 dark:text-green-400">{category.avg}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="text-center mb-8">
              <h3 className="text-xl font-mono text-green-600 dark:text-green-400 mb-4">$ npm list --global</h3>
            </div>

            <div className="relative -mx-4">
              <Swiper
                modules={[Autoplay, EffectCoverflow]}
                spaceBetween={20}
                slidesPerView="auto"
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={1000}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                className="tech-swiper"
                style={{
                  paddingTop: "20px",
                  paddingBottom: "60px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
              >
                {techStack.map((tech, index) => (
                  <SwiperSlide key={tech.name} className="!w-36 !h-36">
                    <motion.div
                      className="w-full h-full group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div className="relative w-full h-full rounded-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm border border-green-500/30 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Tech Icon */}
                        <motion.div
                          className="text-green-600 dark:text-green-400 mb-2 filter drop-shadow-lg"
                          whileHover={{
                            rotate: [0, -10, 10, 0],
                            scale: 1.2,
                          }}
                          transition={{
                            rotate: { duration: 0.5 },
                            scale: { duration: 0.2 },
                          }}
                        >
                          {tech?.iconFile ? (
                            <tech.iconFile className="text-3xl" />
                          ) : (
                            <FontAwesomeIcon
                              icon={tech.icon}
                              className="text-3xl"
                            />
                          )}
                        </motion.div>

                        {/* Tech Name */}
                        <span className="text-xs font-bold text-gray-900 dark:text-white text-center leading-tight opacity-90 group-hover:opacity-100 transition-opacity duration-200 font-mono mb-2">
                          {tech.name}
                        </span>

                        {/* Proficiency Bar */}
                        <div className="w-full mb-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-600 dark:text-gray-400 font-mono">{tech.proficiency}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                            <motion.div
                              className="bg-green-500 h-1 rounded-full"
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${tech.proficiency}%` } : { width: 0 }}
                              transition={{ delay: index * 0.05, duration: 1 }}
                            />
                          </div>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <span className="px-2 py-1 text-xs font-medium font-mono bg-gray-100/90 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-green-600 dark:text-green-300 border border-green-500/30">
                            {tech.category}
                          </span>
                        </div>

                        {/* Command Tooltip */}
                        <motion.div
                          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-black/90 border border-green-500/30 rounded px-2 py-1 font-mono text-xs text-green-600 dark:text-green-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          initial={{ y: -10, opacity: 0 }}
                        >
                          <span className="text-green-600 dark:text-green-400">$ </span>
                          {tech.command}
                        </motion.div>

                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{
                            background: "linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))",
                          }}
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>

          {/* Terminal Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-4">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  <span>Skills inventory complete. Ready for new challenges!</span>
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

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .tech-swiper .swiper-slide {
          transition: all 0.3s ease;
        }

        .tech-swiper .swiper-slide-active {
          transform: scale(1.05);
        }

        .tech-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
          transform: scale(0.9);
        }

        .tech-swiper .swiper-3d .swiper-slide-shadow-left,
        .tech-swiper .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }

        .tech-swiper .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </motion.section>
  );
}
