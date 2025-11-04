import Link from 'next/link';
import { BsStarFill, BsSunFill, BsHeartFill, BsMoonStarsFill } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { RiFlashlightFill } from 'react-icons/ri';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 dark:opacity-10" />
      
      {/* Floating Gradient Orbs - More Dynamic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-300 to-pink-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-200 to-purple-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Medium Orbs */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-25 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl opacity-25 animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Floating Icons - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        <BsStarFill 
          className="absolute top-20 left-[10%] text-yellow-400 dark:text-yellow-300 text-2xl drop-shadow-lg animate-float opacity-70 hover:opacity-100 transition-opacity" 
          style={{ animationDelay: '0s', animationDuration: '6s' }}
        />
        <BsStarFill 
          className="absolute top-32 right-[15%] text-orange-400 dark:text-orange-300 text-xl drop-shadow-lg animate-float opacity-60" 
          style={{ animationDelay: '1s', animationDuration: '7s' }}
        />
        <BsStarFill 
          className="absolute bottom-40 left-[20%] text-pink-400 dark:text-pink-300 text-3xl drop-shadow-lg animate-float opacity-50" 
          style={{ animationDelay: '2.5s', animationDuration: '8s' }}
        />
        <BsStarFill 
          className="absolute top-1/3 right-[8%] text-purple-400 dark:text-purple-300 text-2xl drop-shadow-lg animate-float opacity-65" 
          style={{ animationDelay: '1.8s', animationDuration: '6.5s' }}
        />
        
        {/* Sparkles */}
        <HiSparkles 
          className="absolute top-40 left-[15%] text-yellow-500 dark:text-yellow-300 text-4xl drop-shadow-lg animate-float opacity-40" 
          style={{ animationDelay: '0.5s', animationDuration: '7s' }}
        />
        <HiSparkles 
          className="absolute bottom-1/3 right-[25%] text-pink-500 dark:text-pink-300 text-3xl drop-shadow-lg animate-float opacity-50" 
          style={{ animationDelay: '3s', animationDuration: '6s' }}
        />
        
        {/* Hearts */}
        <BsHeartFill 
          className="absolute top-1/2 left-[12%] text-pink-400 dark:text-pink-300 text-2xl drop-shadow-lg animate-float opacity-60" 
          style={{ animationDelay: '1.5s', animationDuration: '7.5s' }}
        />
        <BsHeartFill 
          className="absolute bottom-1/4 right-[18%] text-red-400 dark:text-red-300 text-xl drop-shadow-lg animate-float opacity-55" 
          style={{ animationDelay: '2.2s', animationDuration: '8s' }}
        />
        
        {/* Sun and Moon */}
        <BsSunFill 
          className="absolute bottom-32 left-[25%] text-orange-500 dark:text-orange-300 text-5xl drop-shadow-lg animate-float opacity-30" 
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        />
        <BsMoonStarsFill 
          className="absolute top-1/4 right-[12%] text-purple-500 dark:text-purple-300 text-4xl drop-shadow-lg animate-float opacity-35" 
          style={{ animationDelay: '0.8s', animationDuration: '7s' }}
        />
        
        {/* Floating Blessings */}
        <div className="absolute top-1/4 left-[5%] text-purple-600 dark:text-purple-300 text-lg font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float opacity-80" 
          style={{ animationDelay: '0.2s', animationDuration: '8s' }}>
          May you be blessed
        </div>
        <div className="absolute top-1/3 right-[5%] text-pink-600 dark:text-pink-300 text-lg font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float opacity-80" 
          style={{ animationDelay: '1.5s', animationDuration: '9s' }}>
          Peace & Joy
        </div>
        <div className="absolute bottom-1/3 left-[8%] text-orange-600 dark:text-orange-300 text-lg font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float opacity-80" 
          style={{ animationDelay: '2.8s', animationDuration: '7s' }}>
          Abundant Love
        </div>
        <div className="absolute bottom-1/4 right-[10%] text-yellow-600 dark:text-yellow-300 text-lg font-bold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg animate-float opacity-80" 
          style={{ animationDelay: '0.7s', animationDuration: '8.5s' }}>
          Divine Grace
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center space-y-8">
          
          {/* Top Badge - Glassmorphism */}
          <div className="inline-flex items-center space-x-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl border border-purple-200/50 dark:border-purple-700/50 hover:scale-105 transition-transform duration-300 animate-slide-up">
            <BsStarFill className="text-yellow-500 dark:text-yellow-400 animate-pulse text-lg" />
            <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              ✨ Spreading Positivity Daily ✨
            </span>
            <BsStarFill className="text-yellow-500 dark:text-yellow-400 animate-pulse text-lg" />
          </div>

          {/* Main Heading - Enhanced Typography */}
          <div className="space-y-5 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tight">
              <span className="block relative">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                  Divine Blessings
                </span>
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl opacity-30 animate-pulse" />
              </span>
              
              <span className="block mt-3 relative">
                <span className="bg-gradient-to-r from-orange-500 via-purple-500 to-pink-600 dark:from-orange-400 dark:via-purple-400 dark:to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
                  & Inspiration
                </span>
              </span>
            </h1>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
              <HiSparkles className="text-2xl text-yellow-500 dark:text-yellow-400 animate-pulse" />
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full" />
            </div>
          </div>

          {/* Subtitle - Better Readability */}
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Start your day with{' '}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              heartfelt blessings
            </span>
            , prayers, and positive affirmations.
            <br />
            <span className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mt-3 block">
              Discover the power of love, gratitude, and faith 🙏
            </span>
          </p>

          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Primary CTA */}
            <Link 
              href="#latest-blessings"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 text-white font-bold text-base rounded-full shadow-xl hover:shadow-purple-500/50 dark:hover:shadow-purple-400/50 hover:scale-105 transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center space-x-2">
                <HiSparkles className="text-lg animate-pulse" />
                <span>Explore Blessings</span>
                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            {/* Secondary CTA */}
            <Link 
              href="/blog/category/morning-blessings"
              className="group px-8 py-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl text-purple-600 dark:text-purple-400 font-bold text-base rounded-full shadow-lg hover:shadow-2xl border border-purple-300 dark:border-purple-600 hover:border-purple-500 dark:hover:border-purple-400 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <BsSunFill className="text-lg text-orange-500 dark:text-orange-400 group-hover:rotate-180 transition-transform duration-500" />
              <span>Morning Prayers</span>
            </Link>
          </div>

          {/* Trust Indicators / Stats - Enhanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto pt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {/* Stat 1 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100 dark:border-purple-900 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Daily Blessings
                </div>
                <BsStarFill className="absolute top-0 right-0 text-yellow-400 dark:text-yellow-300 text-xl opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
              </div>
            </div>

            {/* Stat 2 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl border border-orange-100 dark:border-orange-900 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-orange-500 to-purple-600 dark:from-orange-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Happy Readers
                </div>
                <BsHeartFill className="absolute top-0 right-0 text-pink-400 dark:text-pink-300 text-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
              </div>
            </div>

            {/* Stat 3 */}
            <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-xl border border-pink-100 dark:border-pink-900 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-600 to-orange-500 dark:from-pink-400 dark:to-orange-400 bg-clip-text text-transparent mb-2">
                  Daily
                </div>
                <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Fresh Updates
                </div>
                <HiSparkles className="absolute top-0 right-0 text-purple-400 dark:text-purple-300 text-xl opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Additional Trust Elements */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-10 text-xs text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Updated Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <BsHeartFill className="text-pink-500 dark:text-pink-400" />
              <span className="font-medium">100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <BsStarFill className="text-yellow-500 dark:text-yellow-400" />
              <span className="font-medium">Curated Content</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Wave - Enhanced */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 200" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="rgb(236, 72, 153)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#wave-gradient)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
          <path 
            fill="url(#wave-gradient)" 
            fillOpacity="0.5"
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,170.7C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-1">
          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scroll Down</span>
          <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

    </section>
  );
}