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

export async function generateInterviewQuestions(jobRole: string, jobDescription: string, experience: number) {
  try {
    const chatSession = model.startChat({
      generationConfig,
    });

    const prompt = `Job Role: ${jobRole}, Job Description: ${jobDescription}, Experience: ${experience} Years. As an Interviewer, provide ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} Technical Questions with Answers based on these requirements in JSON format.`;

    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();

    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      // If JSON parsing fails, try to extract JSON from markdown
      const jsonMatch = text.match(/```json\n?([\s\S]*?)\n?```/);
      if (jsonMatch && jsonMatch[1]) {
        try {
          return JSON.parse(jsonMatch[1].trim());
        } catch (extractedJsonError) {
          console.error('Error parsing extracted JSON:', extractedJsonError);
        }
      }
      // If all parsing attempts fail, return null or throw an error
      throw new Error('Failed to parse interview questions');
    }
  } catch (error) {
    console.error('Error generating interview questions:', error);
    throw error;
  }
}

export async function generateFeedback(question: string, userAnswer: string) {
  try {
    const chatSession = model.startChat({
      generationConfig,
    });

    const prompt = `Based on the Question: ${question} and the answer: ${userAnswer}. Please give us the Rating out of 100 and also give the area of improvement in just 3 to 5 lines give the improvement information in json format with rating field and feedback field.`;

    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();

    try {
      return JSON.parse(text);
    } catch (jsonError) {
      console.error('Error parsing JSON:', jsonError);
      // If JSON parsing fails, try to extract relevant information
      const ratingMatch = text.match(/Rating:\s*(\d+)/);
      const feedbackMatch = text.match(/Feedback:([\s\S]+)/);
      
      return {
        rating: ratingMatch ? ratingMatch[1] : "N/A",
        feedback: feedbackMatch ? feedbackMatch[1].trim() : text.trim()
      };
    }
  } catch (error) {
    console.error('Error generating feedback:', error);
    throw error;
  }
}