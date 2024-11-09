import Joi from "joi"

const todoSchema = Joi.object().keys({
  name: Joi.string().min(4).max(32).required(),
  shortDescription: Joi.string().min(64).required(),
  expiredAt: Joi.date().required()
})
