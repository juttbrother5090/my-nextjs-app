import { useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query)}`);
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative group">
      <div className={`relative transition-all duration-300 ${
        focused ? 'scale-105' : ''
      }`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Search blessings..."
          className="w-full md:w-64 pl-11 pr-4 py-2.5 rounded-full border-2 border-gray-200 bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 shadow-sm hover:shadow-md"
        />
        <BsSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
          focused ? 'text-purple-600' : 'text-gray-400'
        }`} />
      </div>
    </form>
  );
}