import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export const metadata: Metadata = {
  title: "Blog | Web Development, Web3 & Performance Tips | Osama Qaseem",
  description: "Read articles on modern web development, Next.js, React, Web3, Solana blockchain, performance optimization, and best practices from a professional software engineer.",
  keywords: [
    "web development blog",
    "Next.js tutorials",
    "React articles",
    "Web3 development",
    "blockchain programming",
    "performance optimization",
    "software engineering blog",
    "frontend development",
    "JavaScript tutorials",
    "TypeScript guides",
    "Solana development",
    "DApps development",
    "SEO optimization",
    "web performance"
  ],
  openGraph: {
    title: "Blog | Web Development & Web3 Articles",
    description: "Expert insights on web development, Web3, and performance optimization",
    type: "website",
    url: `${siteUrl}/blog`,
    images: [`${siteUrl}/myimage.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Web Development & Web3 Articles",
    description: "Expert insights on web development, Web3, and performance optimization",
    images: [`${siteUrl}/myimage.png`],
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";
  
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Osama Qaseem's Blog",
    description: "Articles on web development, Web3, blockchain, and performance optimization",
    url: `${siteUrl}/blog`,
    author: {
      "@type": "Person",
      name: "Muhammad Osama Qaseem",
    },
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header />
      <div className="pt-24">
        <BlogList />
      </div>
      <Footer />
    </main>
  );
}

