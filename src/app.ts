import express from "express";
import "./env.config";

const app = express();

app.use("", (req, res) => {
  res.send("Hello express");
});

export default app;
