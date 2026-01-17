import { chatClient } from "../lib/stream.js";


export async function getStreamToken(req, res) {
  try {
    const token = chatClient.createToken(req.user.clerkId); // Use clerkId for Stream user ID (not mongoDB _id)
    res.status(200).json({ 
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image
     });
  } catch (error) {
    console.error("Error creating Stream token:", error);
    res.status(500).json({ error: "Failed to create Stream token" });
  }
}