import { notFound } from 'next/navigation';
import path from 'path';
import { promises as fs } from 'fs';

interface Article {
  id: string;
  title: string;
  authorName: string;
  submissionDate: string;
  category: string;
  readingTime: number;
  imageUrl: string;
  fullContent: string;
}

export default async function ArticleDetail({ params }: { params: { id: string } }) {
  const articlesFile = path.join(process.cwd(), 'src', 'articles.json');
  const data = await fs.readFile(articlesFile, 'utf-8');
  const articles: Article[] = JSON.parse(data);
  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4 text-black">{article.title}</h1>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-500">{article.authorName}</span>
        <span className="text-gray-500">{article.submissionDate}</span>
      </div>
      <div className="mt-4">
        <span className="text-gray-500">{article.category}</span>
        <span className="text-gray-500 ml-4">{article.readingTime} min read</span>
      </div>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: article.fullContent }} />
    </div>
  );
} 