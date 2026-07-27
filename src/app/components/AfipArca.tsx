import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

/** Teaser en home: el detalle vive en /facturacion-afip */
export function AfipArca() {
  return (
    <section
      id="facturacion-afip"
      className="relative py-20 border-t border-white/[0.04] ta-section-surface"
    >
      <div className="absolute inset-0 pointer-events-none ta-mesh-bg opacity-35">
        <div className="absolute inset-0 ta-mesh-bg__grid opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <span
            className="text-xs text-[#34d399] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // facturacion_arca
          </span>
          <h2
            className="mt-3 text-3xl sm:text-4xl text-white leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Facturación electrónica AFIP / ARCA
          </h2>
          <p
            className="mt-3 text-[#9CA3AF] leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Integración a tu sistema, módulo a medida o modernización de gestiones antiguas.
            El detalle de soluciones está en la página dedicada.
          </p>
        </div>
        <Link
          to="/facturacion-afip"
          className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#059669] text-white hover:bg-[#047857] transition-all shrink-0"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
        >
          Ir a soluciones ARCA
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
