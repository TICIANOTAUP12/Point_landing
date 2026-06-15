import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Soluciones", "Tecnología", "Casos", "Contacto"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-md bg-[#2563EB] flex items-center justify-center shadow-[0_0_16px_rgba(37,99,235,0.6)]">
            <span className="text-white text-xs font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>T</span>
          </div>
          <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TAUP</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Iniciar sesión
          </a>
          <a
            href="#contacto"
            className="px-4 py-2 rounded-lg bg-[#2563EB] text-white text-sm hover:bg-[#1d4ed8] transition-all duration-200 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Agendar llamada
          </a>
        </div>

        <button
          className="md:hidden text-[#9CA3AF] hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-[#9CA3AF] hover:text-white transition-colors py-1"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-sm text-center hover:bg-[#1d4ed8] transition-all"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Agendar llamada
          </a>
        </div>
      )}
    </nav>
  );
}
