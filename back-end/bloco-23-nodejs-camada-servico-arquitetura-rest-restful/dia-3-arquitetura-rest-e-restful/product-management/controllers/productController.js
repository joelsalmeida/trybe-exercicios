const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();
const errorMessage = { error: 'Ops, something wrong.' };

router.get('/', async (_req, res) => {
  try {
    const products = await ProductModel.getAll();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(errorMessage);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await ProductModel.getById(id);
    if (product === null) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json(errorMessage);
  }
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(name, brand);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json(errorMessage);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await ProductModel.exclude(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json(errorMessage);
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  try {
    const product = await ProductModel.update(req.params.id, name, brand);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(errorMessage);
  }
});

module.exports = router;
