import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Store,
  UtensilsCrossed,
  ShoppingBag,
  Briefcase,
} from "lucide-react";
import { trackEvent, trackMetaViewContent } from "../../lib/analytics";
import {
  AGENCIA_NAME,
  WhatsAppMessages,
  whatsappUrl,
} from "../../lib/whatsapp";
import { WhatsAppFloat } from "../components/WhatsAppFloat";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;
const FD = "'Plus Jakarta Sans', sans-serif";
const FM = "'JetBrains Mono', monospace";
const POINT_NAME = "Point Sales";
const PRICE_LABEL = "$20.000";

const PAGE_BG =
  "radial-gradient(ellipse 80% 50% at 18% -8%, rgba(37,99,235,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 95% 12%, rgba(96,165,250,0.10), transparent 50%), linear-gradient(180deg, #070B14 0%, #0A1220 42%, #0A0A0A 100%)";

const AUDIENCES = [
  {
    icon: UtensilsCrossed,
    title: "Gastronómicos",
    body: "Reservas, delivery y pedidos por chat que no convierten como deberían.",
  },
  {
    icon: Store,
    title: "Retail",
    body: "Consultas de stock, precios y seguimiento que se pierden entre mensajes.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce por WhatsApp",
    body: "Ventas que dependen del chat: tiempos de respuesta, scripts y cierres.",
  },
  {
    icon: Briefcase,
    title: "B2B",
    body: "Cotizaciones y seguimiento comercial donde el embudo se enfría.",
  },
] as const;

const DELIVERABLES = [
  "Informe detallado: por qué no estás vendiendo o no llegás a los resultados esperados",
  "Lectura del principal error a partir de tus promociones recientes",
  "Consejos concretos y priorizados para aplicar en tu operación",
] as const;

const CHAT_LINES = [
  { side: "client" as const, text: "Hola, ¿tienen stock del combo?" },
  { side: "biz" as const, text: "Sí, te paso el precio…" },
  { side: "client" as const, text: "Ok, después veo" },
  { side: "note" as const, text: "Señal: interés sin cierre · respuesta genérica" },
];

function AnalysisVisual() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= CHAT_LINES.length) return;
    const t = window.setTimeout(() => setVisible((v) => v + 1), 520);
    return () => window.clearTimeout(t);
  }, [visible]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/[0.10] bg-[#0D0D12]/95 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111116]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#374151] text-xs" style={{ fontFamily: FM }}>
          analisis_whatsapp.ts
        </span>
        <span className="ml-auto text-[10px] text-[#60a5fa] bg-[#1d4ed8]/15 px-2 py-0.5 rounded border border-[#1d4ed8]/30">
          LIVE
        </span>
      </div>

      <div className="p-5 sm:p-6 min-h-[300px] flex flex-col gap-3">
        <p className="text-[#60a5fa] text-xs tracking-wide uppercase mb-1" style={{ fontFamily: FM }}>
          Canal principal · WhatsApp
        </p>
        {CHAT_LINES.slice(0, visible).map((line, i) => {
          if (line.side === "note") {
            return (
              <div
                key={i}
                className="mt-2 rounded-lg border border-[#2563EB]/25 bg-[#2563EB]/10 px-3 py-2 text-xs text-[#93c5fd] animate-[fadeSlide_400ms_ease]"
                style={{ fontFamily: FM }}
              >
                {line.text}
              </div>
            );
          }
          const isClient = line.side === "client";
          return (
            <div
              key={i}
              className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed animate-[fadeSlide_400ms_ease] ${
                isClient
                  ? "self-start rounded-2xl rounded-tl-md bg-white/[0.06] text-white/85"
                  : "self-end rounded-2xl rounded-tr-md bg-[#1d4ed8]/35 text-[#E0E7FF]"
              }`}
              style={{ fontFamily: FD }}
            >
              {line.text}
            </div>
          );
        })}
        {visible < CHAT_LINES.length && (
          <span className="inline-block w-2 h-4 bg-[#2563EB] animate-pulse rounded-sm mt-1" />
        )}
      </div>

      <div className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.04] bg-[#0D0D0F]">
        <span
          className="flex items-center gap-1.5 text-[10px] text-[#60a5fa]"
          style={{ fontFamily: FM }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          HALLAZGO_EN_CURSO
        </span>
        <span className="text-[10px] text-[#374151]" style={{ fontFamily: FM }}>
          pymes · 5+ años
        </span>
      </div>
    </div>
  );
}

export function AnalizaNegocioPage() {
  const waUrl = whatsappUrl(WhatsAppMessages.analizaNegocio);

  useEffect(() => {
    document.title = `Analiza tu negocio por ${PRICE_LABEL} | ${POINT_NAME} · ${AGENCIA_NAME}`;
    trackMetaViewContent("analiza_negocio");
    trackEvent("view_content", {
      content_name: "analiza_negocio",
      content_category: "point_sales",
    });
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ background: PAGE_BG }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.30]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 90% 60% at 50% 18%, #000 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 60% at 50% 18%, #000 10%, transparent 70%)",
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
              onClick={() => trackEvent("whatsapp_click", { source: "analisis_nav" })}
            >
              <MessageCircle size={15} />
              Consultar
            </a>
          </div>
        </div>
      </header>

      {/* Hero: brand · headline · support · CTA · dominant visual */}
      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
          <div className="animate-[fadeSlide_500ms_ease]">
            <p
              className="text-[#93c5fd] text-xs tracking-[0.18em] uppercase mb-4"
              style={{ fontFamily: FM }}
            >
              {POINT_NAME} · consultoría y asesoramiento
            </p>
            <h1
              className="text-[clamp(2.4rem,6.5vw,3.8rem)] leading-[1.02] mb-3"
              style={{ fontFamily: FD, fontWeight: 800 }}
            >
              {POINT_NAME}
            </h1>
            <p
              className="text-[clamp(1.35rem,3.4vw,2rem)] leading-snug text-[#BFDBFE] mb-5"
              style={{ fontFamily: FD, fontWeight: 700 }}
            >
              Analiza tu negocio por {PRICE_LABEL}
            </p>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-8" style={{ fontFamily: FD }}>
              Revisamos tu WhatsApp o canal principal de ventas y te entregamos un informe claro
              de por qué no estás vendiendo como esperás.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition"
                style={{ fontFamily: FD, fontWeight: 800 }}
                onClick={() => trackEvent("whatsapp_click", { source: "analisis_hero" })}
              >
                Quiero el análisis
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#precio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 text-white/90 hover:bg-white/[0.04] transition"
                style={{ fontFamily: FD, fontWeight: 600 }}
              >
                Ver qué incluye · {PRICE_LABEL}
              </a>
            </div>
          </div>
          <div className="animate-[fadeSlide_700ms_ease]">
            <AnalysisVisual />
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-[#60a5fa] text-xs tracking-[0.16em] uppercase mb-3" style={{ fontFamily: FM }}>
          El enfoque
        </p>
        <h2 className="text-3xl sm:text-4xl leading-tight max-w-2xl mb-4" style={{ fontFamily: FD, fontWeight: 800 }}>
          Marketing de lo que ya tenés, con mirada de asesores.
        </h2>
        <p className="text-white/60 max-w-2xl leading-relaxed mb-8" style={{ fontFamily: FD }}>
          Analizamos conversaciones reales con clientes —usualmente WhatsApp— y tu principal canal
          de ventas. Asesores con más de 5 años en industrias y comercios, enfocados en pymes:
          dónde se cae la venta y qué corregir primero.
        </p>
        <ul className="space-y-3 max-w-2xl">
          {[
            "Diagnóstico a partir de chats y promociones recientes",
            "Identificación del principal error que frena resultados",
            "Recomendaciones accionables, sin jerga innecesaria",
          ].map((line) => (
            <li key={line} className="flex items-start gap-2.5">
              <CheckCircle2 size={16} className="text-[#60a5fa] mt-0.5 shrink-0" />
              <span className="text-white/80" style={{ fontFamily: FD }}>
                {line}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-[#60a5fa] text-xs tracking-[0.16em] uppercase mb-3" style={{ fontFamily: FM }}>
          Para quién
        </p>
        <h2 className="text-3xl sm:text-4xl leading-tight max-w-2xl mb-10" style={{ fontFamily: FD, fontWeight: 800 }}>
          Públicos donde el chat decide la venta.
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
          {AUDIENCES.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#93c5fd]" />
                </div>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: FD, fontWeight: 800 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed" style={{ fontFamily: FD }}>
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="precio"
        className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16"
      >
        <div
          className="rounded-3xl px-7 py-10 sm:px-12 sm:py-12 border border-[#2563EB]/25 overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.14) 0%, rgba(29,78,216,0.08) 55%, rgba(10,18,32,0.92) 100%)",
          }}
        >
          <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div>
              <p
                className="text-[#93c5fd] text-xs tracking-widest uppercase mb-3"
                style={{ fontFamily: FM }}
              >
                Inversión
              </p>
              <h2 className="text-2xl sm:text-3xl leading-tight mb-2" style={{ fontFamily: FD, fontWeight: 800 }}>
                Análisis completo por {PRICE_LABEL}
              </h2>
              <p className="text-white/55 text-sm mb-6" style={{ fontFamily: FD }}>
                Pesos argentinos (ARS). Precio fijo del informe y consejos.
              </p>
              <p className="text-white/65 leading-relaxed mb-6" style={{ fontFamily: FD }}>
                Entregamos análisis + consejos a seguir. Si el diagnóstico tiene sentido para vos,
                el siguiente paso es implementar soluciones con nosotros: Point Sales, consultoría
                u asesoramiento especializado para pymes.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition"
                style={{ fontFamily: FD, fontWeight: 800 }}
                onClick={() => trackEvent("whatsapp_click", { source: "analisis_precio" })}
              >
                Solicitar por WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div>
              <p
                className="text-[#93c5fd] text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: FM }}
              >
                Entregables
              </p>
              <ul className="space-y-3">
                {DELIVERABLES.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-[#60a5fa] mt-0.5 shrink-0" />
                    <span className="text-sm text-white/85 leading-relaxed" style={{ fontFamily: FD }}>
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-[#60a5fa] text-xs tracking-[0.16em] uppercase mb-3" style={{ fontFamily: FM }}>
          Después del informe
        </p>
        <h2 className="text-3xl sm:text-4xl leading-tight max-w-2xl mb-4" style={{ fontFamily: FD, fontWeight: 800 }}>
          Si te sirve, implementamos el siguiente paso.
        </h2>
        <p className="text-white/60 max-w-2xl leading-relaxed" style={{ fontFamily: FD }}>
          Point Sales — consultoría y asesoramiento: podemos acompañarte con punto de venta,
          herramientas tecnológicas o asesoramiento especializado según el caso que aparezca
          en el análisis. Primero claridad; después ejecución.
        </p>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pb-20">
        <div className="rounded-3xl border border-[#2563EB]/30 bg-[#2563EB]/10 px-7 py-10 sm:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl mb-3" style={{ fontFamily: FD, fontWeight: 800 }}>
            Empezá el análisis de tu negocio
          </h2>
          <p className="text-white/65 max-w-xl mx-auto mb-2" style={{ fontFamily: FD }}>
            Escribinos por WhatsApp y coordinamos la revisión de tu canal de ventas.
          </p>
          <p
            className="text-[#93c5fd] text-sm mb-7 tracking-wide"
            style={{ fontFamily: FM }}
          >
            {PRICE_LABEL} ARS · informe + consejos
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition"
            style={{ fontFamily: FD, fontWeight: 800 }}
            onClick={() => trackEvent("whatsapp_click", { source: "analisis_cta" })}
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
          <span>
            © {new Date().getFullYear()} {AGENCIA_NAME} · {POINT_NAME}
          </span>
          <Link to="/" className="hover:text-white/80">
            Volver al inicio
          </Link>
        </div>
      </footer>

      <WhatsAppFloat />

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
