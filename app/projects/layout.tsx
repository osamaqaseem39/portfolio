import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Portfolio | Full Stack Developer & Web3 Specialist",
  description: "Explore my portfolio of projects including Web3 DApps, enterprise applications, e-commerce platforms, and mobile apps. Built with React, Next.js, ASP.NET Core, Solana blockchain, and more.",
  keywords: [
    "Full Stack Developer Projects",
    "Web3 Projects",
    "React Projects",
    "Next.js Portfolio",
    "Blockchain Projects",
    "Solana DApps",
    "E-commerce Projects",
    "Enterprise Applications",
    "Mobile App Development",
    "Software Development Portfolio",
  ],
  openGraph: {
    title: "Projects - Portfolio | Full Stack Developer & Web3 Specialist",
    description: "Explore my portfolio of projects including Web3 DApps, enterprise applications, e-commerce platforms, and mobile apps.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Portfolio | Full Stack Developer & Web3 Specialist",
    description: "Explore my portfolio of projects including Web3 DApps, enterprise applications, e-commerce platforms, and mobile apps.",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";
  
  const projectsPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects Portfolio",
    description: "Portfolio of projects by Muhammad Osama Qaseem, Full Stack Developer",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          name: "DEGN DApp",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          url: "https://degn.app",
        },
        {
          "@type": "SoftwareApplication",
          name: "BestVersion1",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          url: "https://bestversion1.com",
        },
        {
          "@type": "SoftwareApplication",
          name: "Synovo Labs",
          applicationCategory: "WebApplication",
          operatingSystem: "Web",
          url: "https://slabs-eight.vercel.app",
        },
      ],
    },
    author: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
      jobTitle: "Full Stack Developer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsPageSchema) }}
      />
      {children}
    </>
  );
}

