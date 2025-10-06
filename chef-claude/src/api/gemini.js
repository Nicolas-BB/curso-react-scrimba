import { GoogleGenAI } from '@google/genai';
import 'dotenv/config'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function callRecipe(ingredients) {
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-001',
        contents: [
            {
                role: 'model',
                parts: [{ text: 'Você é um assistente de cozinha, vai receber uma quantidade X de igredientes, e vai ter que retornar uma receita com esses igredientes, você obrigatoriamente, não pode adicionar mais nenhum igrediente a receita, use apenas os que foram informados' }]
            },
            {
                role: 'user',
                parts: [{ text: 'Tenho alface, feijão, e cenoura' }]
            }
        ]
    });
    console.log(response.text);
}

await callRecipe();