import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  imageUrl: string;
}

export default function RecentArticles({ articles, selectedCategory }: { articles: Article[]; selectedCategory: string }) {
  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {filteredArticles.map((article) => (
        <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold text-black">{article.title}</h3>
            <p className="text-gray-600">{article.excerpt}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm text-gray-500">{article.category}</span>
              <span className="text-sm text-gray-500">{article.readingTime} min read</span>
            </div>
            <Link href={`/articles/${article.id}`} className="mt-4 inline-block bg-[#6A89A7] text-white px-4 py-2 rounded">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
} 