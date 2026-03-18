import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale, getTranslations} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    metadataBase: new URL("https://voltage-festival.vercel.app"),

    title: {
      default: t("title"),
      template: t("template"),
    },

    description: t("description"),

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
      title: t("ogTitle"),
      description: t("ogDescription"),
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
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
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
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${playfair.variable} antialiased w-full max-w-440 mx-auto`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
