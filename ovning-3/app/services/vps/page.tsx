import ServiceCard from '../../components/ServiceCard';

export default function VPS() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-3">VPS</h1>
      <p className="text-slate-400 mb-10">Virtuella servrar med root-åtkomst och flexibel skalning.</p>

      <div className="grid grid-cols-2 gap-6">
        <ServiceCard
          title="Micro"
          description="1 vCPU · 2 GB RAM · 40 GB NVMe"
          price="från 99 kr/mån"
        />
        <ServiceCard
          title="Standard"
          description="2 vCPU · 4 GB RAM · 80 GB NVMe"
          price="från 199 kr/mån"
        />
        <ServiceCard
          title="Plus"
          description="4 vCPU · 8 GB RAM · 160 GB NVMe"
          price="från 349 kr/mån"
        />
        <ServiceCard
          title="Max"
          description="8 vCPU · 16 GB RAM · 320 GB NVMe"
          price="från 649 kr/mån"
        />
      </div>
    </div>
  );
}
