import Session from "../models/Session.js"
import { streamClient, chatClient } from "../lib/stream.js"

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id
    const clerkId = req.user.clerkId
    if (!problem || !difficulty) {
      return res.status(400).json({ message: "Problem and Difficulty are required." })
    }

    // Generate a unique call for stream video call :-
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`

    const session = await Session.create({
      problem,
      difficulty: difficulty.toLowerCase(),
      host: userId,
      callId
    })

    // Create Stream video call :-
    await streamClient.video.call("default", callId).getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: { problem, difficulty, sessionId: session._id.toString() }

      }
    })

    // Create Chat message channel for the session :-
    const channel = chatClient.channel("messaging", callId, {
      name: `${problem} - ${difficulty} Session`,
      created_by_id: clerkId,
      members: [clerkId]
    })
    await channel.create()

    return res.status(201).json({ session })

  } catch (error) {
    console.error("Error creating session:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    return res.status(200).json({ sessions })
  } catch (error) {
    console.error("Error fetching active sessions:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userid = req.user._id
    // User is either host or participant in the session
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userid }, { participant: userid }]
    }).sort({ createdAt: -1 }).limit(20)

    res.status(200).json({ sessions })
  } catch (error) {
    console.error("Error fetching my recent sessions:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params
    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId")

    if (!session) {
      return res.status(404).json({ message: "Session not Found" })
    }
    res.status(200).json({ session })
  } catch (error) {
    console.error("Error fetching session by ID:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params
    const userId = req.user._id
    const clerkId = req.user.clerkId
    const session = await Session.findById(id)
    if (!session) {
      return res.status(404).json({ message: "Session not Found" })
    }

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" })
    }
    
    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join as participant" })
    }

    // Check if session is already full
    if (session.participant) {
      return res.status(409).json({ message: "Session is already full" })
    }
    session.participant = userId
    await session.save()

    const channel = chatClient.channel("messaging", session.callId)
    await channel.addMembers([clerkId])

    return res.status(200).json({ session })
  } catch (error) {
    console.error("Error joining session:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params
    const userId = req.user._id
    const session = await Session.findById(id)

    if (!session) {
      return res.status(404).json({ message: "Session not Found" })
    }

    // check if user is the host of the session
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" })
    }
    // Check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" })
    }

    // delete video call from Stream
    const call = streamClient.video.call("default", session.callId)
    await call.delete({ hard: true })
    
    // delete chat channel from Stream
    const channel = chatClient.channel("messaging", session.callId)
    await channel.delete()
    
    session.status = "completed"
    await session.save()

    return res.status(200).json({ session, message: "Session ended successfully" })
  } catch (error) {
    console.error("Error ending session:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}