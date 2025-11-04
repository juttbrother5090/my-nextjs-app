import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback, useMemo } from 'react';
import { getFeaturedImage, getExcerpt, getCategories } from '../lib/helpers';
import { 
  BsArrowRight,
  BsStarFill,
  BsStar,
  BsHeartFill
} from 'react-icons/bs';
import { 
  HiSparkles,
  HiOutlineSparkles 
} from 'react-icons/hi';
import { 
  GiPrayerBeads,
  GiAngelWings 
} from 'react-icons/gi';

// Define gradient based on blessing type - moved outside component for performance
const getGradientByType = (type) => {
  const lowerType = type?.toLowerCase() || '';
  if (lowerType.includes('morning')) return 'from-amber-400 to-orange-400';
  if (lowerType.includes('evening')) return 'from-purple-400 to-pink-400';
  if (lowerType.includes('prayer')) return 'from-blue-400 to-indigo-400';
  if (lowerType.includes('gratitude')) return 'from-green-400 to-emerald-400';
  if (lowerType.includes('peace')) return 'from-cyan-400 to-sky-400';
  return 'from-violet-400 to-purple-400';
};

export default function PostCard({ post, index = 0 }) {
  const [imageError, setImageError] = useState(false);
  const categories = getCategories(post);
  const featuredImage = getFeaturedImage(post);
  
  // Extract word count for blessing length
  const content = post.content?.rendered || '';
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const blessingLength = wordCount < 100 ? 'Short' : wordCount < 300 ? 'Medium' : 'Long';

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  // Get blessing type from category or default
  const blessingType = categories[0]?.name || 'Daily Blessing';
  
  // Memoize gradient classes for performance
  const specialBlessingGradient = useMemo(() => getGradientByType('special'), []);
  const typeGradient = useMemo(() => getGradientByType(blessingType), [blessingType]);

  return (
    <article 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-700 transition-all duration-500 hover:shadow-xl"
      style={{ animationDelay: `${index * 100}ms` }}
      role="article"
      aria-label={post.title?.rendered || 'Blessing'}
    >
      {/* Divine Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-violet-200 via-purple-200 to-pink-200 dark:from-violet-800 dark:via-purple-800 dark:to-pink-800 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-700" />
      
      {/* Featured/Special Blessing Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-20">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${specialBlessingGradient} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
            <GiAngelWings className="w-4 h-4" />
            Special Blessing
          </span>
        </div>
      )}

      {/* Image Section with Overlay */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20">
        <Link 
          href={`/blog/${post.slug}`}
          className="absolute inset-0 z-10"
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="sr-only">Read blessing: {post.title?.rendered}</span>
        </Link>
        
        {!imageError ? (
          <Image
            src={featuredImage}
            alt={post.title?.rendered || 'Blessing image'}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={handleImageError}
            loading={index < 3 ? 'eager' : 'lazy'}
            quality={90}
            priority={index < 2}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30">
            <div className="text-center space-y-3">
              <HiSparkles className="w-12 h-12 mx-auto text-violet-400 dark:text-violet-500 animate-pulse" />
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Blessing Awaits</p>
            </div>
          </div>
        )}
        
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Blessing Type Badge */}
        <div className="absolute bottom-4 left-4 z-20">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-lg`}>
            <span className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${typeGradient}`} />
            <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
              {blessingType}
            </span>
          </div>
        </div>

        {/* Blessing Length Indicator */}
        <div className="absolute bottom-4 right-4 z-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-lg">
            <GiPrayerBeads className="w-3.5 h-3.5 text-violet-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {blessingLength} Read
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 space-y-4 bg-white dark:bg-gray-800">
        {/* Decorative Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-1">
            <BsStar className="w-3 h-3 text-yellow-400" />
            <BsStarFill className="w-4 h-4 text-yellow-400" />
            <BsStar className="w-3 h-3 text-yellow-400" />
          </div>
        </div>

        {/* Title */}
        <h3 className="pt-2">
          <Link 
            href={`/blog/${post.slug}`}
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white line-clamp-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 leading-tight"
          >
            {post.title?.rendered || 'Untitled Blessing'}
          </Link>
        </h3>

        {/* Excerpt with blessing quote style */}
        <div className="relative">
          <div className="absolute -left-2 -top-1 text-4xl text-violet-200 dark:text-violet-800 font-serif">"</div>
          <div 
            className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3 italic pl-4"
            dangerouslySetInnerHTML={{ __html: getExcerpt(post, 150) }}
          />
        </div>

        {/* Divider with icon */}
        <div className="flex items-center justify-center py-2">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-700 to-transparent" />
          <HiOutlineSparkles className="mx-3 text-violet-400 dark:text-violet-500 w-5 h-5" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-200 dark:via-violet-700 to-transparent" />
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <Link 
            href={`/blog/${post.slug}`}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-all duration-300"
          >
            <span>Receive Full Blessing</span>
            <BsArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" />
          </Link>

          {/* Blessing Impact Indicator */}
          <div className="flex items-center gap-1">
            <BsHeartFill className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
            <BsHeartFill className="w-4 h-4 text-pink-500 animate-pulse delay-75" />
            <BsHeartFill className="w-3.5 h-3.5 text-pink-400 animate-pulse delay-150" />
          </div>
        </div>
      </div>

      {/* Bottom Blessing Bar */}
      <div className="h-1 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
    </article>
  );
}