const express = require('express');
const axios = require('axios');
const productRouter = require('./routes/productRouter.js');

const app = express();
const port = 3003;

app.use(express.json());

app.use('/products', productRouter);


app.listen(port, ()=> {
  console.log(`Connecting to port: ${port}`)
})