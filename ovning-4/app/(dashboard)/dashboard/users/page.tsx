import Link from 'next/link';
import { users } from '../../../data/users';

export default function UsersPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold text-zinc-100 mb-6">Users</h1>
      <ul className="flex flex-col gap-2 max-w-sm">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`/dashboard/users/${user.id}`}
              className="flex items-center justify-between px-4 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg text-zinc-300 hover:text-zinc-100 transition-colors"
            >
              <span>{user.name}</span>
              <span className="text-zinc-600 text-sm">#{user.id}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
