"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Terminal,
  MapPin,
  ChevronDown,
  Code2,
  Palette,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faGithub as faGithubFA,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faCodeCommit,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { SiHiveBlockchain } from "react-icons/si";
import { RiRobot3Line } from "react-icons/ri";

// Custom typewriter component for code:
function Typewriter({ text, speed = 40, cursor = true }: { text: string; speed?: number; cursor?: boolean }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    let timer = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      {cursor && <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="inline-block w-2 h-5 bg-green-400 align-middle ml-1"/>}
    </span>
  );
}

const codeRoleIcons = [
  Code2, SiHiveBlockchain, Palette, RiRobot3Line,
];
const codeRoles = [
  "Full-Stack Developer",
  "Web3 Engineer",
  "UI/UX Designer",
  "AI/ML Researcher",
];

// A sample set of animated code glyphs:
const floatingCode = [
  "<Code/>", "{React}", "async()", "npm start", "<const>", "git commit", "()=>{}", 
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const Icon = codeRoleIcons[currentRole];

  // Cycle roles every 3s
  useEffect(() => {
    const id = setInterval(() => setCurrentRole(prev => (prev + 1) % codeRoles.length), 3000);
    return () => clearInterval(id);
  }, []);

  // Used for floating background code glyphs
  function randomInRange(a:number,b:number){return `${Math.random()*(b-a)+a}%`;}

  return (
    <motion.section
      className="relative min-h-[900px] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 from-gray-50 via-gray-100 to-gray-50"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Animated Floating Terminal/Code Glyphs */}
      <div className="absolute inset-0 pointer-events-none opacity-15 dark:opacity-15 opacity-10">
        {floatingCode.map((glyph, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-green-400 dark:text-green-400 text-gray-600 text-lg lg:text-2xl whitespace-nowrap"
            style={{
              top: randomInRange(5, 90),
              left: randomInRange(5, 90),
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.5, 0.3],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >{glyph}</motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Terminal Code Window */}
          <motion.div
            className="mb-16 flex flex-col gap-8 text-center lg:text-left items-center lg:items-start z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            {/* Terminal Window - Keep authentic terminal colors */}
            <motion.div
              className="bg-black/90 border border-green-500/30 rounded-lg shadow-2xl font-mono mb-6 relative overflow-hidden w-full max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-2 border-b border-green-500/20 bg-black/60">
                <div className="flex gap-1 mr-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <span className="text-green-300 text-xs">lahiru@portfolio:~</span>
              </div>
              {/* Terminal Content */}
              <div className="px-5 pt-6 pb-8 min-h-[150px] text-green-400 text-base">
                <span className="text-green-300">$ </span>
                <Typewriter text="echo 'Welcome to my portfolio site!'" />
                <br />
                <span className="text-green-300">$ </span>
                <Typewriter text="cat about.txt" speed={32} />
                <br/><br/>
                <span className="text-green-300">// </span>
                <span>
                  Hi, I'm <span className="text-cyan-400 font-semibold">Lahiru Tissera</span> 🌐<br/>
                  <span className="text-green-300">// </span>
                  <span>Available for <span className="text-emerald-400">new opportunities</span>!</span>
                </span>
              </div>
            </motion.div>

            {/* Status Badge */}
            <Badge className="w-fit bg-emerald-500/10 text-emerald-400 border-emerald-500/30 mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
              />
              Available for new opportunities
            </Badge>

            {/* Location */}
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-1 text-gray-400 dark:text-gray-400 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Kadawatha, Sri Lanka</span>
            </div>

            {/* Dynamic Role Display */}
            <div className="h-14 flex items-center justify-center lg:justify-start">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <span
                  className={`p-2 rounded-lg bg-gradient-to-r ${[
                    "from-blue-500 to-cyan-500",
                    "from-purple-500 to-pink-500",
                    "from-emerald-500 to-teal-500",
                    "from-orange-500 to-red-500",
                  ][currentRole]} backdrop-blur-sm border border-primary/40`}
                >
                  <Icon className="w-6 h-6 text-white drop-shadow" />
                </span>
                <span className="text-2xl sm:text-3xl font-medium text-white dark:text-white text-gray-900">
                  <Typewriter text={codeRoles[currentRole]} speed={32} cursor={false}/>
                </span>
              </motion.div>
            </div>

            <p className="text-lg sm:text-xl text-gray-200 dark:text-gray-200 text-gray-700 leading-relaxed max-w-2xl font-mono mt-2 mb-4">
              Creative Full-Stack Developer with expertise in&nbsp;
              <span className="text-cyan-400 dark:text-cyan-400 text-cyan-600 font-semibold font-mono">Web3</span>,&nbsp;
              <span className="text-blue-400 dark:text-blue-400 text-blue-600 font-semibold font-mono">React</span>, and&nbsp;
              <span className="text-orange-400 dark:text-orange-400 text-orange-600 font-semibold font-mono">Machine Learning</span>.<br />
              I build elegant, efficient, and user-centric digital experiences that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="group relative overflow-hidden border-2 border-green-500/50 bg-green-500/10 dark:bg-green-500/10 bg-green-500/20 text-green-400 dark:text-green-400 text-green-600 hover:bg-green-500/20 hover:text-green-300 dark:hover:text-green-300 hover:text-green-700 font-mono px-8 py-4 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <a href="#projects" className="flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-600/50 dark:border-gray-600/50 border-gray-400/50 bg-gray-800/50 dark:bg-gray-800/50 bg-gray-200/50 text-gray-300 dark:text-gray-300 text-gray-700 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 hover:bg-gray-300/50 font-mono px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300" 
                asChild
              >
                <a href="/docs/Lakshan Tissera - SE.pdf" download className="flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-4">
              {[
                {
                  icon: Github,
                  href: "https://github.com/LahiruLakshan",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/lahiru-lakshan-tissera/",
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
                  className="group relative p-3 rounded-full bg-gray-800/50 dark:bg-gray-800/50 bg-gray-200/50 hover:bg-green-500/20 backdrop-blur-sm transition-all duration-300 border border-gray-600/30 dark:border-gray-600/30 border-gray-400/30"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-6 h-6 text-gray-300 dark:text-gray-300 text-gray-700 group-hover:text-green-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Right - Avatar and Visuals */}
          <motion.div
            className="relative flex justify-center items-center z-0"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Code Editor Style Decorations */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Rotating Circles */}
              <motion.div
                className="absolute w-96 h-96 border-2 border-green-500/20 dark:border-green-500/20 border-green-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-72 h-72 border-2 border-cyan-500/15 dark:border-cyan-500/15 border-cyan-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-52 h-52 border-2 border-orange-500/15 dark:border-orange-500/15 border-orange-400/20 rounded-full"
                animate={{
                  scale: [1, 1.13, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            {/* Main Avatar */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-green-400/30 shadow-2xl hover:shadow-green-300/25 transition-all duration-500 ring-8 ring-gray-800/30 dark:ring-gray-800/30 ring-gray-400/30">
                <Image
                  src="/images/graduation-img.JPG"
                  alt="Lahiru Tissera"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  width={1000}
                  height={1000}
                />
              </Avatar>
            </motion.div>

            {/* Code Badges */}
            <div className="absolute inset-0 pointer-events-none z-20">
              {[faReact, faNodeJs, faPython, faGithubFA].map((icon, idx) => (
                <motion.div
                  key={idx}
                  className="absolute"
                  style={{
                    top: `${20 + Math.sin((idx * Math.PI) / 2) * 35}%`,
                    left: `${20 + Math.cos((idx * Math.PI) / 2) * 35}%`,
                  }}
                  animate={{
                    y: [0, -10, 0], rotate: [0, 8, -8, 0],
                  }}
                  transition={{
                    duration: 2.5 + idx * 0.5,
                    repeat: Infinity,
                    delay: idx * 0.6,
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-gray-900/80 dark:bg-gray-900/80 bg-white/90 border-green-400/30 text-green-300 dark:text-green-300 text-green-700 font-mono px-3 py-2 rounded-full text-xs shadow-lg"
                  >
                    <FontAwesomeIcon icon={icon} className="text-base mr-1" />
                    {["React", "Node.js", "Python", "GitHub"][idx]}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll To Next */}
        <button
          onClick={() => {
            const nextSection = document.getElementById("about");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group flex flex-col items-center space-y-2 text-gray-300 dark:text-gray-300 text-gray-600 hover:text-green-400 transition-all duration-300 mt-20"
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full items-center flex flex-col"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>
      </div>
    </motion.section>
  );
}
