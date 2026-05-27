import Link from 'next/link';

interface Student {
  id: number;
  name: string;
  program: string;
}

export default async function StudentList() {
  const res = await fetch('http://localhost:3000/api/students');
  const students: Student[] = await res.json();

  return (
    <main className="h-screen bg-gray-950 flex flex-col p-8 overflow-hidden">
      <Link href="/" className="text-sm text-blue-500 hover:underline">
        ← Home
      </Link>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <ul className="space-y-3">
            {students.map((student) => (
              <li key={student.id}>
                <Link
                  href={`/students/${student.id}`}
                  className="flex flex-col bg-gray-900 border border-gray-700 rounded-lg px-5 py-4 hover:border-blue-500 hover:shadow-sm transition-all"
                >
                  <span className="font-medium text-white">{student.name}</span>
                  <span className="text-sm text-gray-400">{student.program}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
