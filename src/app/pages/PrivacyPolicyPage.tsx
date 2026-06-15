import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { AGENCIA_NAME } from "../../lib/whatsapp";
import {
  PRIVACY_POLICY_LAST_UPDATED,
  privacyDataRequestUrl,
  privacyPolicyContent,
} from "../../lib/privacyPolicy";
import { Footer } from "../components/Footer";

const LOGO_SRC = `${import.meta.env.BASE_URL}logo.png`;

export function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = `Política de Privacidad | ${AGENCIA_NAME}`;
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={LOGO_SRC}
              alt={AGENCIA_NAME}
              width={26}
              height={26}
              className="object-contain shrink-0"
              style={{ background: "transparent" }}
            />
            <span
              className="text-white font-bold tracking-wide"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {AGENCIA_NAME}
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-[#9CA3AF] hover:text-white transition-colors"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="pt-28 pb-20 px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <p
            className="text-xs text-[#60a5fa] tracking-widest uppercase mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // legal
          </p>
          <h1
            className="text-3xl lg:text-4xl text-white mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}
          >
            Política de Privacidad
          </h1>
          <p
            className="text-sm text-[#6B7280] mb-12"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Última actualización: {PRIVACY_POLICY_LAST_UPDATED}
          </p>

          <div className="flex flex-col gap-10">
            {privacyPolicyContent.sections.map((section) => (
              <section key={section.title}>
                <h2
                  className="text-lg text-white mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                >
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-[#9CA3AF] text-sm leading-relaxed mb-3"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.slice(0, 40)}
                        className="text-[#9CA3AF] text-sm leading-relaxed"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06]">
            <a
              href={privacyDataRequestUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-[#60a5fa] hover:text-[#93c5fd] transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              Solicitar acceso, rectificación o supresión de datos →
            </a>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
