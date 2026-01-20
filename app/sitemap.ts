import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blogData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts();
  
  const blogUrls = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-01-20"), // Updated for 2026 AI-ready content
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-01-20"), // Updated with citation blocks
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date("2026-01-20"), // Updated blog content
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sitemap.txt`,
      lastModified: new Date("2026-01-20"),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...blogUrls,
  ];
}

