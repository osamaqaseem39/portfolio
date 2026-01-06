"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiExternalLink, HiCalendar } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blogData";

export default function BlogList() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();
  const blogPosts = getAllBlogPosts();

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
          </motion.div>

          {/* Blog Posts Grid */}
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
                  <div className="h-48 bg-gradient-to-br from-[#C9FF00] to-[#B8E600] flex items-center justify-center">
                    <HiExternalLink className="text-gray-900" size={48} />
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
                      Read More
                      <HiExternalLink size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

