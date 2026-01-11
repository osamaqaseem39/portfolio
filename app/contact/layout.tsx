import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export const metadata: Metadata = {
  title: "Contact Me - Get in Touch | Full Stack Developer",
  description: "Contact Muhammad Osama Qaseem for web development, mobile app development, Web3, blockchain, and enterprise software projects. Available for freelance and full-time opportunities.",
  keywords: [
    "Contact Full Stack Developer",
    "Hire Web Developer",
    "Web3 Developer Contact",
    "React Developer Hire",
    "Blockchain Developer Contact",
    "Freelance Developer",
    "Software Engineer Contact",
  ],
  openGraph: {
    title: "Contact Me - Get in Touch | Full Stack Developer",
    description: "Contact Muhammad Osama Qaseem for web development, mobile app development, Web3, blockchain, and enterprise software projects.",
    type: "website",
    url: `${siteUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Me - Get in Touch | Full Stack Developer",
    description: "Contact Muhammad Osama Qaseem for web development, mobile app development, Web3, and blockchain projects.",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";
  
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
      jobTitle: "Full Stack Developer",
      email: "osamaqa39@gmail.com",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}

