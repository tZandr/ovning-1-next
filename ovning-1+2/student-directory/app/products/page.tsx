import ProductFilter from '../components/ProductFilter';
import { Product } from '../types/product';

export default async function Products() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen bg-gray-950 p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Products</h1>
      <ProductFilter products={products} />
    </main>
  );
}
