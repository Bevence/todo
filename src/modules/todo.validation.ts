import Joi from "joi"

const todoSchema = Joi.object().keys({
  name: Joi.string().min(4).max(32).required(),
  shortDescription: Joi.string().min(4).max(64).required(),
  expiredAt: Joi.date().required().greater("now")
})

const todoEditSchema = Joi.object().keys({
  name: Joi.string().min(4).max(32),
  shortDescription: Joi.string().min(4).max(64),
  expiredAt: Joi.date().greater("now"),
  status: Joi.string().valid("DONE")
})

export { todoEditSchema, todoSchema }
