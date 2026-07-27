import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { trackEvent } from "../../lib/analytics";
import { WHATSAPP_DISPLAY, WhatsAppMessages, whatsappUrl } from "../../lib/whatsapp";

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const consultUrl = whatsappUrl(WhatsAppMessages.meeting);
  const afipUrl = whatsappUrl(WhatsAppMessages.afipIntegracion);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  function trackOpen(label: string): void {
    trackEvent("whatsapp_float_click", { source: label });
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {isOpen && (
        <div
          className="w-[min(100vw-2.5rem,320px)] rounded-2xl border border-white/[0.08] bg-[#111116]/95 backdrop-blur-md shadow-[0_16px_48px_rgba(0,0,0,0.45)] overflow-hidden"
          role="dialog"
          aria-label="Consultar por WhatsApp"
        >
          <div className="flex items-start justify-between gap-3 px-4 py-3 bg-[#128C7E]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <MessageCircle size={18} className="text-white" />
              </div>
              <div>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  Agencia TA
                </p>
                <p
                  className="text-[11px] text-white/80"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {WHATSAPP_DISPLAY} · suele responder en el día
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <p
              className="text-sm text-[#D1D5DB] leading-relaxed"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              ¿Consulta rápida? Escribinos por WhatsApp: sistemas a medida, integración
              AFIP/ARCA o facturación electrónica.
            </p>
            <a
              href={afipUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOpen("float_afip")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#059669] text-white text-sm hover:bg-[#047857] transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              Consultar facturación AFIP / ARCA
            </a>
            <a
              href={consultUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOpen("float_general")}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.12] text-[#E5E7EB] text-sm hover:bg-white/[0.04] transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              Cualquier otra consulta
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={isOpen ? "Cerrar chat WhatsApp" : "Abrir chat WhatsApp"}
        onClick={() => setIsOpen((open) => !open)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_rgba(37,211,102,0.45)] flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}
