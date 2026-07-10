import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { Marquee } from './components/Marquee';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Research />
        <Projects />
        <Blog />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}
