import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.14); }
      `}</style>
      <BrowserRouter basename={routerBasename}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
