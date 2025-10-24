const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(5).max(20).required(),
  price: Joi.number().positive().required(),
  categoryId: Joi.number().integer().positive().required()
});

module.exports = productSchema;