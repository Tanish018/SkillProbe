import { connectDB } from "./db.js";
import User from "../models/User.js";
import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "SkillProbe" })

const syncUser = inngest.createFunction(
  { id: "sync_user" },
  { event: "clerk/user.created" },
  async ({event}) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name, image_url } = event.data;
    const newUser = new User({
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""} ${last_name || ""}`.trim(),
      profileImage: image_url
    });
    await User.create(newUser);
  }
)

const deleteUserFromDB = inngest.createFunction(
  { id: "delete_user_from_db" },
  { event: "clerk/user.deleted" },
  async ({event}) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });
  }
)

export const functions = [syncUser, deleteUserFromDB];