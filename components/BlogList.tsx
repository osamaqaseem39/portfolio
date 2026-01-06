"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiCalendar } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts } from "@/lib/blogData";
import { useState, useEffect } from "react";
import AnimatedLinkText from "./AnimatedLinkText";

export default function BlogList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [isMounted, setIsMounted] = useState(false);
  const playClickSound = useClickSound();
  const [blogPosts, setBlogPosts] = useState<ReturnType<typeof getAllBlogPosts>>([]);
  
  useEffect(() => {
    setIsMounted(true);
    try {
      const posts = getAllBlogPosts();
      console.log("BlogList: Loaded", posts.length, "posts");
      setBlogPosts(posts);
    } catch (error) {
      console.error("BlogList: Error loading posts", error);
    }
  }, []);

  // Always show content, animate when in view or mounted
  const shouldAnimate = inView || isMounted;

  return (
    <section ref={ref} id="blog" className="py-20 md:py-32 px-4 md:px-8 bg-white min-h-screen" style={{ display: 'block', visibility: 'visible' }}>
      <div className="container mx-auto max-w-7xl" style={{ display: 'block', visibility: 'visible' }}>
        {/* Heading */}
        <div className="text-center mb-16" style={{ display: 'block', visibility: 'visible' }}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ 
              fontFamily: "var(--font-absans), sans-serif",
              color: "rgb(17, 24, 39)",
            }}
          >
            Blog
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            Read my thoughts on web development, technology, and best practices
          </p>
        </div>

        {/* Blog Posts Grid */}
        {blogPosts.length === 0 ? (
          <div className="text-center py-12" style={{ display: 'block', visibility: 'visible' }}>
            <p className="text-gray-500" style={{ fontFamily: "var(--font-absans), sans-serif", color: '#6b7280' }}>
              No blog posts available at the moment. (Count: {blogPosts.length})
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ display: 'grid', visibility: 'visible' }}>
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-[#C9FF00] transition-all shadow-sm hover:shadow-md group"
                whileHover={{ y: -5 }}
              >
                <Link href={`/blog/${post.slug}`} onClick={playClickSound}>
                  <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 rounded-t-lg">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-[#C9FF00] to-[#B8E600] flex items-center justify-center">
                        <HiExternalLink className="text-gray-900" size={48} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <HiCalendar size={16} />
                      <span style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h2
                      className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#C9FF00] transition-colors"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="text-gray-600 text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#C9FF00] font-semibold text-sm group-hover:gap-3 transition-all">
                      <AnimatedLinkText>Read More</AnimatedLinkText>
                      <HiExternalLink size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
