const steps = [
  {
    num: "01",
    tag: "[DIAGNÓSTICO]",
    title: "Auditoría técnica profunda",
    desc: "Analizamos tus sistemas actuales, cuellos de botella y procesos manuales. Entregamos un mapa de prioridades con ROI estimado para cada mejora propuesta.",
    duration: "3–5 días hábiles",
  },
  {
    num: "02",
    tag: "[ARQUITECTURA]",
    title: "Diseño de arquitectura y propuesta",
    desc: "Diseñamos la arquitectura técnica, definimos el stack, establecemos KPIs de rendimiento y presentamos la propuesta con cronograma detallado.",
    duration: "1 semana",
  },
  {
    num: "03",
    tag: "[CONSTRUCCIÓN]",
    title: "Desarrollo iterativo con entregas semanales",
    desc: "Sprints de dos semanas con demos funcionales en cada cierre. Acceso directo al repositorio y tablero de tareas. Sin cajas negras.",
    duration: "Ciclos de 2 semanas",
  },
  {
    num: "04",
    tag: "[QA_PRODUCCIÓN]",
    title: "Testing, QA y despliegue en producción",
    desc: "Suite de pruebas automatizadas, testing de carga, revisión de seguridad y despliegue gradual con canary releases para minimizar el riesgo.",
    duration: "1–2 semanas",
  },
  {
    num: "05",
    tag: "[SOPORTE_CONTINUO]",
    title: "Monitoreo y soporte post-lanzamiento",
    desc: "Dashboards de observabilidad en tiempo real, alertas proactivas y SLA de respuesta garantizado. Tu sistema no para; nosotros tampoco.",
    duration: "Ongoing",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative py-32 border-t border-white/[0.04]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16">
          <span
            className="text-xs text-[#60a5fa] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // proceso
          </span>
          <h2
            className="text-4xl lg:text-5xl text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            De la auditoría al sistema en producción. Sin vueltas.
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group grid md:grid-cols-[200px_1fr] gap-6 py-8 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors duration-200 rounded-xl px-4 -mx-4"
            >
              <div className="flex items-start gap-4">
                <span
                  className="text-3xl text-[#1d2435]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                >
                  {step.num}
                </span>
                <div className="flex flex-col gap-1 pt-1">
                  <span
                    className="text-[10px] text-[#4B5563]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {step.tag}
                  </span>
                  <span
                    className="text-xs text-[#6B7280] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-white leading-snug"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-[#6B7280] leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
