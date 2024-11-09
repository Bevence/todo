import { model, Schema } from "mongoose"

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
    },
    status: {
      type: String,
      required: true,
      enum: ["PENDING", "DONE"],
      default: "PENDING"
    },
    expiredAt: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const ToDo = model("ToDo", toDoSchema)

export default ToDo
