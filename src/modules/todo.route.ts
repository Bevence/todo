import { Router } from "express"

import { toDoController } from "./todo.controller"

const router = Router()

router.route("/").get(toDoController.getToDoItems).post(toDoController.registerToDoItem)
router.route("/:id").put(toDoController.updateToDoItems).delete(toDoController.deleteToDoItems)

export default router
