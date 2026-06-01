export default function Loading() {
  return (
    <div className="p-8">
      <div className="h-8 w-32 bg-zinc-800 rounded animate-pulse mb-6" />
      <div className="flex flex-col gap-2 max-w-sm">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-zinc-800 rounded-lg animate-pulse" />
        ))}
      </div>
    </div>
  );
}
