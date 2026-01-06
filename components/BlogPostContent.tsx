"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiCalendar, HiArrowLeft } from "react-icons/hi";
import { useClickSound } from "@/hooks/useAudio";
import Link from "next/link";
import { BlogPost } from "@/lib/blogData";
import ReactMarkdown from "react-markdown";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const playClickSound = useClickSound();

  // Ensure content is a string
  const content = typeof post.content === 'string' ? post.content.trim() : '';

  return (
    <article ref={ref} className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C9FF00] transition-colors"
              onClick={playClickSound}
            >
              <HiArrowLeft size={20} />
              <span style={{ fontFamily: "var(--font-absans), sans-serif" }}>Back to Blog</span>
            </Link>
          </motion.div>

          {/* Header Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="h-64 md:h-96 bg-gradient-to-br from-[#C9FF00] to-[#B8E600] rounded-lg flex items-center justify-center">
              <span className="text-gray-900 text-4xl font-bold" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                {post.title.charAt(0)}
              </span>
            </div>
          </motion.div>

          {/* Post Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <HiCalendar size={16} />
                <span style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <span className="px-3 py-1 bg-[#C9FF00]/10 text-[#C9FF00] rounded text-xs font-semibold" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                {post.category}
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ 
                fontFamily: "var(--font-absans), sans-serif",
                color: "rgb(17, 24, 39)",
              }}
            >
              {post.title}
            </h1>

            <p
              className="text-xl text-gray-600 mb-6"
              style={{ fontFamily: "var(--font-absans), sans-serif" }}
            >
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                  style={{ fontFamily: "var(--font-absans), sans-serif" }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="prose prose-lg max-w-none"
            style={{ fontFamily: "var(--font-absans), sans-serif" }}
          >
            <div className="markdown-content text-gray-700 leading-relaxed">
              {content ? (
                <ReactMarkdown
                  components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-4 mt-8 text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-bold mb-3 mt-6 text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-bold mb-2 mt-4 text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl font-bold mb-2 mt-4 text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside mb-4 ml-6 space-y-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside mb-4 ml-6 space-y-2" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="mb-1 text-gray-700" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </li>
                  ),
                  code: ({ node, inline, className, children, ...props }: any) => {
                    if (!inline) {
                      return (
                        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4 mt-4">
                          <code className={`${className || ''} font-mono text-sm`} {...props}>
                            {String(children).replace(/\n$/, '')}
                          </code>
                        </pre>
                      );
                    }
                    return (
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }: any) => {
                    return <>{children}</>;
                  },
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic text-gray-800" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </em>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#C9FF00] pl-4 py-2 my-4 bg-gray-50 italic text-gray-700" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                      {children}
                    </blockquote>
                  ),
                  a: ({ href, children }: any) => (
                    <a 
                      href={href} 
                      className="text-[#C9FF00] hover:underline" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-absans), sans-serif" }}
                    >
                      {children}
                    </a>
                  ),
                  hr: () => (
                    <hr className="my-8 border-gray-300" />
                  ),
                }}
                  >
                    {content}
                  </ReactMarkdown>
              ) : (
                <p className="text-gray-500 italic">Content is loading...</p>
              )}
            </div>
          </motion.div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#C9FF00] rounded-full flex items-center justify-center">
                <span className="text-gray-900 text-2xl font-bold" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-bold text-gray-900" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  {post.author}
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: "var(--font-absans), sans-serif" }}>
                  Software Engineer & Web Developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

