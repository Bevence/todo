import mongoose from "mongoose"

import { DATABASE_CONFIG } from "./env.config"

mongoose
  .connect(DATABASE_CONFIG.DATABASE_URL)
  .then(() => {
    console.log("Database connected successfully!!!")
  })
  .catch((err) => {
    console.log("Error while connecting mongodb", err)
  })
