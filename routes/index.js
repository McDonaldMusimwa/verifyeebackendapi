import express from "express";
const router = express.Router();
import getTranscript from "../util/transcript.js";
import verifyTranscript from "../util/googleCalls.js";




// create gemini instance


//Test route
router.get("/", (req, res) => {
  res.send("<p>some html</p>");
});

// Route to fetch transcript
router.get("/gettranscript", async (req, res) => {
    
  try {
    const videoId = req.query.url;

    if (!videoId) {
      return res.status(400).send("Video ID is required");
    }

    const transcript =await getTranscript(videoId);
    console.log(transcript)
    const response = await verifyTranscript(transcript);
    console.log(response)

    res.json(response); // Send transcript as JSON
  } catch (error) {
   
    res.status(500).send("Failed to fetch transcript");
  }
});

export default router;
