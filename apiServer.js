const express = require('express');
const axios = require('axios');
const productRouter = require('./routes/productRouter.js');
const questionsRouter = require('./routes/questionsRouter.js');
const reviewsRouter = require('./routes/reviewsRouter.js');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/products', productRouter);
app.use('/reviews', reviewsRouter);

app.use('/qa', questionsRouter);


app.listen(port, ()=> {
  console.log(`Connecting to port: ${port}`)
})