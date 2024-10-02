const Joi = require('joi');  // Asegúrate de que Joi esté correctamente importado

const id = Joi.string().guid({ version: ['uuidv4'] });  // Para UUID
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required(),
});
console.log(Joi);  // Para verificar si Joi está definido correctamente


module.exports = { createProductSchema, updateProductSchema, getProductSchema };

