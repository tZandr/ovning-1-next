import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-950">
      <h1 className="text-4xl font-bold text-white mb-4">Övning 1+2</h1>
      <p className="text-gray-400 mb-8">Studenter och produkter</p>
      <div className='flex gap-4'>
        <Link
          href="/students"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Students
        </Link>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View Products
        </Link>
      </div>
    </main>
  );
}
