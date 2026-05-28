import ServiceCard from '../../components/ServiceCard';

export default function Cloud() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-3">Moln</h1>
      <p className="text-slate-400 mb-10">Betala för det du använder — skala upp och ner när som helst.</p>

      <div className="grid grid-cols-2 gap-6">
        <ServiceCard
          title="Compute"
          description="On-demand virtuella maskiner med automatisk skalning."
          price="från 0.50 kr/timme"
        />
        <ServiceCard
          title="Object Storage"
          description="S3-kompatibel objektlagring med hög tillgänglighet."
          price="från 0.02 kr/GB/mån"
        />
        <ServiceCard
          title="Managed Database"
          description="PostgreSQL och MySQL med automatiska säkerhetskopior."
          price="från 299 kr/mån"
        />
        <ServiceCard
          title="Load Balancer"
          description="Distribuera trafik och säkerställ hög tillgänglighet."
          price="från 149 kr/mån"
        />
      </div>
    </div>
  );
}
