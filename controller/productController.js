const axios = require('axios');

exports.productsController = (req, res) => {
  axios.get('http://localhost:3000/products')
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log('err', err))
};

exports.productController = (req, res) => {
  axios.get(`http://localhost:3000/products/${req.params.product_id}`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log('err', err))
};

exports.stylesController = (req, res) => {
  axios.get(`http://localhost:3000/products/${req.params.product_id}/styles`)
    .then(result => {
      res.send(result.data);
    })
    .catch(err => console.log('err', err))
};
