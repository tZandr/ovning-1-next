export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-white mb-4">Kontakta oss</h1>
      <p className="text-slate-400 mb-10">Vi svarar inom 2 timmar under kontorstid.</p>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <p className="text-slate-500 text-sm mb-1">E-post</p>
          <p className="text-cyan-400">support@nordhost.se</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <p className="text-slate-500 text-sm mb-1">Telefon</p>
          <p className="text-cyan-400">08-123 456 78</p>
        </div>
      </div>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Ditt namn"
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
        <input
          type="email"
          placeholder="E-postadress"
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
        <textarea
          placeholder="Ditt meddelande"
          rows={5}
          className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg transition-colors"
        >
          Skicka
        </button>
      </form>
    </div>
  );
}
