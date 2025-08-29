// Recipe summaries using Google Gemini

const GOOGLE_AI_API_KEY = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

export const generateRecipeSummary = async (recipeName, category, area) => {
  if (!GOOGLE_AI_API_KEY) {
    throw new Error(
      "Google AI API key not found. Please add VITE_GOOGLE_AI_API_KEY to your .env file"
    );
  }

  const prompt = `Summarize this recipe in 2-3 short sentences. Include difficulty level (Easy/Medium/Hard) and estimated cooking time. Be concise and helpful.

Recipe: ${recipeName}
Category: ${category || "Unknown"}
Cuisine: ${area || "Unknown"}

Format: Keep it under 100 words, casual tone, mention what makes this dish special.`;

  try {
    const response = await fetch(`${API_URL}?key=${GOOGLE_AI_API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Unexpected response format from AI API");
    }
  } catch (error) {
    console.error("Error generating AI summary:", error);
    throw error;
  }
};
