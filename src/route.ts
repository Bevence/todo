import { Router } from "express"

import todoRouter from "./modules/todo.route"

const router = Router()

router.use("/todo", todoRouter)

export default router
