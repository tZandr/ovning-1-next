import Link from 'next/link';
import { notFound } from 'next/navigation';
import { users } from '../../../../data/users';

export function generateStaticParams() {
  return users.map((user) => ({ id: String(user.id) }));
}

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((u) => u.id === Number(id));

  if (!user) notFound();

  return (
    <div className="p-8">
      <Link
        href="/dashboard/users"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-6 inline-block"
      >
        ← Back to users
      </Link>
      <h1 className="text-2xl font-semibold text-zinc-100">{user?.name}</h1>
      <p className="text-zinc-500 text-sm mt-1">User ID: {id}</p>
    </div>
  );
}
