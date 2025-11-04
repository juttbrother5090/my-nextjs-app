import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ 
  children, 
  title = '✨ Divine Blessings - Spread Love & Positivity', 
  description = 'Share heartfelt blessings, prayers, and positive vibes. Start your day with inspiration and spiritual guidance.',
  image = '/og-image.jpg'
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Performance optimizations */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Prefetch common navigation paths */}
        <link rel="prefetch" href="/" />
        <link rel="prefetch" href="/blog/category/morning-blessings" />
        <link rel="prefetch" href="/blog/category/birthday-blessings" />
        <link rel="prefetch" href="/blog/category/inspirational" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Divine Blessings" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* Accessibility */}
        <meta name="theme-color" content="#c026d3" />
        
        {/* Performance - DNS prefetch */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* REMOVED GOOGLE FONTS FROM HERE */}
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 transition-colors duration-500 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
        <Header />
        <main className="flex-grow" id="main-content">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}