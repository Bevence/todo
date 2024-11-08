import Joi from "joi";
import { config } from "dotenv";

config();

const envVariableSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid("production", "development").required(),
    PORT: Joi.number().positive().required(),
  })
  .unknown();

const { value, error } = envVariableSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const { NODE_ENV, PORT } = value;

const APP_CONFIG = { NODE_ENV, PORT };

export { APP_CONFIG };
