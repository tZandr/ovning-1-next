import Link from 'next/link';
import type { Product } from '@/app/types/product';
import FavoritesButton from '../../components/FavoritesButton';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 max-w-2xl w-full flex gap-10">
        <div className="bg-white rounded-lg p-6 flex items-center justify-center w-56 shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="h-44 object-contain"
          />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                {product.category}
              </p>{' '}
              <FavoritesButton productId={product.id} />
            </div>
            <h1 className="text-white text-xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-blue-400 text-2xl font-bold">
              ${product.price}
            </span>
            <Link
              href="/products"
              className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
            >
              ← Back to products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
