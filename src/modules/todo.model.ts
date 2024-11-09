import { InferSchemaType, model, Schema } from "mongoose"

const toDoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const ToDo = model("ToDo", toDoSchema)

export default ToDo
