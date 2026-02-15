import { GoogleGenAI, Type } from "@google/genai";
import { WordOfTheDay } from "../types";

// The API_KEY is automatically injected by Netlify into process.env.API_KEY 
// if you set it in the Netlify Dashboard (Site Settings > Environment Variables)
const API_KEY = typeof process !== 'undefined' ? process.env.API_KEY : '';

export const getAIWordOfTheDay = async (): Promise<WordOfTheDay> => {
  if (!API_KEY || API_KEY === 'undefined') {
    console.warn("Gemini API Key is missing. Using fallback word.");
    return getFallbackWord();
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a sophisticated but usable Word of the Day suitable for a professional Toastmasters meeting. Include its part of speech (type), meaning, and three distinct usage examples.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            word: { type: Type.STRING },
            type: { type: Type.STRING },
            meaning: { type: Type.STRING },
            examples: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["word", "type", "meaning", "examples"]
        }
      }
    });

    return JSON.parse(response.text.trim()) as WordOfTheDay;
  } catch (error) {
    console.error("Error generating word of the day:", error);
    return getFallbackWord();
  }
};

const getFallbackWord = (): WordOfTheDay => ({
  word: "Resilience",
  type: "noun",
  meaning: "The capacity to recover quickly from difficulties; toughness.",
  examples: [
    "The club showed great resilience during the transition to online meetings.",
    "Resilience is a key trait of any successful leader.",
    "Her resilience in the face of feedback helped her improve rapidly."
  ]
});

export const getTableTopicsPrompts = async (theme: string): Promise<string[]> => {
  if (!API_KEY || API_KEY === 'undefined') return getFallbackPrompts();

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 5 creative Table Topics prompts for a Toastmasters meeting with the theme: "${theme}". These should be open-ended questions that provoke thoughtful 1-2 minute speeches.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text.trim());
  } catch (error) {
    return getFallbackPrompts();
  }
};

const getFallbackPrompts = () => [
  "What does leadership mean to you?",
  "Describe a time you overcame a major obstacle.",
  "If you could give your younger self one piece of advice, what would it be?",
  "What is the most important quality in a public speaker?",
  "How do you find inspiration when you feel stuck?"
];
