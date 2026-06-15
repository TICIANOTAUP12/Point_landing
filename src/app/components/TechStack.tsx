const categories = [
  {
    label: "Lenguajes",
    tag: "[LANG]",
    color: "#2563EB",
    techs: ["Python", "TypeScript", "Go", "SQL"],
  },
  {
    label: "Backend",
    tag: "[BACKEND]",
    color: "#4F46E5",
    techs: ["FastAPI", "Node.js", "Django", "GraphQL"],
  },
  {
    label: "Frontend",
    tag: "[FRONTEND]",
    color: "#0ea5e9",
    techs: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    label: "Bases de datos",
    tag: "[DATA]",
    color: "#7c3aed",
    techs: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
  },
  {
    label: "Infraestructura",
    tag: "[INFRA]",
    color: "#059669",
    techs: ["Docker", "Kubernetes", "Terraform", "Nginx"],
  },
  {
    label: "Cloud",
    tag: "[CLOUD]",
    color: "#0891b2",
    techs: ["AWS", "GCP", "Cloudflare", "Vercel"],
  },
  {
    label: "Inteligencia Artificial",
    tag: "[IA]",
    color: "#d97706",
    techs: ["LangChain", "OpenAI API", "Ollama", "Pinecone"],
  },
  {
    label: "Observabilidad",
    tag: "[OPS]",
    color: "#6b7280",
    techs: ["Grafana", "Prometheus", "Sentry", "DataDog"],
  },
];

export function TechStack() {
  return (
    <section id="tecnología" className="relative py-32 border-t border-white/[0.04] ta-section-surface--alt">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[#2563EB]/[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-start">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span
              className="text-xs text-[#60a5fa] tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // stack_tecnológico
            </span>
            <h2
              className="text-4xl lg:text-5xl text-white leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Herramientas de
              <br />
              producción real.
              <br />
              Sin compromisos.
            </h2>
            <p
              className="text-[#9CA3AF] leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Cada tecnología del stack fue elegida por madurez, rendimiento comprobado
              y soporte a largo plazo en entornos críticos. No usamos herramientas de moda
              que en seis meses quedan obsoletas.
            </p>

            <div className="mt-2 p-5 rounded-2xl ta-card flex flex-col gap-3">
              <span
                className="text-[10px] text-[#4B5563]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                [CAPACIDADES_TÉCNICAS]
              </span>
              {[
                "Arquitecturas cloud-native con failover automático",
                "Pipelines CI/CD con rollback instantáneo",
                "Modelos de IA ejecutados localmente para datos sensibles",
                "Seguridad embebida en cada capa: authn, authz, auditoría",
                "Monitoreo proactivo 24/7 con alertas antes de que fallen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-[7px] shrink-0 shadow-[0_0_6px_rgba(37,99,235,0.8)]" />
                  <span
                    className="text-sm text-[#9CA3AF]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: category grid */}
          <div className="flex flex-col gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="flex items-start gap-4">
                <div className="pt-0.5 w-28 shrink-0 flex flex-col gap-1">
                  <span
                    className="text-[10px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color: cat.color }}
                  >
                    {cat.tag}
                  </span>
                  <span
                    className="text-xs text-[#6B7280]"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg ta-card-chip ta-card--interactive text-sm text-[#D1D5DB] hover:border-white/[0.14] cursor-default"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
