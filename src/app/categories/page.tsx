import Link from 'next/link';

export default function Categories() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 bg-white rounded-xl shadow text-black">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <ul className="space-y-2">
        <li className="text-lg">
          <Link href="/categories/stories" className="text-blue-700 hover:underline">Stories</Link>
        </li>
        <li className="text-lg">
          <Link href="/categories/health" className="text-blue-700 hover:underline">Health</Link>
        </li>
        <li className="text-lg">
          <Link href="/categories/inspiration" className="text-blue-700 hover:underline">Inspiration</Link>
        </li>
      </ul>
    </div>
  );
} 