import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold text-zinc-100">404</h1>
      <p className="text-zinc-400">This page does not exist.</p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-zinc-100 text-sm transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
