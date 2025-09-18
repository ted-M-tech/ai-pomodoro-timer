import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server'

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

export async function GET() {
const promppt = `
    # Order
    Please suggest refresh method while break time.

    # Limitation
    - It takes only 1 or 2 minutes
    - It can be done inside
    - Exercise
    - At least use one emoji in the suggest sentence
    - Keep simple and only one sentence

    # Output example
    - Let's walk inside 😄
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: "Suggest refresh method in 1 line",
    });
    // console.log(response.text);
    return NextResponse.json({ suggestion: response.text }, { status: 200 })
}
