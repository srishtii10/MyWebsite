import './App.css';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import "@fontsource/poppins";
import { Projects } from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />

      <div id="hero" className="scroll-smooth">
        <Hero />
      </div>

      <div id="about" className="scroll-smooth">
        <Intro />
      </div>

      <div id="experiences" className="scroll-smooth">
        <Experience />
      </div>


      <div id="projects" className="scroll-smooth">
        <Projects />
      </div>

      <div id="skills" className="scroll-smooth">
        <Skills />
      </div>

     
      <div id="contact" className="scroll-smooth">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;