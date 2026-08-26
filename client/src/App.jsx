import SkipLink from './components/layout/SkipLink.jsx';
import PillNav from './components/layout/PillNav.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Experience from './components/sections/Experience.jsx';
import XiraSpotlight from './components/sections/XiraSpotlight.jsx';
import Projects from './components/sections/Projects.jsx';
import Skills from './components/sections/Skills.jsx';
import Education from './components/sections/Education.jsx';
import Contact from './components/sections/Contact.jsx';

export default function App() {
  return (
    <>
      <SkipLink />
      <PillNav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <XiraSpotlight />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
