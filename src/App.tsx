import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, ChevronDown, Check, X, Info, ExternalLink, Banknote, Globe, ScrollText, Scale } from "lucide-react";

type Language = "en" | "rw" | "fr";

const translations = {
  en: {
    heroTitle: "Secure Banking.",
    heroTitleGreen: "Trusted Privacy.",
    heroSubtitle: "We are committed to protecting your personal data and ensuring your digital banking experience is safe and personalized.",
    manageSettings: "Manage Privacy Settings",
    privacyNotice: "Cookie Consent",
    secureSession: "Secure Session",
    bannerTitle: "Your Privacy Preferences",
    bannerDesc: "Bank of Kigali uses cookies to enhance your experience, analyze site traffic, and for personalization. Essential cookies are required for the site to function securely.",
    readPolicy: "Read Privacy Policy",
    detailedSettings: "Detailed Settings",
    necessaryTitle: "Strictly Necessary Cookies",
    necessaryDesc: "Necessary for the Site to function and cannot be switched off. They handle authentication and security.",
    alwaysActive: "Always Active",
    analyticsTitle: "Performance Cookies",
    analyticsDesc: "Allow us to count visits and traffic sources so we can measure and improve the performance of our Site.",
    personalizationTitle: "Functional Cookies",
    personalizationDesc: "Enable the Site to provide enhanced functionality and personalization based on your banking habits.",
    acceptAll: "Accept All",
    savePreferences: "Save Preferences",
    necessaryOnly: "Necessary Only",
    successMsg: "Preferences updated successfully",
    langName: "English",
    policyTitle: "Privacy Policy",
    close: "Close"
  },
  rw: {
    heroTitle: "Banki Ifite Umutekano.",
    heroTitleGreen: "Ibanga Ryizewe.",
    heroSubtitle: "Twiyemeje kurinda amakuru yawe bwite no kwemeza ko uburyo ukoresha banki mu buryo bw'ikoranabuhanga butekanye kandi bujyanye n'ibyo ukeneye.",
    manageSettings: "Gucunga Igenamiterere ry'Ibwihisho",
    privacyNotice: "Uruhushya rwa Cookies",
    secureSession: "Umuyoboro Utekanye",
    bannerTitle: "Ibyo Uhitamo ku Bwihisho",
    bannerDesc: "Bank of Kigali ikoresha 'cookies' kugira ngo tunonosore uburyo ukoresha urubuga, busesengure imikoreshereze yarwo, no kugira ngo tuguhe ibigukwiriye. 'Cookies' z'ingenzi zirakenewe kugira ngo urubuga rukore neza mu buryo butekanye.",
    readPolicy: "Soma Politiki y'Ibwihisho",
    detailedSettings: "Igenamiterere Rirambuye",
    necessaryTitle: "Cookies z'Ingenzi Cyane",
    necessaryDesc: "Zirakenewe kugira ngo urubuga rukore kandi ntizishobora kuzimishwa. Zigenzura kwinjira n'umutekano.",
    alwaysActive: "Igihe cyose",
    analyticsTitle: "Cookies z'Imikorere",
    analyticsDesc: "Zidufasha kubara abasura n'inkomoko y'urujya n'uruza kugira ngo dushobore gupima no kunoza imikorere y'urubuga rwacu.",
    personalizationTitle: "Cookies z'Ibyo Uhitamo",
    personalizationDesc: "Zituma urubuga rutanga imikorere yisumbuyeho n'ibigukwiriye hashingiwe ku migenzereze yawe muri banki.",
    acceptAll: "Emeza Byose",
    savePreferences: "Bika Ibyo Uhisemo",
    necessaryOnly: "Iz'ingenzi Gusa",
    successMsg: "Ibyo uhisemo byabitswe neza",
    langName: "Kinyarwanda",
    policyTitle: "Politiki y'Ibwihisho",
    close: "Funga"
  },
  fr: {
    heroTitle: "Banque Sécurisée.",
    heroTitleGreen: "Confidentialité de Confiance.",
    heroSubtitle: "Nous nous engageons à protéger vos données personnelles et à garantir que votre expérience bancaire numérique est sûre et personnalisée.",
    manageSettings: "Gérer les paramètres de confidentialité",
    privacyNotice: "Consentement aux cookies",
    secureSession: "Session Sécurisée",
    bannerTitle: "Vos préférences de confidentialité",
    bannerDesc: "Bank of Kigali utilise des cookies pour améliorer votre expérience, analyser le trafic du site et pour la personnalisation. Les cookies essentiels sont nécessaires au fonctionnement sécurisé du site.",
    readPolicy: "Lire la politique de confidentialité",
    detailedSettings: "Paramètres détaillés",
    necessaryTitle: "Cookies Strictement Nécessaires",
    necessaryDesc: "Nécessaires au fonctionnement du site et ne peuvent pas être désactivés. Ils gèrent l'authentification et la sécurité.",
    alwaysActive: "Toujours Actif",
    analyticsTitle: "Cookies de Performance",
    analyticsDesc: "Nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site.",
    personalizationTitle: "Cookies Fonctionnels",
    personalizationDesc: "Permettent au site de fournir des fonctionnalités améliorées et une personnalisation basée sur vos habitudes bancaires.",
    acceptAll: "Tout Accepter",
    savePreferences: "Enregistrer les préférences",
    necessaryOnly: "Nécessaires Uniquement",
    successMsg: "Préférences mises à jour avec succès",
    langName: "Français",
    policyTitle: "Politique de Confidentialité",
    close: "Fermer"
  }
};

export default function CookieConsent() {
  const [lang, setLang] = useState<Language>("en");
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [nonNecessary, setNonNecessary] = useState(false);
  const [personalisation, setPersonalisation] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleAcceptAll = () => {
    setNonNecessary(true);
    setPersonalisation(true);
    setSaved(true);
    setTimeout(() => setDismissed(true), 1400);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setDismissed(true), 1400);
  };

  const handleDecline = () => setDismissed(true);

  const handleReset = () => {
    setDismissed(false);
    setSaved(false);
    setNonNecessary(false);
    setPersonalisation(false);
    setExpanded(false);
    setVisible(false);
    setTimeout(() => setVisible(true), 200);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-[#0033A0]/10">
      {/* Language Selector (Top Right) */}
      <div className="fixed top-6 right-6 z-[10000]">
        <div className="relative">
          <button
            onClick={() => setShowLangMenu(!showLangMenu)}
            className="flex items-center gap-2 rounded-full border border-[#0033A0]/10 bg-white px-4 py-2 text-xs font-bold text-[#0033A0] shadow-sm transition-all hover:bg-[#0033A0]/5"
          >
            <Globe size={14} />
            {t.langName}
            <ChevronDown size={12} className={`transition-transform ${showLangMenu ? "rotate-180" : ""}`} />
          </button>
          
          <AnimatePresence>
            {showLangMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-40 overflow-hidden rounded-xl border border-[#0033A0]/10 bg-white shadow-xl"
              >
                {(Object.keys(translations) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setShowLangMenu(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-xs font-semibold transition-colors hover:bg-[#0033A0]/5 ${
                      lang === l ? "text-[#0033A0] bg-[#0033A0]/5" : "text-[#495057]"
                    }`}
                  >
                    {translations[l].langName}
                    {lang === l && <Check size={12} />}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Background Content Simulation */}
      <div className="flex min-h-screen flex-col items-center justify-center px-6 pb-64 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0033A0] text-white shadow-lg">
            <Banknote size={32} />
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-[#0033A0] uppercase">
            Bank of Kigali
          </div>
          <h1 className="font-serif text-4xl font-bold leading-tight text-[#1A1A1A] md:text-5xl">
            {t.heroTitle}<br />
            <span className="text-[#00A651]">{t.heroTitleGreen}</span>
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[#6C757D]">
            {t.heroSubtitle}
          </p>
          
          {dismissed && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handleReset}
              className="mt-8 flex items-center gap-2 rounded-full border border-[#0033A0]/20 bg-[#0033A0]/5 px-6 py-2.5 text-xs font-semibold text-[#0033A0] transition-all hover:bg-[#0033A0]/10"
            >
              <Shield size={14} />
              {t.manageSettings}
            </motion.button>
          )}
        </motion.div>
      </div>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {showPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[#DEE2E6] bg-[#F8F9FA] px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0033A0] text-white">
                    <ScrollText size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#1A1A1A]">{t.policyTitle}</h2>
                    <p className="text-xs font-medium text-[#6C757D] uppercase tracking-wider">Bank of Kigali PLC</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowPolicy(false)}
                  className="rounded-full p-2 text-[#6C757D] transition-colors hover:bg-black/5 hover:text-[#1A1A1A]"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 text-sm leading-relaxed text-[#495057]">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-bold text-[#0033A0]">Introduction</h3>
                  <p>This Privacy Policy is designed to help you understand how BANK OF KIGALI and its related subsidiaries and affiliates, including Bank of Kigali PLC (“we”, “us” or “our”) collects, uses and shares personal information collected through this website. We value your privacy, and we will not share your personal information with third parties except as described in this Privacy Policy without your consent. By using this website, you agree to be bound by this privacy policy.</p>

                  <h3 className="mt-6 text-lg font-bold text-[#0033A0]">What this Privacy Policy Covers</h3>
                  <p>This Privacy Policy applies to our collection, use and sharing of your personal information:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>When you visit our website at https://bk.rw/ (the “Site”)</li>
                    <li>Receive our communications or participate in our activities</li>
                    <li>Fill out an application for admission on our website</li>
                    <li>Information obtained from third parties such as resellers and database vendors</li>
                  </ul>

                  <h3 className="mt-6 text-lg font-bold text-[#0033A0]">Personal Information We Collect</h3>
                  <p><strong>Information you give us:</strong> Contact information (name, email, phone), feedback, and correspondence.</p>
                  <p><strong>Information Automatically Collected:</strong> IP address, device type, browser type, and usage statistics collected via cookies and similar technologies.</p>

                  <h3 className="mt-6 text-lg font-bold text-[#0033A0]">How We Use Your Personal Information</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>To provide, maintain and improve the Site</li>
                    <li>To personalize your experience</li>
                    <li>To process applications</li>
                    <li>To respond to requests and feedback</li>
                    <li>To perform analytics and advertising</li>
                  </ul>

                  <h3 className="mt-6 text-lg font-bold text-[#0033A0]">Your Rights</h3>
                  <p className="mb-4">You have certain rights regarding your personal data:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Access", desc: "Access your personal information." },
                      { title: "Rectify", desc: "Correct inaccuracies in your data." },
                      { title: "Delete", desc: "Erase your personal information." },
                      { title: "Transfer", desc: "Request a machine-readable copy." },
                      { title: "Restrict", desc: "Limit the processing of your data." },
                      { title: "Object", desc: "Object to processing based on legitimate interests." }
                    ].map(right => (
                      <div key={right.title} className="flex items-start gap-2">
                        <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#00A651] text-white">
                          <Check size={10} />
                        </div>
                        <div>
                          <span className="font-bold text-[#1A1A1A]">{right.title}:</span>
                          <span className="ml-1">{right.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#0033A0]">Cookie Policy</h3>
                  <p>We use strictly necessary cookies (for site function), performance cookies (for analytics), and functional cookies (for personalization). You can manage these preferences through our cookie banner.</p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-[#DEE2E6] bg-[#F8F9FA] px-8 py-6 flex justify-end">
                <button
                  onClick={() => setShowPolicy(false)}
                  className="rounded-xl bg-[#0033A0] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#0033A0]/20 transition-all hover:bg-[#002A85]"
                >
                  {t.close}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {visible && !dismissed && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center px-4 pb-0 md:px-6"
          >
            <div className="w-full max-w-3xl overflow-hidden rounded-t-[24px] border border-[#0033A0]/10 bg-white shadow-[0_-10px_50px_rgba(0,51,160,0.12)]">
              {/* BK Brand Stripe */}
              <div className="flex h-1.5 w-full">
                <div className="h-full flex-1 bg-[#0033A0]" />
                <div className="h-full flex-1 bg-[#00A651]" />
                <div className="h-full flex-1 bg-[#FDB913]" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#0033A0] to-[#0047D1] px-6 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 border border-white/20">
                    <Lock size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold leading-none">Bank of Kigali</h2>
                    <p className="mt-1 text-[10px] font-medium tracking-widest text-white/60 uppercase">{t.privacyNotice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00A651] animate-pulse" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">{t.secureSession}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{t.bannerTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#495057]">
                    {t.bannerDesc}
                    <button 
                      onClick={() => setShowPolicy(true)}
                      className="ml-1 inline-flex items-center gap-1 font-semibold text-[#0033A0] hover:underline"
                    >
                      {t.readPolicy} <ExternalLink size={12} />
                    </button>
                  </p>
                </div>

                {/* Preferences Toggle */}
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="group flex items-center gap-2 rounded-lg bg-[#F8F9FA] border border-[#DEE2E6] px-4 py-2 text-xs font-bold text-[#495057] transition-all hover:border-[#0033A0]/30 hover:bg-white"
                >
                  <Info size={14} className="text-[#0033A0]" />
                  {t.detailedSettings}
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} 
                  />
                </button>

                {/* Accordion Content */}
                <motion.div
                  initial={false}
                  animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 space-y-3">
                    {/* Necessary */}
                    <div className="flex items-center gap-4 rounded-xl border border-[#0033A0]/10 bg-[#0033A0]/5 p-4">
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">{t.necessaryTitle}</h4>
                        <p className="text-xs text-[#6C757D]">{t.necessaryDesc}</p>
                      </div>
                      <span className="rounded bg-[#0033A0]/10 px-2 py-1 text-[9px] font-black tracking-tighter text-[#0033A0] uppercase">
                        {t.alwaysActive}
                      </span>
                    </div>

                    {/* Analytics */}
                    <div className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${nonNecessary ? "border-[#00A651]/30 bg-[#00A651]/5" : "border-[#DEE2E6] bg-white"}`}>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">{t.analyticsTitle}</h4>
                        <p className="text-xs text-[#6C757D]">{t.analyticsDesc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input 
                          type="checkbox" 
                          className="peer sr-only" 
                          checked={nonNecessary}
                          onChange={(e) => setNonNecessary(e.target.checked)}
                        />
                        <div className="h-6 w-11 rounded-full bg-[#DEE2E6] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00A651] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                      </label>
                    </div>

                    {/* Personalisation */}
                    <div className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${personalisation ? "border-[#00A651]/30 bg-[#00A651]/5" : "border-[#DEE2E6] bg-white"}`}>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-[#1A1A1A]">{t.personalizationTitle}</h4>
                        <p className="text-xs text-[#6C757D]">{t.personalizationDesc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input 
                          type="checkbox" 
                          className="peer sr-only" 
                          checked={personalisation}
                          onChange={(e) => setPersonalisation(e.target.checked)}
                        />
                        <div className="h-6 w-11 rounded-full bg-[#DEE2E6] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00A651] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                      </label>
                    </div>
                  </div>
                </motion.div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 rounded-xl bg-[#0033A0] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#0033A0]/20 transition-all hover:bg-[#002A85] active:scale-[0.98]"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    onClick={handleSave}
                    className="flex-1 rounded-xl border-2 border-[#0033A0] px-6 py-3.5 text-sm font-bold text-[#0033A0] transition-all hover:bg-[#0033A0]/5 active:scale-[0.98]"
                  >
                    {t.savePreferences}
                  </button>
                  <button
                    onClick={handleDecline}
                    className="px-4 py-2 text-xs font-semibold text-[#6C757D] hover:text-[#1A1A1A]"
                  >
                    {t.necessaryOnly}
                  </button>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {saved && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#00A651]"
                    >
                      <Check size={14} />
                      {t.successMsg}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
