// app/blog/page.tsx

import { mediumPosts } from "@/data/mediumPosts";
import { linkedinPosts } from "@/data/linkedinPosts";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  return (
    <main className="min-h-screen px-6 py-20 bg-[#0f172a] text-white">
      <h1 className="text-4xl font-bold text-green-400 text-center mb-12">
        Blog & Posts
      </h1>

      {/* Medium Blogs */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-semibold text-blue-400 mb-8 text-center">
          Medium Blogs
        </h2>
        <div className=" grid gap-8 md:grid-cols-3">
          {mediumPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </section>

      {/* LinkedIn Posts */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-400 mb-8 text-center">
          LinkedIn Posts
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {linkedinPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
