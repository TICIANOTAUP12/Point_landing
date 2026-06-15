import { Brain, Layers, Zap, DatabaseZap, ShieldCheck, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Brain,
    tag: "[IA_APLICADA]",
    title: "Sistemas RAG e Inteligencia Artificial",
    desc: "Integramos modelos de lenguaje avanzados directamente en tus flujos de trabajo. Desde chatbots con contexto empresarial hasta sistemas de búsqueda semántica sobre tus datos internos.",
    accent: "#2563EB",
  },
  {
    icon: Layers,
    tag: "[MICROSERVICES]",
    title: "Arquitecturas Escalables",
    desc: "Diseñamos sistemas distribuidos que crecen con tu operación. Microservicios, event-driven architecture y containerización con Kubernetes para cero downtime.",
    accent: "#4F46E5",
  },
  {
    icon: DatabaseZap,
    tag: "[DATA_PIPELINE]",
    title: "Automatización de Datos",
    desc: "Pipelines de datos en tiempo real que eliminan la intervención manual. ETL robusto, warehousing y dashboards analíticos conectados a tus sistemas existentes.",
    accent: "#0ea5e9",
  },
  {
    icon: Zap,
    tag: "[ERP_CUSTOM]",
    title: "ERP y Software de Gestión",
    desc: "Desarrollamos soluciones de gestión a medida que reemplazan hojas de cálculo y procesos fragmentados. Módulos de inventario, facturación, RRHH y logística unificados.",
    accent: "#7c3aed",
  },
  {
    icon: ShieldCheck,
    tag: "[DEVOPS]",
    title: "DevOps & Infraestructura Cloud",
    desc: "CI/CD pipelines, monitoreo en tiempo real y gestión de infraestructura en AWS, GCP o Azure. Tu equipo hace commits; nosotros nos aseguramos que todo llegue a producción sin fricción.",
    accent: "#059669",
  },
  {
    icon: BarChart3,
    tag: "[ANALYTICS]",
    title: "Business Intelligence",
    desc: "Convertimos datos dispersos en inteligencia accionable. Modelos predictivos, reportes ejecutivos automatizados y alertas proactivas que anticipan problemas antes de que ocurran.",
    accent: "#d97706",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4F46E5]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-4 mb-16">
          <span
            className="text-xs text-[#60a5fa] tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // servicios
          </span>
          <h2
            className="text-4xl lg:text-5xl text-white max-w-2xl leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Lo que construimos para empresas que no toleran mediocridad
          </h2>
          <p
            className="text-[#9CA3AF] max-w-xl"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Cada proyecto es una arquitectura diseñada para durar, escalar y operar
            con mínima fricción operativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(400px circle at 0% 0%, ${s.accent}0d, transparent 60%)`,
                  }}
                />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${s.accent}1a`, boxShadow: `0 0 16px ${s.accent}26` }}
                    >
                      <Icon size={18} style={{ color: s.accent }} />
                    </div>
                    <span
                      className="text-[10px] text-[#4B5563]"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-white leading-snug"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm text-[#6B7280] leading-relaxed"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
