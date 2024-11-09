import { Router } from "express"

import { toDoController } from "./todo.controller"

const router = Router()

router.route("/").get(toDoController.getToDoItems).post(toDoController.registerToDoItem)

export default router
