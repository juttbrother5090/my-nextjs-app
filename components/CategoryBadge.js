import Link from 'next/link';

export default function CategoryBadge({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog/category/${category.slug}`}
          className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary-100 to-pink-100 dark:from-primary-900/30 dark:to-pink-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold hover:from-primary-200 hover:to-pink-200 dark:hover:from-primary-800/50 dark:hover:to-pink-800/50 transition-all duration-300 border border-primary-200 dark:border-primary-800 hover:scale-105"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}