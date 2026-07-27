import { useMemo, useState } from "react";

const FD = "'Plus Jakarta Sans', sans-serif";
const FM = "'JetBrains Mono', monospace";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "").slice(0, 11);
}

function formatCuit(raw: string): string {
  const d = digitsOnly(raw);
  if (d.length <= 2) return d;
  if (d.length <= 10) return `${d.slice(0, 2)}-${d.slice(2)}`;
  return `${d.slice(0, 2)}-${d.slice(2, 10)}-${d.slice(10)}`;
}

function todayAr(): string {
  return new Date().toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function caeVtoAr(): string {
  const d = new Date();
  d.setDate(d.getDate() + 10);
  return d.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

type InvoicePreviewProps = {
  className?: string;
};

/**
 * Esquema visual de factura electrónica (estilo ARCA/AFIP).
 * Datos de ejemplo anonimizados; nombre + CUIT del visitante se reflejan en el receptor.
 */
export function InvoicePreview({ className = "" }: InvoicePreviewProps) {
  const [nombre, setNombre] = useState("");
  const [cuit, setCuit] = useState("");

  const displayNombre = nombre.trim() || "Tu nombre / razón social";
  const displayCuit = cuit.trim() ? formatCuit(cuit) : "XX-XXXXXXXX-X";
  const emitDate = useMemo(() => todayAr(), []);
  const caeVto = useMemo(() => caeVtoAr(), []);

  return (
    <div className={className}>
      <div className="grid lg:grid-cols-[minmax(0,280px)_1fr] gap-6 items-start">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col gap-4">
          <div>
            <p className="text-[#34d399] text-xs tracking-widest uppercase mb-1" style={{ fontFamily: FM }}>
              Probá el esquema
            </p>
            <h3 className="text-white text-lg" style={{ fontFamily: FD, fontWeight: 800 }}>
              ¿Cómo se vería tu factura?
            </h3>
            <p className="text-white/55 text-sm mt-2 leading-relaxed" style={{ fontFamily: FD }}>
              Ingresá tu nombre y CUIT. Es solo un ejemplo visual del comprobante
              que emite el módulo AFIP / ARCA — no es un documento fiscal real.
            </p>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-white/50" style={{ fontFamily: FD }}>
              Tu nombre o razón social
            </span>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value.slice(0, 80))}
              placeholder="Ej: García Comercio S.A."
              className="px-3 py-2.5 rounded-lg bg-[#0A1620] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#34d399]/50"
              style={{ fontFamily: FD }}
              autoComplete="organization"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-white/50" style={{ fontFamily: FD }}>
              Tu CUIT
            </span>
            <input
              type="text"
              inputMode="numeric"
              value={formatCuit(cuit)}
              onChange={(e) => setCuit(digitsOnly(e.target.value))}
              placeholder="20-12345678-9"
              className="px-3 py-2.5 rounded-lg bg-[#0A1620] border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#34d399]/50"
              style={{ fontFamily: FM }}
              autoComplete="off"
            />
          </label>

          <p className="text-[11px] text-white/35 leading-relaxed" style={{ fontFamily: FD }}>
            Vista previa ilustrativa. Los importes, CAE y emisor son de demostración.
          </p>
        </div>

        {/* Factura — esquema papel */}
        <div
          className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)] border border-[#cbd5e1]"
          style={{ background: "#FFFEFA", color: "#0f172a" }}
        >
          <div className="p-4 sm:p-5 border-b-2 border-[#0f172a]">
            <div className="flex gap-3 items-start justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base font-bold truncate" style={{ fontFamily: FD }}>
                  DEMO EMPRESA S.R.L.
                </p>
                <p className="text-[11px] text-[#475569] mt-1" style={{ fontFamily: FD }}>
                  Razón Social: DEMO EMPRESA S.R.L.
                </p>
                <p className="text-[11px] text-[#475569]" style={{ fontFamily: FD }}>
                  Domicilio Comercial: San Juan, Argentina
                </p>
                <p className="text-[11px] text-[#475569]" style={{ fontFamily: FD }}>
                  Condición IVA: Responsable Inscripto
                </p>
              </div>

              <div className="shrink-0 w-[72px] sm:w-[84px] border-2 border-[#0f172a] text-center py-1.5">
                <p className="text-2xl font-black leading-none" style={{ fontFamily: FD }}>
                  A
                </p>
                <p className="text-[9px] mt-0.5 tracking-wide" style={{ fontFamily: FM }}>
                  COD. 001
                </p>
              </div>

              <div className="min-w-0 flex-1 text-right">
                <p className="text-sm sm:text-base font-bold" style={{ fontFamily: FD }}>
                  FACTURA A
                </p>
                <p className="text-[11px] text-[#475569] mt-1" style={{ fontFamily: FM }}>
                  Punto de Venta: 0001
                </p>
                <p className="text-[11px] text-[#475569]" style={{ fontFamily: FM }}>
                  Comp. Nro: 0001-00000128
                </p>
                <p className="text-[11px] text-[#475569]" style={{ fontFamily: FM }}>
                  Fecha: {emitDate}
                </p>
                <p className="text-[11px] text-[#475569] mt-1" style={{ fontFamily: FM }}>
                  CUIT: 30-71234567-8
                </p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-0 border-b border-[#cbd5e1]">
            <div className="p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-[#cbd5e1]">
              <p
                className="text-[10px] tracking-widest uppercase text-[#64748b] mb-2"
                style={{ fontFamily: FM }}
              >
                Facturado a
              </p>
              <p
                className={`text-sm font-bold break-words ${nombre.trim() ? "text-[#0f172a]" : "text-[#94a3b8] italic"}`}
                style={{ fontFamily: FD }}
              >
                {displayNombre}
              </p>
              <p className="text-[11px] text-[#475569] mt-2" style={{ fontFamily: FD }}>
                Domicilio: —
              </p>
            </div>
            <div className="p-4 sm:p-5">
              <p
                className="text-[10px] tracking-widest uppercase text-[#64748b] mb-2"
                style={{ fontFamily: FM }}
              >
                Datos fiscales del receptor
              </p>
              <p className="text-[11px]" style={{ fontFamily: FM }}>
                <span className="text-[#64748b]">CUIT / Doc.: </span>
                <span className={cuit.trim() ? "font-semibold text-[#0f172a]" : "text-[#94a3b8] italic"}>
                  {displayCuit}
                </span>
              </p>
              <p className="text-[11px] text-[#475569] mt-1" style={{ fontFamily: FD }}>
                Condición IVA: Responsable Inscripto
              </p>
              <p className="text-[11px] text-[#475569]" style={{ fontFamily: FD }}>
                Condición de Venta: Efectivo
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[11px] min-w-[480px]" style={{ fontFamily: FD }}>
              <thead>
                <tr className="bg-[#f1f5f9] border-b border-[#cbd5e1]">
                  <th className="px-3 py-2 font-semibold">CÓDIGO</th>
                  <th className="px-3 py-2 font-semibold">DESCRIPCIÓN</th>
                  <th className="px-3 py-2 font-semibold text-right">CANT.</th>
                  <th className="px-3 py-2 font-semibold text-right">PRECIO U.</th>
                  <th className="px-3 py-2 font-semibold text-right">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#e2e8f0]">
                  <td className="px-3 py-2.5" style={{ fontFamily: FM }}>
                    ART-1001
                  </td>
                  <td className="px-3 py-2.5">Servicio / producto de ejemplo</td>
                  <td className="px-3 py-2.5 text-right" style={{ fontFamily: FM }}>
                    1,00
                  </td>
                  <td className="px-3 py-2.5 text-right" style={{ fontFamily: FM }}>
                    $ 10.000,00
                  </td>
                  <td className="px-3 py-2.5 text-right" style={{ fontFamily: FM }}>
                    $ 10.000,00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <p className="text-[11px] text-[#059669] font-semibold" style={{ fontFamily: FD }}>
              Comprobante autorizado por ARCA / AFIP
            </p>
            <div className="text-right text-[12px] space-y-1 min-w-[180px]" style={{ fontFamily: FM }}>
              <div className="flex justify-between gap-6 text-[#475569]">
                <span>Subtotal Neto</span>
                <span>$ 10.000,00</span>
              </div>
              <div className="flex justify-between gap-6 text-[#475569]">
                <span>IVA (21,0%)</span>
                <span>$ 2.100,00</span>
              </div>
              <div className="flex justify-between gap-6 font-bold text-[#0f172a] text-sm border-t border-[#cbd5e1] pt-1.5 mt-1">
                <span>IMPORTE TOTAL</span>
                <span>$ 12.100,00</span>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-5 py-3 bg-[#f8fafc] border-t border-[#e2e8f0] text-[10px] text-[#64748b]" style={{ fontFamily: FM }}>
            CAE Nº: 75001234567890 · Vto. CAE: {caeVto} · Ejemplo ilustrativo — no válido fiscalmente
          </div>
        </div>
      </div>
    </div>
  );
}
