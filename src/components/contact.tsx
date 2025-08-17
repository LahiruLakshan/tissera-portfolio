// src/components/contact.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  CheckCircle,
  Zap,
  Coffee,
  Heart,
  Terminal,
  Activity,
  Monitor,
  Server,
  FileCode,
  GitBranch,
  Code2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "balahirulakshan@gmail.com",
    href: "mailto:balahirulakshan@gmail.com",
    color: "from-blue-500 to-cyan-500",
    description: "Drop me a message anytime",
    command: "mail --to=lahiru --priority=high",
    status: "ACTIVE"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 71 183 7836",
    href: "tel:+94711837836",
    color: "from-green-500 to-emerald-500",
    description: "Available for calls",
    command: "call --number=+94711837836",
    status: "AVAILABLE"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: "#",
    color: "from-purple-500 to-pink-500",
    description: "Based in Sri Lanka, Open to remote work",
    command: "locate --remote-friendly",
    status: "REMOTE_OK"
  }
];

const availabilityStatus = {
  status: "ONLINE",
  message: "Open for new opportunities",
  responseTime: "< 24 hours",
  timezone: "IST (GMT+5:30)",
  uptime: "99.9%"
};

const workPreferences = [
  { type: "Full-time", available: true, command: "hire --type=fulltime" },
  { type: "Contract", available: true, command: "contract --duration=flexible" },
  { type: "Remote", available: true, command: "work --location=remote" },
  { type: "Freelance", available: true, command: "freelance --project-based" }
];

const terminalContact = [
  { command: "ping lahiru-dev.com", output: "PONG - Response time: 1ms", delay: 0 },
  { command: "systemctl status contact-form", output: "● Active: accepting connections", delay: 0.8 },
  { command: "curl -X GET /api/availability", output: "✅ Status: ONLINE - Ready for collaboration", delay: 1.6 },
  { command: "grep -r 'response_time' logs/", output: "📧 Average response: < 24 hours", delay: 2.4 },
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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "5031ce40-7f53-48cc-9221-082ae57b8f16",
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
          redirect: false,
          captcha: false,
        })
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast({
          title: "Message sent successfully! 🚀",
          description: "I'll get back to you within 24 hours.",
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="contact"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#00ff0008_1px,transparent_1px),linear-gradient(to_bottom,#00ff0008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Floating Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['mail', 'ping', 'curl', 'send', 'connect', 'response', 'online', 'chat'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-gray-400/10 dark:text-green-400/10 font-mono text-lg select-none"
            style={{
              left: `${15 + (i * 10) % 70}%`,
              top: `${10 + (i * 12) % 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.1, 0.3, 0.1],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
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
          className="max-w-7xl mx-auto"
        >
          {/* Terminal Header */}
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
                className="p-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-500/30"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 40px rgba(34, 197, 94, 0.5)",
                    "0 0 20px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Terminal className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-mono font-bold text-green-600 dark:text-green-400">
                $ ./connect.sh
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="text-gray-400 dark:text-gray-500">// </span>
              Ready to <span className="text-green-600 dark:text-green-400">collaborate</span>? 
              Let's <span className="text-blue-600 dark:text-blue-400">build something amazing</span> together
            </motion.p>
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
                <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">contact@portfolio:~$</span>
              </div>

              <CardContent className="p-6 font-mono text-sm space-y-4 bg-gray-50 dark:bg-gray-900 min-h-[180px]">
                {terminalContact.map((cmd, index) => (
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

          {/* Availability Status - Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-16"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex items-center gap-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <Badge className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30 font-mono">
                      {availabilityStatus.status}
                    </Badge>
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-mono">
                    {availabilityStatus.message} • Response: {availabilityStatus.responseTime} • Uptime: {availabilityStatus.uptime}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Form - Terminal Style */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2 font-mono">message-form.tsx</span>
                </div>

                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-mono text-gray-900 dark:text-white flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Send className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </motion.div>
                    $ compose_message()
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 font-mono">
                    <span className="text-gray-400 dark:text-gray-500">// </span>
                    Fill out the form and I'll respond ASAP
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="text-sm font-medium mb-2 block text-green-600 dark:text-green-400 font-mono">const name = *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="'Your Name'"
                          required
                          className="border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white font-mono focus:border-green-500 dark:focus:border-green-400 transition-colors"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <label className="text-sm font-medium mb-2 block text-green-600 dark:text-green-400 font-mono">const email = *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="'your@email.com'"
                          required
                          className="border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white font-mono focus:border-green-500 dark:focus:border-green-400 transition-colors"
                        />
                      </motion.div>
                    </div>

                    {/* Subject */}
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-sm font-medium mb-2 block text-green-600 dark:text-green-400 font-mono">const subject = *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="'Project Discussion'"
                        required
                        className="border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white font-mono focus:border-green-500 dark:focus:border-green-400 transition-colors"
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="text-sm font-medium mb-2 block text-green-600 dark:text-green-400 font-mono">const message = *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="'Tell me about your project...'"
                        required
                        rows={6}
                        className="border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-white font-mono focus:border-green-500 dark:focus:border-green-400 transition-colors resize-none"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit"
                        size="lg"
                        disabled={isSubmitting || isSubmitted}
                        className="w-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-500/20 dark:to-blue-500/20 hover:from-green-200 hover:to-blue-200 dark:hover:from-green-500/30 dark:hover:to-blue-500/30 text-green-600 dark:text-green-400 border border-green-500/50 dark:border-green-500/30 font-mono py-4 text-lg font-medium transition-all duration-300"
                      >
                        {isSubmitted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-5 h-5" />
                            <span>$ message.sent()</span>
                          </motion.div>
                        ) : isSubmitting ? (
                          <motion.div
                            className="flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            <motion.div
                              animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                              }}
                              transition={{ 
                                rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                                scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                              }}
                            >
                              <Zap className="w-5 h-5" />
                            </motion.div>
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              $ sending...
                            </motion.span>
                          </motion.div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-green-600 dark:text-green-400">$ </span>
                            <Send className="w-5 h-5" />
                            send_message()
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              {/* Work Preferences - Terminal Style */}
              <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
                {/* Terminal Header */}
                <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">$</span>
                    <span className="text-gray-800 dark:text-white">ls work_preferences/</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400 font-mono">
                    <Coffee className="w-5 h-5" />
                    availability.json
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {workPreferences.map((pref) => (
                      <motion.div
                        key={pref.type}
                        whileHover={{ scale: 1.05 }}
                        className={`flex items-center gap-2 p-3 rounded-lg border font-mono ${
                          pref.available 
                            ? 'bg-green-100 dark:bg-green-500/10 border-green-500/50 dark:border-green-500/30 text-green-700 dark:text-green-400' 
                            : 'bg-gray-200 dark:bg-gray-700/30 border-gray-400 dark:border-gray-600 text-gray-500 dark:text-gray-400'
                        }`}
                        title={pref.command}
                      >
                        <CheckCircle className={`w-4 h-4 ${
                          pref.available ? 'text-green-600 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'
                        }`} />
                        <span className="text-sm font-medium">{pref.type}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information - Terminal Style */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gray-50/95 dark:hover:bg-gray-800/90 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                        {/* Terminal Header */}
                        <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-green-600 dark:text-green-400">$</span>
                              <span className="text-gray-800 dark:text-white">{info.command}</span>
                            </div>
                            <Badge className={`text-xs font-mono ${
                              info.status === 'ACTIVE' ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30' :
                              info.status === 'AVAILABLE' ? 'bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/50 dark:border-blue-500/30' :
                              'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/50 dark:border-purple-500/30'
                            }`}>
                              {info.status}
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className="p-3 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 shadow-lg"
                              whileHover={{ rotate: 15, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <IconComponent className="w-6 h-6 text-green-600 dark:text-green-400" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="font-semibold font-mono text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                {info.label}
                              </h3>
                              <motion.a
                                href={info.href}
                                className="text-green-600 dark:text-green-400 font-medium font-mono hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-1"
                                whileHover={{ x: 5 }}
                              >
                                {info.value}
                              </motion.a>
                              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-mono">
                                <span className="text-gray-400 dark:text-gray-500">// </span>
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Response Promise - Terminal Style */}
              <Card className="border border-gray-300 dark:border-gray-700 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm">
                {/* Terminal Header */}
                <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 dark:text-green-400">$</span>
                    <span className="text-gray-800 dark:text-white">cat sla.json</span>
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center"
                  >
                    <Clock className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-semibold mb-2 font-mono text-green-600 dark:text-green-400">Response SLA</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 font-mono">
                    <span className="text-gray-400 dark:text-gray-500">// </span>
                    Guaranteed response within 24 hours. For urgent projects, call directly.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Badge variant="outline" className="bg-gray-100 dark:bg-gray-800/50 font-mono text-gray-600 dark:text-gray-300 border-gray-400 dark:border-gray-600">
                      {availabilityStatus.timezone}
                    </Badge>
                    <Badge variant="outline" className="bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-500/50 dark:border-green-500/30 font-mono">
                      {availabilityStatus.uptime} Uptime
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Terminal Footer */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-20"
          >
            <Card className="border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl inline-block">
              <CardContent className="p-6">
                <div className="font-mono text-sm text-green-600 dark:text-green-400 flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4" />
                  <span>Contact system initialized. Ready to receive messages!</span>
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
    </motion.section>
  );
}
