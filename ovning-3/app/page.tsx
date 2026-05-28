import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-40 px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Pålitlig serverhosting
        </h1>
        <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
          Dedikerade servrar, VPS och molntjänster med 99.9% drifttid och support dygnet runt.
        </p>
        <Link
          href="/services"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Se våra tjänster
        </Link>
      </section>

      <section className="max-w-6xl mx-auto w-full px-6 pb-20">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white font-semibold text-lg mb-2">99.9% Drifttid</h3>
            <p className="text-slate-400">SLA-garanterad drifttid med redundant infrastruktur i två datacenter.</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white font-semibold text-lg mb-2">NVMe SSD</h3>
            <p className="text-slate-400">Blixtsnabb lagring för maximal I/O-prestanda på alla planer.</p>
          </div>
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-white font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-slate-400">Teknisk support via chatt och telefon när du behöver det som mest.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
