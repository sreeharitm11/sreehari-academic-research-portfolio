export interface SanityPost {
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  category: string;
}

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID;
const DATASET = import.meta.env.VITE_SANITY_DATASET || 'production';

export async function fetchSanityPosts(): Promise<SanityPost[] | null> {
  if (!PROJECT_ID || PROJECT_ID.startsWith('%')) {
    return null; // Not configured yet
  }

  const query = encodeURIComponent(
    `*[_type == "post"] | order(publishedAt desc) {
      title,
      "excerpt": excerpt,
      readTime,
      publishedAt,
      "category": categories[0]->title
    }`
  );

  const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch from Sanity');
    const data = await response.json();
    return data.result.map((post: any) => ({
      title: post.title,
      excerpt: post.excerpt || '',
      readTime: post.readTime || '5 min read',
      publishedAt: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })
        : 'Recent',
      category: post.category || 'General',
    }));
  } catch (error) {
    console.error('Error fetching Sanity posts:', error);
    return null;
  }
}
