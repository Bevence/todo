type STATUS = "PENDING" | "DONE"

export interface IToDo {
  name: string
  shortDescription: string
  status: STATUS
}
