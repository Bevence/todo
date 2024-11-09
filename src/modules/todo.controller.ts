import { NextFunction, Request, Response } from "express"

import asyncHandlers from "../helpers/asyncHandlers"
import { toDoService } from "./todo.service"

const registerToDoItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await toDoService.registerToDoItem(req.body)

    return res.json({
      success: true,
      message: "Registered todo item successfully...",
      data
    })
  } catch (error) {
    next("Error")
  }
}

const getToDoItems = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await toDoService.getToDoItems()

    return res.json({
      success: true,
      message: "Fetched todo items successfully...",
      data
    })
  } catch (error) {
    next("Error")
  }
}

export const toDoController = {
  registerToDoItem: asyncHandlers(registerToDoItem),
  getToDoItems: asyncHandlers(getToDoItems)
}
