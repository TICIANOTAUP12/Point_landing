import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { AGENCIA_LOCATION, AGENCIA_NAME, WhatsAppMessages, whatsappUrl } from "../../lib/whatsapp";

const codeSnippet = [
  { tokens: [{ t: "const", c: "keyword" }, { t: " pipeline", c: "var" }, { t: " = ", c: "op" }, { t: "await", c: "keyword" }, { t: " agenciaTA", c: "obj" }, { t: ".", c: "op" }, { t: "deploy", c: "fn" }, { t: "({", c: "bracket" }] },
  { tokens: [{ t: "  stack", c: "key" }, { t: ": ", c: "op" }, { t: "'microservices'", c: "str" }, { t: ",", c: "op" }] },
  { tokens: [{ t: "  scale", c: "key" }, { t: ": ", c: "op" }, { t: "'auto'", c: "str" }, { t: ",", c: "op" }] },
  { tokens: [{ t: "  latency", c: "key" }, { t: ": ", c: "op" }, { t: "'<50ms'", c: "str" }, { t: ",", c: "op" }] },
  { tokens: [{ t: "  rag", c: "key" }, { t: ": ", c: "op" }, { t: "true", c: "bool" }, { t: ",", c: "op" }] },
  { tokens: [{ t: "  uptime", c: "key" }, { t: ": ", c: "op" }, { t: "'99.99%'", c: "str" }] },
  { tokens: [{ t: "});", c: "bracket" }] },
  { tokens: [] },
  { tokens: [{ t: "// ✓ Sistema RAG activo", c: "comment" }] },
  { tokens: [{ t: "// ✓ Arquitectura lista para escalar", c: "comment" }] },
  { tokens: [{ t: "// ✓ Integración AFIP/ARCA habilitada", c: "comment" }] },
];

const colorMap: Record<string, string> = {
  keyword: "#a78bfa",
  var: "#e2e8f0",
  op: "#6b7280",
  obj: "#93c5fd",
  fn: "#60a5fa",
  bracket: "#e2e8f0",
  key: "#7dd3fc",
  str: "#86efac",
  bool: "#f9a8d4",
  comment: "#4b5563",
};

type SlideId = "arca" | "point" | "ingenieria";

const POINT_SITE_URL = "/point/";

function CodePanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeSnippet.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative rounded-2xl overflow-hidden ta-card ta-card--solid shadow-[0_0_80px_rgba(37,99,235,0.12)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111116]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#374151] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          ta_pipeline.ts
        </span>
        <span className="ml-auto text-[10px] text-[#1d4ed8] bg-[#1d4ed8]/10 px-2 py-0.5 rounded border border-[#1d4ed8]/20">
          PROD
        </span>
      </div>
      <div className="p-6 min-h-[260px] font-mono text-sm leading-7" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        {codeSnippet.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="text-[#1f2937] select-none w-4 text-right shrink-0">{i + 1}</span>
            <span>
              {line.tokens.map((tok, j) => (
                <span key={j} style={{ color: colorMap[tok.c] ?? "#e2e8f0" }}>{tok.t}</span>
              ))}
              {i === visibleLines - 1 && visibleLines < codeSnippet.length && (
                <span className="inline-block w-2 h-[14px] bg-[#2563EB] animate-pulse ml-0.5 rounded-sm" />
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.04] bg-[#0D0D0F]">
        <span className="flex items-center gap-1.5 text-[10px] text-[#059669]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
          DEPLOY_OK
        </span>
        <span className="text-[10px] text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>latency: 42ms</span>
        <span className="text-[10px] text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>uptime: 99.99%</span>
      </div>
    </div>
  );
}

function DashboardPanel() {
  const bars = [68, 82, 55, 91, 74, 88, 62, 95, 71, 84, 79, 93];
  return (
    <div className="relative rounded-2xl overflow-hidden ta-card ta-card--solid mt-4">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.05]">
        <span className="text-xs text-[#4B5563]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>[DASHBOARD_OPERATIVO]</span>
        <span className="text-[10px] text-[#059669] flex items-center gap-1">
          <TrendingUp size={10} /> +23.4% MoM
        </span>
      </div>
      <div className="px-4 py-4 flex items-end gap-1.5 h-20">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm transition-all duration-300"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1
                ? "linear-gradient(180deg, #2563EB, #4F46E5)"
                : `rgba(37,99,235,${0.2 + (h / 100) * 0.3})`,
              boxShadow: i === bars.length - 1 ? "0 0 8px rgba(37,99,235,0.6)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AfipHeroPanel() {
  return (
    <div className="relative rounded-2xl overflow-hidden ta-card ta-card--solid shadow-[0_0_80px_rgba(16,185,129,0.14)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111116]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#374151] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          factura_arca.ts
        </span>
        <span className="ml-auto text-[10px] text-[#059669] bg-[#059669]/10 px-2 py-0.5 rounded border border-[#059669]/25">
          LIVE
        </span>
      </div>
      <div className="p-6 min-h-[280px] flex flex-col gap-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <p className="text-[#34d399] text-sm">// facturación electrónica AFIP / ARCA</p>
        <p className="text-[#e2e8f0] text-sm leading-7">
          <span className="text-[#a78bfa]">await</span>{" "}
          <span className="text-[#93c5fd]">agenciaTA</span>
          <span className="text-[#6b7280]">.</span>
          <span className="text-[#60a5fa]">emitirComprobante</span>
          <span className="text-[#e2e8f0]">({"{"}</span>
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          tipo: <span className="text-[#86efac]">&apos;B&apos;</span>,
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          canal: <span className="text-[#86efac]">&apos;AFIP/ARCA&apos;</span>,
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          monitoreo: <span className="text-[#f9a8d4]">true</span>,
        </p>
        <p className="text-[#e2e8f0] text-sm">{`});`}</p>
        <p className="text-[#4b5563] text-sm mt-2">// ✓ Normativa actual</p>
        <p className="text-[#4b5563] text-sm">// ✓ Integra sistemas viejos o nuevos</p>
        <p className="text-[#4b5563] text-sm">// ✓ Personalizado a tu operación</p>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.04] bg-[#0D0D0F]">
        <span className="flex items-center gap-1.5 text-[10px] text-[#059669]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
          COMPROBANTE_OK
        </span>
        <span className="text-[10px] text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          CAE autorizado
        </span>
      </div>
    </div>
  );
}

function PointSalesPanel() {
  return (
    <div className="relative rounded-2xl overflow-hidden ta-card ta-card--solid shadow-[0_0_80px_rgba(29,78,216,0.18)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111116]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#374151] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          point_sales.ts
        </span>
        <span className="ml-auto text-[10px] text-[#60a5fa] bg-[#1d4ed8]/15 px-2 py-0.5 rounded border border-[#1d4ed8]/30">
          POS
        </span>
      </div>
      <div className="p-6 min-h-[280px] flex flex-col gap-4" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <p className="text-[#60a5fa] text-sm">// Point Sales — caja y stock</p>
        <p className="text-[#e2e8f0] text-sm leading-7">
          <span className="text-[#a78bfa]">await</span>{" "}
          <span className="text-[#93c5fd]">pointSales</span>
          <span className="text-[#6b7280]">.</span>
          <span className="text-[#60a5fa]">abrirTurno</span>
          <span className="text-[#e2e8f0]">({"{"}</span>
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          caja: <span className="text-[#86efac]">&apos;exacta&apos;</span>,
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          stock: <span className="text-[#86efac]">&apos;en tiempo real&apos;</span>,
        </p>
        <p className="text-sm leading-7 pl-4 text-[#7dd3fc]">
          afip: <span className="text-[#f9a8d4]">true</span>,
        </p>
        <p className="text-[#e2e8f0] text-sm">{`});`}</p>
        <p className="text-[#4b5563] text-sm mt-2">// ✓ Listo en 24 horas</p>
        <p className="text-[#4b5563] text-sm">// ✓ Combos con hardware</p>
        <p className="text-[#4b5563] text-sm">// ✓ Soporte real Agencia TA</p>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 border-t border-white/[0.04] bg-[#0D0D0F]">
        <span className="flex items-center gap-1.5 text-[10px] text-[#60a5fa]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
          CAJA_OK
        </span>
        <span className="text-[10px] text-[#374151]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          comercio listo
        </span>
      </div>
    </div>
  );
}

const SLIDES: {
  id: SlideId;
  eyebrow: string;
  title: ReactNode;
  body: string;
  primary: { label: string; to?: string; href?: string };
  secondary: { label: string; href: string };
  kpis: { value: string; label: string }[];
  accent: "arca" | "point" | "blue";
}[] = [
  {
    id: "arca",
    accent: "arca",
    eyebrow: `Facturación electrónica · ${AGENCIA_NAME}`,
    title: (
      <>
        Facturá con{" "}
        <span className="ta-gradient-text bg-gradient-to-r from-[#34d399] via-[#22d3ee] to-[#60a5fa]">
          AFIP / ARCA
        </span>
        <br />
        sin cambiar tu forma de trabajar.
      </>
    ),
    body: "Módulo de facturación electrónica ya en producción: lo conectamos a tu sistema o lo armamos a medida. Rápido, simple y con monitoreo de todos los comprobantes.",
    primary: { label: "Ver soluciones ARCA", to: "/facturacion-afip" },
    secondary: { label: "Hablar por WhatsApp", href: whatsappUrl(WhatsAppMessages.afipIntegracion) },
    kpis: [
      { value: "+9", label: "Sistemas en producción" },
      { value: "A/B/C", label: "Comprobantes + NC/ND" },
      { value: "Multi", label: "Empresa / tenant" },
    ],
  },
  {
    id: "point",
    accent: "point",
    eyebrow: `Point Sales · by ${AGENCIA_NAME}`,
    title: (
      <>
        Tu comercio facturando con{" "}
        <span className="ta-gradient-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#93c5fd]">
          Point Sales
        </span>
        .
        <br />
        Caja, stock y control.
      </>
    ),
    body: "Sistema de caja y stock listo para usar: combos con hardware, licencia sola o implementación rápida. Desarrollado y respaldado por Agencia TA.",
    primary: { label: "Ir a Point Sales", href: POINT_SITE_URL },
    secondary: { label: "Consultar por WhatsApp", href: whatsappUrl(WhatsAppMessages.pointSales) },
    kpis: [
      { value: "24h", label: "Licencia lista" },
      { value: "POS", label: "Caja + stock" },
      { value: "AFIP", label: "Factura integrada" },
    ],
  },
  {
    id: "ingenieria",
    accent: "blue",
    eyebrow: `Software Factory — ${AGENCIA_LOCATION}`,
    title: (
      <>
        Ingeniería de Software
        <br />y Automatización
        <br />para{" "}
        <span className="ta-gradient-text bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#818cf8]">
          Escalar tu Operación.
        </span>
      </>
    ),
    body: "Desarrollamos sistemas a medida, integramos inteligencia artificial y eliminamos los cuellos de botella operativos de tu empresa.",
    primary: { label: "Agendar Auditoría Técnica", href: whatsappUrl(WhatsAppMessages.audit) },
    secondary: { label: "Ver soluciones", href: "#soluciones" },
    kpis: [
      { value: "99.99%", label: "Uptime garantizado" },
      { value: "<50ms", label: "Latencia promedio" },
      { value: "40+", label: "Proyectos desarrollados" },
    ],
  },
];

export function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = SLIDES[slideIndex];

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % SLIDES.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 pointer-events-none ta-mesh-bg">
        <div className="absolute inset-0 ta-mesh-bg__grid" />
        <div className="absolute inset-0 ta-mesh-bg__noise" />
        <div className="absolute top-0 inset-x-0 h-px ta-mesh-bg__accent opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-28 grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-16 items-center w-full">
        <div className="flex flex-col gap-8 min-h-[420px]">
          <div className="flex items-center gap-2">
            {SLIDES.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Slide ${item.id}`}
                onClick={() => setSlideIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === slideIndex
                    ? item.accent === "arca"
                      ? "w-10 bg-[#34d399]"
                      : item.accent === "point"
                        ? "w-10 bg-[#60a5fa]"
                        : "w-10 bg-[#3b82f6]"
                    : "w-3 bg-white/20 hover:bg-white/35"
                }`}
              />
            ))}
            <span
              className="ml-2 text-[11px] text-[#6B7280] uppercase tracking-wider"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {slideIndex + 1}/{SLIDES.length}
            </span>
          </div>

          <div
            key={slide.id}
            className="flex flex-col gap-8 animate-[fadeSlide_420ms_ease]"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full w-fit border ${
                slide.accent === "arca"
                  ? "border-[#059669]/30 bg-[#059669]/10"
                  : "border-[#2563EB]/25 bg-[#2563EB]/[0.07]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  slide.accent === "arca" ? "bg-[#34d399]" : "bg-[#2563EB]"
                }`}
              />
              <span
                className={`text-xs ${
                  slide.accent === "arca" ? "text-[#6ee7b7]" : "text-[#60a5fa]"
                }`}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {slide.eyebrow}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <h1
                className="text-[2.4rem] sm:text-[2.75rem] lg:text-[3.4rem] xl:text-[3.75rem] text-white leading-[1.08] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
              >
                {slide.title}
              </h1>
              <p
                className="text-lg text-[#9CA3AF] leading-relaxed max-w-[520px]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {slide.body}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {slide.primary.to ? (
                <Link
                  to={slide.primary.to}
                  className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white transition-all duration-200 ${
                    slide.accent === "arca"
                      ? "bg-[#059669] hover:bg-[#047857] hover:shadow-[0_0_35px_rgba(5,150,105,0.45)]"
                      : "bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {slide.primary.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              ) : (
                <a
                  href={slide.primary.href}
                  target={slide.primary.href?.startsWith("http") ? "_blank" : undefined}
                  rel={slide.primary.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white transition-all duration-200 ${
                    slide.accent === "point"
                      ? "bg-[#1d4ed8] hover:bg-[#1e40af] hover:shadow-[0_0_35px_rgba(29,78,216,0.45)]"
                      : "bg-[#2563EB] hover:bg-[#1d4ed8] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]"
                  }`}
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {slide.primary.label}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              )}
              <a
                href={slide.secondary.href}
                target={slide.secondary.href.startsWith("http") ? "_blank" : undefined}
                rel={slide.secondary.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.10] text-[#D1D5DB] hover:border-white/[0.20] hover:bg-white/[0.04] transition-all duration-200"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {slide.secondary.label}
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-5 border-t border-white/[0.06]">
              {slide.kpis.map((kpi) => (
                <div key={kpi.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl text-white"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                  >
                    {kpi.value}
                  </span>
                  <span className="text-sm text-[#6B7280]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {kpi.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0" key={`panel-${slide.id}`}>
          {slide.id === "arca" ? (
            <AfipHeroPanel />
          ) : slide.id === "point" ? (
            <PointSalesPanel />
          ) : (
            <>
              <CodePanel />
              <DashboardPanel />
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
