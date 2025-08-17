import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Skills } from '@/components/skills';

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

