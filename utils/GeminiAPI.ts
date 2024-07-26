import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function generateResponse(prompt: string) {
  try {
    const chatSession = model.startChat({
      generationConfig,
    });

    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();
    // console.log("Raw response:", text);

    // Try to parse as JSON first
    try {
      return JSON.parse(text);
    } catch (jsonError) {
      // If JSON parsing fails, try to extract JSON from markdown
      const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/);
      if (jsonMatch && jsonMatch[1]) {
        try {
          return JSON.parse(jsonMatch[1].trim());
        } catch (extractedJsonError) {
          console.error('Error parsing extracted JSON:', extractedJsonError);
        }
      }

      // If JSON extraction fails, return a structured object with the raw text
      return {
        rating: "N/A",
        feedback: text.replace(/^##\s*Rating:.*\n?/m, '').trim() // Remove the "## Rating:" line if present
      };
    }
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
}