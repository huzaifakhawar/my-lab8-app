export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME;
  const studentRoll = process.env.NEXT_PUBLIC_STUDENT_ROLL;

  return (
    <main style={{ textAlign: "center", marginTop: "10%" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p>App: {appName}</p>
      <p>Name: {studentName}</p>
      <p>Roll: {studentRoll}</p>
    </main>
  );
}
