// src/components/footer.tsx
"use client";

import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, Heart, ArrowUp, Code2, Send, Zap, Star, Coffee, ExternalLink, MapPin, Calendar, Clock
} from "lucide-react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/LahiruLakshan",
    followers: "50+ repos",
    command: "git clone github.com/LahiruLakshan"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/lahiru-lakshan-tissera/",
    followers: "500+ connections",
    command: "open linkedin.com/in/lahiru-lakshan-tissera"
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:balahirulakshan@gmail.com",
    followers: "Quick response",
    command: "mail --to=lahiru"
  },
  {
    name: "Phone",
    icon: Phone,
    href: "tel:+94711837836",
    followers: "Available for calls",
    command: "call +94711837836"
  }
];

const quickLinks = [
  { name: "About", href: "#about", icon: Code2, command: "cat about.md" },
  { name: "Skills", href: "#skills", icon: Code2, command: "cat skills.js" },
  { name: "Services", href: "#services", icon: Zap, command: "cat services.yaml" },
  { name: "Projects", href: "#projects", icon: Star, command: "ls projects/" },
  { name: "Experience", href: "#experience", icon: Coffee, command: "cat experience.log" },
  { name: "Contact", href: "#contact", icon: Send, command: "./connect.sh" }
];

const skills = [ "React", "Next.js", "TypeScript", "Node.js", "Python", "Web3", "AI/ML", "Mobile Dev", "UI/UX", "Cloud" ];
const currentYear = new Date().getFullYear();

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, duration: 0.8 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-border/50 overflow-hidden font-mono">
      {/* Matrix/Terminal Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0088_1px,transparent_1px),linear-gradient(to_bottom,#00ff0088_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_50%,transparent_100%)] opacity-20" />
      {/* Floating code/tokens */}
      <div className="absolute inset-0 pointer-events-none">
        {['$','cat','ls','git','npm','build','status','echo'].map((cmd, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-base"
            style={{
              left: `${12 + (i * 11) % 85}%`,
              top: `${15 + (i * 10) % 75}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [0, 7, -7, 0],
              opacity: [0.07, 0.18, 0.07],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {cmd}
          </motion.div>
        ))}
      </div>
      <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/85 backdrop-blur shadow-xl transition-all duration-500">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-3 text-xs text-gray-400">footer.tsx</span>
            </div>
            <CardContent className="py-10 px-6">
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-10"
              >
                {/* About & Status */}
                <div >
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-5 h-5 text-green-600"/>
                    <span className="text-lg font-bold text-green-600">$ whoami</span>
                  </div>
                  <div className="font-bold text-lg text-gray-800 mb-2">Lahiru Tissera</div>
                  <div className="mb-3 text-gray-500">// Full-Stack Developer (open for collaboration)</div>
                  <ul className="text-sm text-gray-600 mb-2">
                    <li className="flex gap-2 items-center"><MapPin className="w-4 h-4" /> Kadawatha, Sri Lanka</li>
                    <li className="flex gap-2 items-center"><Clock className="w-4 h-4" /> IST (GMT+5:30)</li>
                    <li className="flex gap-2 items-center"><Calendar className="w-4 h-4" /> Response within 24h</li>
                  </ul>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <Badge className="border-green-500/30 bg-green-100 text-green-700 font-mono">status: ONLINE</Badge>
                  </div>
                </div>
                {/* Quick Navigation (ls -la) */}
                <div >
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-5 h-5 text-blue-600"/>
                    <span className="text-lg font-bold text-blue-600">$ ls -la /portfolio</span>
                  </div>
                  <ul className="divide-y divide-gray-200 mb-4">
                    {quickLinks.map(link => (
                      <li key={link.name}>
                        <a href={link.href} className="flex items-center gap-3 text-sm py-2 hover:text-green-600 transition-colors font-mono">
                          <span className="w-5 flex-shrink-0 flex items-center">
                            <link.icon className="w-4 h-4" />
                          </span>
                          <span>{link.command}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* Tech Stack */}
                  <div className="mb-2 text-blue-600 font-semibold">$ cat tech_stack.json</div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                      <span key={skill} className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full font-mono">{skill}</span>
                    ))}
                  </div>
                </div>
                {/* Social/Contact (connect) */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-5 h-5 text-purple-600"/>
                    <span className="text-lg font-bold text-purple-600">$ ./connect.sh</span>
                  </div>
                  <div className="space-y-3">
                    {socialLinks.map(link => (
                      <a
                        key={link.name}
                        href={link.href}
                        target={link.name !== "Email" && link.name !== "Phone" ? "_blank" : undefined}
                        rel={link.name !== "Email" && link.name !== "Phone" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 text-sm rounded px-3 py-2 hover:bg-green-100 hover:text-green-700 transition-colors font-mono"
                      >
                        <span className="w-5 flex-shrink-0 flex items-center">
                          <link.icon className="w-4 h-4 text-green-600" />
                        </span>
                        <span>{link.command}</span>
                        <span className="text-xs ml-auto text-right text-gray-500">{link.followers}</span>
                        {(link.name !== "Email" && link.name !== "Phone") && (
                          <ExternalLink className="w-3 h-3 text-gray-400 ml-2" />
                        )}
                      </a>
                    ))}
                  </div>
                  <Button asChild size="lg" className="mt-6 w-full bg-green-100 text-green-700 border-green-500/30 font-mono group" variant="outline">
                    <a href="#contact" className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> ./contact --start
                    </a>
                  </Button>
                </div>
              </motion.div>
              {/* Footer credits */}
              <motion.div
                className="my-8 w-full flex items-center justify-between border-t border-gray-200 pt-4 text-xs text-gray-500 font-mono"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <span>&copy; {currentYear} Lahiru Tissera</span>
                  <span>// Built with</span>
                  <RiTailwindCssFill className="w-6 h-6 text-blue-600" />
                  <TbBrandFramerMotion className="w-6 h-6 text-pink-800" />
                  <RiNextjsFill className="w-6 h-6 text-black"/>
                </div>
                <Button
                  onClick={scrollToTop}
                  variant="outline"
                  size="sm"
                  className="group hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Back to Top
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </footer>
  );
}

