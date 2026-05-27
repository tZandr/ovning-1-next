function studentData() {
  return [
    { id: 1, name: 'Alice', program: 'Frontend' },
    { id: 2, name: 'Bob', program: 'Backend' },
    { id: 3, name: 'Charlie', program: 'UX' },
  ];
}

export function GET() {
  return Response.json(studentData());
}
