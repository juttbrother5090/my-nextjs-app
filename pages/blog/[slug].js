import Image from 'next/image';
import Layout from '../../components/Layout';
import ShareButtons from '../../components/ShareButtons';
import Comments from '../../components/Comments';
import RelatedPosts from '../../components/RelatedPosts';
import CategoryBadge from '../../components/CategoryBadge';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../lib/wordpress';
import { formatDate, getFeaturedImage, getCategories } from '../../lib/helpers';
import { BsCalendar3, BsClock, BsEye } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import TableOfContents from '../../components/TableOfContents';
import ScrollToTop from '../../components/ScrollToTop';

export default function BlogPost({ post, relatedPosts }) {
  const [readingTime, setReadingTime] = useState(5);
  const [views, setViews] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center sm:py-20">
          <div className="text-6xl mb-4 sm:text-8xl sm:mb-6">🙏</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-3 sm:text-4xl sm:mb-4">
            Blessing Not Found
          </h1>
          <p className="text-gray-600 mb-6 sm:mb-8 sm:text-lg">
            This blessing might have been moved or deleted.
          </p>
          <a
            href="/"
            className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg inline-block text-sm sm:px-8 sm:py-3 sm:text-base"
          >
            Return Home
          </a>
        </div>
      </Layout>
    );
  }

  const fullUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/blog/${post.slug}`;
  const categories = getCategories(post);
  const featuredImage = getFeaturedImage(post);

  // Calculate reading time based on word count
  useEffect(() => {
    if (post.content?.rendered) {
      const text = post.content.rendered.replace(/<[^>]*>/g, '');
      const wordsPerMinute = 200;
      const words = text.split(/\s+/).length;
      const minutes = Math.ceil(words / wordsPerMinute);
      setReadingTime(minutes || 1);
    }
    
    // Simulate view count (in a real app, this would come from analytics)
    setViews(Math.floor(Math.random() * 1000) + 500);
    
    // Track scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(100, Math.round((scrollTop / docHeight) * 100));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.content?.rendered]);

  return (
    <Layout 
      title={`${post.title?.rendered || 'Untitled'} | Divine Blessings`}
      description={post.excerpt?.rendered ? post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160) : 'A beautiful blessing post'}
      image={featuredImage}
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50 sm:h-1.5">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-6 max-w-7xl sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Main Content */}
          <article className="w-full lg:w-3/4">
            {/* Category Badge */}
            <div className="mb-4 sm:mb-6">
              <CategoryBadge categories={categories} />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent sm:text-4xl sm:mb-6 md:text-5xl">
              {post.title?.rendered || 'Untitled Blessing'}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6 pb-6 border-b border-gray-200 text-sm sm:gap-6 sm:text-base sm:mb-8">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <BsCalendar3 className="text-purple-600" />
                <time className="font-medium">{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <BsClock className="text-purple-600" />
                <span className="font-medium">{readingTime} min read</span>
              </div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <BsEye className="text-purple-600" />
                <span className="font-medium">{views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-2xl overflow-hidden shadow-xl sm:h-[500px] sm:rounded-3xl sm:shadow-2xl sm:mb-12">
              <Image
                src={featuredImage}
                alt={post.title?.rendered || 'Blog post image'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 896px"
                onError={({ currentTarget }) => {
                  // Handle image loading errors
                  currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
                  currentTarget.onerror = null;
                }}
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div 
              className="
                prose prose-base max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:bg-gradient-to-r prose-h2:from-purple-600 prose-h2:to-pink-600 prose-h2:bg-clip-text prose-h2:text-transparent sm:prose-h2:text-3xl sm:prose-h2:mt-10 sm:prose-h2:mb-5
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-purple-700 sm:prose-h3:text-2xl sm:prose-h3:mt-8 sm:prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 sm:prose-p:mb-5
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:italic sm:prose-blockquote:py-4 sm:prose-blockquote:px-6 sm:prose-blockquote:rounded-r-xl
                prose-ul:list-disc prose-ul:pl-5 prose-ul:space-y-1 sm:prose-ul:pl-6 sm:prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-5 prose-ol:space-y-1 sm:prose-ol:pl-6 sm:prose-ol:space-y-2
                prose-li:text-gray-700
                prose-img:rounded-xl prose-img:shadow-lg sm:prose-img:rounded-2xl sm:prose-img:shadow-xl
                dark:prose-invert
              "
              dangerouslySetInnerHTML={{ __html: post.content?.rendered || '<p>Content not available</p>' }}
              id="blog-content"
            />

            {/* Tags Section (if you add tags later) */}
            <div className="mt-8 pt-6 border-t border-gray-200 sm:mt-12">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <span className="text-gray-600 font-semibold text-sm sm:text-base">Tags:</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm">
                  #Blessings
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm">
                  #Inspiration
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium sm:px-4 sm:py-1.5 sm:text-sm">
                  #Spiritual
                </span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 sm:mt-12">
              <ShareButtons 
                url={fullUrl} 
                title={post.title?.rendered || 'Untitled Blessing'}
                image={featuredImage}
              />
            </div>

            {/* Comments */}
            <Comments postId={post.id} />

            {/* Related Posts */}
            <div className="mt-8 sm:mt-12">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </article>

          {/* Sidebar - Stacked on mobile */}
          <div className="w-full lg:w-1/4">
            {/* Table of Contents */}
            <div className="mb-6 sm:mb-8 lg:hidden">
              <TableOfContents content={post.content?.rendered} />
            </div>
            
            {/* Related Posts in Sidebar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 sm:p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center sm:text-xl sm:mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Related Blessings
                </span>
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <a 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="flex items-start space-x-2 group sm:space-x-3"
                  >
                    {relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden sm:w-16 sm:h-16">
                        <Image
                          src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                          alt={relatedPost.title?.rendered || 'Related post'}
                          width={64}
                          height={64}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                          quality={75}
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2 text-sm sm:text-base">
                        {relatedPost.title?.rendered || 'Untitled Blessing'}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {formatDate(relatedPost.date)}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Table of Contents - Only visible on desktop */}
            <div className="hidden lg:block mt-6">
              <TableOfContents content={post.content?.rendered} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts(1, 100);
  
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return { notFound: true };
  }

  const categoryIds = post.categories || [];
  const relatedPosts = await getRelatedPosts(post.id, categoryIds, 6); // Get more for sidebar

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 60,
  };
}