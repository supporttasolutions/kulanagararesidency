import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { MobileStickyBar } from "@/components/site/MobileStickyBar";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kulangara Residency | Premium Stay in Kottayam",
  description:
    "Kulangara Residency is a premium residency near Nattakom, Kottayam. Calm, clean interiors and effortless WhatsApp booking for a quiet stay in Kerala.",
  metadataBase: new URL("https://kulangararesidency.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kulangara Residency | Premium Stay in Kottayam",
    description:
      "A calm, premium residency near Nattakom, Kottayam. Book instantly via WhatsApp.",
    type: "website",
    url: "/",
  },
};

const heading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaHotel = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE.name,
    numberOfRooms: String(SITE.roomsCount),
    telephone: SITE.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLines[0],
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    telephone: SITE.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressLines[0],
      addressLocality: "Kottayam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <Header />
        <main className="min-h-screen bg-background pt-24 pb-24 md:pb-10">
          {children}
        </main>
        <MobileStickyBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHotel) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaLocalBusiness) }}
        />
      </body>
    </html>
  );
}
