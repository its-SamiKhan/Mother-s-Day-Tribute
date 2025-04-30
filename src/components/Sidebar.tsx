import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-[var(--accent)] rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">Sk</div>
        <h2 className="text-xl font-bold text-black mb-1">Sami Khan</h2>
        <div className="flex space-x-2 mb-2">
          <a href="#" className="text-[var(--accent)] hover:underline">FB</a>
          <a href="#" className="text-[var(--accent)] hover:underline">TW</a>
          <a href="#" className="text-[var(--accent)] hover:underline">IG</a>
        </div>
        <p className="text-gray-600 text-center mb-4">Some details about profile.</p>
      </div>
      <h3 className="text-lg font-bold mt-6 mb-2 text-black border-b border-[var(--card-border)] pb-1">Highlights</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Highlight 1</li>
        <li>Highlight 2</li>
        <li>Highlight 3</li>
      </ul>
    </aside>
  );
};

export default Sidebar; 