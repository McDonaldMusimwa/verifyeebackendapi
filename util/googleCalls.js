import  {GoogleGenAI}  from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const GOOGLEAPIKEY = process.env.GOOGLEAPIKEY;
const ai = new GoogleGenAI({ apiKey: GOOGLEAPIKEY })
async function verifyTranscript(transcript) {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Can you verify this transcript ignore panctuation focus on verifying claims provide outside links to verification sources 
      when available return them as an array of JSON objects like:
[
  { "claim": "", "verification": "",link:"" }
]

Only return the array here is the text after the arrow => ${transcript}`,
    });
    return response.text
}

export default verifyTranscript;