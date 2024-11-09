import { Router } from "express"

import { toDoController } from "./todo.controller"

const router = Router()

router.post("/", toDoController.registerToDoItem)

export default router
