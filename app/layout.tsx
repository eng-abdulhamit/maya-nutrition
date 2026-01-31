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
   Global Metadata (SEO)
======================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mayasalkini.com"),

  title: {
    default: "د. مايا السلقيني | أخصائية تغذية علاجية",
    template: "%s | د. مايا السلقيني",
  },

  description:
    "أخصائية تغذية علاجية أونلاين، برامج غذائية مخصصة، متابعة عبر واتساب، وتغذية علاجية مبنية على أسس علمية.",

  keywords: [
    "أخصائية تغذية",
    "تغذية علاجية",
    "أخصائية تغذية أونلاين",
    "استشارات تغذية",
    "Dietitian",
    "Clinical Nutritionist",
    "Diyetisyen",
    "Beslenme Uzmanı",
  ],

  authors: [{ name: "Dyt. Maya Al-Salkini" }],
  creator: "Dyt. Maya Al-Salkini",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "د. مايا السلقيني | أخصائية تغذية علاجية",
    description:
      "Personalized clinical nutrition programs and online consultations.",
    url: "https://www.mayasalkini.com",
    siteName: "Dr. Maya Al-Salkini Nutrition",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clinical Nutritionist Website",
      },
    ],
    locale: "ar",
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
    <html lang="ar" className="scroll-smooth">
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="1OYGAgFeMdED07CJNGAoTLIdm5xY7HdyMuAqPwdN8bM"
        />

        {/* hreflang */}
        <link rel="alternate" hrefLang="ar" href="https://www.mayasalkini.com" />
        <link
          rel="alternate"
          hrefLang="tr"
          href="https://www.mayasalkini.com?lang=tr"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.mayasalkini.com"
        />

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
