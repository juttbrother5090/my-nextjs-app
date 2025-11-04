import { useState, useEffect } from 'react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    if (!content) return;

    // Extract headings from the content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    const headingList = Array.from(headingElements).map(heading => ({
      id: heading.id || heading.textContent.replace(/\s+/g, '-').toLowerCase(),
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1))
    }));

    setHeadings(headingList);
  }, [content]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Table of Contents
        </span>
      </h3>
      <ul className="space-y-2">
        {headings.map((heading, index) => (
          <li 
            key={index} 
            className={`pl-${(heading.level - 1) * 4} hover:underline hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors ${
              heading.level === 1 ? 'font-bold' : 
              heading.level === 2 ? 'font-semibold' : 
              'font-medium'
            }`}
            onClick={() => scrollToHeading(heading.id)}
          >
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {heading.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}