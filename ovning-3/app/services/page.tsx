import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-3">Våra tjänster</h1>
      <p className="text-slate-400 mb-10">Välj den hosting-lösning som passar din verksamhet.</p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href="/services/dedicated"
          className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors"
        >
          <h2 className="text-white font-semibold text-lg mb-2">Dedikerade servrar</h2>
          <p className="text-slate-400">Dedikerad hårdvara uteslutande för dig — maximal prestanda och kontroll.</p>
        </Link>
        <Link
          href="/services/vps"
          className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors"
        >
          <h2 className="text-white font-semibold text-lg mb-2">VPS</h2>
          <p className="text-slate-400">Virtuella servrar med root-åtkomst och flexibel skalning.</p>
        </Link>
        <Link
          href="/services/cloud"
          className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors"
        >
          <h2 className="text-white font-semibold text-lg mb-2">Moln</h2>
          <p className="text-slate-400">Betala för det du använder — skala upp och ner när som helst.</p>
        </Link>
      </div>
    </div>
  );
}
