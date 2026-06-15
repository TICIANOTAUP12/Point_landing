export const WHATSAPP_PHONE =
  import.meta.env.VITE_WHATSAPP_PHONE ?? "542646281854";

export const WHATSAPP_DISPLAY =
  import.meta.env.VITE_WHATSAPP_DISPLAY ?? "+54 264 628-1854";

export const AGENCIA_NAME = "Agencia TA";
export const AGENCIA_LOCATION = "San Juan, Argentina";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export const WhatsAppMessages = {
  meeting:
    "Hola, me contacto desde la web de Agencia TA (San Juan). Quisiera coordinar una llamada para conversar sobre un proyecto de software a medida.",

  audit:
    "Hola, me gustaría agendar una auditoría técnica gratuita con Agencia TA para evaluar la arquitectura de software de mi empresa. ¿Podemos coordinar una reunión?",

  support:
    "Hola, consulto desde la web de Agencia TA. Necesito asistencia con un proyecto o sistema existente.",

  serviceErp:
    "Hola, me interesa el servicio de desarrollo de sistemas a medida (ERP) de Agencia TA. Quisiera conversar sobre las necesidades de mi empresa.",

  serviceIa:
    "Hola, me interesa la solución de Inteligencia Artificial y RAG de Agencia TA. ¿Podemos coordinar una reunión para evaluar mi caso?",

  serviceIntegracion:
    "Hola, necesito integrar mi sistema con AFIP, pagos u otros servicios. Me contacto desde Agencia TA para consultar sobre integración de ecosistemas.",

  diagnostic: (nombre: string, empresa: string, cuello: string): string =>
    [
      "Hola, soy " + nombre + (empresa ? ` de ${empresa}` : "") + ".",
      "",
      "Me gustaría solicitar un diagnóstico gratuito con Agencia TA.",
      "",
      "Mi principal cuello de botella operativo es:",
      cuello,
      "",
      "Quedo atento para coordinar una reunión.",
    ].join("\n"),
} as const;

export function serviceMessage(serviceId: string): string {
  switch (serviceId) {
    case "erp":
      return WhatsAppMessages.serviceErp;
    case "ia":
      return WhatsAppMessages.serviceIa;
    case "integracion":
      return WhatsAppMessages.serviceIntegracion;
    default:
      return WhatsAppMessages.meeting;
  }
}
