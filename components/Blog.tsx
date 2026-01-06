"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiCalendar } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, BlogPost } from "@/lib/blogData";
import { useState, useEffect } from "react";
import AnimatedLinkText from "./AnimatedLinkText";

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    try {
      const posts = getAllBlogPosts().slice(0, 3);
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error loading blog posts:", error);
    }
  }, []);

  return (
    <section ref={ref} id="blog" className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: "rgb(17, 24, 39)",
              }}
            >
              Latest Blog Posts
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Read my thoughts on web development, technology, and best practices
            </p>
          </motion.div>

          {/* Blog Posts Grid */}
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                No blog posts available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
                        priority={true}
                        loading="eager"
                      />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${
                        index === 0 ? 'from-[#C9FF00] to-[#B8E600]' :
                        index === 1 ? 'from-gray-800 to-gray-900' :
                        'from-blue-500 to-purple-600'
                      } flex items-center justify-center`}>
                        <HiExternalLink className={index === 1 ? 'text-[#C9FF00]' : index === 2 ? 'text-white' : 'text-gray-900'} size={48} />
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
                    <h4
                      className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#C9FF00] transition-colors"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.title}
                    </h4>
                    <p
                      className="text-gray-600 text-sm mb-4 line-clamp-2"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.description}
                    </p>
                    <div className="text-[#C9FF00] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                      <AnimatedLinkText>Read More</AnimatedLinkText>
                      <HiExternalLink size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
              ))}
            </div>
          )}

          {/* View All Posts Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-[#C9FF00] hover:text-gray-900 transition-colors"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
              onClick={playClickSound}
            >
              <AnimatedLinkText>View All Posts</AnimatedLinkText>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

