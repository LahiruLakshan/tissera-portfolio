// src/components/skills.tsx
"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    category: "Frontend Development",
    icon: "🎨",
    skills: [
      { name: "React/Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-800" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-teal-600" },
      { name: "React Native", level: 85, color: "from-purple-500 to-purple-700" }
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 88, color: "from-green-500 to-green-700" },
      { name: "Python", level: 85, color: "from-yellow-500 to-orange-500" },
      { name: "Java", level: 80, color: "from-red-500 to-red-700" },
      { name: "MongoDB/MySQL", level: 82, color: "from-emerald-500 to-emerald-700" }
    ]
  },
  {
    category: "Web3 & Blockchain",
    icon: "🔗",
    skills: [
      { name: "Ethers.js", level: 88, color: "from-purple-600 to-indigo-600" },
      { name: "Web3 Integration", level: 85, color: "from-violet-500 to-violet-700" },
      { name: "Smart Contracts", level: 75, color: "from-indigo-500 to-indigo-700" },
      { name: "NFT Marketplaces", level: 90, color: "from-pink-500 to-pink-700" }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git/GitHub", level: 92, color: "from-gray-600 to-gray-800" },
      { name: "AWS/Firebase", level: 85, color: "from-orange-500 to-orange-700" },
      { name: "Docker", level: 75, color: "from-blue-400 to-blue-600" },
      { name: "Figma/Adobe XD", level: 88, color: "from-pink-400 to-pink-600" }
    ]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={cardVariants}>
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-secondary/30 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
