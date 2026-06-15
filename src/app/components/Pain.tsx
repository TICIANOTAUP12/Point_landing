import { FileSpreadsheet, BarChart2, RefreshCw } from "lucide-react";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Dependencia de Excels manuales y planillas desconectadas",
    desc: "El inventario en un Excel, las ventas en otro, las compras en WhatsApp. Cada cierre de mes es un caos de copiar y pegar que introduce errores y consume días de trabajo que podrían evitarse.",
    tag: "[PROCESO_MANUAL]",
    accent: "#ef4444",
  },
  {
    icon: BarChart2,
    title: "Falta de datos en tiempo real para tomar decisiones financieras",
    desc: "El gerente pide el estado de stock y el informe tarda 48 horas. Para cuando llega, los números ya cambiaron. Tomar decisiones sobre datos viejos es apostar sin información.",
    tag: "[DATA_LAG]",
    accent: "#f97316",
  },
  {
    icon: RefreshCw,
    title: "Procesos repetitivos que consumen horas de tu equipo",
    desc: "Personas capacitadas haciendo tareas que debería hacer un sistema: carga de facturas, control de duplicados, envío de reportes por mail. Tiempo de tu equipo quemado en trabajo que no agrega valor.",
    tag: "[OPERACIÓN_INEFICIENTE]",
    accent: "#eab308",
  },
];

export function Pain() {
  return (
    <section className="relative py-32 border-t border-white/[0.04] ta-section-surface--alt">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ef4444]/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <span
            className="text-xs text-[#60a5fa] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // el_problema
          </span>
          <h2
            className="text-4xl lg:text-5xl text-white leading-[1.1]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            ¿Tu empresa crece más
            <br />
            rápido que tus sistemas?
          </h2>
          <p
            className="text-[#9CA3AF] leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            La mayoría de las empresas en crecimiento llega a un punto de quiebre
            donde la operación manual no da más. Reconocés alguno de estos síntomas:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative rounded-2xl ta-card ta-card--interactive p-7 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-60"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.accent}40, transparent)` }}
                />
                <div className="flex flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${p.accent}15`, border: `1px solid ${p.accent}25` }}
                    >
                      <Icon size={20} style={{ color: p.accent }} />
                    </div>
                    <span
                      className="text-[10px] text-[#374151]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h3
                      className="text-[#F3F4F6] leading-snug"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-sm text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition line */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-white/[0.04]" />
          <p
            className="text-sm text-[#6B7280] text-center max-w-md"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Estos no son problemas de recursos humanos.
            Son{" "}
            <span className="text-[#9CA3AF]">problemas de arquitectura tecnológica</span>.
            Y tienen solución.
          </p>
          <div className="flex-1 h-px bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
