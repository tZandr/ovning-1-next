export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-6">Om NordHost</h1>
      <p className="text-slate-400 text-lg mb-6">
        NordHost grundades 2010 med målet att erbjuda pålitlig och prisvärd serverhosting för svenska företag.
        Vi driver egna datacenter i Stockholm och Göteborg med direkta fiberkopplingar till internet.
      </p>
      <p className="text-slate-400 text-lg mb-16">
        Idag betjänar vi över 5 000 kunder — från enskilda utvecklare till stora företag med krav på hög tillgänglighet.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
          <p className="text-4xl font-bold text-cyan-400 mb-2">5 000+</p>
          <p className="text-slate-400">Kunder</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
          <p className="text-4xl font-bold text-cyan-400 mb-2">15 år</p>
          <p className="text-slate-400">Erfarenhet</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 text-center">
          <p className="text-4xl font-bold text-cyan-400 mb-2">2</p>
          <p className="text-slate-400">Datacenter</p>
        </div>
      </div>
    </div>
  );
}
