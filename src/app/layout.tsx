import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voltage-festival.vercel.app"),

  title: {
    default: "Voltage Festival — Indoor Electronic Music Experience",
    template: "%s | Voltage Festival",
  },

  description:
    "Voltage Festival is an immersive indoor electronic music experience featuring world-class DJs, neon visuals, and nonstop energy.",

  applicationName: "Voltage Festival",

  keywords: [
    "electronic music festival",
    "techno festival",
    "EDM event",
    "indoor rave",
    "DJ festival",
    "music landing page",
  ],

  authors: [
    {
      name: "Guilherme Bustamante",
    },
  ],

  creator: "Guilherme Bustamante",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Voltage Festival — Feel the Pulse of the Night",
    description:
      "Step into the future of electronic music. DJs, neon lights, and an unforgettable indoor rave experience.",
    url: "https://voltage-festival.vercel.app",
    siteName: "Voltage Festival",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voltage Festival — Electronic Music Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Voltage Festival — Indoor Electronic Music Experience",
    description:
      "An immersive rave experience with top DJs, neon visuals, and nonstop beats.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://voltage-festival.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased w-full max-w-400 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
