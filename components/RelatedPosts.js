import PostCard from './PostCard';
import { BsLightning } from 'react-icons/bs';

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <BsLightning className="text-3xl text-yellow-500" />
        <h3 className="text-4xl font-display font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          More Blessings for You
        </h3>
        <BsLightning className="text-3xl text-yellow-500" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}