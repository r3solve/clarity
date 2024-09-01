const fetchCompletion = async (msg:string, role:string) => {
  const groqApiKey = "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";

  const data = {
    messages: [
      {
        role: "system",
        content: `${role} 
         `,
      },
      {
        role: "user",
        content: `${msg}`,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 0.5,
    top_p : 1,
  };

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok", );
    }

    const result = await response.json();
    return result

  } catch (error) {
    console.error("Error:", error);
  }
};

// Call the function
export default fetchCompletion
