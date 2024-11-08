import express, { Request, Response } from "express"

import "./env.config"

import routes from "./route"

const app = express()

app.use("/ping", (_req: Request, res: Response) => {
  res.send("pong")
})
app.use("/api/v1", routes)

export default app
