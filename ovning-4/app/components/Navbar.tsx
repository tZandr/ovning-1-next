import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          <span className="text-cyan-400">Ovning-4</span>
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
