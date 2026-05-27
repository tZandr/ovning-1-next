import Link from 'next/link';
import { Product } from '../types/product';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <li className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden flex flex-col hover:border-blue-500 transition-colors">
      <Link href={`/products/${product.id}`} className="flex flex-col h-full">
        <div className="bg-white p-4 flex items-center justify-center h-44 shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-white text-sm font-medium line-clamp-2 leading-snug">
            {product.title}
          </p>
          <p className="text-blue-400 font-bold text-lg">${product.price}</p>
        </div>
      </Link>
    </li>
  );
}
