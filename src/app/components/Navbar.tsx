import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { AGENCIA_NAME, WhatsAppMessages, whatsappUrl } from "../../lib/whatsapp";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

function BrandIcon({ size = 28 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt={AGENCIA_NAME}
      width={size}
      height={size}
      className="object-contain shrink-0"
      style={{ display: "block", background: "transparent" }}
    />
  );
}

type NavLink = { href: string; label: string; isRoute?: boolean };

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links: NavLink[] = [
    { href: "/facturacion-afip", label: "AFIP / ARCA", isRoute: true },
    { href: "/analiza-tu-negocio", label: "Analizá tu negocio", isRoute: true },
    { href: "#soluciones", label: "Soluciones" },
    { href: "#tecnología", label: "Tecnología" },
    { href: "#casos", label: "Casos" },
    { href: "#contacto", label: "Contacto" },
  ];
  const meetingUrl = whatsappUrl(WhatsAppMessages.meeting);

  function renderLink(link: NavLink, onClick?: () => void) {
    const className =
      "text-sm text-[#9CA3AF] hover:text-white transition-colors duration-200";
    const style = { fontFamily: "'Plus Jakarta Sans', sans-serif" };
    if (link.isRoute) {
      return (
        <Link key={link.href} to={link.href} className={className} style={style} onClick={onClick}>
          {link.label}
        </Link>
      );
    }
    return (
      <a key={link.href} href={link.href} className={className} style={style} onClick={onClick}>
        {link.label}
      </a>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <BrandIcon size={30} />
          <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {AGENCIA_NAME}
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => renderLink(link))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contacto"
            className="text-sm text-[#9CA3AF] hover:text-white transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Contacto
          </a>
          <a
            href={meetingUrl}
            target="_blank"
            rel="noopener noreferrer"
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
          {links.map((link) => renderLink(link, () => setMenuOpen(false)))}
          <a
            href={meetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded-lg bg-[#2563EB] text-white text-sm text-center hover:bg-[#1d4ed8] transition-all"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Agendar llamada
          </a>
        </div>
      )}
    </nav>
  );
}
