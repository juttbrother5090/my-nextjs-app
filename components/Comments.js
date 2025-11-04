import { useState } from 'react';
import { BsChatHeart, BsSendFill } from 'react-icons/bs';

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // WordPress REST API comment endpoint
    // POST to: /wp-json/wp/v2/comments
    
    console.log({ postId, name, email, comment });
    
    setName('');
    setEmail('');
    setComment('');
    setLoading(false);
  };

  return (
    <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 border border-purple-100">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-8">
        <BsChatHeart className="text-4xl text-purple-600" />
        <h3 className="text-3xl font-display font-bold text-gray-900">
          Share Your Blessing
        </h3>
      </div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="comment" className="block mb-2 font-bold text-gray-700">
            Your Blessing or Comment *
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows="5"
            className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 bg-white text-gray-900 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
            placeholder="Share your thoughts, prayers, or blessings..."
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
        >
          <span>{loading ? 'Posting...' : 'Post Blessing'}</span>
          <BsSendFill className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
      
      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl">
            <BsChatHeart className="text-6xl text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              No blessings yet. Be the first to share! 🙏
            </p>
          </div>
        ) : (
          comments.map((comment, index) => (
            <div 
              key={comment.id} 
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  {comment.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{comment.name}</p>
                  <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed pl-15">
                {comment.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}