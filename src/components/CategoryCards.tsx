import React from 'react';
import Link from 'next/link';

const categories = [
  { id: 1, title: 'Stories', description: 'Explore inspiring stories' },
  { id: 2, title: 'Health', description: 'Tips and advice for health' },
  { id: 3, title: 'Inspiration', description: 'Get motivated with inspirational content' },
];

const CategoryCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.title.toLowerCase()}`}
          className="bg-white shadow-md rounded-lg p-4 cursor-pointer block hover:bg-[#f0f4fa] transition"
        >
          <h3 className="text-xl font-bold text-black">{category.title}</h3>
          <p className="text-gray-600">{category.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;