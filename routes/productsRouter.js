const express = require("express");

const productsService = require("./services/product.service");
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schemas')


const router = express.Router();
const service = new productsService();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get("/filter", (req, res) => {
  res.send("yo soy un filter");
});

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  });

router.post("/",
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  });
  router.patch("/:id",
    validatorHandler(getProductSchema, 'params'),
    validatorHandler(updateProductSchema, 'body'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const body = req.body; // Obtén el cuerpo de la solicitud
        const product = await service.update(id, body); // Llama a la función de actualización
        res.json(product); // Devuelve el producto actualizado
      } catch (error) {
        next(error); // Maneja cualquier error
      }
    });


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
