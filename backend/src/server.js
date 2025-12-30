import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";
import { connect } from "http2";
import { connectDB } from "./lib/db.js";

const app = express();
const PORT = ENV.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, "../../frontend/dist");

app.get("/health", (req, res) => {
  res.status(200).send("SkillProbe Backend is up and running");
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(frontendPath));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server :", error);
  }
}

startServer();