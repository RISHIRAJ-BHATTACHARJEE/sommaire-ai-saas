import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fontMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Sommaire",
  description: "Sommaire - AI PDF Summarizer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontMontserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
