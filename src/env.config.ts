import { config } from "dotenv"
import Joi from "joi"

config()

const envVariableSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().positive().required(),
    DATABASE_URL: Joi.string().required()
  })
  .unknown()

const { value, error } = envVariableSchema.prefs({ errors: { label: "key" } }).validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const { NODE_ENV, PORT, DATABASE_URL } = value

const APP_CONFIG = { NODE_ENV, PORT }
const DATABASE_CONFIG = { DATABASE_URL }

export { APP_CONFIG, DATABASE_CONFIG }
