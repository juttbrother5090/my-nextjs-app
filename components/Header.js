import Link from 'next/link';
import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { FiMenu, FiX, FiHome, FiSun, FiGift, FiStar, FiSearch } from 'react-icons/fi';
import { BsCloudSunFill, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-2xl shadow-lg' 
          : 'bg-white/40 backdrop-blur-xl'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo - More Unique Design */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated Logo with Multiple Elements */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <BsCloudSunFill className="text-2xl text-yellow-400 absolute animate-pulse-slow" />
                <BsHeartFill className="text-lg text-pink-500 absolute animate-ping-slow" />
                <BsStarFill className="text-base text-purple-500 absolute" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            
            {/* Brand Name with Enhanced Styling */}
            <div className="flex flex-col">
              <span className="text-xl font-display font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                Divine
              </span>
              <span className="text-xs font-light text-gray-600 -mt-1 tracking-wider">
                BLESSINGS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 relative group py-1.5"
            >
              <span className="flex items-center">
                <FiHome className="mr-2 text-purple-500" />
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </Link>
            
            <Link 
              href="/blog/category/morning-blessings" 
              className="text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 relative group py-1.5"
            >
              <span className="flex items-center">
                <FiSun className="mr-2 text-yellow-500" />
                Morning
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </Link>
            
            <Link 
              href="/blog/category/birthday-blessings" 
              className="text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 relative group py-1.5"
            >
              <span className="flex items-center">
                <FiGift className="mr-2 text-pink-500" />
                Birthday
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </Link>

            <Link 
              href="/blog/category/inspirational" 
              className="text-gray-700 hover:text-purple-600 font-bold transition-all duration-300 relative group py-1.5"
            >
              <span className="flex items-center">
                <FiStar className="mr-2 text-purple-500" />
                Inspiration
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search blessings..."
                className="pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300 w-48 lg:w-64 text-sm"
              />
            </div>
            <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-purple-50 transition-all duration-300">
              <HiSparkles className="text-purple-600 text-lg" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl text-gray-700 hover:text-purple-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 animate-slide-up">
            <Link 
              href="/" 
              className="block text-lg text-gray-700 hover:text-purple-600 font-bold transition-colors py-2 px-4 rounded-xl hover:bg-purple-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiHome className="inline mr-2" /> Home
            </Link>
            
            <Link 
              href="/blog/category/morning-blessings" 
              className="block text-lg text-gray-700 hover:text-purple-600 font-bold transition-colors py-2 px-4 rounded-xl hover:bg-purple-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiSun className="inline mr-2" /> Morning Blessings
            </Link>
            
            <Link 
              href="/blog/category/birthday-blessings" 
              className="block text-lg text-gray-700 hover:text-purple-600 font-bold transition-colors py-2 px-4 rounded-xl hover:bg-purple-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiGift className="inline mr-2" /> Birthday Blessings
            </Link>

            <Link 
              href="/blog/category/inspirational" 
              className="block text-lg text-gray-700 hover:text-purple-600 font-bold transition-colors py-2 px-4 rounded-xl hover:bg-purple-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FiStar className="inline mr-2" /> Inspirational
            </Link>

            <div className="pt-2 px-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search blessings..."
                  className="pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300 w-full text-sm"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}