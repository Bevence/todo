import path from "path"

import express, { Request, Response } from "express"

import "./env.config"
import "./db.config"

import routes from "./route"

const app = express()

app.use("/todo", express.static(path.join(__dirname, "..", "public")))

app.use(express.json())

app.use("/ping", (_req: Request, res: Response) => {
  res.send("pong")
})
app.use("/api/v1", routes)

export default app
