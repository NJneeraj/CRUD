const Joi = require("joi");

const createItemSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  price: Joi.number().min(0).required(),
  available: Joi.boolean().default(true),
});
module.exports = createItemSchema;
