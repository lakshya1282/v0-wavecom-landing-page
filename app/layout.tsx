import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AOSProvider } from "@/components/aos-provider"
import { SplashScreen } from "@/components/splash-screen"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const _bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Wavecon - Cooling The Future, Naturally",
  description:
    "One Brand. One Ecosystem. Total Air Solutions. Evaporative Cooling Systems, Industrial Ventilation & Air Conditioning.",
  generator: "v0.app",
  keywords: ["wave","evaporative","evaporative cooling", "industrial ventilation", "HVAC", "air conditioning", "cooling systems","VRV","wavecom","raipur","sustainable cooling","green cooling"],
  authors: [{ name: "Wavecon" }],
  creator: "Wavecon",
  publisher: "Wavecon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wavecon.com",
    title: "Wavecon - Cooling The Future, Naturally",
    description: "One Brand. One Ecosystem. Total Air Solutions.",
    images: [
      {
        url: "https://wavecon.com/wc.png",
        width: 399,
        height: 128,
        alt: "Wavecon Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/wc.png",
    apple: "/apple-icon.png",
  },
  metadataBase: new URL("https://wavecon.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <SplashScreen />
        <AOSProvider>{children}</AOSProvider>
        <Analytics />
      </body>
    </html>
  )
}
