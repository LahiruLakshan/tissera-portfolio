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
      {/* <section id="hero" className="container py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <Badge
              variant="outline"
              className="w-fit bg-accent/10 text-accent border-accent"
            >
              Available for new opportunities
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-headline tracking-tighter">
              Hi, I&apos;m Tissera
            </h1>
            <p className="text-xl text-muted-foreground">
              A passionate Full-Stack Engineer with expertise in building modern
              web applications and integrating AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/tissera_cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" aria-label="GitHub Profile">
                <Github className="w-7 h-7 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="#" aria-label="LinkedIn Profile">
                <Linkedin className="w-7 h-7 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
              <a href="mailto:contact@tissera.com" aria-label="Email">
                <Mail className="w-7 h-7 text-muted-foreground hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
             <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10"></div>
            <Avatar className="w-64 h-64 lg:w-80 lg:h-80 border-4 border-primary/20 shadow-lg">
              <AvatarImage src="https://placehold.co/400x400.png" alt="Tissera" data-ai-hint="portrait" />
              <AvatarFallback>TP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </section> */}

      <Hero/>


      {/* <section id="about" className="py-24 sm:py-32 bg-card">
        <div className="container">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-headline flex items-center gap-2">
                <Cpu className="w-8 h-8" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 text-base text-muted-foreground space-y-4">
                <p>
                  Hello! I&apos;m a dedicated Full-Stack Engineer with a knack for
                  creating elegant, efficient, and user-centric digital
                  experiences. With over 8 years in the industry, I&apos;ve had the
                  privilege of working on a diverse range of projects, from
                  dynamic e-commerce platforms to sophisticated AI-driven
                  applications.
                </p>
                <p>
                  My passion lies in bridging the gap between complex
                  technologies and intuitive design. I thrive on solving
                  challenging problems and am constantly exploring new tools and
                  frameworks to stay at the forefront of web development.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <About/>

      {/* <section id="services" className="py-24 sm:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">
              Services I Offer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I provide end-to-end solutions to bring your digital vision to
              life with quality and precision.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <Services/>

      {/* <section id="projects" className="py-24 sm:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <Sparkles className="w-10 h-10 text-accent" />
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I&apos;m proud to have worked on.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.dataAiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <Projects/>

      {/* <section id="experience" className="py-24 sm:py-32">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-3">
              <Briefcase className="w-10 h-10" />
              Professional Experience
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey as a developer, from my first role to my current
              position.
            </p>
          </div>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                  <Card>
                    <CardHeader>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription>
                        {exp.company} &middot; {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Experience/>

      {/* <section id="achievements" className="py-24 sm:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">
              Achievements & Recognition
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I&apos;m proud to have received recognition for my dedication and
              hard work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 flex items-center gap-4">
                {achievement.icon}
                <div>
                  <h3 className="font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.source}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <Achievements/>
      <Contact/>
    </div>
  );
}



// // src/app/page.tsx
// import { Hero } from '@/components/hero';
// import { Skills } from '@/components/skills';
// import { Projects } from '@/components/projects';
// // import { Experience } from '@/components/experience';
// // import { Contact } from '@/components/contact';

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <Skills />
//       <Projects />
//       {/* <Experience />
//       <Contact /> */}
//     </>
//   );
// }

