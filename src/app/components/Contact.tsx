import { useState } from "react";
import { ArrowRight, Calendar, MessageSquare } from "lucide-react";
import {
  AGENCIA_LOCATION,
  AGENCIA_NAME,
  WHATSAPP_DISPLAY,
  WhatsAppMessages,
  whatsappUrl,
} from "../../lib/whatsapp";

export function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    cuello: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = WhatsAppMessages.diagnostic(
      form.nombre.trim(),
      form.empresa.trim(),
      form.cuello.trim(),
    );
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contacto" className="relative py-32 border-t border-white/[0.04]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#2563EB]/[0.07] blur-[130px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span
              className="text-xs text-[#60a5fa] tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // iniciar_proyecto
            </span>
            <h2
              className="text-4xl lg:text-5xl text-white leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
            >
              Hablemos de la
              <br />
              arquitectura que
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#818cf8]">
                tu empresa necesita.
              </span>
            </h2>
            <p
              className="text-[#9CA3AF] leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Primera consulta sin costo. Analizamos tu operación, identificamos
              los cuellos de botella de mayor impacto y te entregamos un plan
              técnico concreto con estimación de inversión.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                icon: Calendar,
                label: "Llamada de diagnóstico",
                sub: "30 minutos con un ingeniero senior. Sin ventas, solo análisis.",
                href: whatsappUrl(WhatsAppMessages.audit),
              },
              {
                icon: MessageSquare,
                label: "WhatsApp Business",
                sub: `${WHATSAPP_DISPLAY} — ${AGENCIA_LOCATION}. Respuesta en menos de 24 h.`,
                href: whatsappUrl(WhatsAppMessages.meeting),
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2563EB]/[0.10] border border-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/20 transition-colors">
                    <Icon size={16} className="text-[#60a5fa]" />
                  </div>
                  <div>
                    <span
                      className="text-sm text-white block group-hover:text-[#93c5fd] transition-colors"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-xs text-[#6B7280]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {item.sub}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center">
                <span className="text-[#60a5fa] text-2xl">✓</span>
              </div>
              <div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Mensaje enviado por WhatsApp
                </h3>
                <p
                  className="text-sm text-[#9CA3AF] max-w-xs"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Un ingeniero de {AGENCIA_NAME} te va a responder en las próximas 24 horas
                  hábiles para coordinar la auditoría técnica.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Iniciar diagnóstico gratuito
                </h3>
                <p
                  className="text-xs text-[#6B7280] mt-1"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Completá el formulario y te redirigimos a WhatsApp para coordinar con un ingeniero.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { field: "nombre" as const, label: "Nombre completo", placeholder: "Juan García" },
                  { field: "empresa" as const, label: "Empresa", placeholder: "García S.A." },
                ].map(({ field, label, placeholder }) => (
                  <div key={field} className="flex flex-col gap-1.5">
                    <label
                      className="text-xs text-[#6B7280]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {label}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={form[field]}
                      onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                      required
                      className="px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-[#374151] focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.06] transition-all"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs text-[#6B7280]"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  ¿Cuál es tu mayor cuello de botella operativo hoy?
                </label>
                <textarea
                  placeholder="Ej: Tardamos 3 días en cerrar el inventario mensual porque todo está en planillas..."
                  value={form.cuello}
                  onChange={(e) => setForm({ ...form, cuello: e.target.value })}
                  rows={4}
                  required
                  className="px-3 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-[#374151] focus:outline-none focus:border-[#2563EB]/50 focus:bg-white/[0.06] transition-all resize-none"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all duration-200 hover:shadow-[0_0_35px_rgba(37,99,235,0.45)]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
              >
                Agendar Auditoría Técnica
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p
                className="text-xs text-center text-[#374151] leading-relaxed"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Nos especializamos en proyectos de desarrollo a medida.
                <br />
                <span className="text-[#4B5563]">No ofrecemos plantillas genéricas.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
