const studentsData = {
  "001": { id: "001", name: "Huzaifa Khawar", roll: "01-131232-034", section: "A" },
  "002": { id: "002", name: "Ali Khan", roll: "01-131232-035", section: "A" },
  "003": { id: "003", name: "Sara Ahmed", roll: "01-131232-036", section: "B" },
};

export async function GET(request, { params }) {
  const { id } = params;
  
  const student = studentsData[id];
  
  if (!student) {
    return Response.json(
      { error: `Student with ID ${id} not found` },
      { status: 404 }
    );
  }
  
  return Response.json({
    success: true,
    student: student,
    fetchedAt: new Date().toISOString(),
  });
}
