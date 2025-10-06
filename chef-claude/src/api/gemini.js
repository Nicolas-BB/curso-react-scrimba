import { GoogleGenAI } from '@google/genai';
import 'dotenv/config'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
const modelPrompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`

async function callRecipe(ingredients) {
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: [
            {
                role: 'model',
                parts: [{ text: modelPrompt }]
            },
            {
                role: 'user',
                parts: [{ text: 'Leite condensado, margarina, ovos, leite, farinha, trigo, massa de bolo, cenoura' }]
            }
        ]
    });
    console.log(response.text);
}

await callRecipe();