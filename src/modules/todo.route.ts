import { Router } from "express"

const router = Router()

router.get("", (req, res) => {
  res.send("Todo router")
})

export default router
