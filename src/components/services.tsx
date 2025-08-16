// src/components/services.tsx
"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap,
  Globe,
  Cpu,
  Shield,
  Rocket,
  Eye,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "End-to-end web application development using React, Next.js, Node.js, and modern databases",
    features: ["React/Next.js", "Node.js/Express", "Database Design", "API Development"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    delay: 0.1,
    popular: false
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces with modern design principles",
    features: ["Figma/Adobe XD", "Responsive Design", "User Research", "Prototyping"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
    delay: 0.2,
    popular: true
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile applications using React Native and Flutter frameworks",
    features: ["React Native", "Flutter", "iOS/Android", "App Store Deploy"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-500/10 to-teal-500/10",
    delay: 0.3,
    popular: false
  },
  {
    icon: Zap,
    title: "Web3 Development",
    description: "Blockchain integration, smart contracts, and decentralized application development",
    features: ["Smart Contracts", "DeFi/NFT", "Ethers.js", "Web3 Integration"],
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-500/10 to-purple-500/10",
    delay: 0.4,
    popular: false
  },
  {
    icon: Cpu,
    title: "AI/ML Integration",
    description: "Machine learning solutions and AI-powered features for intelligent applications",
    features: ["PyTorch/TensorFlow", "Computer Vision", "NLP", "Data Analysis"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
    delay: 0.5,
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud architecture, deployment automation, and infrastructure management",
    features: ["AWS/Firebase", "Docker", "CI/CD", "Performance Opt"],
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/10 to-blue-500/10",
    delay: 0.6,
    popular: false
  }
];

const processSteps = [
  { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
  { step: "02", title: "Planning", description: "Creating detailed roadmap and architecture" },
  { step: "03", title: "Development", description: "Building with latest technologies and best practices" },
  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" }
];

export function Services() {
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
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
      ref={ref}
      style={{ opacity }}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
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
            className="text-center mb-20"
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-headline font-bold">
                Services I Offer
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I provide end-to-end solutions to bring your digital vision to life with 
              <span className="text-primary font-semibold"> quality</span>, 
              <span className="text-accent font-semibold"> precision</span>, and 
              <span className="text-primary font-semibold"> innovation</span>.
            </motion.p>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  <Card className="relative h-full border-0 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 overflow-hidden">
                    

                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      whileHover={{ opacity: 1 }}
                    />

                    <CardHeader className="relative z-10 pb-4">
                      {/* Icon */}
                      <motion.div 
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-4 shadow-lg`}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold font-headline mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-6">
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Eye className="w-4 h-4 text-primary" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              className="flex items-center gap-2 text-sm"
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ delay: service.delay + idx * 0.1 }}
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="w-full group/btn hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                        >
                          <span className="group-hover/btn:text-primary transition-colors">
                            Learn More
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </CardContent>

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, transparent, ${service.color.includes('blue') ? '#3b82f620' : 
                          service.color.includes('purple') ? '#a855f720' : 
                          service.color.includes('emerald') ? '#10b98120' :
                          service.color.includes('violet') ? '#8b5cf620' :
                          service.color.includes('orange') ? '#f97316' + '20' :
                          '#6366f120'})`,
                        boxShadow: `0 0 20px ${service.color.includes('blue') ? '#3b82f610' : 
                          service.color.includes('purple') ? '#a855f710' : 
                          service.color.includes('emerald') ? '#10b98110' :
                          service.color.includes('violet') ? '#8b5cf610' :
                          service.color.includes('orange') ? '#f97316' + '10' :
                          '#6366f110'}`
                      }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Process Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-headline font-bold mb-4 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              How I Work
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My proven process ensures your project is delivered on time, within budget, and exceeds expectations
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={cardVariants}
                custom={index + 6}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center group"
              >
                <Card className="border-0 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 p-6">
                  {/* Step Number */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Step Title */}
                  <h4 className="text-xl font-semibold font-headline mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Connection Line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}
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
                <h3 className="text-2xl font-headline font-bold">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss how I can help bring your ideas to life with cutting-edge technology and exceptional design.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get In Touch
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
