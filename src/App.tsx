import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-primary/30 font-sans relative">
      <Navbar />
      <AnimatedBackground />
      <Hero />
      <Experience />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center border-t border-white/10 mt-20">
        <p className="text-gray-500 text-sm mb-2">
          Designed & Built by Harsh Pandey<br/>
          Product Engineer & Full Stack Developer
        </p>
        <p className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Harsh Pandey. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
