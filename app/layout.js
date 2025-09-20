import ChatWidget from "@/components/chatbot";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B2W Infotech - AI-Powered Software Development & IT Outsourcing",
  description: "Leading AI-driven software development company. Hire expert developers in 1 hour with 40-hour risk-free trial. 1200+ projects completed. Custom apps, IT outsourcing, digital transformation.",
  keywords: "software development, IT outsourcing, AI solutions, custom app development, digital transformation, hire developers",
  authors: [{ name: "B2W Infotech" }],
  robots: "index, follow",
  openGraph: {
    title: "B2W Infotech - AI-Powered Software Development & IT Outsourcing",
    description: "Leading AI-driven software development company. Hire expert developers in 1 hour with 40-hour risk-free trial. 1200+ projects completed.",
    url: "https://b2w-peach.vercel.app/",
    siteName: "B2W Infotech",
    images: [
      {
        url: "https://b2w-peach.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "B2W Infotech Logo",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://b2w-peach.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://b2w-peach.vercel.app/" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Simple Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "B2W Infotech",
              "description": "AI-powered software development and IT outsourcing company",
              "url": "https://b2w-peach.vercel.app/",
              "logo": "https://b2w-peach.vercel.app/images/logo.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "serviceType": "Software Development"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}