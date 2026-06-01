import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold text-zinc-100">Övning 4</h1>
      <p className="text-zinc-400">Dashboard med nested routing</p>
      <Link
        href="/dashboard"
        className="mt-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-zinc-100 text-sm transition-colors"
      >
        Go to dashboard
      </Link>
    </div>
  );
}
