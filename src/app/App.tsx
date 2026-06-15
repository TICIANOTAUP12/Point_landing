import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pain } from "./components/Pain";
import { Solutions } from "./components/Solutions";
import { TechStack } from "./components/TechStack";
import { Cases } from "./components/Cases";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.14); }
      `}</style>
      <Navbar />
      <Hero />
      <Pain />
      <Solutions />
      <TechStack />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}
