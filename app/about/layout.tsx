import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Full Stack Developer & Web3 Specialist",
  description: "Learn about Muhammad Osama Qaseem, a Full Stack Developer with 4+ years of experience in React, Next.js, ASP.NET Core 8, Web3, Solana blockchain, and mobile development. Based in Dubai, building enterprise applications and DApps.",
  keywords: [
    "About Full Stack Developer",
    "Web3 Developer Profile",
    "ASP.NET Core Developer",
    "React Developer Experience",
    "Solana Developer",
    "Mobile Developer",
    "Dubai Developer",
    "Software Engineer Profile",
  ],
  openGraph: {
    title: "About Me - Full Stack Developer & Web3 Specialist",
    description: "Learn about Muhammad Osama Qaseem, a Full Stack Developer with 4+ years of experience building enterprise applications, DApps, and mobile apps.",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me - Full Stack Developer & Web3 Specialist",
    description: "Learn about Muhammad Osama Qaseem, a Full Stack Developer with 4+ years of experience.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";
  
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
      jobTitle: "Full Stack Developer",
      description: "Full Stack Developer with 4+ years of experience in React, Next.js, ASP.NET Core 8, Web3, Solana blockchain, and mobile development",
      image: `${siteUrl}/myimage.png`,
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "ASP.NET Core 8",
        "Web3",
        "Blockchain",
        "Solana",
        "TypeScript",
        "JavaScript",
        "Flutter",
        "Mobile Development",
        "Full Stack Development",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Voxity",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      {children}
    </>
  );
}

