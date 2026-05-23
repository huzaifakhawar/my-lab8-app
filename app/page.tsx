export default function Home() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const studentName = process.env.NEXT_PUBLIC_STUDENT_NAME;
  const studentRoll = process.env.NEXT_PUBLIC_STUDENT_ROLL;

  const labs = [
    { number: 4, name: "Docker Containers", status: "✓" },
    { number: 5, name: "LocalStack (AWS)", status: "✓" },
    { number: 7, name: "Terraform IaC", status: "✓" },
    { number: 8, name: "Vercel Deployment", status: "✓" },
  ];

  return (
    <main style={{ textAlign: "center", marginTop: "5%" }}>
      <h1>Lab 8 — Vercel Deployment</h1>
      <p>App: {appName}</p>
      <p>Name: {studentName}</p>
      <p>Roll: {studentRoll}</p>
      
      <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
        <h2>Completed Labs</h2>
        <table style={{ margin: "0 auto", textAlign: "left", border: "1px solid #ccc" }}>
          <thead>
            <tr style={{ backgroundColor: "#ddd" }}>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Lab</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Topic</th>
              <th style={{ padding: "10px", border: "1px solid #ccc" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {labs.map((lab) => (
              <tr key={lab.number}>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>Lab {lab.number}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>{lab.name}</td>
                <td style={{ padding: "10px", border: "1px solid #ccc", color: "green" }}>{lab.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
