const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// endpoints: simple
router.get('/:productId', (req, res) => {
  const { productId } = req.params;

  res.json({
    id: productId,
    name: 'Product 1',
    price: 1000,
  });
});

// Detalles de producto
router.get('/:id/details', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 1',
    price: 1000,
    description: 'Este es mi primer producto',
  });
});

module.exports = router;
