import { NextFunction, Request, Response } from "express"
import Joi from "joi"

import asyncHandlers from "../helpers/asyncHandlers"
import { toDoService } from "./todo.service"
import { todoEditSchema, todoSchema } from "./todo.validation"

const registerToDoItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await todoSchema.validateAsync(req.body)

    const data = await toDoService.registerToDoItem(req.body)

    return res.json({
      success: true,
      message: "Todo item registered successfully...",
      data
    })
  } catch (error) {
    let errorMessages
    if (error instanceof Joi.ValidationError) {
      errorMessages = error.details[0].message
    }
    next(errorMessages || "Error while registering todo item...")
  }
}

const getToDoItems = async (_req: Request, res: Response, next: NextFunction) => {
  const data = await toDoService.getToDoItems()

  res.render("index", { todos: data })
}

const updateToDoItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await todoEditSchema.validateAsync(req.body)

    const data = await toDoService.updateToDoItemById(req.params.id, req.body)

    return res.json({
      success: true,
      message: "Todo item updated successfully...",
      data
    })
  } catch (error) {
    let errorMessages
    if (error instanceof Joi.ValidationError) {
      errorMessages = error.details[0].message
    }
    next(errorMessages || "Error while registering todo item...")
  }
}

const deleteToDoItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await toDoService.deleteToDoItemById(req.params.id)

    return res.json({
      success: true,
      message: "Todo item deleted successfully...",
      data
    })
  } catch (error) {
    next("Error while deleting todo item...")
  }
}

export const toDoController = {
  registerToDoItem: asyncHandlers(registerToDoItem),
  getToDoItems: asyncHandlers(getToDoItems),
  updateToDoItems: asyncHandlers(updateToDoItems),
  deleteToDoItems: asyncHandlers(deleteToDoItems)
}
