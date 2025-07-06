import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
