import express from "express"
import { ENV } from "./lib/env.js"

const app = express()

const PORT = ENV.PORT

app.get("/", (req,res) => {
  res.status(200).send("SkillProbe Backend is running")
})

app.get("/health", (req,res) => {
  res.status(200).send("SkillProbe Backend is up and running")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})