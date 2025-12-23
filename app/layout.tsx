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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
