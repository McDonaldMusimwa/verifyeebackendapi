import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const GOOGLEAPIKEY = process.env.GOOGLEAPIKEY;
const ai = new GoogleGenAI({ apiKey: GOOGLEAPIKEY });
async function verifyTranscript(transcript) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Can you verify the claims in the following transcript?
Ignore punctuation. Focus on verifying factual statements.
When possible, provide external links to credible sources that support or refute the claims.
Only output the JSON array. Do not include any explanations or text before or after.
Return results in this format:
[
  { "claim": "", "verification": "", "link": "", "key": 1 }
]
Here is the text to verify: => ${transcript}`,
  });

  const text = response.text;

  // Match the first valid JSON array
  const jsonMatch = text.match(/\[\s*{[\s\S]*?}\s*]/);

  if (jsonMatch) {
    try {
      const jsonArray = JSON.parse(jsonMatch[0]);

      // Optional: add `key` values if they're missing
      const withKeys = jsonArray.map((item, index) => ({
        key: index + 1,
        ...item,
      }));

      return withKeys;
    } catch (err) {
      console.error("JSON parse failed:", err);
    }
  }

  console.error("No valid JSON array found in response:", text);
  return []; // fallback empty array
}


export default verifyTranscript;
