import path from 'path';
import { promises as fs } from 'fs';
import HeroCarousel from '@/components/HeroCarousel';
import CategoryCards from '@/components/CategoryCards';
import RecentArticles from '@/components/RecentArticles';
import Sidebar from '@/components/Sidebar';

export default async function Home() {
  const articlesFile = path.join(process.cwd(), 'src', 'articles.json');
  const data = await fs.readFile(articlesFile, 'utf-8');
  const articles = JSON.parse(data);

  // For now, pass articles to HeroCarousel and RecentArticles. CategoryCards and filtering can be made interactive in a client component if needed.
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroCarousel articles={articles} />
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex-1">
          <CategoryCards />
          <RecentArticles articles={articles} selectedCategory={""} />
        </div>
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
