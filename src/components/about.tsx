// src/components/about.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { User, Target, Heart, Lightbulb, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-16 items-start">
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
        </motion.div>
      </div>
    </motion.section>
  );
}
