import axios from 'axios';

const API_URL = process.env.WORDPRESS_API_URL;

// Fetch all posts
export async function getAllPosts(page = 1, perPage = 10) {
  // Check if API_URL is defined
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }

  try {
    console.log('🔍 Fetching posts from:', `${API_URL}/posts`);
    
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        _embed: true,
        page,
        per_page: perPage,
        status: 'publish', // Only get published posts
      },
      timeout: 10000, // 10 second timeout
    });

    console.log('✅ Successfully fetched', response.data.length, 'posts');

    return {
      posts: response.data,
      totalPages: parseInt(response.headers['x-wp-totalpages']) || 1,
      totalPosts: parseInt(response.headers['x-wp-total']) || 0
    };
  } catch (error) {
    if (error.response) {
      // Server responded with error
      console.error('❌ WordPress API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      // No response received
      console.error('❌ No response from WordPress. Check your domain:', API_URL);
    } else {
      // Other errors
      console.error('❌ Error fetching posts:', error.message);
    }
    return { posts: [], totalPages: 0, totalPosts: 0 };
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug) {
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return null;
  }

  try {
    console.log('🔍 Fetching post:', slug);
    
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        slug,
        _embed: true,
        status: 'publish',
      },
      timeout: 10000,
    });

    if (response.data.length === 0) {
      console.log('⚠️ Post not found:', slug);
      return null;
    }

    console.log('✅ Post found:', response.data[0].title.rendered);
    return response.data[0];
  } catch (error) {
    console.error('❌ Error fetching post:', error.message);
    return null;
  }
}

// Fetch posts by category
export async function getPostsByCategory(categorySlug) {
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return [];
  }

  try {
    // First get category ID
    const catResponse = await axios.get(`${API_URL}/categories`, {
      params: { slug: categorySlug },
      timeout: 10000,
    });
    
    if (!catResponse.data.length) {
      console.log('⚠️ Category not found:', categorySlug);
      return [];
    }
    
    const categoryId = catResponse.data[0].id;
    
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        categories: categoryId,
        _embed: true,
        status: 'publish',
      },
      timeout: 10000,
    });

    console.log('✅ Found', response.data.length, 'posts in category:', categorySlug);
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching posts by category:', error.message);
    return [];
  }
}

// Fetch all categories
export async function getAllCategories() {
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return [];
  }

  try {
    const response = await axios.get(`${API_URL}/categories`, {
      params: {
        per_page: 100,
        hide_empty: true, // Only show categories with posts
      },
      timeout: 10000,
    });

    console.log('✅ Found', response.data.length, 'categories');
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching categories:', error.message);
    return [];
  }
}

// Search posts
export async function searchPosts(query) {
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return [];
  }

  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        search: query,
        _embed: true,
        status: 'publish',
      },
      timeout: 10000,
    });

    console.log('✅ Search results:', response.data.length, 'posts');
    return response.data;
  } catch (error) {
    console.error('❌ Error searching posts:', error.message);
    return [];
  }
}

// Get related posts
export async function getRelatedPosts(postId, categories, limit = 3) {
  if (!API_URL) {
    console.error('❌ WORDPRESS_API_URL is not defined in .env.local');
    return [];
  }

  try {
    const response = await axios.get(`${API_URL}/posts`, {
      params: {
        categories: categories.join(','),
        exclude: postId,
        per_page: limit,
        _embed: true,
        status: 'publish',
      },
      timeout: 10000,
    });

    console.log('✅ Found', response.data.length, 'related posts');
    return response.data;
  } catch (error) {
    console.error('❌ Error fetching related posts:', error.message);
    return [];
  }
}