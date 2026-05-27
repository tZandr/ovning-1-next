import Link from 'next/link';

interface Student {
  id: number;
  name: string;
  program: string;
}

export default async function StudentDetails({ params, }: { params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/students/${id}`);
  const student: Student = await res.json();

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-10 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-1">{student.name}</h1>
        <p className="text-blue-400 font-medium mb-6">{student.program}</p>
        <Link
          href="/students"
          className="text-sm text-gray-400 hover:text-blue-400 hover:underline"
        >
          ← Back to students
        </Link>
      </div>
    </main>
  );
}
