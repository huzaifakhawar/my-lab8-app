export async function POST(request) {
  try {
    const body = await request.json();
    
    const { name, roll, email } = body;
    
    // Validation
    if (!name || !roll) {
      return Response.json(
        { error: "Name and Roll are required" },
        { status: 400 }
      );
    }
    
    // Process the submission
    return Response.json(
      {
        success: true,
        message: "Form submitted successfully!",
        submittedData: {
          name: name,
          roll: roll,
          email: email || "Not provided",
        },
        submittedAt: new Date().toISOString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
