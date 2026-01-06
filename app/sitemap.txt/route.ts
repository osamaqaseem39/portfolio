import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/blogData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://osamaqaseem.online";

export async function GET() {
  const blogPosts = getAllBlogPosts();
  
  const urls = [
    siteUrl,
    `${siteUrl}/about`,
    `${siteUrl}/contact`,
    `${siteUrl}/blog`,
    ...blogPosts.map((post) => `${siteUrl}/blog/${post.slug}`),
  ];

  const sitemap = urls.join("\n");

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

