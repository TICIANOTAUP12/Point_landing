export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-[#2563EB] flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.5)]">
            <span className="text-white text-[10px] font-bold" style={{ fontFamily: "'JetBrains Mono', monospace" }}>T</span>
          </div>
          <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>TAUP</span>
          <span className="text-[#4B5563] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            — Ingeniería de software robusta.
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

        <p className="text-xs text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © 2025 TAUP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
