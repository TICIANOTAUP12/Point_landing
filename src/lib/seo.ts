const SITE_ORIGIN = "https://sistemataup.online";

export type SeoKeywordGroups = {
  primary: readonly string[];
  secondary: readonly string[];
  local: readonly string[];
};

export type SeoConfig = {
  channel: "agencia-ta";
  siteName: string;
  author: string;
  title: string;
  description: string;
  keywords: SeoKeywordGroups;
  canonicalUrl: string;
  robots: string;
  locale: string;
  favicon: string;
  appleTouchIcon: string;
  og: {
    type: string;
    title: string;
    description: string;
    url: string;
    image: string;
    imageWidth: number;
    imageHeight: number;
    imageAlt: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  jsonLd: Record<string, unknown>;
};

export const seoKeywords: SeoKeywordGroups = {
  primary: [
    "desarrollo de software",
    "ingeniería de software",
    "software a medida",
    "automatización empresarial",
    "ERP a medida",
    "inteligencia artificial empresarial",
    "consultoría técnica",
    "auditoría IT",
  ],
  secondary: [
    "integraciones AFIP",
    "arquitectura cloud",
    "sistemas empresariales",
    "transformación digital",
    "APIs empresariales",
    "microservicios",
    "DevOps",
    "software B2B",
    "Agencia TA",
  ],
  local: [
    "San Juan Argentina",
    "software San Juan",
    "agencia de desarrollo Cuyo",
    "desarrollo software Argentina",
  ],
};

export const seoConfig: SeoConfig = {
  channel: "agencia-ta",
  siteName: "Agencia TA",
  author: "Agencia TA",
  title: "Agencia TA | Desarrollo de Software e Ingeniería a Medida | San Juan, Argentina",
  description:
    "Agencia de ingeniería de software en San Juan: desarrollo a medida, automatización, ERP, IA empresarial, integraciones AFIP, consultoría técnica y auditoría IT para empresas en Argentina.",
  keywords: seoKeywords,
  canonicalUrl: `${SITE_ORIGIN}/`,
  robots: "index, follow",
  locale: "es_AR",
  favicon: "demo-icon.png",
  appleTouchIcon: "demo-icon.png",
  og: {
    type: "website",
    title: "Agencia TA | Ingeniería de Software y Automatización Empresarial",
    description:
      "Desarrollo de software, ERP, IA empresarial e integraciones AFIP para empresas que necesitan sistemas confiables y escalables.",
    url: `${SITE_ORIGIN}/`,
    image: `${SITE_ORIGIN}/og-image.png`,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Agencia TA — ingeniería de software y automatización empresarial en San Juan, Argentina",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia TA | Desarrollo de Software B2B",
    description:
      "Ingeniería de software, automatización, ERP e IA empresarial para empresas en San Juan y Argentina.",
    image: `${SITE_ORIGIN}/og-image.png`,
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Agencia TA",
    url: `${SITE_ORIGIN}/`,
    logo: `${SITE_ORIGIN}/logo.png`,
    description:
      "Agencia de ingeniería de software especializada en desarrollo a medida, automatización empresarial, ERP, inteligencia artificial empresarial, consultoría técnica y auditoría IT en San Juan, Argentina.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Juan",
      addressRegion: "San Juan",
      addressCountry: "AR",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    knowsAbout: [
      "desarrollo de software",
      "ingeniería de software",
      "automatización empresarial",
      "ERP",
      "inteligencia artificial empresarial",
      "consultoría técnica",
      "auditoría IT",
      "integraciones AFIP",
    ],
    sameAs: [],
  },
};

export function keywordsToMetaContent(keywords: SeoKeywordGroups = seoKeywords): string {
  return [...keywords.primary, ...keywords.secondary, ...keywords.local].join(", ");
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderSeoHeadHtml(config: SeoConfig = seoConfig): string {
  const keywords = keywordsToMetaContent(config.keywords);
  const jsonLd = JSON.stringify(config.jsonLd, null, 2);

  return [
    `<title>${escapeHtml(config.title)}</title>`,
    `<meta name="description" content="${escapeHtml(config.description)}" />`,
    `<meta name="keywords" content="${escapeHtml(keywords)}" />`,
    `<meta name="author" content="${escapeHtml(config.author)}" />`,
    `<meta name="robots" content="${escapeHtml(config.robots)}" />`,
    `<link rel="canonical" href="${escapeHtml(config.canonicalUrl)}" />`,
    "",
    `<meta property="og:type" content="${escapeHtml(config.og.type)}" />`,
    `<meta property="og:locale" content="${escapeHtml(config.locale)}" />`,
    `<meta property="og:site_name" content="${escapeHtml(config.siteName)}" />`,
    `<meta property="og:title" content="${escapeHtml(config.og.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(config.og.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(config.og.url)}" />`,
    `<meta property="og:image" content="${escapeHtml(config.og.image)}" />`,
    "",
    `<meta name="twitter:card" content="${escapeHtml(config.twitter.card)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(config.twitter.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(config.twitter.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(config.twitter.image)}" />`,
    "",
    `<link rel="icon" type="image/png" href="${escapeHtml(config.favicon)}" />`,
    `<link rel="apple-touch-icon" href="${escapeHtml(config.appleTouchIcon)}" />`,
    "",
    `<script type="application/ld+json">`,
    jsonLd,
    `</script>`,
  ].join("\n      ");
}
