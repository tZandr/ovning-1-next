type Props = {
  title: string;
  description: string;
  price: string;
};

export default function ServiceCard({ title, description, price }: Props) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col gap-3">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-slate-400 flex-1">{description}</p>
      <p className="text-cyan-400 font-semibold">{price}</p>
    </div>
  );
}
