import ServiceCard from '../../components/ServiceCard';

export default function Dedicated() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-3">Dedikerade servrar</h1>
      <p className="text-slate-400 mb-10">Dedikerad hårdvara uteslutande för dig — ingen delad resurs.</p>

      <div className="grid grid-cols-2 gap-6">
        <ServiceCard
          title="Starter"
          description="Intel Xeon E-2300 · 32 GB RAM · 2× 1 TB NVMe"
          price="från 999 kr/mån"
        />
        <ServiceCard
          title="Pro"
          description="Intel Xeon Silver · 64 GB RAM · 4× 2 TB NVMe"
          price="från 1 999 kr/mån"
        />
        <ServiceCard
          title="Enterprise"
          description="Dual Intel Xeon Gold · 256 GB RAM · 8× 4 TB NVMe"
          price="från 4 999 kr/mån"
        />
        <ServiceCard
          title="Custom"
          description="Bygg din egen server — välj CPU, RAM och lagring fritt."
          price="Kontakta oss"
        />
      </div>
    </div>
  );
}
