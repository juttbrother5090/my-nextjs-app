// Format date
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get featured image - WITH FALLBACK AND OPTIMIZATION
export function getFeaturedImage(post) {
  try {
    // Try to get featured media from _embedded
    if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
      const media = post._embedded['wp:featuredmedia'][0];
      if (media.source_url) {
        // Return optimized image URL if available
        return optimizeImageUrl(media.source_url);
      }
      if (media.media_details && media.media_details.sizes) {
        // Try to get a medium size image first for better performance
        if (media.media_details.sizes.medium?.source_url) {
          return optimizeImageUrl(media.media_details.sizes.medium.source_url);
        }
        // Fallback to large size
        if (media.media_details.sizes.large?.source_url) {
          return optimizeImageUrl(media.media_details.sizes.large.source_url);
        }
        // Fallback to full size
        if (media.media_details.sizes.full?.source_url) {
          return optimizeImageUrl(media.media_details.sizes.full.source_url);
        }
      }
    }

    // Try to get from featured_media property
    if (post.featured_media) {
      // In some cases, featured_media is the ID, but we don't have a way to fetch it without another API call
      // So we'll just return the fallback
    }

    // Try to get from featured_media_src_url (some themes provide this)
    if (post.featured_media_src_url) {
      return optimizeImageUrl(post.featured_media_src_url);
    }

    // Fallback to placeholder from external source
    return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
  } catch (error) {
    console.error('Error getting featured image:', error);
    return 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80';
  }
}

// Optimize image URL for better performance
export function optimizeImageUrl(url) {
  if (!url) return url;
  
  // If it's already an optimized URL, return as is
  if (url.includes('?')) {
    // Check if optimization parameters are already present
    if (url.includes('q=') || url.includes('w=') || url.includes('h=')) {
      return url;
    }
  }
  
  // Add optimization parameters for better performance
  const separator = url.includes('?') ? '&' : '?';
  // Use WebP format for better compression, set quality to 80, and add responsive sizing
  return `${url}${separator}w=800&q=80&auto=format&fit=crop&fm=webp`;
}

// Get excerpt
export function getExcerpt(post, length = 150) {
  try {
    if (post.excerpt && post.excerpt.rendered) {
      const text = post.excerpt.rendered.replace(/<[^>]*>/g, '');
      return text.length > length ? text.substring(0, length) + '...' : text;
    }
    return 'Read this beautiful blessing...';
  } catch (error) {
    return 'Read this beautiful blessing...';
  }
}

// Get categories
export function getCategories(post) {
  try {
    if (post._embedded && post._embedded['wp:term'] && post._embedded['wp:term'][0]) {
      return post._embedded['wp:term'][0];
    }
    return [];
  } catch (error) {
    console.error('Error getting categories:', error);
    return [];
  }
}