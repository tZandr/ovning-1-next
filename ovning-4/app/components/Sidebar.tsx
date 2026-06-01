import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-56 bg-zinc-900 border-r border-zinc-800 flex flex-col shrink-0">
      <div className="px-6 py-5 border-b border-zinc-800">
        <Link href="/" className="text-zinc-100 font-semibold text-base">
          Övning 4
        </Link>
      </div>
      <nav className="flex flex-col gap-1 p-3 flex-1">
        <Link href="/dashboard" className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
          Dashboard
        </Link>
        <Link href="/dashboard/users" className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
          Users
        </Link>
        <Link href="/dashboard/analytics" className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors">
          Analytics
        </Link>
      </nav>
      <div className="p-3 border-t border-zinc-800">
        <Link href="/dashboard/settings" className="px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors block">
          Settings
        </Link>
      </div>
    </aside>
  );
}
