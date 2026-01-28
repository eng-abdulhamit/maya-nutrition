"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

/* WhatsApp SVG Icon */
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M19.11 17.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.12 2.82c.14.18 1.93 2.95 4.68 4.13z"
    />
    <path
      fill="currentColor"
      d="M16.01 3.2c-7.04 0-12.77 5.73-12.77 12.77 0 2.25.59 4.36 1.62 6.2L3.2 28.8l6.78-1.78a12.73 12.73 0 0 0 6.03 1.54h.01c7.04 0 12.77-5.73 12.77-12.77S23.05 3.2 16.01 3.2z"
    />
  </svg>
);

export default function Home() {
  const [lang, setLang] = useState<"ar" | "tr">("ar");
  const [dark, setDark] = useState(false);
  const [review, setReview] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const phone = "905528669983";

  /* ================= CONTENT ================= */
  const data = {
    ar: {
      dir: "rtl",
      name: "د. مايا السلقيني",
      title: "أخصائية تغذية علاجية",
      hero: "صحتك تبدأ من اختيارك الغذائي",
      desc: "خطط غذائية علمية مخصصة مبنية على تحليل نمط حياتك لتحقيق نتائج مستدامة",
      waText: "مرحبا دكتورة مايا، أرغب بحجز استشارة تغذية",
      switch: "Türkçe",

      stats: [
        { value: "3+", label: "سنوات خبرة" },
        { value: "100+", label: "برنامج غذائي" },
        { value: "99+", label: "مراجع راضٍ" },
        { value: "150+", label: "حالة ناجحة" },
      ],

      servicesTitle: "الخدمات",
      services: [
        { title: "برامج تخفيف الوزن", desc: "خطة صحية بدون حرمان." },
        { title: "زيادة الوزن وبناء العضلات", desc: "توازن غذائي آمن." },
        { title: "تغذية علاجية", desc: "لحالات السكري والضغط." },
        { title: "متابعة شهرية", desc: "تقييم وتعديل مستمر." },
      ],

      cta: "ابدأ رحلتك الصحية الآن",

      howTitle: "كيف نعمل؟",
      how: ["تواصل عبر واتساب", "تقييم حالتك الصحية", "خطة غذائية + متابعة"],

      trust: [
        "متابعة شخصية",
        "خطط غذائية علمية",
        "خصوصية تامة",
        "دعم مباشر عبر واتساب",
      ],

      faqTitle: "أسئلة شائعة",
      faq: [
        { q: "هل المتابعة أونلاين؟", a: "نعم، المتابعة كاملة عبر واتساب." },
        { q: "متى تظهر النتائج؟", a: "غالبًا خلال أسابيع حسب الالتزام." },
        { q: "هل يوجد حرمان؟", a: "لا، الأنظمة مرنة ومستدامة." },
      ],

      reviewsTitle: "آراء من واتساب",
      reviews: [
        "الخطة كانت سهلة والنتائج واضحة.",
        "دعم مستمر وتعامل راقي.",
        "تحسن كبير في النشاط.",
        "برنامج مرن ومريح.",
      ],

      footer: "© 2026 د. مايا السلقيني – جميع الحقوق محفوظة",
    },

    tr: {
      dir: "ltr",
      name: "Dyt. Maya Al-Salkini",
      title: "Klinik Diyetisyen",
      hero: "Sağlığınız doğru beslenmeyle başlar",
      desc: "Bilimsel temelli, kişiye özel ve sürdürülebilir beslenme planları",
      waText:
        "Merhaba Maya Hanım, beslenme danışmanlığı için randevu almak istiyorum",
      switch: "العربية",

      stats: [
        { value: "3+", label: "Yıllık Deneyim" },
        { value: "100+", label: "Diyet Programı" },
        { value: "99+", label: "Memnun Danışan" },
        { value: "150+", label: "Başarılı Vaka" },
      ],

      servicesTitle: "Hizmetler",
      services: [
        { title: "Kilo Verme", desc: "Sağlıklı kilo kaybı." },
        { title: "Kilo Alma & Kas", desc: "Dengeli beslenme." },
        { title: "Medikal Beslenme", desc: "Özel sağlık planları." },
        { title: "Aylık Takip", desc: "Düzenli kontrol." },
      ],

      cta: "Sağlıklı yolculuğuna başla",

      howTitle: "Nasıl Çalışıyoruz?",
      how: ["WhatsApp iletişim", "Durum analizi", "Plan & takip"],

      trust: [
        "Kişisel takip",
        "Bilimsel planlar",
        "Gizlilik",
        "WhatsApp desteği",
      ],

      faqTitle: "Sık Sorulan Sorular",
      faq: [
        { q: "Online mi?", a: "Evet, tamamen online." },
        { q: "Sonuç ne zaman?", a: "Genelde birkaç hafta içinde." },
        { q: "Zor diyet mi?", a: "Hayır, sürdürülebilir." },
      ],

      reviewsTitle: "WhatsApp Yorumları",
      reviews: [
        "Program çok rahattı.",
        "İlgi çok iyiydi.",
        "Sağlığım düzeldi.",
        "Memnun kaldım.",
      ],

      footer: "© 2026 Dyt. Maya Al-Salkini – Tüm hakları saklıdır",
    },
  };

  const t = data[lang];

  /* ================= EFFECTS ================= */
  useEffect(() => {
    const i = setInterval(
      () => setReview((r) => (r === t.reviews.length - 1 ? 0 : r + 1)),
      3500
    );
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(i);
      window.removeEventListener("scroll", onScroll);
    };
  }, [t.reviews.length]);

  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(t.waText)}`;
  const bg = dark ? "bg-slate-900 text-slate-200" : "bg-emerald-50 text-slate-800";
  const card = dark ? "bg-slate-800" : "bg-white";
  const title = dark ? "text-emerald-400" : "text-emerald-700";

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              name: t.name,
              medicalSpecialty: "Nutrition",
              url: "https://example.com",
            }),
          }}
        />
      </Head>

      <div dir={t.dir} className={`${bg} min-h-screen transition-colors`}>
        {/* HEADER */}
        <header className={`${card} sticky top-0 shadow`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
            <div>
              <h1 className={`font-bold text-lg ${title}`}>{t.name}</h1>
              <p className="text-sm opacity-70">{t.title}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setLang(lang === "ar" ? "tr" : "ar")}>
                {t.switch}
              </button>
              <button onClick={() => setDark(!dark)}>
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="text-center py-20 px-6">
          <a
            href={waLink}
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-3 rounded-full mb-6 shadow hover:scale-105 transition"
          >
            <WhatsAppIcon /> WhatsApp
          </a>
          <h2 className={`text-4xl font-bold mb-4 ${title}`}>{t.hero}</h2>
          <p className="max-w-xl mx-auto opacity-80">{t.desc}</p>
        </section>

        {/* STATS */}
        <section className={`${card} py-12`}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {t.stats.map((s, i) => (
              <div
                key={i}
                className="bg-emerald-600/10 p-6 rounded-xl hover:-translate-y-1 transition"
              >
                <div className={`text-3xl font-bold ${title}`}>{s.value}</div>
                <div className="text-sm mt-2 opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h3 className={`text-3xl font-bold text-center mb-10 ${title}`}>
            {t.servicesTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.services.map((s, i) => (
              <div
                key={i}
                className={`${card} p-6 rounded-xl shadow hover:-translate-y-1 transition`}
              >
                <h4 className={`font-semibold mb-2 ${title}`}>{s.title}</h4>
                <p className="opacity-80">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href={waLink}
              target="_blank"
              className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full text-lg shadow hover:bg-emerald-700 transition"
            >
              {t.cta}
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={`${card} py-16`}>
          <h3 className={`text-3xl font-bold text-center mb-10 ${title}`}>
            {t.howTitle}
          </h3>
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
            {t.how.map((h, i) => (
              <div key={i} className="bg-emerald-600/10 p-6 rounded-xl">
                {h}
              </div>
            ))}
          </div>
        </section>

        {/* TRUST */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 text-center">
            {t.trust.map((b, i) => (
              <div
                key={i}
                className={`${card} p-4 rounded-xl shadow-sm`}
              >
                {b}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className={`${card} py-16 px-6`}>
          <h3 className={`text-3xl font-bold text-center mb-10 ${title}`}>
            {t.faqTitle}
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {t.faq.map((f, i) => (
              <details key={i} className="bg-emerald-600/10 p-4 rounded-xl">
                <summary className="cursor-pointer font-semibold">
                  {f.q}
                </summary>
                <p className="mt-2 opacity-80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section className="py-20 px-6">
          <h3 className={`text-3xl font-bold text-center mb-10 ${title}`}>
            {t.reviewsTitle}
          </h3>
          <div className="max-w-2xl mx-auto bg-emerald-600/10 p-10 rounded-3xl text-center transition-all duration-700">
            “{t.reviews[review]}”
          </div>
        </section>

        {/* FLOATING WHATSAPP */}
        <a
          href={waLink}
          target="_blank"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition z-50"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {/* BACK TO TOP */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-6 bg-emerald-600 text-white p-3 rounded-full shadow"
          >
            ⬆️
          </button>
        )}

        <footer className="bg-emerald-700 text-white text-center py-4">
          {t.footer}
        </footer>

        {/* Hidden SEO Text */}
        <p className="sr-only">
          أخصائية تغذية أونلاين، برامج غذائية مخصصة، متابعة عبر واتساب، تغذية علاجية
        </p>
      </div>
    </>
  );
}
