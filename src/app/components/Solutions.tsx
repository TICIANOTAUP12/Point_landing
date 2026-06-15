import { useState } from "react";
import { Layers, Brain, Link2, ChevronRight } from "lucide-react";
import { serviceMessage, whatsappUrl } from "../../lib/whatsapp";

const solutions = [
  {
    id: "erp",
    icon: Layers,
    tag: "[SISTEMAS_A_MEDIDA]",
    title: "Desarrollo de Sistemas a Medida (ERPs)",
    subtitle: "Plataformas robustas donde los enlatados no llegan.",
    desc: "Construimos plataformas de gestión diseñadas para la complejidad real de tu operación: inventarios con múltiples depósitos y unidades de medida, reglas de negocio únicas, trazabilidad de lotes, control de mermas y flujos de aprobación que ningún ERP genérico soporta sin 18 meses de customización.",
    bullets: [
      "Gestión de inventario multi-depósito con trazabilidad de lote",
      "Control de mermas, desperdicios y procesos de transformación",
      "Flujos de aprobación configurables por rol y monto",
      "Reportes ejecutivos automatizados con tu lógica de negocio",
      "Integración nativa con tu sistema contable actual",
    ],
    accent: "#2563EB",
    mockup: {
      title: "ERP Panel — Inventario",
      rows: [
        { sku: "MRM-4422", desc: "Mármol Carrara 60x60", stock: "842 m²", estado: "OK" },
        { sku: "GRN-1138", desc: "Granito Negro San Gabriel", stock: "231 m²", estado: "LOW" },
        { sku: "CRT-9901", desc: "Cerámico Rústico 40x40", stock: "1.204 m²", estado: "OK" },
        { sku: "MRM-0076", desc: "Mármol Travertino", stock: "18 m²", estado: "CRIT" },
      ],
    },
  },
  {
    id: "ia",
    icon: Brain,
    tag: "[IA_APLICADA]",
    title: "Inteligencia Artificial y RAG",
    subtitle: "Tu equipo habla con la base de datos en lenguaje natural.",
    desc: "Implementamos agentes de IA conectados directamente a la base de datos de tu empresa. El gerente de compras pregunta “¿cuánto stock de granito negro tenemos en el depósito norte?” y el sistema responde en segundos con datos reales, sin que nadie tenga que correr un informe.",
    bullets: [
      "Chatbot empresarial conectado a tus datos operativos",
      "Consultas sobre stock, ventas y métricas en lenguaje natural",
      "Generación automática de reportes bajo demanda",
      "Detección de anomalías y alertas proactivas",
      "Ejecución de modelos locales para datos sensibles (sin salir a la nube)",
    ],
    accent: "#4F46E5",
    mockup: {
      title: "Agente IA — Consulta operativa",
      chat: [
        { role: "user", msg: "¿Cuánto stock de granito negro quedó después de las órdenes de esta semana?" },
        { role: "ai", msg: "Al día de hoy tenés 231 m² de Granito Negro San Gabriel en depósito norte y 0 m² en el sur (se agotó el martes). Con la tasa de salida actual, el stock norte dura 8 días. Recomiendo generar OC urgente." },
      ],
    },
  },
  {
    id: "integracion",
    icon: Link2,
    tag: "[INTEGRACIÓN_ECOSISTEMAS]",
    title: "Integración de Ecosistemas",
    subtitle: "Conexiones nativas con AFIP, pagos y logística.",
    desc: "Conectamos tu sistema central con el ecosistema completo: AFIP/ARCA para facturación electrónica y IIBB, pasarelas de pago (Mercado Pago, Prisma, transferencias), plataformas logísticas y tu sistema contable. Todo fluye automáticamente, sin intervención manual, con logs auditables.",
    bullets: [
      "Facturación electrónica AFIP/ARCA (CUIT, CAE, CAI)",
      "Integración con Mercado Pago, Prisma y redes bancarias",
      "Webhooks con plataformas logísticas (Andreani, OCA, Correo Argentino)",
      "Sincronización bidireccional con sistemas contables (Tango, SAP B1)",
      "APIs seguras con autenticación OAuth2 y logging de auditoría",
    ],
    accent: "#0ea5e9",
    mockup: null,
  },
];

export function Solutions() {
  const [active, setActive] = useState("erp");
  const sol = solutions.find((s) => s.id === active)!;
  const Icon = sol.icon;

  return (
    <section id="soluciones" className="relative py-32 border-t border-white/[0.04] ta-section-surface">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full ta-glow-spot ta-glow-spot--indigo" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-14">
          <span
            className="text-xs text-[#60a5fa] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // soluciones_tecnológicas
          </span>
          <h2
            className="text-4xl lg:text-5xl text-white leading-[1.1] max-w-3xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            No vendemos plantillas.
            <br />
            Construimos{" "}
            <span className="ta-gradient-text bg-gradient-to-r from-[#3b82f6] to-[#818cf8]">
              arquitecturas a medida.
            </span>
          </h2>
        </div>

        {/* Tab nav */}
        <div className="flex flex-wrap gap-3 mb-10">
          {solutions.map((s) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm transition-all duration-200 ${
                  active === s.id
                    ? "border-[#2563EB]/50 bg-[#2563EB]/10 text-white"
                    : "border-white/[0.07] text-[#6B7280] hover:text-[#9CA3AF] hover:border-white/[0.12]"
                }`}
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                <TabIcon size={15} style={{ color: active === s.id ? s.accent : undefined }} />
                {s.title.split(" (")[0].replace("Desarrollo de ", "")}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">
          <div className="rounded-2xl ta-card p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${sol.accent}18`, border: `1px solid ${sol.accent}30`, boxShadow: `0 0 20px ${sol.accent}20` }}
              >
                <Icon size={22} style={{ color: sol.accent }} />
              </div>
              <div>
                <span
                  className="text-[10px] text-[#4B5563] block mb-1"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {sol.tag}
                </span>
                <h3
                  className="text-xl text-white leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {sol.title}
                </h3>
                <p className="text-sm text-[#60a5fa] mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {sol.subtitle}
                </p>
              </div>
            </div>

            <p className="text-[#9CA3AF] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {sol.desc}
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              {sol.bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <ChevronRight size={14} className="text-[#2563EB] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#9CA3AF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl(serviceMessage(sol.id))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm transition-all duration-200 hover:bg-white/[0.04]"
                style={{
                  borderColor: `${sol.accent}40`,
                  color: sol.accent,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                }}
              >
                Hablar sobre este servicio
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Right mockup */}
          <div className="flex flex-col gap-4">
            {sol.id === "erp" && sol.mockup && (
              <div className="rounded-2xl ta-card ta-card--solid overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                  <span className="text-xs text-[#4B5563]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {sol.mockup.title}
                  </span>
                  <span className="text-[10px] text-[#059669] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                    LIVE
                  </span>
                </div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-white/[0.04]">
                      {["SKU", "Descripción", "Stock", "Estado"].map((h) => (
                        <th
                          key={h}
                          className="px-4 py-2.5 text-left text-[#374151]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(sol.mockup as any).rows.map((row: any) => (
                      <tr key={row.sku} className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors">
                        <td className="px-4 py-3 text-[#60a5fa]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {row.sku}
                        </td>
                        <td className="px-4 py-3 text-[#9CA3AF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {row.desc}
                        </td>
                        <td className="px-4 py-3 text-[#D1D5DB]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {row.stock}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className="px-2 py-0.5 rounded text-[10px]"
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              color: row.estado === "OK" ? "#059669" : row.estado === "LOW" ? "#d97706" : "#ef4444",
                              backgroundColor:
                                row.estado === "OK" ? "#05966912" : row.estado === "LOW" ? "#d9780612" : "#ef444412",
                            }}
                          >
                            {row.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {sol.id === "ia" && sol.mockup && (
              <div className="rounded-2xl ta-card ta-card--solid overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                  <div className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
                  <span className="text-xs text-[#4B5563]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    {sol.mockup.title}
                  </span>
                </div>
                <div className="p-4 flex flex-col gap-4">
                  {(sol.mockup as any).chat.map((msg: any, i: number) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#2563EB]/20 border border-[#2563EB]/30 text-[#bfdbfe]"
                            : "bg-white/[0.04] border border-white/[0.07] text-[#9CA3AF]"
                        }`}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {msg.role === "ai" && (
                          <span
                            className="text-[10px] text-[#4F46E5] block mb-1.5"
                            style={{ fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            AGENCIA_TA_AI
                          </span>
                        )}
                        {msg.msg}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sol.id === "integracion" && (
              <div className="rounded-2xl ta-card ta-card--solid p-6 flex flex-col gap-4">
                <span className="text-xs text-[#4B5563]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  [INTEGRACIONES_ACTIVAS]
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "AFIP / ARCA", status: "CONNECTED", color: "#059669" },
                    { name: "Mercado Pago", status: "CONNECTED", color: "#059669" },
                    { name: "Andreani", status: "CONNECTED", color: "#059669" },
                    { name: "Tango Gestión", status: "SYNC", color: "#0ea5e9" },
                    { name: "Prisma", status: "CONNECTED", color: "#059669" },
                    { name: "OCA", status: "PENDING", color: "#d97706" },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg ta-card-chip"
                    >
                      <span className="text-xs text-[#9CA3AF]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                        {item.name}
                      </span>
                      <span
                        className="text-[9px]"
                        style={{ fontFamily: "'JetBrains Mono', monospace", color: item.color }}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA card */}
            <div className="rounded-2xl ta-card border-[#2563EB]/25 bg-[#2563EB]/[0.08] p-5 flex flex-col gap-3">
              <p className="text-sm text-[#93c5fd] leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                ¿Necesitás este tipo de solución? Contanos tu caso y te respondemos con una propuesta técnica en 48 horas.
              </p>
              <a
                href={whatsappUrl(serviceMessage(sol.id))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white hover:text-[#93c5fd] transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                Iniciar diagnóstico gratuito <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
