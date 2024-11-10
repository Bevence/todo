import path from "path"

import express, { NextFunction, Request, Response } from "express"

import "./env.config"
import "./db.config"

import routes from "./route"

const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "..", "views"))

app.use("/static", express.static(path.join(__dirname, "..", "public")))

app.use(express.json())

app.use("/ping", (_req: Request, res: Response) => {
  res.send("pong")
})
app.use("/", routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: err.message ?? err
  })
})

export default app
