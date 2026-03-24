// ── 1. IMPORTS ─────────────────────────────────────────────
import { Syne, DM_Sans, DM_Mono } from 'next/font/google'
import Script from 'next/script'          // ← was missing
import './globals.css'

// ── 2. FONTS ───────────────────────────────────────────────
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

// ── 3. SEO METADATA ────────────────────────────────────────
export const metadata = {
  title: {
    default: "ignatwave | Digital Marketing Agency in Malappuram & Areekode",
    template: "%s | ignatwave",
  },
  description: "ignatwave is the #1 digital marketing agency in Malappuram and Areekode, Kerala. Web development, SEO, automation, branding — trusted by 50+ clients across Kerala and UAE.",
  keywords: [
    "digital marketing agency Malappuram",
    "digital marketing agency Areekode",
    "SEO company Malappuram",
    "web development Malappuram",
    "digital marketing UAE Kerala",
    "website design Areekode",
    "ignatwave",
  ],
  alternates: {
    canonical: "https://www.ignatwave.com",
  },
  openGraph: {
    title: "ignatwave | Digital Marketing Agency Malappuram",
    description: "#1 digital marketing agency in Malappuram & Areekode. Web dev, SEO, automation, branding.",
    url: "https://www.ignatwave.com",
    siteName: "ignatwave",
    images: [
      {
        url: "https://www.ignatwave.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ignatwave Digital Marketing Agency Malappuram",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ignatwave | Digital Marketing Agency Malappuram",
    description: "#1 digital marketing agency in Malappuram & Areekode.",
    images: ["https://www.ignatwave.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ── 4. SCHEMA (must be BEFORE RootLayout) ──────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ignatwave",
  "description": "Digital marketing agency in Malappuram & Areekode, Kerala.",
  "url": "https://www.ignatwave.com",
  "email": "hello@ignatwave.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Areekode",
    "addressLocality": "Malappuram",
    "addressRegion": "Kerala",
    "postalCode": "676504",
    "addressCountry": "IN",
  },
  "areaServed": ["Malappuram", "Areekode", "Kerala", "UAE"],
  "serviceType": ["Digital Marketing", "Web Development", "SEO", "Branding", "Automation"],
  "priceRange": "$$",
}

// ── 5. ROOT LAYOUT — only ONE ──────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  )
}