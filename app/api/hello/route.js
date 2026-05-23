export async function GET(request) {
  return Response.json({
    message: "Hello from Vercel Serverless Function!",
    timestamp: new Date().toISOString(),
    studentName: process.env.NEXT_PUBLIC_STUDENT_NAME || "Student",
  });
}
