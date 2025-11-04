import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getFeaturedImage, getExcerpt, getCategories } from '../lib/helpers';
import { BsCalendar3, BsArrowRight, BsStarFill, BsHeartFill } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';

export default function PostCard({ post }) {
  const categories = getCategories(post);
  const featuredImage = getFeaturedImage(post);

  return (
    <article className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-100 hover:border-purple-300 dark:border-gray-700 dark:hover:border-purple-500 dark:bg-gray-800">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl shadow-[0_0_30px_rgba(192,38,211,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
      
      {/* Floating Element */}
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-500 z-20">
        <HiSparkles className="text-white text-xl animate-pulse" />
      </div>
      
      {/* Image Container */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
          <Image
            src={featuredImage}
            alt={post.title?.rendered || 'Blog post image'}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={({ currentTarget }) => {
              // Handle image loading errors
              currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
              currentTarget.onerror = null;
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Category Badge on Image */}
          {categories.length > 0 && (
            <div className="absolute top-4 left-4 flex items-center space-x-1 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <BsStarFill className="text-yellow-500 text-xs" />
              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                {categories[0].name}
              </span>
            </div>
          )}
          
          {/* Heart Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
            <BsHeartFill className="text-pink-500 text-lg" />
          </div>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-6 space-y-4 relative z-10">
        {/* Date */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <BsCalendar3 className="text-purple-500" />
          <time>{formatDate(post.date)}</time>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="block">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 leading-tight group-hover:underline decoration-purple-500 underline-offset-4">
            {post.title?.rendered || 'Untitled Blessing'}
          </h2>
        </Link>
        
        {/* Excerpt */}
        <div 
          className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed text-sm"
          dangerouslySetInnerHTML={{ __html: getExcerpt(post, 120) }}
        />
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 font-bold hover:space-x-3 transition-all duration-300 group/link mt-2"
        >
          <span>Read Full Blessing</span>
          <BsArrowRight className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full" />
    </article>
  );
}