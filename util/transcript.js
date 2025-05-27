import  {YoutubeTranscript}  from "youtube-transcript";

async function getTranscript(videoId) {
 
    if (videoId === null || videoId === undefined) {
        throw new Error("Video ID is required");
    }
    try {
        const text = await YoutubeTranscript.fetchTranscript(videoId);
        if (text === null || text === undefined) {
            throw new Error("No transcript found");
        }
        const transcript = text.map((item) => item.text).join(" ");
        const cleaned = transcript.replace(/#39/g, "");
        if (cleaned === null || cleaned === undefined) {
            throw new Error("No transcript found");
        }
        return cleaned;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default getTranscript;