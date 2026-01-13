import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export const metadata: Metadata = {
  title: "Contact | Hire Remote Full Stack Developer",
  description: "Get in touch to hire a full stack developer for web, software, or mobile app development projects.",
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
    title: "Contact | Hire Remote Full Stack Developer",
    description: "Get in touch to hire a full stack developer for web, software, or mobile app development projects.",
    type: "website",
    url: `${siteUrl}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Hire Remote Full Stack Developer",
    description: "Get in touch to hire a full stack developer for web, software, or mobile app development projects.",
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

