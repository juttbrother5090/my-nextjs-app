import Link from 'next/link';
import { BsHeartFill, BsStarFill, BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 text-white mt-20">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="currentColor" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className="text-purple-900"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BsStarFill className="text-3xl text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Divine Blessings
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Spreading love, positivity, and spiritual inspiration daily. Join our community of believers.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <BsFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <BsInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <BsTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <BsPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Categories</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/category/morning-blessings" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Morning Blessings
                </Link>
              </li>
              <li>
                <Link href="/blog/category/birthday-blessings" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Birthday Blessings
                </Link>
              </li>
              <li>
                <Link href="/blog/category/prayers" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Daily Prayers
                </Link>
              </li>
              <li>
                <Link href="/blog/category/inspirational" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  Inspirational
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Daily Blessings</span>
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to receive daily blessings in your inbox
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm flex items-center space-x-2">
              <span>© {currentYear} Divine Blessings. Made with</span>
              <BsHeartFill className="text-pink-500 animate-pulse" />
              <span>and Faith</span>
            </p>
            <p className="text-gray-300 text-sm">
              Designed by{' '}
              <span className="text-purple-400 font-semibold">Your Name</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}