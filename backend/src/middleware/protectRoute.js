import { requireAuth } from '@clerk/express'
import User from '../models/User.js'

export const ProtectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;
      if (!clerkId) return res.status(401).json({ msg: "Unauthorized: No clerkId found" });
      // Find user in DB by clerkId
      const user = await User.findOne({ clerkId });
      if (!user) return res.status(404).json({ msg: "User not found" });
      req.user = user; // Attach user to req object
      next();

    } catch (error) {
      console.error("Error in ProtectRoute middleware:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
]