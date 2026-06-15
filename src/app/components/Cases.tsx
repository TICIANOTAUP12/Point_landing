import { useState } from "react";
import { Package, Truck, Building2 } from "lucide-react";

const cases = [
  {
    id: "marmoleria",
    icon: Package,
    industry: "Materiales pesados",
    tag: "[ERP_A_MEDIDA]",
    title: "Sistema de gestión integral para el sector de marmolerías y materiales pesados",
    challenge:
      "La empresa manejaba inventario de 300+ SKUs con múltiples unidades de medida (m², kg, unidad) en 3 depósitos. El control de lotes, mermas y transformaciones de material se hacía 100% en Excel. El cierre mensual requería 5 días de trabajo manual.",
    solution:
      "ERP a medida con trazabilidad absoluta de lotes, control de mermas por corte y transporte, gestión multi-depósito y transformación de materiales (una losa entra, salen piezas). Dashboard operativo en tiempo real con alertas de stock crítico.",
    highlight: "Trazabilidad absoluta de lotes y control de mermas.",
    metrics: [
      { label: "Días de cierre mensual", value: "5 → 0.5" },
      { label: "Errores de inventario", value: "−94%" },
      { label: "Tiempo de preparación de pedidos", value: "−61%" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "Docker"],
    accent: "#2563EB",
  },
  {
    id: "quimica",
    icon: Truck,
    industry: "Logística y distribución",
    tag: "[OPERACIONES_AUTO]",
    title: "Software operativo para distribuidoras químicas con control de stock crítico",
    challenge:
      "Distribuidora de productos químicos con vencimientos, restricciones MSDS y rutas de distribución complejas. La coordinación de entregas era telefónica y el control de vencimientos, manual. Multas regulatorias por gestión incorrecta de productos peligrosos.",
    solution:
      "Sistema de gestión con módulo de productos regulados (vencimientos, fichas MSDS, incompatibilidades), optimización automática de rutas de reparto, facturación integrada con AFIP y alertas proactivas de stock con 15 días de anticipación.",
    highlight: "Automatización de rutas, control de stock crítico y facturación.",
    metrics: [
      { label: "Tiempo de despacho diario", value: "−73%" },
      { label: "Incumplimientos regulatorios", value: "0 desde deploy" },
      { label: "Capacidad de rutas diarias", value: "+38%" },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "React", "AWS"],
    accent: "#4F46E5",
  },
  {
    id: "constructora",
    icon: Building2,
    industry: "Construcción y real estate",
    tag: "[IA_OPERATIVA]",
    title: "Agente IA para consulta de métricas operativas en constructora regional",
    challenge:
      "Constructora con 12 obras activas simultáneas. Los gerentes de proyecto pedían reportes al área de sistemas que tardaban entre 24 y 72 horas en llegar. Las decisiones de compra se tomaban con información desactualizada.",
    solution:
      "Agente RAG conectado a la base de datos operativa (avance de obras, materiales, costos, cronogramas). Los gerentes consultan en lenguaje natural desde el celular y obtienen respuestas en segundos con datos del minuto anterior.",
    highlight: "Consultas en lenguaje natural sobre métricas, stock y cronogramas.",
    metrics: [
      { label: "Tiempo por consulta operativa", value: "48h → 8s" },
      { label: "Decisiones con datos actualizados", value: "100%" },
      { label: "Reportes manuales eliminados/mes", value: "120+" },
    ],
    stack: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI"],
    accent: "#0ea5e9",
  },
];

export function Cases() {
  const [active, setActive] = useState("marmoleria");
  const c = cases.find((x) => x.id === active)!;
  const CIcon = c.icon;

  return (
    <section id="casos" className="relative py-32 border-t border-white/[0.04]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#4F46E5]/[0.04] blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-12">
          <span
            className="text-xs text-[#60a5fa] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // casos_de_uso
          </span>
          <h2
            className="text-4xl lg:text-5xl text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Sistemas que ya operan
            <br />
            en industrias reales.
          </h2>
          <p
            className="text-[#9CA3AF] max-w-xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Los nombres de los clientes son confidenciales. El impacto, no.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cases.map((item) => {
            const TabIcon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 ${
                  active === item.id
                    ? "border-[#2563EB]/50 bg-[#2563EB]/10 text-white"
                    : "border-white/[0.07] text-[#6B7280] hover:text-[#9CA3AF] hover:border-white/[0.12]"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <TabIcon size={14} style={{ color: active === item.id ? item.accent : undefined }} />
                {item.industry}
              </button>
            );
          })}
        </div>

        {/* Case detail */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-6">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${c.accent}18`, border: `1px solid ${c.accent}28` }}
              >
                <CIcon size={18} style={{ color: c.accent }} />
              </div>
              <div>
                <span
                  className="text-[10px] text-[#4B5563] block"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {c.tag}
                </span>
                <h3
                  className="text-lg text-white leading-snug mt-0.5"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {c.title}
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <span
                  className="text-[10px] text-[#374151] uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Situación inicial
                </span>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {c.challenge}
                </p>
              </div>
              <div>
                <span
                  className="text-[10px] text-[#374151] uppercase tracking-wider"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Solución implementada
                </span>
                <p className="mt-2 text-sm text-[#6B7280] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {c.solution}
                </p>
              </div>
            </div>

            <div
              className="flex items-center gap-3 p-4 rounded-xl border"
              style={{ borderColor: `${c.accent}25`, backgroundColor: `${c.accent}08` }}
            >
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.accent, boxShadow: `0 0 6px ${c.accent}` }} />
              <p className="text-sm italic" style={{ color: c.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                "{c.highlight}"
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 border-t border-white/[0.05]">
              {c.stack.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-[#6B7280]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="flex flex-col gap-4">
            {c.metrics.map((m) => (
              <div
                key={m.label}
                className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 flex flex-col justify-between gap-3"
              >
                <span
                  className="text-xs text-[#6B7280] leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {m.label}
                </span>
                <span
                  className="text-3xl text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                >
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
