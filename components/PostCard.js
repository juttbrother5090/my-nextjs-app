import Link from 'next/link';
import Image from 'next/image';
import { formatDate, getFeaturedImage, getExcerpt, getCategories } from '../lib/helpers';
import { BsCalendar3, BsArrowRight, BsStarFill, BsHeartFill } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';

export default function PostCard({ post }) {
  const categories = getCategories(post);
  const featuredImage = getFeaturedImage(post);

  return (
    <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-300 dark:border-gray-700 dark:hover:border-purple-500 dark:bg-gray-800 sm:rounded-3xl sm:hover:shadow-2xl">
      {/* Glow Effect - Reduced on mobile for performance */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_20px_rgba(192,38,211,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10 sm:rounded-3xl sm:shadow-[0_0_30px_rgba(192,38,211,0.3)]"></div>
      
      {/* Floating Element - Hidden on mobile for performance */}
      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-500 z-20 sm:-top-4 sm:-right-4 sm:w-12 sm:h-12 sm:shadow-lg sm:hidden md:block">
        <HiSparkles className="text-white text-lg animate-pulse sm:text-xl" />
      </div>
      
      {/* Image Container */}
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 sm:h-56">
          <Image
            src={featuredImage}
            alt={post.title?.rendered || 'Blog post image'}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={({ currentTarget }) => {
              // Handle image loading errors
              currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
              currentTarget.onerror = null;
            }}
            loading="lazy"
            quality={80}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          
          {/* Category Badge on Image */}
          {categories.length > 0 && (
            <div className="absolute top-3 left-3 flex items-center space-x-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-300 sm:top-4 sm:left-4 sm:px-3 sm:py-1.5">
              <BsStarFill className="text-yellow-500 text-xs" />
              <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                {categories[0].name}
              </span>
            </div>
          )}
          
          {/* Heart Icon - Hidden on mobile for performance */}
          <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/20 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 sm:top-4 sm:right-4 sm:w-10 sm:h-10 md:hidden lg:flex">
            <BsHeartFill className="text-pink-500 text-base sm:text-lg" />
          </div>
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-4 space-y-3 relative z-10 sm:p-6 sm:space-y-4">
        {/* Date */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
          <BsCalendar3 className="text-purple-500" />
          <time>{formatDate(post.date)}</time>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="block">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 leading-tight group-hover:underline decoration-purple-500 underline-offset-4 sm:text-xl sm:line-clamp-2">
            {post.title?.rendered || 'Untitled Blessing'}
          </h2>
        </Link>
        
        {/* Excerpt */}
        <div 
          className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed text-xs sm:text-sm sm:line-clamp-3"
          dangerouslySetInnerHTML={{ __html: getExcerpt(post, 100) }}
        />
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center space-x-1 text-purple-600 dark:text-purple-400 font-bold hover:space-x-2 transition-all duration-300 group/link mt-1 text-sm sm:text-base sm:mt-2"
        >
          <span>Read Full Blessing</span>
          <BsArrowRight className="group-hover/link:translate-x-1 transition-transform text-sm sm:text-base" />
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full" />
    </article>
  );
}