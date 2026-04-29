import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Awards } from './components/Awards';
import { Hobbies } from './components/Hobbies';
import { Resume } from './components/Resume';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Awards />
        <Hobbies />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
