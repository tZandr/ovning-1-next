'use client';

import { useState } from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

export default function ProductFilter({ products }: Props) {
  const [search, setSearch] = useState('');
  const [cheapOnly, setCheapOnly] = useState(false);

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (cheapOnly ? p.price < 20 : true));

  return (
    <div>
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Sök produkt..."
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => setCheapOnly((prev) => !prev)}
          className={`px-5 py-2 rounded-lg font-medium transition-colors ${
            cheapOnly
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500'
          }`}
        >
          {cheapOnly ? 'Visa alla' : 'Visa endast billiga produkter'}
        </button>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </ul>
    </div>
  );
}
