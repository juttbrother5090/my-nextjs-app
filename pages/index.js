import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import PostCard from '../components/PostCard';
import Loading from '../components/Loading';
import { getAllPosts, searchPosts } from '../lib/wordpress';
import { BsGrid3X3Gap } from 'react-icons/bs';

export default function Home({ initialPosts, totalPages }) {
  const router = useRouter();
  const { search } = router.query;
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search) {
      setLoading(true);
      searchPosts(search).then((results) => {
        setPosts(results);
        setLoading(false);
      });
    } else {
      setPosts(initialPosts);
    }
  }, [search, initialPosts]);

  return (
    <Layout>
      {/* Hero Section - Only show when not searching */}
      {!search && <HeroSection />}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl sm:py-12 sm:px-6" id="latest-blessings">
        {/* Search Results Header */}
        {search && (
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-2xl font-display font-bold mb-3 sm:text-3xl sm:mb-4">
              Search Results for:{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "{search}"
              </span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Found {posts.length} blessing{posts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Section Header */}
        {!search && (
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:space-x-3 sm:mb-4">
              <BsGrid3X3Gap className="text-2xl text-purple-600 sm:text-3xl" />
              <h2 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
                Latest Blessings
              </h2>
            </div>
            <p className="text-base text-gray-600 sm:text-xl">
              Discover fresh inspiration and spiritual guidance
            </p>
          </div>
        )}

        {/* Posts Grid */}
        {loading ? (
          <Loading />
        ) : posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg sm:py-20 sm:rounded-3xl">
            <div className="text-4xl mb-4 sm:text-6xl sm:mb-6">🙏</div>
            <h3 className="text-xl font-bold text-gray-700 mb-3 sm:text-2xl sm:mb-4">
              No blessings found
            </h3>
            <p className="text-gray-500 mb-6 sm:mb-8 sm:text-lg">
              Try searching with different keywords
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:px-8 sm:py-3 sm:text-base"
            >
              View All Blessings
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 animate-slide-up">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, totalPages } = await getAllPosts(1, 12);

  return {
    props: {
      initialPosts: posts,
      totalPages,
    },
    revalidate: 60,
  };
}