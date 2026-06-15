import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Pain } from "../components/Pain";
import { Solutions } from "../components/Solutions";
import { TechStack } from "../components/TechStack";
import { Cases } from "../components/Cases";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pain />
      <Solutions />
      <TechStack />
      <Cases />
      <Contact />
      <Footer />
    </>
  );
}
