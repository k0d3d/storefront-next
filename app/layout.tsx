import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Exo_2, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import "./styles/custom.scss";
import { WaitlistProvider } from "@/components/WaitlistContext";
import Analytics from "@/components/Analytics";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
  weight: ["700", "800", "900"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "MerchPaddie - Launch Your Store & Earn $10k Free",
  description: "Start with $10k free cash. Vendors sell merch, creators promote and earn. Zero risk, real money. Join the beta waitlist today.",

  // Favicons and app icons
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },

  // Web app manifest
  manifest: '/favicon_io/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} ${instrumentSans.variable} ${exo2.variable} antialiased font-sans`}>
        <WaitlistProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
