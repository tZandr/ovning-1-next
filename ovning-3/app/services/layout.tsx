import Link from 'next/link';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex gap-12">
      <aside className="w-48 shrink-0">
        <p className="text-slate-500 uppercase text-xs font-semibold tracking-wider mb-4">Tjänster</p>
        <nav>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/services" className="text-slate-300 hover:text-white block py-1.5 transition-colors">
                Översikt
              </Link>
            </li>
            <li>
              <Link href="/services/dedicated" className="text-slate-300 hover:text-white block py-1.5 transition-colors">
                Dedikerade servrar
              </Link>
            </li>
            <li>
              <Link href="/services/vps" className="text-slate-300 hover:text-white block py-1.5 transition-colors">
                VPS
              </Link>
            </li>
            <li>
              <Link href="/services/cloud" className="text-slate-300 hover:text-white block py-1.5 transition-colors">
                Moln
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
}
