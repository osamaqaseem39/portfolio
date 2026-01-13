"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { HiExternalLink, HiCalendar } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import Image from "next/image";
import { getAllBlogPosts, BlogPost } from "@/lib/blogData";
import { useState, useEffect } from "react";
import AnimatedLinkText from "../AnimatedLinkText";

export default function MobileBlog() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Scroll progress for section animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  // Combined ref callback
  const combinedRef = (node: HTMLElement | null) => {
    if (node) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      ref(node);
    }
  };
  
  useEffect(() => {
    try {
      const posts = getAllBlogPosts().slice(0, 3);
      setBlogPosts(posts);
    } catch (error) {
      console.error("Error loading blog posts:", error);
    }
  }, []);

  return (
    <section ref={combinedRef} id="blog" className="py-12 px-4 bg-white">
      <motion.div 
        className="container mx-auto max-w-7xl"
        style={{ y: sectionY, opacity: sectionOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2
              className="text-2xl font-bold mb-2"
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: "rgb(17, 24, 39)",
              }}
            >
              Latest Blog Posts
            </h2>
            <p
              className="text-sm text-gray-600 px-2"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              Read my thoughts on web development, technology, and best practices
            </p>
          </motion.div>

          {/* Blog Posts - Single Column */}
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-sm" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                No blog posts available at the moment.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden hover:border-[#C9FF00] transition-all shadow-sm group"
              >
                <Link href={`/blog/${post.slug}`} onClick={playClickSound}>
                  <div className="aspect-[16/9] relative overflow-hidden bg-gray-100 rounded-t-lg">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="100vw"
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
                        <HiExternalLink className={index === 1 ? 'text-[#C9FF00]' : index === 2 ? 'text-white' : 'text-gray-900'} size={40} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <HiCalendar size={12} />
                      <span style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h4
                      className="text-base font-bold mb-2 text-gray-900 group-hover:text-[#C9FF00] transition-colors"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.title}
                    </h4>
                    <p
                      className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {post.description}
                    </p>
                    <div className="text-[#C9FF00] font-semibold text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                      <AnimatedLinkText>Read More</AnimatedLinkText>
                      <HiExternalLink size={12} />
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
            className="text-center mt-6"
          >
            <Link
              href="/blog"
              className="inline-block px-5 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-[#C9FF00] hover:text-gray-900 transition-colors text-sm"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
              onClick={playClickSound}
            >
              <AnimatedLinkText>View All Posts</AnimatedLinkText>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

