// src/components/about.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { User, Code2, Target, Heart, Coffee, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
} from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import NextJS from "./icons/nextjs";

// Enhanced tech stack with Font Awesome icons
const techStack = [
  {
    name: "React",
    icon: faReact,
    category: "Frontend",
    color: "from-blue-400 to-blue-600",
    type: "brand",
  },
  {
    name: "Next.js",
    icon: faCode, // Using solid icon as Next.js brand icon isn't available
    iconFile: NextJS,
    category: "Frontend",
    color: "from-gray-700 to-black",
    type: "solid",
  },
  {
    name: "TypeScript",
    icon: faCode,
    category: "Language",
    color: "from-blue-500 to-blue-700",
    type: "solid",
  },
  {
    name: "JavaScript",
    icon: faJs,
    category: "Language",
    color: "from-yellow-400 to-yellow-600",
    type: "brand",
  },
  {
    name: "Node.js",
    icon: faNodeJs,
    category: "Backend",
    color: "from-green-500 to-green-700",
    type: "brand",
  },
  {
    name: "Python",
    icon: faPython,
    category: "Language",
    color: "from-green-400 to-blue-500",
    type: "brand",
  },
  {
    name: "Java",
    icon: faJava,
    category: "Language",
    color: "from-orange-500 to-red-600",
    type: "brand",
  },
  {
    name: "MongoDB",
    icon: faDatabase,
    category: "Database",
    color: "from-green-400 to-green-600",
    type: "solid",
  },
  {
    name: "PostgreSQL",
    icon: faDatabase,
    category: "Database",
    color: "from-blue-600 to-blue-800",
    type: "solid",
  },
  {
    name: "MySQL",
    icon: faDatabase,
    category: "Database",
    color: "from-orange-400 to-orange-600",
    type: "solid",
  },
  {
    name: "Firebase",
    icon: faFire,
    category: "Backend",
    color: "from-orange-400 to-yellow-500",
    type: "solid",
  },
  {
    name: "AWS",
    icon: faAws,
    category: "Cloud",
    color: "from-orange-400 to-orange-600",
    type: "brand",
  },
  {
    name: "Docker",
    icon: faDocker,
    category: "DevOps",
    color: "from-blue-400 to-blue-600",
    type: "brand",
  },
  {
    name: "Git",
    icon: faGitAlt,
    category: "Tools",
    color: "from-gray-600 to-gray-800",
    type: "brand",
  },
  {
    name: "GitHub",
    icon: faGithub,
    category: "Tools",
    color: "from-gray-700 to-black",
    type: "brand",
  },
  {
    name: "Figma",
    icon: faFigma,
    category: "Design",
    color: "from-purple-400 to-pink-500",
    type: "brand",
  },
  {
    name: "Adobe XD",
    icon: faPalette,
    category: "Design",
    color: "from-purple-500 to-pink-600",
    type: "solid",
  },
  {
    name: "Flutter",
    icon: faMobile,
    category: "Mobile",
    color: "from-blue-400 to-cyan-500",
    type: "solid",
  },
  {
    name: "React Native",
    icon: faReact,
    category: "Mobile",
    color: "from-blue-500 to-purple-600",
    type: "brand",
  },
  {
    name: "Web3",
    icon: faChain,
    category: "Blockchain",
    color: "from-purple-500 to-indigo-600",
    type: "solid",
  },
  {
    name: "Ethers.js",
    icon: faLightbulb,
    category: "Blockchain",
    color: "from-yellow-400 to-orange-500",
    type: "solid",
  },
  {
    name: "Solidity",
    icon: faGem,
    category: "Blockchain",
    color: "from-gray-600 to-gray-800",
    type: "solid",
  },
  {
    name: "TailwindCSS",
    icon: faCss3Alt,
    category: "Styling",
    color: "from-cyan-400 to-blue-500",
    type: "brand",
  },
  {
    name: "SASS",
    icon: faCss3Alt,
    category: "Styling",
    color: "from-pink-400 to-pink-600",
    type: "brand",
  },
  {
    name: "GraphQL",
    icon: faChartBar,
    category: "API",
    color: "from-pink-500 to-purple-600",
    type: "solid",
  },
  {
    name: "REST API",
    icon: faPlug,
    category: "API",
    color: "from-green-400 to-blue-500",
    type: "solid",
  },
  {
    name: "PyTorch",
    icon: faBrain,
    category: "AI/ML",
    color: "from-orange-500 to-red-600",
    type: "solid",
  },
  {
    name: "TensorFlow",
    icon: faBrain,
    category: "AI/ML",
    color: "from-orange-400 to-yellow-500",
    type: "solid",
  },
  {
    name: "Scikit-learn",
    icon: faRocket,
    category: "AI/ML",
    color: "from-blue-400 to-green-500",
    type: "solid",
  },
  {
    name: "OpenCV",
    icon: faEye,
    category: "AI/ML",
    color: "from-green-400 to-blue-600",
    type: "solid",
  },
  {
    name: "HTML5",
    icon: faHtml5,
    category: "Frontend",
    color: "from-orange-500 to-red-500",
    type: "brand",
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
    category: "Frontend",
    color: "from-blue-500 to-blue-700",
    type: "brand",
  },
  {
    name: "Express.js",
    icon: faServer,
    category: "Backend",
    color: "from-green-600 to-green-800",
    type: "solid",
  },
  {
    name: "Android",
    icon: faAndroid,
    category: "Mobile",
    color: "from-green-500 to-green-700",
    type: "brand",
  },
  {
    name: "iOS",
    icon: faApple,
    category: "Mobile",
    color: "from-gray-600 to-gray-800",
    type: "brand",
  },
];

const skillCategories = [
  {
    name: "Frontend",
    color: "from-blue-500 to-cyan-500",
    count: techStack.filter((t) => t.category === "Frontend").length,
  },
  {
    name: "Backend",
    color: "from-green-500 to-emerald-500",
    count: techStack.filter((t) => t.category === "Backend").length,
  },
  {
    name: "Mobile",
    color: "from-purple-500 to-pink-500",
    count: techStack.filter((t) => t.category === "Mobile").length,
  },
  {
    name: "AI/ML",
    color: "from-orange-500 to-red-500",
    count: techStack.filter((t) => t.category === "AI/ML").length,
  },
  {
    name: "Blockchain",
    color: "from-violet-500 to-purple-500",
    count: techStack.filter((t) => t.category === "Blockchain").length,
  },
];

const highlights = [
  {
    icon: Target,
    title: "Problem Solver",
    description:
      "I love tackling complex challenges and finding elegant solutions",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description:
      "Every line of code is written with the end user experience in mind",
  },
  {
    icon: Lightbulb,
    title: "Innovation Drive",
    description:
      "Constantly exploring new technologies and development approaches",
  },
  {
    icon: Coffee,
    title: "Team Player",
    description:
      "Thriving in collaborative environments and mentoring fellow developers",
  },
];

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

  return (
    <motion.section
    id="about"
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-muted/30 via-background/50 to-muted/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
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
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
                <User className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                About Me
              </h2>
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-16 items-start mb-20">
            {/* Left Column - About Text */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 col-span-4"
            >
              <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <motion.p
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Hello! I'm{" "}
                      <span className="text-primary font-semibold">
                        Lahiru Tissera
                      </span>
                      , a passionate Full-Stack Engineer with expertise in
                      building modern web applications and integrating
                      cutting-edge technologies. With experience spanning
                      <span className="text-accent font-semibold"> Web3</span>,
                      <span className="text-primary font-semibold"> AI/ML</span>
                      , and
                      <span className="text-accent font-semibold">
                        {" "}
                        mobile development
                      </span>
                      , I create digital experiences that matter.
                    </motion.p>

                    <motion.p
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      My journey started with a BEng in Software Engineering
                      from the University of Westminster (UK), and since then,
                      I've been on a mission to bridge the gap between complex
                      technologies and intuitive user experiences. I thrive on
                      solving challenging problems and am constantly exploring
                      new tools and frameworks.
                    </motion.p>

                    <motion.p
                      className="text-lg"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      From building{" "}
                      <span className="text-primary font-semibold">
                        NFT marketplaces
                      </span>{" "}
                      with Web3 integration to developing{" "}
                      <span className="text-accent font-semibold">
                        AI-powered music classification systems
                      </span>
                      , I'm passionate about creating solutions that push
                      technological boundaries while maintaining exceptional
                      user experience.
                    </motion.p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 col-span-3"
            >
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                            <highlight.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {highlight.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Technical Skills
              </h2>
            </motion.div>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Tech Stack Carousel */}
          <motion.div variants={itemVariants} className="relative">
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
                  <SwiperSlide key={tech.name} className="!w-32 !h-32">
                    <motion.div
                      className="w-full h-full group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <div
                        className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${tech.color} p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10`}
                      >
                        {/* Tech Icon - Font Awesome */}
                        <motion.div
                          className="text-white mb-2 filter drop-shadow-lg"
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
                            React.createElement(tech.iconFile) 
                          ) : (
                            <FontAwesomeIcon
                              icon={tech.icon}
                              className="text-3xl"
                            />
                          )}
                        </motion.div>

                        {/* Tech Name */}
                        <span className="text-xs font-bold text-white text-center leading-tight opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                          {tech.name}
                        </span>

                        {/* Category Badge */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <span className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20">
                            {tech.category}
                          </span>
                        </div>

                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{
                            backgroundImage:
                              "linear-gradient(45deg, rgba(255,255,255,0.2), transparent)",
                          }}
                        />
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
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
