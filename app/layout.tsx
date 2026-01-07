import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import "./globals.css";
import ScrollController from "@/components/ScrollController";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Osama Qaseem - Full Stack Developer | Web3 & .NET Specialist",
    template: "%s | Osama Qaseem",
  },
  description: "Full Stack Developer specializing in React, Next.js, Node.js, ASP.NET Core 8, Web3, and Solana blockchain technologies. 4+ years of experience building enterprise applications, DApps, and mobile apps.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "ASP.NET Core Developer",
    "Web3 Developer",
    "Solana Developer",
    "Blockchain Developer",
    "Mobile Developer",
    "Flutter Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Enterprise Software Developer",
    "DApp Developer",
    "Software Engineer",
    "Dubai Developer",
  ],
  authors: [{ name: "Muhammad Osama Qaseem" }],
  creator: "Muhammad Osama Qaseem",
  publisher: "Muhammad Osama Qaseem",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Osama Qaseem - Portfolio",
    title: "Muhammad Osama Qaseem - Full Stack Developer | Web3 & .NET Specialist",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, ASP.NET Core 8, Web3, and Solana blockchain technologies. 4+ years of experience building enterprise applications.",
    images: [
      {
        url: `${siteUrl}/myimage.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Osama Qaseem - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Osama Qaseem - Full Stack Developer | Web3 & .NET Specialist",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, ASP.NET Core 8, Web3, and Solana blockchain technologies.",
    images: [`${siteUrl}/myimage.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Osama Qaseem",
    jobTitle: "Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, ASP.NET Core 8, Web3, and Solana blockchain technologies",
    url: siteUrl,
    image: `${siteUrl}/myimage.png`,
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "ASP.NET Core",
      "Web3",
      "Blockchain",
      "Solana",
      "TypeScript",
      "JavaScript",
      "Flutter",
      "Mobile Development",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University",
    },
    worksFor: {
      "@type": "Organization",
      name: "Voxity",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
  };

  return (
    <html lang="en" className={GeistSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Scroll Controller - Adjust scrollMultiplier to control scroll distance */}
        {/* 0.5 = half speed, 1 = normal, 1.5 = 1.5x speed, 2 = double speed */}
        <ScrollController scrollMultiplier={1} enabled={false} />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E99YL8J5LQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E99YL8J5LQ');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

