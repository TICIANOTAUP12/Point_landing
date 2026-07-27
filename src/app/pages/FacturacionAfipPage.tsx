import { useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Link2,
  MessageCircle,
  Monitor,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { trackEvent, trackMetaViewContent } from "../../lib/analytics";
import {
  AGENCIA_NAME,
  WhatsAppMessages,
  whatsappUrl,
} from "../../lib/whatsapp";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { InvoicePreview } from "../components/InvoicePreview";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;
const FD = "'Plus Jakarta Sans', sans-serif";
const FM = "'JetBrains Mono', monospace";

const SOLUTIONS = [
  {
    icon: Link2,
    title: "Integración a tu sistema actual",
    body: "Ya tenés ERP, POS o e-commerce: conectamos el módulo AFIP/ARCA por API. No cambiás de sistema; empezás a facturar desde el que ya usás.",
  },
  {
    icon: Monitor,
    title: "Facturación a medida (sin sistema)",
    body: "Si todavía cargás en Excel o en el sitio de AFIP a mano, armamos un flujo simple y personalizado para emitir y controlar comprobantes.",
  },
  {
    icon: Workflow,
    title: "Modernizar sistemas antiguos",
    body: "Sistemas viejos o a medida sin AFIP: los enlazamos o extendemos para que cumplan la normativa actual sin reescribir todo de cero.",
  },
  {
    icon: FileText,
    title: "Monitoreo de comprobantes",
    body: "Historial, estados y control de facturas A/B/C y notas de crédito/débito en un solo lugar, multi-empresa si lo necesitás.",
  },
] as const;

const STEPS = [
  { n: "01", title: "Tu operación", desc: "Con o sin sistema de gestión." },
  { n: "02", title: "Módulo ARCA", desc: "Integración o desarrollo a medida." },
  { n: "03", title: "Factura lista", desc: "Emisión electrónica + monitoreo." },
] as const;

const FAQ = [
  {
    q: "¿Tengo que cambiar mi sistema de gestión?",
    a: "No. Si ya tenés uno, lo habitual es conectar el módulo AFIP/ARCA. Solo armamos algo nuevo si no tenés gestión o conviene modernizar.",
  },
  {
    q: "¿Cumple las normativas actuales de AFIP / ARCA?",
    a: "Trabajamos sobre facturación electrónica alineada a la normativa vigente (comprobantes A/B/C, NC/ND). El detalle se valida en el diagnóstico de tu caso.",
  },
  {
    q: "¿Cuánto tarda empezar?",
    a: "Depende de tu sistema y certificados. En el diagnóstico te decimos alcance y tiempos reales, sin promesas genéricas.",
  },
] as const;

const PAGE_BG =
  "radial-gradient(ellipse 80% 50% at 20% -5%, rgba(16,185,129,0.16), transparent 55%), radial-gradient(ellipse 55% 40% at 95% 15%, rgba(34,211,238,0.08), transparent 50%), linear-gradient(180deg, #07151C 0%, #0B1F2A 40%, #0A1620 100%)";

export function FacturacionAfipPage() {
  const waUrl = whatsappUrl(WhatsAppMessages.afipIntegracion);

  useEffect(() => {
    document.title = "Facturación electrónica AFIP / ARCA | Agencia TA";
    trackMetaViewContent("afip_integracion");
    trackEvent("view_content", {
      content_name: "afip_integracion",
      content_category: "afip",
    });
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ background: PAGE_BG }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 20%, #000 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 20%, #000 10%, transparent 70%)",
        }}
      />

      <header className="relative z-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={LOGO_SRC} alt={AGENCIA_NAME} width={28} height={28} className="object-contain" />
            <span className="tracking-wide" style={{ fontFamily: FD, fontWeight: 800 }}>
              {AGENCIA_NAME}
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline text-sm text-white/65 hover:text-white transition-colors"
              style={{ fontFamily: FD }}
            >
              Inicio
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white text-sm hover:brightness-110 transition"
              style={{ fontFamily: FD, fontWeight: 700 }}
              onClick={() => trackEvent("whatsapp_click", { source: "arca_nav" })}
            >
              <MessageCircle size={15} />
              Consultar
            </a>
          </div>
        </div>
      </header>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <p className="text-[#6ee7b7] text-xs tracking-[0.18em] uppercase mb-5" style={{ fontFamily: FM }}>
          Facturación electrónica · AFIP / ARCA
        </p>
        <h1
          className="text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.05] max-w-3xl mb-6"
          style={{ fontFamily: FD, fontWeight: 800 }}
        >
          {AGENCIA_NAME}
          <span className="block mt-2 text-[#A7F3D0] font-semibold text-[clamp(1.3rem,3.2vw,1.9rem)] leading-snug">
            Facturas electrónicas listas para tu PyME.
          </span>
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-8" style={{ fontFamily: FD }}>
          No cambiás tu sistema: le conectamos el módulo AFIP/ARCA que ya está en producción,
          o lo armamos a medida si todavía facturás aparte. Rápido, sencillo, monitoreable.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#10b981] text-[#042f2e] hover:bg-[#34d399] transition"
            style={{ fontFamily: FD, fontWeight: 800 }}
            onClick={() => trackEvent("whatsapp_click", { source: "arca_hero" })}
          >
            Quiero integrar AFIP / ARCA
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#preview-factura"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white/90 hover:bg-white/[0.04] transition"
            style={{ fontFamily: FD, fontWeight: 600 }}
          >
            Ver cómo se ve tu factura
          </a>
          <a
            href="#soluciones-arca"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white/90 hover:bg-white/[0.04] transition"
            style={{ fontFamily: FD, fontWeight: 600 }}
          >
            Ver qué ofrecemos
          </a>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
            >
              <span className="text-[#34d399] text-xs tracking-widest" style={{ fontFamily: FM }}>
                {step.n}
              </span>
              <h2 className="mt-3 text-xl" style={{ fontFamily: FD, fontWeight: 800 }}>
                {step.title}
              </h2>
              <p className="mt-2 text-sm text-white/60 leading-relaxed" style={{ fontFamily: FD }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="preview-factura" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-[#34d399] text-xs tracking-[0.16em] uppercase mb-3" style={{ fontFamily: FM }}>
          Esquema de comprobante
        </p>
        <h2 className="text-3xl sm:text-4xl leading-tight max-w-2xl mb-3" style={{ fontFamily: FD, fontWeight: 800 }}>
          Así se ve una factura del sistema
        </h2>
        <p className="text-white/60 max-w-2xl mb-8 leading-relaxed" style={{ fontFamily: FD }}>
          Basado en el formato real de emisión ARCA / AFIP. Probá poniendo tu nombre y CUIT
          para ver cómo quedaría el receptor en el comprobante.
        </p>
        <InvoicePreview />
      </section>

      <section id="soluciones-arca" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-[#34d399] text-xs tracking-[0.16em] uppercase mb-3" style={{ fontFamily: FM }}>
          Soluciones
        </p>
        <h2 className="text-3xl sm:text-4xl leading-tight max-w-2xl mb-4" style={{ fontFamily: FD, fontWeight: 800 }}>
          Especialmente facturación. Sin rodeos de ingeniería genérica.
        </h2>
        <p className="text-white/60 max-w-2xl mb-10 leading-relaxed" style={{ fontFamily: FD }}>
          Oferta concreta para emitir y controlar comprobantes electrónicos: con sistema,
          sin sistema, o modernizando lo que ya tenés.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 hover:border-[#34d399]/35 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#10b981]/15 border border-[#10b981]/25 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#6ee7b7]" />
                </div>
                <h3 className="text-xl mb-2" style={{ fontFamily: FD, fontWeight: 800 }}>
                  {item.title}
                </h3>
                <p className="text-white/65 leading-relaxed" style={{ fontFamily: FD }}>
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div
          className="rounded-3xl px-7 py-10 sm:px-12 sm:py-12 overflow-hidden relative border border-[#10b981]/20"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(14,116,144,0.08) 55%, rgba(11,31,42,0.9) 100%)",
          }}
        >
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} className="text-[#6ee7b7]" />
                <span className="text-[#6ee7b7] text-xs tracking-widest uppercase" style={{ fontFamily: FM }}>
                  En producción
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl leading-tight mb-4" style={{ fontFamily: FD, fontWeight: 800 }}>
                Módulo multi-empresa ya operando. Infraestructura propia.
              </h2>
              <p className="text-white/65 leading-relaxed mb-6" style={{ fontFamily: FD }}>
                +9 sistemas en producción · +40 proyectos desarrollados · facturación
                electrónica multi-empresa. Sin promesas de % de ventas ni garantías inventadas.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Cumplimiento de normativas vigentes AFIP / ARCA",
                  "Rápido, fácil y sencillo para el equipo operativo",
                  "Monitoreo centralizado de facturas emitidas",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#6ee7b7] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/85" style={{ fontFamily: FD }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-black/25 border border-white/10 p-6">
              <p className="text-[#99f6e4] text-xs tracking-widest uppercase mb-4" style={{ fontFamily: FM }}>
                Comprobante
              </p>
              <div className="space-y-3 text-sm" style={{ fontFamily: FM }}>
                <div className="flex justify-between text-white/70"><span>Tipo</span><span>Factura B</span></div>
                <div className="flex justify-between text-white/70"><span>Canal</span><span>AFIP / ARCA</span></div>
                <div className="flex justify-between text-white/70"><span>Estado</span><span className="text-[#6ee7b7]">CAE OK</span></div>
                <div className="h-px bg-white/10 my-2" />
                <div className="flex justify-between text-white/70"><span>Monitoreo</span><span>activo</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <h2 className="text-3xl mb-8" style={{ fontFamily: FD, fontWeight: 800 }}>
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
              <h3 className="mb-2" style={{ fontFamily: FD, fontWeight: 700 }}>{item.q}</h3>
              <p className="text-white/60 leading-relaxed" style={{ fontFamily: FD }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="rounded-3xl border border-[#10b981]/30 bg-[#10b981]/10 px-7 py-10 sm:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: FD, fontWeight: 800 }}>
            Pedí un diagnóstico AFIP / ARCA
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-7" style={{ fontFamily: FD }}>
            Contanos si ya tenés sistema o no. Te respondemos con el camino más directo para
            empezar a facturar electrónicamente.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#10b981] text-[#042f2e] hover:bg-[#34d399] transition"
            style={{ fontFamily: FD, fontWeight: 800 }}
            onClick={() => trackEvent("whatsapp_click", { source: "arca_cta" })}
          >
            <MessageCircle size={18} />
            Continuar por WhatsApp
          </a>
          <p className="mt-4 text-xs text-white/45" style={{ fontFamily: FD }}>
            <Link to="/politica-de-privacidad" className="underline hover:text-white/70">
              Política de privacidad
            </Link>
          </p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06] py-8">
        <div
          className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/45"
          style={{ fontFamily: FD }}
        >
          <span>© {new Date().getFullYear()} {AGENCIA_NAME}</span>
          <Link to="/" className="hover:text-white/80">Volver al inicio</Link>
        </div>
      </footer>

      <WhatsAppFloat />
    </div>
  );
}
