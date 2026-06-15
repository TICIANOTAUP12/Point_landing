import { Link } from "react-router";
import { AGENCIA_LOCATION, AGENCIA_NAME } from "../../lib/whatsapp";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img
            src={LOGO_SRC}
            alt={AGENCIA_NAME}
            width={26}
            height={26}
            className="object-contain shrink-0"
            style={{ background: "transparent" }}
          />
          <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {AGENCIA_NAME}
          </span>
          <span className="text-[#4B5563] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            — Ingeniería de software robusta · {AGENCIA_LOCATION}
          </span>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {["Soluciones", "Tecnología", "Casos", "Contacto"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-[#4B5563] hover:text-[#9CA3AF] transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5">
          <Link
            to="/politica-de-privacidad"
            className="text-xs text-[#4B5563] hover:text-[#9CA3AF] transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Política de Privacidad
          </Link>
          <p className="text-xs text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            © 2025 {AGENCIA_NAME}. {AGENCIA_LOCATION}.
          </p>
        </div>
      </div>
    </footer>
  );
}
