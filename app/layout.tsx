import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Full Stack Web Development Services | MERN Stack Developer | SaaS Development",
    template: "%s | Osama Qaseem",
  },
  description: "Professional full stack web development services for startups and businesses. Expert MERN stack developer offering SaaS product development, AI software development, fintech app development, and custom web application solutions. Hire a freelance full stack developer USA.",
  keywords: [
    "full stack web development services",
    "startup web development services",
    "fintech app development services",
    "MERN stack development services",
    "AI software development company",
    "SaaS product development services",
    "custom SaaS development",
    "software development for startups",
    "web app development for startups",
    "full stack developer portfolio",
    "freelance full stack developer USA",
    "hire MERN stack developer",
    "AI web development services",
    "custom web app development USA",
    "startup software development company",
    "small business web development services",
    "SaaS MVP development",
    "AI powered web applications",
    "custom backend development services",
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
    siteName: "Full Stack Web Development Services | MERN Stack Developer",
    title: "Full Stack Web Development Services | MERN Stack Developer | SaaS Development",
    description: "Professional full stack web development services for startups and businesses. Expert MERN stack developer offering SaaS product development, AI software development, fintech app development, and custom web application solutions.",
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
    title: "Full Stack Web Development Services | MERN Stack Developer | SaaS Development",
    description: "Professional full stack web development services for startups and businesses. Expert MERN stack developer offering SaaS product development, AI software development, fintech app development, and custom web application solutions.",
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
    description: "Full Stack Developer specializing in full stack web development services, MERN stack development, SaaS product development, AI software development, fintech app development, and startup web development solutions",
    url: siteUrl,
    image: `${siteUrl}/myimage.png`,
    sameAs: [
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "MERN Stack Development",
      "SaaS Product Development",
      "AI Software Development",
      "Fintech App Development",
      "Startup Web Development",
      "Custom SaaS Development",
      "Web App Development for Startups",
      "Custom Backend Development",
      "Scalable Web Application Architecture",
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

