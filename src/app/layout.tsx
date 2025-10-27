import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ekalisolutions.com'),
  title: "Ekali Solutions | Consultoría Tecnológica y Desarrollo de Software",
  description: "Consultoría tecnológica especializada en Power Platform, desarrollo full-stack y soluciones cloud. Transformamos procesos empresariales con tecnología que genera resultados.",
  keywords: "consultoría tecnológica, Power Platform, desarrollo full-stack, soluciones cloud, Power Apps, Microsoft Azure, desarrollo de software, transformación digital, Santiago Chile",
  authors: [{ name: "Ekali Solutions" }],
  creator: "Ekali Solutions",
  publisher: "Ekali Solutions",
  icons: {
    icon: '/logo_idea.png',
    shortcut: '/logo_idea.png',
    apple: '/logo_idea.png',
    other: {
      rel: 'icon',
      url: '/logo_idea.png',
    },
  },
  openGraph: {
    title: "Ekali Solutions | Consultoría Tecnológica",
    description: "Transformamos procesos empresariales con tecnología que genera resultados",
    url: "https://ekalisolutions.com",
    siteName: "Ekali Solutions",
    images: [
      {
        url: '/logo_idea.png',
        width: 800,
        height: 600,
        alt: 'Ekali Solutions Logo',
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekali Solutions | Consultoría Tecnológica",
    description: "Transformamos procesos empresariales con tecnología que genera resultados",
    images: ['/logo_idea.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-foreground min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 w-full pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
