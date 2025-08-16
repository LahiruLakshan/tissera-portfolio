import Image from 'next/image';
import {
  Award,
  BrainCircuit,
  Briefcase,
  Cpu,
  Download,
  Github,
  Linkedin,
  Mail,
  Palette,
  ServerCog,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Skills } from '@/components/skills';

const services = [
  {
    icon: <ServerCog className="w-8 h-8 text-primary" />,
    title: 'Full-Stack Development',
    description:
      'Crafting robust and scalable web applications from front-end to back-end, ensuring a seamless user experience.',
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-primary" />,
    title: 'AI/ML Integration',
    description:
      'Leveraging cutting-edge AI and Machine Learning models to build intelligent features and data-driven solutions.',
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and visually appealing user interfaces that prioritize user engagement and accessibility.',
  },
];

const projects = [
  {
    title: 'AI-Powered Content Platform',
    description:
      'A platform that uses generative AI to help creators produce content briefs and articles, boosting productivity by 300%.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Stripe'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'abstract tech',
  },
  {
    title: 'E-Commerce Analytics Dashboard',
    description:
      'A comprehensive dashboard providing real-time insights and data visualization for online store performance.',
    tech: ['React', 'Redux', 'Chart.js', 'Node.js', 'PostgreSQL'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard graph',
  },
  {
    title: 'Collaborative Project Manager',
    description:
      'A real-time project management tool designed to improve team collaboration with features like kanban boards and chat.',
    tech: ['Vue.js', 'GraphQL', 'Apollo', 'MongoDB', 'WebSockets'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'team work',
  },
];

const experiences = [
  {
    role: 'Lead Full-Stack Engineer',
    company: 'Innovatech Solutions',
    period: '2020 - Present',
    description:
      'Leading a team of developers in building and maintaining enterprise-level applications. Spearheaded the integration of AI services, improving data processing efficiency by 40%.',
  },
  {
    role: 'Senior Software Developer',
    company: 'Data Systems Inc.',
    period: '2018 - 2020',
    description:
      'Developed and optimized high-traffic web applications, focusing on performance and scalability. Contributed to a 25% reduction in page load times.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Web Agency',
    period: '2016 - 2018',
    description:
      'Built responsive websites and custom features for a variety of clients using modern web technologies. Gained foundational experience in the full development lifecycle.',
  },
];

const achievements = [
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: 'Innovator of the Year',
    source: 'Innovatech Solutions, 2022',
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: 'Top Performer Award',
    source: 'Data Systems Inc., 2019',
  },
  {
    icon: <Award className="w-6 h-6 text-accent" />,
    title: 'Certified Cloud Practitioner',
    source: 'Amazon Web Services, 2021',
  },
];

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Tailwind CSS',
  'Firebase',
  'Docker',
  'Kubernetes',
  'UI/UX Design',
  'Machine Learning',
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Experience/>
      <Achievements/>
      <Contact/>
    </div>
  );
}

