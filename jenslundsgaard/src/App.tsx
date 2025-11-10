import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-500 border-t border-zinc-800">
        <p>&copy; 2025 Jens Lundsgaard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
