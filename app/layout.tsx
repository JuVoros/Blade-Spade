import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blade & Spade Landcare LLC | Eastside Landscaping Since 2001",
  description:
    "Professional landscaping and lawn care for residential and commercial properties across Bellevue, Kirkland, Redmond, Sammamish, and the greater Eastside. Family-owned since 2001.",
  keywords:
    "landscaping, lawn care, Bellevue, Kirkland, Redmond, Sammamish, Woodinville, Clyde Hill, Issaquah, Eastside, landscape maintenance, commercial landscaping",
  openGraph: {
    title: "Blade & Spade Landcare LLC",
    description: "Caring for Eastside landscapes since 2001.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
