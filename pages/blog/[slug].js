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
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="text-8xl mb-6">🙏</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blessing Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            This blessing might have been moved or deleted.
          </p>
          <a
            href="/"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg inline-block"
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
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 dark:bg-gray-700 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <article className="w-full lg:w-3/4">
            {/* Category Badge */}
            <div className="mb-6">
              <CategoryBadge categories={categories} />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
              {post.title?.rendered || 'Untitled Blessing'}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <BsCalendar3 className="text-purple-600" />
                <time className="font-medium">{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center space-x-2">
                <BsClock className="text-purple-600" />
                <span className="font-medium">{readingTime} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <BsEye className="text-purple-600" />
                <span className="font-medium">{views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 md:h-[500px] w-full mb-12 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={featuredImage}
                alt={post.title?.rendered || 'Blog post image'}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                onError={({ currentTarget }) => {
                  // Handle image loading errors
                  currentTarget.src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
                  currentTarget.onerror = null;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div 
              className="
                prose prose-lg max-w-none
                prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-purple-600 prose-h2:to-pink-600 prose-h2:bg-clip-text prose-h2:text-transparent
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-purple-700
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
                prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                prose-li:text-gray-700
                prose-img:rounded-2xl prose-img:shadow-xl
              "
              dangerouslySetInnerHTML={{ __html: post.content?.rendered || '<p>Content not available</p>' }}
              id="blog-content"
            />

            {/* Tags Section (if you add tags later) */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <span className="text-gray-600 font-semibold">Tags:</span>
                <span className="px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  #Blessings
                </span>
                <span className="px-4 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  #Inspiration
                </span>
                <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  #Spiritual
                </span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-12">
              <ShareButtons 
                url={fullUrl} 
                title={post.title?.rendered || 'Untitled Blessing'}
                image={featuredImage}
              />
            </div>

            {/* Comments */}
            <Comments postId={post.id} />

            {/* Related Posts */}
            <div className="mt-12">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </article>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            {/* Table of Contents */}
            <div className="mb-8">
              <TableOfContents content={post.content?.rendered} />
            </div>
            
            {/* Related Posts in Sidebar */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Related Blessings
                </span>
              </h3>
              <div className="space-y-4">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <a 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="flex items-start space-x-3 group"
                  >
                    {relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                          alt={relatedPost.title?.rendered || 'Related post'}
                          width={64}
                          height={64}
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
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