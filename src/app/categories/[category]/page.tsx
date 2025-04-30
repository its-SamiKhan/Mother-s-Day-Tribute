import path from 'path';
import { promises as fs } from 'fs';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: number;
  imageUrl: string;
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const articlesFile = path.join(process.cwd(), 'src', 'articles.json');
  const data = await fs.readFile(articlesFile, 'utf-8');
  const articles: Article[] = JSON.parse(data);

  // Capitalize first letter for display
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1);

  const filtered = articles.filter(
    (article) => article.category.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-xl shadow text-black">
      <h1 className="text-3xl font-bold mb-4">{categoryName}</h1>
      <div className="flex flex-col gap-4">
        {filtered.map((article) => (
          <div key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-row">
            <img src={article.imageUrl} alt={article.title} className="w-40 h-32 object-cover" />
            <div className="p-4 flex-1">
              <h3 className="text-xl font-bold text-black">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{article.category}</span>
                <span className="text-sm text-gray-500">{article.readingTime} min read</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 