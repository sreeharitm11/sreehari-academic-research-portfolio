import { Navigation } from './components/Navigation';
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
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Blog />
        <Experience />
        <Skills />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
