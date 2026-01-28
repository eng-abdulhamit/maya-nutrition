import "./globals.css";
import { Cairo, Inter } from "next/font/google";
import type { Metadata } from "next";

/* =======================
   Fonts
======================= */
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* =======================
   Global SEO Metadata
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://maya-nutrition.vercel.app"), // ✏️ غيّره بعد النشر

  title: {
    default:
      "د. مايا السلقيني | أخصائية تغذية علاجية – Dyt. Maya Al-Salkini",
    template: "%s | د. مايا السلقيني",
  },

  description:
    "موقع د. مايا السلقيني، أخصائية تغذية علاجية. استشارات تغذية أونلاين، برامج غذائية مخصصة، متابعة عبر واتساب، وتغذية علاجية مبنية على أسس علمية.",

  keywords: [
    "أخصائية تغذية",
    "تغذية علاجية",
    "أخصائية تغذية أونلاين",
    "استشارات تغذية واتساب",
    "Dietitian",
    "Clinical Nutritionist",
    "Online Dietitian",
    "Diyetisyen",
    "Beslenme Uzmanı",
  ],

  authors: [{ name: "Dyt. Maya Al-Salkini" }],
  creator: "Dyt. Maya Al-Salkini",

  openGraph: {
    title:
      "د. مايا السلقيني | أخصائية تغذية علاجية – Online Dietitian",
    description:
      "Personalized clinical nutrition programs, online consultations, and WhatsApp follow-up.",
    url: "https://maya-nutrition.vercel.app",
    siteName: "Dr. Maya Al-Salkini Nutrition",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinical Nutritionist Website",
      },
    ],
    locale: "ar_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Al-Salkini | Clinical Nutritionist",
    description:
      "Online nutrition consultations & personalized diet programs.",
    images: ["/og-image.jpg"],
  },
};

/* =======================
   Root Layout
======================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* 🌍 hreflang */}
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://maya-nutrition.vercel.app"
        />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://maya-nutrition.vercel.app?lang=tr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://maya-nutrition.vercel.app"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#16a34a" />
      </head>

      <body
        className={`
          ${cairo.variable}
          ${inter.variable}
          antialiased
          transition-colors
          duration-300
        `}
      >
        {children}
      </body>
    </html>
  );
}
