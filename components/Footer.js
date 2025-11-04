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

      <div className="container mx-auto px-4 py-12 max-w-7xl sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 sm:gap-12 sm:mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BsStarFill className="text-2xl text-yellow-400 animate-pulse sm:text-3xl" />
              <h3 className="text-xl font-display font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent sm:text-2xl">
                Divine Blessings
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Spreading love, positivity, and spiritual inspiration daily. Join our community of believers.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-4 sm:space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10" aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10" aria-label="Twitter">
                <BsTwitter />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10" aria-label="Pinterest">
                <BsPinterest />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-3 flex items-center space-x-2 sm:text-lg sm:mb-4">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-base font-bold mb-3 flex items-center space-x-2 sm:text-lg sm:mb-4">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Categories</span>
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/blog/category/morning-blessings" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Morning Blessings
                </Link>
              </li>
              <li>
                <Link href="/blog/category/birthday-blessings" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Birthday Blessings
                </Link>
              </li>
              <li>
                <Link href="/blog/category/prayers" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Daily Prayers
                </Link>
              </li>
              <li>
                <Link href="/blog/category/inspirational" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base">
                  Inspirational
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-bold mb-3 flex items-center space-x-2 sm:text-lg sm:mb-4">
              <BsStarFill className="text-yellow-400 text-sm" />
              <span>Daily Blessings</span>
            </h4>
            <p className="text-gray-300 mb-3 text-xs sm:mb-4 sm:text-sm">
              Subscribe to receive daily blessings in your inbox
            </p>
            <form className="space-y-2 sm:space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 text-sm sm:px-4 sm:py-2.5 sm:text-base"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:px-6 sm:py-2.5 sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
            <p className="text-gray-300 text-xs flex items-center space-x-1 sm:text-sm sm:space-x-2">
              <span>© {currentYear} Divine Blessings. Made with</span>
              <BsHeartFill className="text-pink-500 animate-pulse text-xs sm:text-sm" />
              <span>and Faith</span>
            </p>
            <p className="text-gray-300 text-xs sm:text-sm">
              Designed by{' '}
              <span className="text-purple-400 font-semibold">Your Name</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}