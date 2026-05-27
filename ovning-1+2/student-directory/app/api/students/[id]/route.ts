const students = [
  { id: 1, name: 'Alice', program: 'Frontend' },
  { id: 2, name: 'Bob', program: 'Backend' },
  { id: 3, name: 'Charlie', program: 'UX' },
];

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json(student);
}