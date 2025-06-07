import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import LanguageSwitcher from "./components/LanguageSwitcher"
import { ReservationProvider } from "./components/ReservationContext"
import BackToTop from "./components/BackToTop"
import Chatbot from "./components/Chatbot"
import { Suspense } from "react"
import LoadingSpinner from "./components/LoadingSpinner"
import NewsMarquee from "./components/NewsMarquee"

// Optimize font loading
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "serif"],
})

// Enhanced metadata
export const metadata: Metadata = {
  title: {
    default: "Nhà Hàng Đắk Phú - Biển Việt lên bàn – Tươi Ngon Chuẩn Vị",
    template: "%s | Nhà Hàng Đắk Phú",
  },
  description:
    "Khám phá tinh hoa ẩm thực biển Việt tại Nhà Hàng Đắk Phú. Hải sản tươi sống, không gian sang trọng, dịch vụ đẳng cấp tại Tuy Hòa, Phú Yên.",
  keywords: [
    "nhà hàng hải sản",
    "Đắk Phú",
    "Tuy Hòa",
    "Phú Yên",
    "tiệc cưới",
    "sự kiện",
    "hải sản tươi sống",
    "ẩm thực biển",
  ],
  authors: [{ name: "Nhà Hàng Đắk Phú" }],
  creator: "Nhà Hàng Đắk Phú",
  publisher: "Nhà Hàng Đắk Phú",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://dakphu.com",
    siteName: "Nhà Hàng Đắk Phú",
    title: "Nhà Hàng Đắk Phú - Biển Việt lên bàn – Tươi Ngon Chuẩn Vị",
    description: "Khám phá tinh hoa ẩm thực biển Việt tại Nhà Hàng Đắk Phú",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nhà Hàng Đắk Phú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhà Hàng Đắk Phú",
    description: "Biển Việt lên bàn – Tươi Ngon Chuẩn Vị",
    images: ["/twitter-image.jpg"],
    creator: "@dakphu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dakphu.com",
    languages: {
      "vi-VN": "https://dakphu.com",
      "en-US": "https://dakphu.com/en",
    },
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4E629D" },
    { media: "(prefers-color-scheme: dark)", color: "#4E629D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Nhà Hàng Đắk Phú",
  image: "https://dakphu.com/og-image.jpg",
  "@id": "https://dakphu.com",
  url: "https://dakphu.com",
  telephone: "0905286377",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4847+9VV, Độc Lập, Phường 7",
    addressLocality: "Tuy Hòa",
    addressRegion: "Phú Yên",
    addressCountry: "VN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0881,
    longitude: 109.2968,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "22:00",
  },
  servesCuisine: "Vietnamese Seafood",
  priceRange: "$$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-accent text-primary-900 antialiased`}>
        <ReservationProvider>
          <LanguageSwitcher />
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
          </Suspense>
          <NewsMarquee />
          <main className="min-h-screen">
            <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <BackToTop />
          <Chatbot />
        </ReservationProvider>
      </body>
    </html>
  )
}
