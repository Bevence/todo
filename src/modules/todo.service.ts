import { IToDo } from "./todo.interface"
import ToDo from "./todo.model"

const registerToDoItem = async (payload: IToDo) => {
  // const existingToDo = await ToDo.findOne({
  //     equals: {

  //     }
  // })

  console.log("payload", payload)
  const toDo = await ToDo.create(payload)

  return toDo
}

export const toDoService = {
  registerToDoItem
}
