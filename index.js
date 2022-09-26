const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

// endpoints: simple
app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;

  res.json({
    id: productId,
    name: 'Product 1',
    price: 1000,
  });
});

// endpoints: complejos
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
  });
});

// Detalles de producto
app.get('/products/:id/details', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: 'Product 1',
    price: 1000,
    description: 'Este es mi primer producto',
  });
});

app.listen(port, () => {
  console.log('Mi port: ' + port);
});
