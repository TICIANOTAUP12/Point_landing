import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AfipArca } from "../components/AfipArca";
import { Pain } from "../components/Pain";
import { Solutions } from "../components/Solutions";
import { TechStack } from "../components/TechStack";
import { Cases } from "../components/Cases";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AfipArca />
      <Pain />
      <Solutions />
      <TechStack />
      <Cases />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
