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
      <div className="container mx-auto px-4 py-16 max-w-7xl" id="latest-blessings">
        {/* Search Results Header */}
        {search && (
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-display font-bold mb-4">
              Search Results for:{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "{search}"
              </span>
            </h2>
            <p className="text-gray-600">
              Found {posts.length} blessing{posts.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Section Header */}
        {!search && (
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BsGrid3X3Gap className="text-3xl text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Latest Blessings
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Discover fresh inspiration and spiritual guidance
            </p>
          </div>
        )}

        {/* Posts Grid */}
        {loading ? (
          <Loading />
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
            <div className="text-6xl mb-6">🙏</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              No blessings found
            </h3>
            <p className="text-gray-500 mb-8">
              Try searching with different keywords
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              View All Blessings
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
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