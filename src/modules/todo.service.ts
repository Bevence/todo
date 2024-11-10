import { IToDo } from "./todo.interface"
import ToDo from "./todo.model"

const registerToDoItem = async (payload: IToDo) => {
  const toDo = await ToDo.create(payload)

  return toDo
}

const getToDoItems = () => {
  return ToDo.find()
}

const updateToDoItemById = (id: string, payload: Partial<IToDo>) => {
  return ToDo.findByIdAndUpdate(id, payload)
}

const deleteToDoItemById = (id: string) => {
  return ToDo.findByIdAndDelete(id)
}

export const toDoService = {
  registerToDoItem,
  getToDoItems,
  updateToDoItemById,
  deleteToDoItemById
}
