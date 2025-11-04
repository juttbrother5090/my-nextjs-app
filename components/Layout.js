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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* REMOVED GOOGLE FONTS FROM HERE */}
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 transition-colors duration-500">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}