// components/BlogCard.tsx

import { ExternalLink } from "lucide-react";

export default function BlogCard({ post }: { post: any }) {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{post.description}</p>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-400 hover:text-green-300 font-medium"
        >
          Read More <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
