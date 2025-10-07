import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const modelPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page, the answer is provided in Brazilian portuguese`

export async function callRecipe(ingredients) {
    let ingredientsList = ingredients.join(", ")

    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: [
            {
                role: 'model',
                parts: [{ text: modelPrompt }]
            },
            {
                role: 'user',
                parts: [{ text: ingredientsList }]
            }
        ]
    });
    return response.text
}