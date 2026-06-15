import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronRight, TrendingUp, AlertCircle, Clock } from "lucide-react";

const codeSnippet = [
  { tokens: [{ t: "const", c: "keyword" }, { t: " pipeline", c: "var" }, { t: " = ", c: "op" }, { t: "await", c: "keyword" }, { t: " taup", c: "obj" }, { t: ".", c: "op" }, { t: "deploy", c: "fn" }, { t: "({", c: "bracket" }] },
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

function CodePanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeSnippet.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0D0D0F] shadow-[0_0_80px_rgba(37,99,235,0.12)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#111116]">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-[#374151] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          taup_pipeline.ts
        </span>
        <span className="ml-auto text-[10px] text-[#1d4ed8] bg-[#1d4ed8]/10 px-2 py-0.5 rounded border border-[#1d4ed8]/20">
          PROD
        </span>
      </div>
      {/* code */}
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
      {/* status bar */}
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
    <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0D0D0F] mt-4">
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full bg-[#2563EB]/[0.06] blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#4F46E5]/[0.05] blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-28 grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
        {/* Copy */}
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2563EB]/25 bg-[#2563EB]/[0.07] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span
              className="text-xs text-[#60a5fa]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Software Factory — Buenos Aires, ARG
            </span>
          </div>

          <div className="flex flex-col gap-5">
            <h1
              className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Ingeniería de Software
              <br />y Automatización
              <br />para{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#818cf8]">
                  Escalar tu Operación.
                </span>
                <span className="absolute -inset-2 bg-gradient-to-r from-[#2563EB]/15 to-[#4F46E5]/15 blur-2xl rounded-xl pointer-events-none" />
              </span>
            </h1>
            <p
              className="text-lg text-[#9CA3AF] leading-relaxed max-w-[520px]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Desarrollamos sistemas a medida, integramos inteligencia artificial y
              eliminamos los cuellos de botella operativos de tu empresa.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all duration-200 hover:shadow-[0_0_35px_rgba(37,99,235,0.5)]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              Agendar Auditoría Técnica
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#soluciones"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/[0.10] text-[#D1D5DB] hover:border-white/[0.20] hover:bg-white/[0.04] transition-all duration-200"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Ver soluciones
            </a>
          </div>

          {/* KPIs */}
          <div className="flex flex-wrap gap-8 pt-5 border-t border-white/[0.06]">
            {[
              { value: "99.99%", label: "Uptime garantizado" },
              { value: "<50ms", label: "Latencia promedio" },
              { value: "40+", label: "Sistemas en producción" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="text-2xl text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}
                >
                  {s.value}
                </span>
                <span className="text-sm text-[#6B7280]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: mockups */}
        <div className="hidden lg:flex flex-col gap-0">
          <CodePanel />
          <DashboardPanel />
        </div>
      </div>
    </section>
  );
}
