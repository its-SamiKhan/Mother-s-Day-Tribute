"use client";
import React, { useState } from 'react';

interface Article {
  id: string;
  title: string;
  imageUrl: string;
}

const HeroCarousel: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const featured = articles.slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featured.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + featured.length) % featured.length);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {featured.map((story) => (
          <div key={story.id} className="min-w-full h-64 bg-gray-200 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black">{story.title}</h2>
          </div>
        ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-r" onClick={prevSlide}>Prev</button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-l" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HeroCarousel; 